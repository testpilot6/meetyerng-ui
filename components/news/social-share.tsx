"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Facebook, Twitter, Linkedin, Link, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface SocialShareProps {
  title: string;
  url: string;
  vertical?: boolean;
}

export function SocialShare({ title, url, vertical = false }: SocialShareProps) {
  const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}${url}` : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = [
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: 'hover:text-blue-600',
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      color: 'hover:text-sky-500',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      color: 'hover:text-blue-700',
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      color: 'hover:text-blue-500',
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Link copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };

  return (
    <div className={`flex ${vertical ? 'flex-col space-y-3' : 'items-center space-x-3'}`}>
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Share2 className="w-4 h-4" />
        <span className={vertical ? 'block' : 'hidden sm:block'}>Share</span>
      </div>
      
      <div className={`flex ${vertical ? 'flex-col space-y-2' : 'space-x-2'}`}>
        {shareLinks.map((social) => (
          <motion.div
            key={social.name}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              asChild
              className={`${social.color} transition-colors duration-200 ${
                vertical ? 'w-full justify-start' : ''
              }`}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <social.icon className="w-4 h-4" />
                {vertical && <span>{social.name}</span>}
              </a>
            </Button>
          </motion.div>
        ))}
        
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="sm"
            onClick={copyToClipboard}
            className={`hover:text-gray-700 transition-colors duration-200 ${
              vertical ? 'w-full justify-start' : ''
            }`}
          >
            <Link className="w-4 h-4" />
            {vertical && <span className="ml-2">Copy Link</span>}
          </Button>
        </motion.div>
      </div>
    </div>
  );
}