"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Person } from '@/lib/stores/person-store';

interface PersonCardProps {
  person: Person;
  variant?: 'compact' | 'detailed';
  index: number;
}

export function PersonCard({ person, variant = 'compact', index }: PersonCardProps) {
  const isDetailed = variant === 'detailed';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 group border-l-4 border-l-transparent hover:border-l-khmer-gold">
        <CardContent className={`${isDetailed ? 'p-6' : 'p-4'}`}>
          <div className={`flex ${isDetailed ? 'items-start space-x-4' : 'items-center space-x-3'}`}>
            <Avatar className={`ring-2 ring-gray-100 group-hover:ring-khmer-gold transition-all duration-300 ${
              isDetailed ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-12 h-12'
            }`}>
              <AvatarImage src={person.image} alt={person.name} />
              <AvatarFallback className="bg-gradient-to-br from-khmer-gold to-khmer-red text-white font-bold">
                {person.name_en.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <h3 className={`font-bold text-gray-900 group-hover:text-khmer-gold transition-colors ${
                isDetailed ? 'text-base sm:text-lg mb-1' : 'text-sm mb-1'
              }`}>
                {person.name_en}
              </h3>
              <p className={`text-gray-600 mb-2 ${isDetailed ? 'text-sm' : 'text-xs'}`}>
                {person.name}
              </p>
              <Badge
                variant="secondary"
                className={`bg-gradient-to-r from-khmer-gold/10 to-khmer-red/10 text-khmer-gold border-khmer-gold/20 ${
                  isDetailed ? 'mb-3' : 'mb-2'
                }`}
              >
                {person.position_en}
              </Badge>
              
              {isDetailed && (
                <>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
                    {person.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Mail className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <a
                        href={`mailto:${person.email}`}
                        className="text-gray-600 hover:text-khmer-gold transition-colors truncate"
                      >
                        {person.email}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Phone className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <a
                        href={`tel:${person.phone}`}
                        className="text-gray-600 hover:text-khmer-gold transition-colors"
                      >
                        {person.phone}
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <MapPin className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{person.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs sm:text-sm">
                      <Calendar className="w-3 h-3 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">Joined {person.joinDate}</span>
                    </div>
                  </div>

                  {/* Skills Preview */}
                  {person.skills.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex flex-wrap gap-1">
                        {person.skills.slice(0, 3).map((skill, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {person.skills.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{person.skills.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* View Profile Button */}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-khmer-gold hover:text-khmer-gold-dark p-0 h-auto"
                      asChild
                    >
                      <Link href={`/person/${person.id}`} className="flex items-center group">
                        View Full Profile
                        <ExternalLink className="ml-2 w-3 h-3 group-hover:scale-110 transition-transform duration-300" />
                      </Link>
                    </Button>
                  </div>
                </>
              )}
              
              {!isDetailed && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-khmer-gold hover:text-khmer-gold-dark p-0 h-auto mt-2"
                  asChild
                >
                  <Link href={`/person/${person.id}`} className="flex items-center text-xs">
                    View Profile
                    <ExternalLink className="ml-1 w-3 h-3" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}