"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Person } from '@/lib/stores/person-store';

interface PersonCardProps {
  person: Person;
  onViewDetails?: (person: Person) => void;
  variant?: 'compact' | 'detailed';
  index?: number;
}

export function PersonCard({ 
  person, 
  onViewDetails, 
  variant = 'compact',
  index = 0 
}: PersonCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group"
    >
      <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-start space-x-4">
            <Avatar className="w-16 h-16 ring-2 ring-gray-100 group-hover:ring-khmer-gold transition-all duration-300">
              <AvatarImage src={person.image} alt={person.name} />
              <AvatarFallback className="bg-gradient-to-br from-khmer-gold to-khmer-red text-white font-bold">
                {person.name_en.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg group-hover:text-khmer-gold transition-colors">
                    {person.name_en}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">{person.name}</p>
                </div>
                {variant === 'detailed' && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => onViewDetails?.(person)}
                    className="text-khmer-gold hover:text-khmer-gold-dark"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                )}
              </div>
              
              <Badge 
                variant="secondary" 
                className="bg-gradient-to-r from-khmer-gold/10 to-khmer-red/10 text-khmer-gold border-khmer-gold/20 mb-3"
              >
                {person.position_en}
              </Badge>
              
              {variant === 'detailed' && (
                <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {person.bio}
                </p>
              )}
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a 
                    href={`mailto:${person.email}`}
                    className="text-gray-600 hover:text-khmer-gold transition-colors truncate"
                  >
                    {person.email}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <a 
                    href={`tel:${person.phone}`}
                    className="text-gray-600 hover:text-khmer-gold transition-colors"
                  >
                    {person.phone}
                  </a>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">{person.location}</span>
                </div>
                
                <div className="flex items-center space-x-2 text-sm">
                  <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600">Joined {person.joinDate}</span>
                </div>
              </div>
              
              {variant === 'detailed' && person.skills.length > 0 && (
                <div className="mt-4">
                  <div className="flex flex-wrap gap-1">
                    {person.skills.slice(0, 3).map((skill, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
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
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}