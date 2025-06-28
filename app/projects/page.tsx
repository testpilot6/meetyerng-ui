"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scissors, Users, Heart, BookOpen, Calendar, MapPin, Target, Award, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { MetricCard } from '@/components/ui/metric-card';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const projectStats = [
  {
    title: 'ការកាត់សក់',
    value: 500,
    suffix: '+',
    icon: Scissors,
    description: 'នាក់បានទទួលសេវាកាត់សក់',
  },
  {
    title: 'ការអប់រំ',
    value: 200,
    suffix: '+',
    icon: BookOpen,
    description: 'កុមារបានទទួលការអប់រំ',
  },
  {
    title: 'គ្រួសារជួយ',
    value: 150,
    suffix: '+',
    icon: Heart,
    description: 'គ្រួសារបានទទួលការជួយ',
  },
  {
    title: 'ស្ម័គ្រចិត្ត',
    value: 50,
    suffix: '+',
    icon: Users,
    description: 'អ្នកស្ម័គ្រចិត្តសកម្ម',
  },
];

const projects = [
  {
    id: 1,
    title: 'គម្រោងកាត់សក់ដោយឥតគិតថ្លៃ',
    title_en: 'Free Haircut Project',
    description: 'ការផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃដល់ប្រជាជនដែលមានស្ថានភាពពិបាក',
    longDescription: 'គម្រោងនេះបានចាប់ផ្តើមឡើងក្នុងឆ្នាំ 2021 ដោយគោលបំណងផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃដល់ប្រជាជនដែលមានស្ថានភាពសេដ្ឋកិច្ចមិនល្អ។ រហូតមកដល់បច្ចុប្បន្ន យើងបានជួយប្រជាជនចំនួន 500 នាក់ហើយ។',
    category: 'community',
    status: 'ongoing',
    startDate: '2021-01-15',
    location: 'ភ្នំពេញ',
    beneficiaries: 500,
    volunteers: 15,
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993327/pexels-photo-3993327.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993328/pexels-photo-3993328.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: true,
  },
  {
    id: 2,
    title: 'ការបង្រៀនភាសាខ្មែរដល់កុមារ',
    title_en: 'Khmer Language Education for Children',
    description: 'កម្មវិធីបង្រៀនភាសាខ្មែរ អត្ថន័យ និងលិខិតសម្ភាសន៍ដល់កុមារក្នុងតំបន់ជនបទ',
    longDescription: 'កម្មវិធីការអប់រំនេះបានចាប់ផ្តើមឡើងក្នុងឆ្នាំ 2019 ដើម្បីបង្រៀនភាសាខ្មែរ ការសរសេរ ការអាន និងវប្បធម៌ប្រពៃណីដល់កុមារដែលមិនមានឱកាសទៅសាលារៀន។',
    category: 'education',
    status: 'ongoing',
    startDate: '2019-03-01',
    location: 'ខេត្តកន្ទាល',
    beneficiaries: 200,
    volunteers: 8,
    images: [
      'https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5427665/pexels-photo-5427665.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: true,
  },
  {
    id: 3,
    title: 'ការអភិរក្សវប្បធម៌ប្រពៃណីខ្មែរ',
    title_en: 'Traditional Khmer Culture Preservation',
    description: 'ការរៀបចំកម្មវិធីរបាំ តន្ត្រី និងពិធីបុណ្យប្រពៃណីដើម្បីអភិរក្សវប្បធម៌',
    longDescription: 'គម្រោងនេះផ្តោតលើការអភិរក្សវប្បធម៌ប្រពៃណីខ្មែរតាមរយៈការរៀបចំកម្មវិធីរបាំ តន្ត្រី ការប្រកួតប្រកាន់ និងការបណ្តុះបណ្តាលយុវជនអំពីតម្លៃវប្បធម៌។',
    category: 'culture',
    status: 'ongoing',
    startDate: '2020-06-01',
    location: 'ទូទាំងប្រទេស',
    beneficiaries: 300,
    volunteers: 12,
    images: [
      'https://images.pexels.com/photos/8369686/pexels-photo-8369686.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7964734/pexels-photo-7964734.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8369687/pexels-photo-8369687.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: false,
  },
  {
    id: 4,
    title: 'ការបរិច្ចាគអាហារ និងសម្ភារៈ',
    title_en: 'Food and Supplies Donation',
    description: 'ការបរិច្ចាគអាហារ សម្ភារៈចាំបាច់ដល់គ្រួសារក្រីក្រ និងក្នុងស្ថានការណ៍បន្ទាន់',
    longDescription: 'កម្មវិធីនេះរៀបចំឡើងជាអចិន្ត្រៃយ៍ ជាពិសេសក្នុងរដូវកង្វះ ឬស្ថានការណ៍បន្ទាន់ ដើម្បីជួយដល់គ្រួសារដែលមានស្ថានភាពសេដ្ឋកិច្ចពិបាក។',
    category: 'community',
    status: 'ongoing',
    startDate: '2020-03-15',
    location: 'ភ្នំពេញ និងជនបទ',
    beneficiaries: 150,
    volunteers: 20,
    images: [
      'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646851/pexels-photo-6646851.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/6646852/pexels-photo-6646852.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    featured: false,
  },
];

const categories = [
  { id: 'all', name: 'ទាំងអស់', name_en: 'All' },
  { id: 'community', name: 'សហគមន៍', name_en: 'Community' },
  { id: 'education', name: 'ការអប់រំ', name_en: 'Education' },
  { id: 'culture', name: 'វប្បធម៌', name_en: 'Culture' },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-khmer-gold/10 via-white to-khmer-red/10">
        <div className="container">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 bg-gradient-to-br from-khmer-gold to-khmer-red rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <Target className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              គម្រោង
              <span className="gradient-text"> របស់យើង</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              ស្វែងយល់ពីគម្រោង និងសកម្មភាពសំខាន់ៗរបស់ក្រុម Mettyerng
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              សមិទ្ធផលរបស់យើង
              <span className="block text-2xl md:text-3xl gradient-text mt-2">
                Our Impact
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <MetricCard
                key={stat.title}
                {...stat}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              គម្រោងសំខាន់
              <span className="block text-xl md:text-2xl gradient-text mt-2">
                Featured Projects
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <AnimatedSection key={project.id} delay={index * 0.2}>
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 group">
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
                        {categories.find(c => c.id === project.category)?.name_en}
                      </Badge>
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        {project.status === 'ongoing' ? 'កំពុងដំណើរការ' : 'បានបញ្ចប់'}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-khmer-gold transition-colors">
                      {project.title_en}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
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
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="text-khmer-gold hover:text-khmer-gold-dark p-0"
                      onClick={() => setSelectedProject(project)}
                    >
                      មើលលម្អិត
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <div>
                  <Badge className="bg-khmer-gold text-white mb-4">
                    {categories.find(c => c.id === selectedProject.category)?.name_en}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {selectedProject.title_en}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5 text-khmer-gold" />
                      <span className="text-sm font-medium text-gray-900">ចាប់ផ្តើម</span>
                    </div>
                    <p className="text-gray-600">{new Date(selectedProject.startDate).toLocaleDateString('km-KH')}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-khmer-gold" />
                      <span className="text-sm font-medium text-gray-900">ទីតាំង</span>
                    </div>
                    <p className="text-gray-600">{selectedProject.location}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-khmer-gold" />
                      <span className="text-sm font-medium text-gray-900">អ្នកទទួលផល</span>
                    </div>
                    <p className="text-gray-600">{selectedProject.beneficiaries} នាក់</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-khmer-gold" />
                      <span className="text-sm font-medium text-gray-900">ស្ម័គ្រចិត្ត</span>
                    </div>
                    <p className="text-gray-600">{selectedProject.volunteers} នាក់</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {selectedProject.images.map((image, index) => (
                    <motion.div
                      key={index}
                      className={`rounded-lg overflow-hidden shadow-lg ${index === 0 ? 'col-span-2' : ''}`}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <img
                        src={image}
                        alt={`${selectedProject.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container">
          <AnimatedSection className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              គម្រោងទាំងអស់
              <span className="block text-xl md:text-2xl gradient-text mt-2">
                All Projects
              </span>
            </h2>
          </AnimatedSection>

          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name_en}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value={selectedCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <AnimatedSection key={project.id} delay={index * 0.1}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={project.images[0]}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Badge variant="secondary" className="text-xs">
                            {categories.find(c => c.id === project.category)?.name_en}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-green-600 border-green-600">
                            {project.status === 'ongoing' ? 'កំពុងដំណើរការ' : 'បានបញ្ចប់'}
                          </Badge>
                        </div>
                        
                        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-khmer-gold transition-colors line-clamp-2">
                          {project.title_en}
                        </h3>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        
                        <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Users className="w-3 h-3 mr-1" />
                            {project.beneficiaries} អ្នកទទួលផល
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-3 h-3 mr-1" />
                            {project.location}
                          </div>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-khmer-gold hover:text-khmer-gold-dark p-0"
                          onClick={() => setSelectedProject(project)}
                        >
                          មើលលម្អិត
                          <ArrowRight className="ml-2 w-3 h-3" />
                        </Button>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
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
              ក្លាយជាផ្នែកមួយនៃការផ្លាស់ប្តូរវិជ្ជមាន ចូលរួមក្នុងគម្រោងរបស់យើង
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-khmer-gold hover:bg-gray-100 text-lg px-8 py-4"
              >
                <a href="/contact" className="flex items-center">
                  <Heart className="mr-2 w-6 h-6" />
                  ក្លាយជាស្ម័គ្រចិត្ត
                </a>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-khmer-gold text-lg px-8 py-4"
              >
                <a href="/contact" className="flex items-center">
                  <Award className="mr-2 w-6 h-6" />
                  ចូលរួមឧបត្ថម្ភ
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}