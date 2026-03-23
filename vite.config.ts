import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    headers: {
      // Prevent clickjacking attacks
      'X-Frame-Options': 'DENY',
      // Prevent MIME sniffing
      'X-Content-Type-Options': 'nosniff',
      // Enable XSS protection
      'X-XSS-Protection': '1; mode=block',
      // Content Security Policy
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' api.emailjs.com;",
      // Referrer Policy
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      // Permissions Policy
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
    },
  },
});
