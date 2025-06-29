import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, rgba(21, 61, 111, 0.1) 0%, rgba(111, 191, 115, 0.1) 100%)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        
        // Enhanced Primary Color System - Deep Blue
        primary: {
          DEFAULT: '#153D6F',
          50: '#EBF2FF',
          100: '#D6E4FF',
          200: '#B5CCFF',
          300: '#83A9FF',
          400: '#4A7CFF',
          500: '#1E4FFF',
          600: '#0A2FE8',
          700: '#0B24B5',
          800: '#102292',
          900: '#153D6F', // Main primary
          950: '#0F2C50', // Hover/Active state
        },
        
        // Enhanced Secondary Color System - Clean Neutrals
        secondary: {
          DEFAULT: '#FFFFFF',
          50: '#FFFFFF',
          100: '#FEFEFE',
          200: '#FDFDFD',
          300: '#FCFCFC',
          400: '#FAFAFA',
          500: '#F8F9FA', // Light backgrounds
          600: '#F5F5F5', // Card backgrounds
          700: '#F0F0F0',
          800: '#E9ECEF', // Subtle borders
          900: '#DEE2E6', // Defined borders
        },
        
        // Enhanced Accent Color System - Soft Green
        accent: {
          DEFAULT: '#6FBF73',
          50: '#F0F9F1',
          100: '#DCF2DD',
          200: '#BBE5BD',
          300: '#8DD491',
          400: '#6FBF73', // Main accent
          500: '#5FA463', // Hover state
          600: '#4CAF50', // Active state
          700: '#43A047',
          800: '#388E3C',
          900: '#2E7D32',
        },
        
        // Enhanced Neutral System - Better Hierarchy
        neutral: {
          DEFAULT: '#F8F9FA',
          50: '#FAFAFA',
          100: '#F8F9FA',
          200: '#F5F5F5',
          300: '#E9ECEF',
          400: '#DEE2E6',
          500: '#CED4DA',
          600: '#ADB5BD',
          700: '#6C757D',
          800: '#495057',
          900: '#343A40',
        },
        
        // Enhanced Text Color System - WCAG Compliant
        text: {
          primary: '#1F2937',    // 16.8:1 contrast ratio (AAA)
          secondary: '#374151',   // 12.6:1 contrast ratio (AAA)
          muted: '#6B7280',      // 4.6:1 contrast ratio (AA)
          disabled: '#9CA3AF',   // 3.1:1 contrast ratio
          inverse: '#FFFFFF',    // For dark backgrounds
          accent: '#153D6F',     // Brand color for links
        },
        
        // Enhanced Status Colors - Accessible & Clear
        success: {
          DEFAULT: '#10B981',
          light: '#6EE7B7',
          dark: '#047857',
          bg: '#ECFDF5',
          border: '#A7F3D0',
        },
        warning: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
          bg: '#FFFBEB',
          border: '#FDE68A',
        },
        error: {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
          bg: '#FEF2F2',
          border: '#FECACA',
        },
        info: {
          DEFAULT: '#3B82F6',
          light: '#60A5FA',
          dark: '#2563EB',
          bg: '#EFF6FF',
          border: '#BFDBFE',
        },
        
        // Component-specific colors
        card: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937',
          secondary: '#F8F9FA',
          border: '#E9ECEF',
        },
        popover: {
          DEFAULT: '#FFFFFF',
          foreground: '#1F2937',
        },
        muted: {
          DEFAULT: '#F8F9FA',
          foreground: '#6B7280',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: '#E9ECEF',
        input: '#FFFFFF',
        ring: '#6FBF73',
        
        // Chart colors - Brand aligned
        chart: {
          '1': '#153D6F',
          '2': '#6FBF73',
          '3': '#F59E0B',
          '4': '#3B82F6',
          '5': '#8B5CF6',
        },
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-right': {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        'scale-in': 'scale-in 0.2s ease-out',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'strong': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'accent': '0 4px 16px rgba(111, 191, 115, 0.2)',
        'primary': '0 4px 16px rgba(21, 61, 111, 0.2)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;