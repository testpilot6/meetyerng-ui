"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Project } from '@/lib/stores/project-store';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <Badge 
              variant={project.status === 'ongoing' ? 'default' : 'secondary'}
              className={`${
                project.status === 'ongoing' 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
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
                  <MapPin className="w-4 h-4" />
                  <span className="truncate max-w-20">{project.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="text-khmer-gold border-khmer-gold">
              {project.category}
            </Badge>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(project.startDate).toLocaleDateString('km-KH')}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-khmer-gold transition-colors line-clamp-2">
            {project.title_en}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-4 flex-1 line-clamp-3">
            {project.description}
          </p>
          
          {/* Tags */}
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.slice(0, 3).map((tag, tagIndex) => (
                <Badge key={tagIndex} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.tags.length - 3}
                </Badge>
              )}
            </div>
          )}
          
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>{project.volunteers} volunteers</span>
              </div>
            </div>
            
            <Button 
              asChild
              variant="ghost" 
              className="text-khmer-gold hover:text-khmer-gold-dark hover:bg-khmer-gold/10 p-0 h-auto group/btn"
            >
              <Link href={`/projects/${project.slug}`} className="flex items-center">
                <span className="mr-2">View Details</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}