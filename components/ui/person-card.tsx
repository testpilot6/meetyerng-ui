"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ExternalLink, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Person } from '@/lib/stores/person-store';

interface PersonCardProps {
  person: Person;
  variant?: 'default' | 'compact' | 'detailed';
  index: number;
}

export function PersonCard({ person, variant = 'default', index }: PersonCardProps) {
  const isCompact = variant === 'compact';
  const isDetailed = variant === 'detailed';

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-khmer-gold">
          <CardContent className={`${isCompact ? 'p-4' : 'p-6'}`}>
            <div className={`flex ${isDetailed ? 'items-start' : 'items-center'} space-x-4`}>
              {/* Avatar */}
              <Avatar className={`ring-2 ring-gray-100 group-hover:ring-khmer-gold transition-all duration-300 ${
                isCompact ? 'w-12 h-12' : isDetailed ? 'w-20 h-20' : 'w-16 h-16'
              }`}>
                <AvatarImage src={person.image} alt={person.name} />
                <AvatarFallback className="bg-gradient-to-br from-khmer-gold to-khmer-red text-white font-bold">
                  {person.name_en.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              
              <div className="flex-1 min-w-0">
                {/* Name and Position */}
                <div className="mb-2">
                  <h3 className={`font-bold text-gray-900 group-hover:text-khmer-gold transition-colors ${
                    isCompact ? 'text-sm' : isDetailed ? 'text-lg' : 'text-base'
                  }`}>
                    {person.name_en}
                  </h3>
                  {!isCompact && (
                    <p className={`text-gray-600 ${isDetailed ? 'text-sm' : 'text-xs'}`}>
                      {person.name}
                    </p>
                  )}
                </div>
                
                {/* Position Badge */}
                <Badge
                  variant="secondary"
                  className={`bg-gradient-to-r from-khmer-gold/10 to-khmer-red/10 text-khmer-gold border-khmer-gold/20 mb-3 ${
                    isCompact ? 'text-xs' : 'text-sm'
                  }`}
                >
                  {person.position_en}
                </Badge>
                
                {/* Bio */}
                {isDetailed && (
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {person.bio}
                  </p>
                )}
                
                {/* Skills (for detailed view) */}
                {isDetailed && person.skills && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {person.skills.slice(0, 4).map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {person.skills.length > 4 && (
                        <Badge variant="outline" className="text-xs">
                          +{person.skills.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Contact Info */}
                {!isCompact && (
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <Mail className="w-3 h-3 flex-shrink-0" />
                      <a
                        href={`mailto:${person.email}`}
                        className="hover:text-khmer-gold transition-colors truncate"
                      >
                        {person.email}
                      </a>
                    </div>
                    
                    {isDetailed && (
                      <>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Phone className="w-3 h-3 flex-shrink-0" />
                          <a
                            href={`tel:${person.phone}`}
                            className="hover:text-khmer-gold transition-colors"
                          >
                            {person.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span>{person.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3 flex-shrink-0" />
                          <span>Joined {person.joinDate}</span>
                        </div>
                      </>
                    )}
                  </div>
                )}
                
                {/* Action Button */}
                <div className="flex items-center justify-between">
                  {isDetailed && person.achievements && (
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Star className="w-3 h-3 text-khmer-gold" />
                      <span>{person.achievements.length} achievements</span>
                    </div>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-khmer-gold hover:text-khmer-gold-dark p-0 h-auto ml-auto"
                  >
                    <Link href={`/person/${person.id}`} className="flex items-center group">
                      <span className="mr-1 text-xs">View Profile</span>
                      <ExternalLink className="w-3 h-3 group-hover:scale-110 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}