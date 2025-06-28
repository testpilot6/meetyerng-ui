"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FilterChipProps {
  label: string;
  active?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function FilterChip({
  label,
  active = false,
  removable = false,
  onClick,
  onRemove,
  variant = 'default',
  size = 'md',
  className,
}: FilterChipProps) {
  const baseClasses = cn(
    'inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200',
    'hover:scale-105 active:scale-95 cursor-pointer select-none',
    {
      // Size variants
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-sm': size === 'md',
      'px-5 py-2.5 text-base': size === 'lg',
      
      // Style variants
      'bg-khmer-gold text-white shadow-md hover:bg-khmer-gold-dark': 
        variant === 'default' && active,
      'bg-gray-100 text-gray-700 hover:bg-gray-200': 
        variant === 'default' && !active,
      
      'border-2 border-khmer-gold text-khmer-gold bg-khmer-gold/10 hover:bg-khmer-gold/20': 
        variant === 'outline' && active,
      'border-2 border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700': 
        variant === 'outline' && !active,
      
      'bg-blue-100 text-blue-800 hover:bg-blue-200': 
        variant === 'secondary' && active,
      'bg-gray-50 text-gray-600 hover:bg-gray-100': 
        variant === 'secondary' && !active,
    },
    className
  );

  return (
    <motion.button
      className={baseClasses}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.2 }}
    >
      <span>{label}</span>
      {removable && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 hover:bg-black/10 rounded-full p-0.5 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </motion.button>
  );
}