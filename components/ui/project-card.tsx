"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, Heart, ArrowRight, Eye, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Project } from '@/lib/stores/project-store';
import { AnimatedSection } from '@/components/ui/animated-section';

interface ProjectCardProps {
  project: Project;
  index: number;
  variant?: 'default' | 'featured' | 'compact';
}

export function ProjectCard({ project, index, variant = 'default' }: ProjectCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-success-DEFAULT text-white hover:bg-success-dark';
      case 'completed':
        return 'bg-info-DEFAULT text-white hover:bg-info-dark';
      default:
        return 'bg-neutral-200 text-text-primary hover:bg-neutral-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'education':
        return 'bg-info-DEFAULT text-white hover:bg-info-dark';
      case 'community':
        return 'bg-accent-400 text-white hover:bg-accent-500';
      case 'culture':
        return 'bg-warning-DEFAULT text-white hover:bg-warning-dark';
      case 'sports':
        return 'bg-success-DEFAULT text-white hover:bg-success-dark';
      default:
        return 'bg-primary-900 text-white hover:bg-primary-950';
    }
  };

  if (variant === 'compact') {
    return (
      <AnimatedSection delay={index * 0.1}>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group card-interactive">
          <div className="flex">
            <div className="w-24 h-24 flex-shrink-0">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardContent className="flex-1 p-4">
              <div className="flex items-start justify-between mb-2">
                <Badge className={getCategoryColor(project.category)}>
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </Badge>
                <Badge variant="outline" className={getStatusColor(project.status)}>
                  {project.status === 'ongoing' ? 'Active' : 'Completed'}
                </Badge>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-900 transition-colors">
                {project.title_en || project.title}
              </h3>
              
              <div className="flex items-center text-xs text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  {project.beneficiaries}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-3 h-3 mr-1" />
                  {new Date(project.startDate).getFullYear()}
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </AnimatedSection>
    );
  }

  if (variant === 'featured') {
    return (
      <AnimatedSection delay={index * 0.2}>
        <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group card-interactive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="aspect-video lg:aspect-square overflow-hidden">
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            
            <CardContent className="p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </Badge>
                  <Badge variant="outline" className={getStatusColor(project.status)}>
                    {project.status === 'ongoing' ? 'កំពុងដំណើរការ' : 'បានបញ្ចប់'}
                  </Badge>
                  {project.featured && (
                    <Badge variant="accent">
                      Featured
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-900 transition-colors">
                  {project.title_en || project.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-accent-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{project.beneficiaries}</div>
                      <div className="text-xs text-gray-500">អ្នកទទួលផល</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Heart className="w-5 h-5 text-accent-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{project.volunteers}</div>
                      <div className="text-xs text-gray-500">ស្ម័គ្រចិត្ត</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-accent-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">{project.location}</div>
                      <div className="text-xs text-gray-500">ទីតាំង</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-accent-400" />
                    <div>
                      <div className="text-sm font-medium text-gray-900">
                        {new Date(project.startDate).getFullYear()}
                      </div>
                      <div className="text-xs text-gray-500">ឆ្នាំចាប់ផ្តើម</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {project.status === 'ongoing' && (
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-900 font-medium">75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                )}
                
                <Button asChild className="w-full group/btn">
                  <Link href={`/projects/${project.slug}`} className="flex items-center justify-center">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </div>
        </Card>
      </AnimatedSection>
    );
  }

  // Default variant
  return (
    <AnimatedSection delay={index * 0.1}>
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group card-interactive h-full flex flex-col">
        <div className="aspect-video overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center space-x-2 mb-4">
            <Badge className={getCategoryColor(project.category)}>
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </Badge>
            <Badge variant="outline" className={getStatusColor(project.status)}>
              {project.status === 'ongoing' ? 'Active' : 'Completed'}
            </Badge>
            {project.featured && (
              <Badge variant="accent">
                Featured
              </Badge>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-900 transition-colors line-clamp-2">
            {project.title_en || project.title}
          </h3>
          
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
            {project.description}
          </p>
          
          <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-accent-400" />
              <span className="text-gray-600">{project.beneficiaries} people</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Heart className="w-4 h-4 text-accent-400" />
              <span className="text-gray-600">{project.volunteers} volunteers</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-accent-400" />
              <span className="text-gray-600 truncate">{project.location}</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4 text-accent-400" />
              <span className="text-gray-600">{new Date(project.startDate).getFullYear()}</span>
            </div>
          </div>
          
          {project.status === 'ongoing' && (
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600">Progress</span>
                <span className="text-gray-900 font-medium">75%</span>
              </div>
              <Progress value={75} className="h-2" />
            </div>
          )}
          
          <Button asChild variant="outline" className="w-full group/btn">
            <Link href={`/projects/${project.slug}`} className="flex items-center justify-center">
              View Details
              <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </AnimatedSection>
  );
}