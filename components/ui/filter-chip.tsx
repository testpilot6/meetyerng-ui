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
  const baseClasses = "inline-flex items-center gap-2 font-medium transition-all duration-200 cursor-pointer select-none";
  
  const variantClasses = {
    default: active 
      ? "bg-khmer-gold text-white border border-khmer-gold shadow-sm" 
      : "bg-white text-gray-700 border border-gray-300 hover:border-khmer-gold hover:text-khmer-gold",
    outline: active 
      ? "bg-khmer-gold text-white border border-khmer-gold" 
      : "bg-transparent text-gray-700 border border-gray-300 hover:border-khmer-gold hover:text-khmer-gold",
    secondary: "bg-blue-100 text-blue-800 border border-blue-200 hover:bg-blue-200",
  };
  
  const sizeClasses = {
    sm: "px-2 py-1 text-xs rounded-md",
    md: "px-3 py-1.5 text-sm rounded-lg",
    lg: "px-4 py-2 text-base rounded-lg",
  };

  return (
    <motion.button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <span className="truncate">{label}</span>
      {removable && onRemove && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="ml-1 hover:bg-white/20 rounded-full p-0.5 transition-colors"
        >
          <X className="w-3 h-3" />
        </button>
      )}
    </motion.button>
  );
}