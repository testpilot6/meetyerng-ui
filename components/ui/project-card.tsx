"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Eye, Clock } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/stores/project-store';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'default' | 'compact';
}

export function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <CardContent className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Badge className="bg-khmer-gold text-white">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </Badge>
            <Badge variant="outline" className={`${
              project.status === 'ongoing' 
                ? 'text-green-600 border-green-600' 
                : 'text-blue-600 border-blue-600'
            }`}>
              {project.status === 'ongoing' ? 'កំពុងដំណើរការ' : 'បានបញ្ចប់'}
            </Badge>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-khmer-gold transition-colors line-clamp-2">
            {project.title_en}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-khmer-gold" />
              <span className="text-sm text-gray-600">{project.beneficiaries} អ្នកទទួលផល</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-khmer-gold" />
              <span className="text-sm text-gray-600">{project.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-khmer-gold" />
              <span className="text-sm text-gray-600">
                {new Date(project.startDate).toLocaleDateString('km-KH')}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-khmer-gold" />
              <span className="text-sm text-gray-600">{project.volunteers} ស្ម័គ្រចិត្ត</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {project.tags.slice(0, 2).map((tag, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 2 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tags.length - 2}
                </Badge>
              )}
            </div>
            
            <Button 
              variant="ghost" 
              className="text-khmer-gold hover:text-khmer-gold-dark p-0"
              asChild
            >
              <Link href={`/projects/${project.slug}`} className="flex items-center">
                មើលលម្អិត
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}