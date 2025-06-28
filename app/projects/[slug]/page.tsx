"use client";

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  Heart, 
  Award, 
  Eye, 
  Clock,
  Target,
  TrendingUp,
  Share2,
  Download,
  Play,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  CheckCircle,
  DollarSign,
  BarChart3
} from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { projectsData } from '@/lib/data';

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('overview');
  
  const project = projectsData.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const completedMilestones = project.milestones?.filter(m => m.completed).length || 0;
  const totalMilestones = project.milestones?.length || 1;
  const progressPercentage = (completedMilestones / totalMilestones) * 100;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-khmer-gold/10 via-white to-khmer-red/10">
        <div className="container">
          <AnimatedSection>
            <div className="mb-6">
              <Button variant="ghost" asChild className="text-gray-600 hover:text-khmer-gold">
                <Link href="/projects" className="flex items-center">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Projects
                </Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
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
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {project.title_en || project.title}
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-700">Project Progress</span>
                    <span className="text-sm text-gray-500">{Math.round(progressPercentage)}%</span>
                  </div>
                  <Progress value={progressPercentage} className="h-2" />
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <motion.div 
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-khmer-gold">{project.beneficiaries || 0}</div>
                    <div className="text-sm text-gray-600">អ្នកទទួលផល</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-khmer-red">{project.volunteers || 0}</div>
                    <div className="text-sm text-gray-600">ស្ម័គ្រចិត្ត</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-blue-600">${(project.budget || 0).toLocaleString()}</div>
                    <div className="text-sm text-gray-600">ថវិកា</div>
                  </motion.div>
                  <motion.div 
                    className="text-center p-4 bg-white rounded-lg shadow-sm"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold text-green-600">{project.duration?.split(' ')[0] || 'N/A'}</div>
                    <div className="text-sm text-gray-600">ឆ្នាំ</div>
                  </motion.div>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={project.images[currentImageIndex]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  
                  {/* Navigation Buttons */}
                  {project.images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                        onClick={prevImage}
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
                        onClick={nextImage}
                      >
                        <ChevronRight className="w-6 h-6" />
                      </Button>
                    </>
                  )}
                  
                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                  
                  {/* Play Button Overlay */}
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute inset-0 w-full h-full bg-black/0 hover:bg-black/20 transition-colors"
                      >
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 text-khmer-gold ml-1" />
                        </div>
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl">
                      <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                        <p className="text-white">Project video would be displayed here</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
              <TabsTrigger value="team">Team</TabsTrigger>
              <TabsTrigger value="impact">Impact</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-8">
                  <AnimatedSection>
                    <Card>
                      <CardContent className="p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">
                          អំពីគម្រោង
                          <span className="block text-lg text-khmer-gold mt-1">About This Project</span>
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                          {project.longDescription || project.description}
                        </p>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  {project.objectives && (
                    <AnimatedSection delay={0.1}>
                      <Card>
                        <CardContent className="p-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-6">
                            គោលបំណង Objectives
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.objectives.map((objective, index) => (
                              <motion.div 
                                key={index} 
                                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-khmer-gold/5 to-khmer-red/5 rounded-lg"
                                whileHover={{ scale: 1.02 }}
                              >
                                <Target className="w-5 h-5 text-khmer-gold mt-0.5 flex-shrink-0" />
                                <p className="text-gray-600">{objective}</p>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  )}

                  {project.achievements && (
                    <AnimatedSection delay={0.2}>
                      <Card>
                        <CardContent className="p-8">
                          <h3 className="text-xl font-bold text-gray-900 mb-6">
                            សមិទ្ធផល Achievements
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.achievements.map((achievement, index) => (
                              <motion.div 
                                key={index} 
                                className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg"
                                whileHover={{ scale: 1.02 }}
                              >
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <p className="text-gray-600">{achievement}</p>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  )}
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  <AnimatedSection delay={0.1}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          ព័ត៌មានគម្រោង
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <Calendar className="w-5 h-5 text-khmer-gold" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">ចាប់ផ្តើម</div>
                              <div className="text-sm text-gray-600">
                                {project.startDate ? new Date(project.startDate).toLocaleDateString('km-KH') : 'N/A'}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-5 h-5 text-khmer-gold" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">ទីតាំង</div>
                              <div className="text-sm text-gray-600">{project.location || 'N/A'}</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Users className="w-5 h-5 text-khmer-gold" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">អ្នកទទួលផល</div>
                              <div className="text-sm text-gray-600">{project.beneficiaries || 0} នាក់</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Heart className="w-5 h-5 text-khmer-gold" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">ស្ម័គ្រចិត្ត</div>
                              <div className="text-sm text-gray-600">{project.volunteers || 0} នាក់</div>
                            </div>
                          </div>
                          
                          {project.budget && (
                            <div className="flex items-center space-x-3">
                              <DollarSign className="w-5 h-5 text-khmer-gold" />
                              <div>
                                <div className="text-sm font-medium text-gray-900">ថវិកា</div>
                                <div className="text-sm text-gray-600">${project.budget.toLocaleString()}</div>
                              </div>
                            </div>
                          )}
                          
                          <div className="flex items-center space-x-3">
                            <Clock className="w-5 h-5 text-khmer-gold" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">រយៈពេល</div>
                              <div className="text-sm text-gray-600">{project.duration || 'N/A'}</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>

                  {project.budget && project.budgetUsed && (
                    <AnimatedSection delay={0.2}>
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-lg font-bold text-gray-900 mb-4">
                            ថវិកាប្រើប្រាស់
                          </h3>
                          <div className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Used</span>
                              <span className="text-sm font-medium">${project.budgetUsed.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-gray-600">Remaining</span>
                              <span className="text-sm font-medium">${(project.budget - project.budgetUsed).toLocaleString()}</span>
                            </div>
                            <Progress value={(project.budgetUsed / project.budget) * 100} className="h-2" />
                            <div className="text-center text-sm text-gray-500">
                              {Math.round((project.budgetUsed / project.budget) * 100)}% utilized
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  )}

                  <AnimatedSection delay={0.3}>
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4">
                          ស្លាកសម្គាល់ Tags
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.tags?.map((tag, index) => (
                            <Badge key={index} variant="secondary">
                              {tag}
                            </Badge>
                          )) || <p className="text-sm text-gray-500">No tags available</p>}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            </TabsContent>

            {/* Progress Tab */}
            <TabsContent value="progress" className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {project.milestones && (
                  <AnimatedSection>
                    <Card>
                      <CardHeader>
                        <CardTitle>Project Milestones</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {project.milestones.map((milestone, index) => (
                            <div key={index} className="flex items-start space-x-4">
                              <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 ${
                                milestone.completed ? 'bg-green-500' : 'bg-gray-300'
                              }`} />
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                  <h4 className={`font-medium ${
                                    milestone.completed ? 'text-gray-900' : 'text-gray-500'
                                  }`}>
                                    {milestone.title}
                                  </h4>
                                  <span className="text-sm text-gray-500">
                                    {new Date(milestone.date).toLocaleDateString()}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600">{milestone.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                )}

                <AnimatedSection delay={0.1}>
                  <Card>
                    <CardHeader>
                      <CardTitle>Progress Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-khmer-gold mb-2">
                            {Math.round(progressPercentage)}%
                          </div>
                          <p className="text-gray-600">Overall Progress</p>
                        </div>
                        
                        <div className="space-y-4">
                          {project.milestones && (
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Completed Milestones</span>
                                <span className="text-sm text-gray-500">
                                  {completedMilestones}/{project.milestones.length}
                                </span>
                              </div>
                              <Progress value={progressPercentage} className="h-2" />
                            </div>
                          )}
                          
                          {project.budget && project.budgetUsed && (
                            <div>
                              <div className="flex justify-between mb-2">
                                <span className="text-sm font-medium">Budget Utilization</span>
                                <span className="text-sm text-gray-500">
                                  {Math.round((project.budgetUsed / project.budget) * 100)}%
                                </span>
                              </div>
                              <Progress value={(project.budgetUsed / project.budget) * 100} className="h-2" />
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </TabsContent>

            {/* Team Tab */}
            <TabsContent value="team" className="space-y-8">
              {project.team && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {project.team.map((member, index) => (
                    <AnimatedSection key={index} delay={index * 0.1}>
                      <Card className="text-center hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                          <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                          <p className="text-sm text-khmer-gold">{member.role}</p>
                        </CardContent>
                      </Card>
                    </AnimatedSection>
                  ))}
                </div>
              )}

              {project.testimonials && project.testimonials.length > 0 && (
                <AnimatedSection delay={0.3}>
                  <Card>
                    <CardHeader>
                      <CardTitle>What People Say</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {project.testimonials.map((testimonial, index) => (
                          <div key={index} className="p-6 bg-gray-50 rounded-lg">
                            <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full overflow-hidden">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.author}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{testimonial.author}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              )}
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-8">
              <AnimatedSection>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5 text-khmer-gold" />
                      <span>Impact Assessment</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {project.impact ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {Object.entries(project.impact).map(([category, value]) => (
                          <div key={category} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium capitalize">{category} Impact</span>
                              <span className="text-sm text-gray-500">{value}%</span>
                            </div>
                            <Progress value={value} className="h-3" />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">Impact data not available for this project.</p>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            </TabsContent>

            {/* Gallery Tab */}
            <TabsContent value="gallery" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((image, index) => (
                  <AnimatedSection key={index} delay={index * 0.1}>
                    <motion.div
                      className="aspect-video rounded-lg overflow-hidden shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      onClick={() => setCurrentImageIndex(index)}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-khmer-gold via-khmer-red to-khmer-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="container relative">
          <AnimatedSection className="text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              ចូលរួមជាមួយយើង
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-white">
                Join Our Mission
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              ក្លាយជាផ្នែកមួយនៃការផ្លាស់ប្តូរវិជ្ជមាន ចូលរួមក្នុងគម្រោងនេះ ឬគម្រោងផ្សេងទៀត
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-khmer-gold hover:bg-gray-100 text-lg px-8 py-4"
              >
                <Link href="/contact" className="flex items-center">
                  <Heart className="mr-2 w-6 h-6" />
                  ក្លាយជាស្ម័គ្រចិត្ត
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-khmer-gold text-lg px-8 py-4"
              >
                <Link href="/projects" className="flex items-center">
                  <Eye className="mr-2 w-6 h-6" />
                  មើលគម្រោងផ្សេង
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}