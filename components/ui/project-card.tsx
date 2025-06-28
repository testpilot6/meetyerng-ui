"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Eye, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Project } from '@/lib/stores/project-store';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'default' | 'compact' | 'featured';
}

export function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  const isCompact = variant === 'compact';
  const isFeatured = variant === 'featured';

  return (
    <AnimatedSection delay={index * 0.1}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
      >
        <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 group ${
          isFeatured ? 'border-2 border-khmer-gold' : ''
        }`}>
          {/* Image */}
          <div className={`relative overflow-hidden ${
            isCompact ? 'aspect-video' : 'aspect-[4/3]'
          }`}>
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Status Badge */}
            <div className="absolute top-4 left-4">
              <Badge className={`${
                project.status === 'ongoing' 
                  ? 'bg-green-500 text-white' 
                  : 'bg-blue-500 text-white'
              }`}>
                {project.status === 'ongoing' ? 'កំពុងដំណើរការ' : 'បានបញ្ចប់'}
              </Badge>
            </div>
            
            {/* Featured Badge */}
            {project.featured && (
              <div className="absolute top-4 right-4">
                <Badge className="bg-khmer-gold text-white">
                  Featured
                </Badge>
              </div>
            )}
            
            {/* Quick Stats */}
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center justify-between text-white text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{project.beneficiaries}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{project.volunteers}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(project.startDate).getFullYear()}</span>
                </div>
              </div>
            </div>
          </div>
          
          <CardContent className={`${isCompact ? 'p-4' : 'p-6'}`}>
            {/* Category */}
            <div className="flex items-center justify-between mb-3">
              <Badge variant="secondary" className="text-xs">
                {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
              </Badge>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                <span>{new Date(project.startDate).toLocaleDateString()}</span>
              </div>
            </div>
            
            {/* Title */}
            <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-khmer-gold transition-colors line-clamp-2 ${
              isCompact ? 'text-lg' : 'text-xl'
            }`}>
              {project.title_en}
            </h3>
            
            {/* Description */}
            <p className={`text-gray-600 leading-relaxed mb-4 ${
              isCompact ? 'text-sm line-clamp-2' : 'line-clamp-3'
            }`}>
              {project.description}
            </p>
            
            {/* Progress Bar (for ongoing projects) */}
            {project.status === 'ongoing' && !isCompact && (
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Progress</span>
                  <span className="text-sm text-gray-500">75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            )}
            
            {/* Tags */}
            {!isCompact && project.tags && (
              <div className="flex flex-wrap gap-1 mb-4">
                {project.tags.slice(0, 3).map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>
            )}
            
            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span className="truncate max-w-20">{project.location}</span>
                </div>
                {!isCompact && (
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>1.2k</span>
                  </div>
                )}
              </div>
              
              <Button 
                variant="ghost" 
                size="sm"
                asChild
                className="text-khmer-gold hover:text-khmer-gold-dark p-0 h-auto"
              >
                <Link href={`/projects/${project.slug}`} className="flex items-center group">
                  <span className="mr-1">View Details</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </AnimatedSection>
  );
}