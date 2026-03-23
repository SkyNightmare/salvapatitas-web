import React, { useState } from 'react';
import { X, PawPrint, AlertCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import {
  validateContactForm,
  sanitizeInput,
  generateCSRFToken
} from '../../utils/validation';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    csrf: generateCSRFToken()
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

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
          subject: 'New Shelter Registration Request',
          csrf: formData.csrf
        },
        publicKey
      );

      setStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '', csrf: generateCSRFToken() });
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (error) {
      console.error('Modal contact form error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4 relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex items-center justify-center mb-6">
          <PawPrint className="h-12 w-12 text-[#A7D9D7] animate-bounce" />
        </div>

        <h2 className="text-2xl font-bold text-center mb-6">
          Want to Add Your Shelter?
        </h2>

        <p className="text-gray-600 text-center mb-8">
          Join our network of shelters and help more dogs find their forever
          homes. Contact us to get started!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Shelter Name
            </label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              maxLength={100}
              placeholder="Your shelter name"
              className={`mt-1 block w-full rounded-md shadow-sm focus:border-[#A7D9D7] focus:ring-[#A7D9D7] ${
                fieldErrors.name
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300'
              }`}
            />
            {fieldErrors.name && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              maxLength={254}
              placeholder="contact@shelter.com"
              className={`mt-1 block w-full rounded-md shadow-sm focus:border-[#A7D9D7] focus:ring-[#A7D9D7] ${
                fieldErrors.email
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300'
              }`}
            />
            {fieldErrors.email && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.email}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              maxLength={5000}
              placeholder="Tell us about your shelter..."
              className={`mt-1 block w-full rounded-md shadow-sm focus:border-[#A7D9D7] focus:ring-[#A7D9D7] ${
                fieldErrors.message
                  ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                  : 'border-gray-300'
              }`}
            ></textarea>
            <p className="mt-1 text-xs text-gray-500">{formData.message.length} / 5000</p>
            {fieldErrors.message && (
              <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                <AlertCircle className="h-3 w-3" />
                {fieldErrors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full flex justify-center items-center gap-2 bg-[#A7D9D7] text-black py-2 px-4 rounded-md hover:bg-[#628a88] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-4 w-4" />
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          {status === 'success' && (
            <div className="p-3 bg-green-50 border border-green-200 rounded-md text-center">
              <p className="text-sm text-green-700">✓ Message sent successfully!</p>
            </div>
          )}
          {status === 'error' && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md">
              <AlertCircle className="h-4 w-4 text-red-600" />
              <p className="text-sm text-red-700">Failed to send. Please try again.</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}