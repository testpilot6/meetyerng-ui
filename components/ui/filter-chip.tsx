"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface FilterChipProps {
  label: string;
  active?: boolean;
  removable?: boolean;
  onClick?: () => void;
  onRemove?: () => void;
  variant?: 'default' | 'secondary' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

export function FilterChip({
  label,
  active = false,
  removable = false,
  onClick,
  onRemove,
  variant = 'default',
  size = 'default',
  className
}: FilterChipProps) {
  if (removable && onRemove) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className={cn(
          "inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium transition-colors",
          variant === 'secondary' && "bg-blue-100 text-blue-800 border border-blue-200",
          size === 'sm' && "px-2 py-0.5 text-xs",
          className
        )}
      >
        <span>{label}</span>
        <Button
          variant="ghost"
          size="sm"
          onClick={onRemove}
          className="h-4 w-4 p-0 hover:bg-blue-200 rounded-full ml-1"
        >
          <X className="w-3 h-3" />
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors",
        active
          ? "bg-khmer-gold text-white shadow-md"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200",
        variant === 'outline' && !active && "border border-gray-300 bg-white hover:bg-gray-50",
        size === 'sm' && "px-2 py-0.5 text-xs",
        size === 'lg' && "px-4 py-2 text-base",
        className
      )}
    >
      {label}
    </motion.button>
  );
}