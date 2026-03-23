import React, { useState } from 'react';
import { Mail, Send, Facebook, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  validateContactForm,
  sanitizeInput,
  checkRateLimit,
  getRemainingAttempts,
  generateCSRFToken
} from '../utils/validation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    csrf: generateCSRFToken()
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error' | 'rate-limited'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const sanitized = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [id]: sanitized
    }));
    
    // Clear error for this field when user starts typing
    if (fieldErrors[id]) {
      setFieldErrors(prev => {
        const updated = { ...prev };
        delete updated[id];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setFieldErrors({});

    // Rate limiting check
    if (!checkRateLimit('contact_form', 3, 60000)) {
      setStatus('rate-limited');
      setTimeout(() => setStatus('idle'), 5000);
      return;
    }

    // Validate form data
    const errors = validateContactForm(formData);
    if (errors.length > 0) {
      const errorMap: Record<string, string> = {};
      errors.forEach(err => {
        errorMap[err.field] = err.message;
      });
      setFieldErrors(errorMap);
      return;
    }

    setStatus('sending');

    try {
      // Check for required environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const recipientEmail = import.meta.env.VITE_RECIPIENT_EMAIL;

      if (!serviceId || !templateId || !publicKey || !recipientEmail) {
        console.error('EmailJS environment variables are not configured');
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: recipientEmail,
          csrf: formData.csrf
        },
        publicKey
      );
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '', csrf: generateCSRFToken() });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="py-16 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Contact Us</h2>
          <p className="mt-4 text-xl text-gray-600">Get in touch with our team</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Rate limit warning */}
              {status === 'rate-limited' && (
                <div className="flex items-center gap-2 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                  <AlertCircle className="h-5 w-5 text-yellow-600" />
                  <p className="text-sm text-yellow-700">
                    Too many submission attempts. Please try again in a minute.
                  </p>
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="Your shelter name"
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 ${
                    fieldErrors.name
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {fieldErrors.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {fieldErrors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  placeholder="your-email@example.com"
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 ${
                    fieldErrors.email
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  }`}
                />
                {fieldErrors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {fieldErrors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  placeholder="Tell us about your shelter (10-5000 characters)"
                  className={`mt-1 block w-full rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 ${
                    fieldErrors.message
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  }`}
                ></textarea>
                <p className="mt-1 text-xs text-gray-500">{formData.message.length} / 5000</p>
                {fieldErrors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-4 w-4" />
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'rate-limited'}
                className={`w-full flex justify-center items-center bg-[#A7D9D7] text-black py-2 px-4 rounded-md hover:bg-[#628a88] transition-colors ${
                  status === 'sending' || status === 'rate-limited' ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Send className="h-4 w-4 mr-2" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-sm text-green-700">✓ Message sent successfully! We'll get back to you soon.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-md">
                  <AlertCircle className="h-5 w-5 text-red-600" />
                  <p className="text-sm text-red-700">Failed to send message. Please check your connection and try again.</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Facebook className="h-6 w-6 text-[#A7D9D7]" />
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      SalvaPatitasPR
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Add Your Shelter</h3>
                <div className="space-y-2 text-gray-600">
                  <p>We will be approving shelters as soon as possible.</p>
                  <p>Please be patient!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}