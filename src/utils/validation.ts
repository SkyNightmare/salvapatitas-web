/**
 * Input validation utilities for form security
 */

export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

/**
 * Validate name (alphanumeric and basic punctuation)
 */
export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z\s\-']{2,100}$/;
  return nameRegex.test(name.trim());
};

/**
 * Validate message length and content
 */
export const validateMessage = (message: string): boolean => {
  const trimmedMessage = message.trim();
  return trimmedMessage.length >= 10 && trimmedMessage.length <= 5000;
};

/**
 * Sanitize string to prevent XSS
 */
export const sanitizeInput = (input: string): string => {
  // Preserve user whitespace while removing HTML angle brackets.
  // Avoid stripping spaces mid-text, so message fields retain spaces correctly.
  return input
    .slice(0, 5000) // Prevent extremely long inputs
    .replace(/[<>]/g, ''); // Remove angle brackets
};

/**
 * Validate entire contact form
 */
export const validateContactForm = (data: {
  name: string;
  email: string;
  message: string;
}): ValidationError[] => {
  const errors: ValidationError[] = [];

  if (!data.name || !validateName(data.name)) {
    errors.push({
      field: 'name',
      message: 'Name must be 2-100 characters and contain only letters, spaces, hyphens, and apostrophes'
    });
  }

  if (!data.email || !validateEmail(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please enter a valid email address'
    });
  }

  if (!data.message || !validateMessage(data.message)) {
    errors.push({
      field: 'message',
      message: 'Message must be between 10 and 5000 characters'
    });
  }

  return errors;
};

/**
 * Generate CSRF token (client-side anti-forgery token)
 */
export const generateCSRFToken = (): string => {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

/**
 * Rate limiting helper: check if action is within rate limit
 */
export const checkRateLimit = (key: string, maxAttempts: number = 3, windowMs: number = 60000): boolean => {
  const now = Date.now();
  const storageKey = `rateLimit_${key}`;
  const stored = localStorage.getItem(storageKey);
  
  let attempts = stored ? JSON.parse(stored) : { count: 0, resetTime: now + windowMs };
  
  if (now > attempts.resetTime) {
    attempts = { count: 1, resetTime: now + windowMs };
  } else {
    attempts.count++;
  }
  
  localStorage.setItem(storageKey, JSON.stringify(attempts));
  
  return attempts.count <= maxAttempts;
};

/**
 * Get remaining rate limit attempts
 */
export const getRemainingAttempts = (key: string, maxAttempts: number = 3): number => {
  const storageKey = `rateLimit_${key}`;
  const stored = localStorage.getItem(storageKey);
  
  if (!stored) return maxAttempts;
  
  const attempts = JSON.parse(stored);
  if (Date.now() > attempts.resetTime) return maxAttempts;
  
  return Math.max(0, maxAttempts - attempts.count);
};
