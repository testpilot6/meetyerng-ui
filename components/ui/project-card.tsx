"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, Eye, Clock } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/stores/project-store';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'grid' | 'list';
}

export function ProjectCard({ project, index, variant = 'grid' }: ProjectCardProps) {
  const isListView = variant === 'list';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={`overflow-hidden hover:shadow-xl transition-all duration-300 group h-full ${
        isListView ? 'flex flex-row' : ''
      }`}>
        <div className={`relative overflow-hidden ${
          isListView ? 'w-80 flex-shrink-0' : 'aspect-video'
        }`}>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-3 left-3">
            <Badge className={`${
              project.status === 'ongoing' 
                ? 'bg-green-500 text-white' 
                : 'bg-blue-500 text-white'
            }`}>
              {project.status === 'ongoing' ? 'Ongoing' : 'Completed'}
            </Badge>
          </div>
          
          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3 right-3">
              <Badge className="bg-khmer-gold text-white">
                Featured
              </Badge>
            </div>
          )}
        </div>
        
        <CardContent className={`p-6 flex flex-col ${isListView ? 'flex-1' : ''}`}>
          <div className="flex items-center space-x-2 mb-3">
            <Badge variant="secondary" className="text-xs">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </Badge>
            <div className="flex items-center text-xs text-gray-500">
              <Calendar className="w-3 h-3 mr-1" />
              {new Date(project.startDate).toLocaleDateString()}
            </div>
          </div>
          
          <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-khmer-gold transition-colors line-clamp-2 ${
            isListView ? 'text-xl' : 'text-lg'
          }`}>
            {project.title_en}
          </h3>
          
          <p className={`text-gray-600 leading-relaxed mb-4 flex-grow ${
            isListView ? 'line-clamp-3' : 'line-clamp-2'
          }`}>
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-1 mb-4">
            {project.tags.slice(0, 3).map((tag, idx) => (
              <Badge key={idx} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
            {project.tags.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{project.tags.length - 3}
              </Badge>
            )}
          </div>
          
          {/* Stats */}
          <div className={`grid gap-4 mb-4 text-xs text-gray-500 ${
            isListView ? 'grid-cols-3' : 'grid-cols-2'
          }`}>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {project.beneficiaries} beneficiaries
            </div>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {project.location}
            </div>
            {isListView && (
              <div className="flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                {project.volunteers} volunteers
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between mt-auto">
            <Button 
              variant="ghost" 
              size="sm" 
              className="text-khmer-gold hover:text-khmer-gold-dark p-0 h-auto"
              asChild
            >
              <Link href={`/projects/${project.slug}`} className="flex items-center group">
                Learn More
                <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </Button>
            
            <div className="flex items-center text-xs text-gray-400">
              <Eye className="w-3 h-3 mr-1" />
              {Math.floor(Math.random() * 1000) + 100}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}