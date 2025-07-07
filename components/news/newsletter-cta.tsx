"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

export function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
      setEmail('');
    }, 1500);
  };

  if (isSubscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Successfully Subscribed!
        </h3>
        <p className="text-gray-600">
          Thank you for subscribing to our newsletter. You'll receive updates about our latest news and events.
        </p>
      </motion.div>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-khmer-gold/10 via-white to-khmer-red/10 border-khmer-gold/20">
      <CardContent className="p-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md mx-auto"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-khmer-gold to-khmer-red rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Updated
            <span className="block text-lg text-khmer-gold mt-1">
              ទទួលព័ត៌មានថ្មីៗ
            </span>
          </h3>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Subscribe to our newsletter and get the latest updates about our community projects, events, and impact stories.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-gradient-to-r from-khmer-gold to-khmer-red hover:from-khmer-gold/90 hover:to-khmer-red/90 px-6"
              >
                {isLoading ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </Button>
            </div>
            
            <p className="text-xs text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </motion.div>
      </CardContent>
    </Card>
  );
}