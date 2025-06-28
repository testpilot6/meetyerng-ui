"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Globe,
  ExternalLink,
  Star
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Person } from '@/lib/stores/person-store';

interface PersonDetailModalProps {
  person: Person | null;
  open: boolean;
  onClose: () => void;
}

export function PersonDetailModal({ person, open, onClose }: PersonDetailModalProps) {
  if (!person) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Header with gradient background */}
          <div className="relative bg-gradient-to-br from-khmer-gold via-khmer-red to-khmer-blue p-8 text-white">
            <div className="absolute inset-0 bg-black/20" />
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
            >
              <X className="w-5 h-5" />
            </Button>
            
            <div className="relative flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Avatar className="w-24 h-24 ring-4 ring-white/30">
                <AvatarImage src={person.image} alt={person.name} />
                <AvatarFallback className="bg-white/20 text-white text-2xl font-bold">
                  {person.name_en.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{person.name_en}</h1>
                <p className="text-xl text-white/90 mb-2">{person.name}</p>
                <Badge className="bg-white/20 text-white border-white/30 mb-4">
                  {person.position_en}
                </Badge>
                <p className="text-white/90 leading-relaxed">{person.bio}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="w-5 h-5 text-khmer-gold" />
                  <span>Contact Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-gray-400" />
                  <a 
                    href={`mailto:${person.email}`}
                    className="text-gray-600 hover:text-khmer-gold transition-colors"
                  >
                    {person.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-gray-400" />
                  <a 
                    href={`tel:${person.phone}`}
                    className="text-gray-600 hover:text-khmer-gold transition-colors"
                  >
                    {person.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">{person.location}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-gray-600">Joined {person.joinDate}</span>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-khmer-gold" />
                    <span>Skills & Expertise</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {person.skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="bg-khmer-gold/10 text-khmer-gold">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              {person.languages.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="w-5 h-5 text-khmer-gold" />
                      <span>Languages</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {person.languages.map((lang, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="font-medium">{lang.language}</span>
                          <Badge variant="outline">{lang.level}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Experience */}
            {person.experience.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-khmer-gold" />
                    <span>Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {person.experience.map((exp, index) => (
                      <div key={index} className="relative">
                        {index > 0 && <Separator className="mb-6" />}
                        <div className="space-y-2">
                          <h4 className="font-semibold text-lg">{exp.title}</h4>
                          <p className="text-khmer-gold font-medium">{exp.company}</p>
                          <p className="text-sm text-gray-500">{exp.period}</p>
                          <p className="text-gray-600 leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Education */}
            {person.education.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-khmer-gold" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {person.education.map((edu, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-khmer-gold rounded-full mt-2 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">{edu.degree}</h4>
                          <p className="text-khmer-gold">{edu.institution}</p>
                          <p className="text-sm text-gray-500">{edu.year}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Achievements */}
            {person.achievements.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-khmer-gold" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {person.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-khmer-gold rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {/* Social Links */}
            {person.socialLinks.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Social Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3">
                    {person.socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        asChild
                        className="hover:bg-khmer-gold hover:text-white hover:border-khmer-gold"
                      >
                        <a 
                          href={social.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>{social.platform}</span>
                        </a>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}