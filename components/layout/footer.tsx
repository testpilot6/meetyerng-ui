"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const footerLinks = [
  {
    title: 'អំពីយើង',
    title_en: 'About Us',
    links: [
      { name: 'ប្រវត្តិ', name_en: 'Our Story', href: '/about' },
      { name: 'បេសកកម្ម', name_en: 'Mission', href: '/about#mission' },
      { name: 'ទស្សនវិស័យ', name_en: 'Vision', href: '/about#vision' },
      { name: 'តម្លៃ', name_en: 'Values', href: '/about#values' },
    ],
  },
  {
    title: 'សកម្មភាព',
    title_en: 'Our Work',
    links: [
      { name: 'ព័ត៌មាន', name_en: 'News', href: '/news' },
      { name: 'គម្រោង', name_en: 'Projects', href: '/projects' },
      { name: 'វីដេអូ', name_en: 'Videos', href: '/videos' },
      { name: 'រូបភាព', name_en: 'Gallery', href: '/gallery' },
    ],
  },
  {
    title: 'ចូលរួម',
    title_en: 'Get Involved',
    links: [
      { name: 'ទំនាក់ទំនង', name_en: 'Contact Us', href: '/contact' },
      { name: 'ស្ម័គ្រចិត្ត', name_en: 'Volunteer', href: '/contact#volunteer' },
      { name: 'ការឧបត្ថម្ភ', name_en: 'Donate', href: '/contact#support' },
      { name: 'ដៃគូ', name_en: 'Partners', href: '/sponsors' },
    ],
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://facebook.com', color: 'hover:text-blue-400' },
  { name: 'Youtube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-400' },
  { name: 'Instagram', icon: Instagram, href: 'https://instagram.com', color: 'hover:text-pink-400' },
];

const contactInfo = [
  { icon: Phone, text: '+855 12 345 678', href: 'tel:+85512345678' },
  { icon: Mail, text: 'info@mettyerng.org', href: 'mailto:info@mettyerng.org' },
  { icon: MapPin, text: 'Phnom Penh, Cambodia', href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-10 w-24 h-24 bg-secondary/10 rounded-full blur-2xl"
          animate={{ 
            y: [0, 20, 0],
            x: [0, 15, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-secondary rounded-xl group-hover:shadow-glow transition-all duration-300" />
                  <div className="relative w-full h-full bg-gradient-to-br from-accent to-secondary rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-xl">M</span>
                    <motion.div
                      className="absolute -top-1 -right-1 w-3 h-3"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Sparkles className="w-3 h-3 text-secondary" />
                    </motion.div>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Mettyerng</h2>
                  <p className="text-sm text-white/80">ក្រុមអ្នកស្រឡាញ់សង្គម</p>
                </div>
              </Link>
              
              <p className="text-white/80 text-sm leading-relaxed">
                យើងជាក្រុមអ្នកស្រឡាញ់សង្គមដែលបានបង្កើតឡើងក្នុងគោលបំណង ជួយដល់សហគមន៍តាមរយៈការអប់រំ វប្បធម៌ និងការអភិវឌ្ឍន៍សង្គម។
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <Button
                    key={social.name}
                    variant="ghost"
                    size="icon"
                    asChild
                    className={`text-white/80 ${social.color} hover:bg-white/10 transition-all duration-300 hover:scale-110`}
                  >
                    <Link href={social.href} target="_blank" rel="noopener noreferrer">
                      <social.icon className="w-5 h-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-white">{section.title_en}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors duration-200 text-sm hover:translate-x-1 inline-block"
                    >
                      {link.name_en}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="my-12 bg-white/20" />

        {/* Contact Info & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">ទំនាក់ទំនង Contact Info</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-white/80 hover:text-accent transition-all duration-200 group"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-200">
                    <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white mb-4">ព័ត៌មានថ្មី Newsletter</h3>
            <p className="text-white/80 text-sm mb-4">
              ចុះឈ្មោះទទួលព័ត៌មានថ្មីៗ និងសកម្មភាពរបស់យើង
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
              />
              <Button className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white border-0 shadow-soft px-6">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <div className="flex items-center space-x-2">
            <p className="text-white/80 text-sm">
              © {new Date().getFullYear()} Mettyerng. All rights reserved.
            </p>
            <Heart className="w-4 h-4 text-accent animate-pulse" />
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy" className="text-white/80 hover:text-accent transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/80 hover:text-accent transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}