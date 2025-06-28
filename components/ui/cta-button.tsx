"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost';
  size?: 'default' | 'sm' | 'lg';
}

export function CTAButton({
  children,
  href,
  className,
  variant = 'default',
  size = 'default',
}: CTAButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        asChild
        variant={variant}
        size={size}
        className={cn(
          variant === 'default' && "bg-gradient-to-r from-khmer-gold to-khmer-red hover:from-khmer-gold-dark hover:to-khmer-red-dark",
          className
        )}
      >
        <Link href={href}>
          {children}
        </Link>
      </Button>
    </motion.div>
  );
}