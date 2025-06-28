"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Heart, Award, Eye, Clock } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

// Mock project data - in a real app, this would come from an API or database
const mockProjects = [
  {
    id: 1,
    slug: 'free-haircut-project',
    title: 'គម្រោងកាត់សក់ដោយឥតគិតថ្លៃ',
    title_en: 'Free Haircut Project',
    description: 'ការផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃដល់ប្រជាជនដែលមានស្ថានភាពពិបាក',
    longDescription: 'គម្រោងនេះបានចាប់ផ្តើមឡើងក្នុងឆ្នាំ 2021 ដោយគោលបំណងផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃដល់ប្រជាជនដែលមានស្ថានភាពសេដ្ឋកិច្ចមិនល្អ។ រហូតមកដល់បច្ចុប្បន្ន យើងបានជួយប្រជាជនចំនួន 500 នាក់ហើយ។ គម្រោងនេះមិនត្រឹមតែផ្តល់សេវាកាត់សក់ប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងជាឱកាសមួយសម្រាប់ការបង្កើតទំនាក់ទំនងក្នុងសហគមន៍ និងការចែករំលែកបទពិសោធន៍រវាងសមាជិក។',
    category: 'community',
    status: 'ongoing',
    startDate: '2021-01-15',
    location: 'ភ្នំពេញ',
    beneficiaries: 500,
    volunteers: 15,
    budget: '$5,000',
    duration: '3 years ongoing',
    images: [
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993327/pexels-photo-3993327.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3993328/pexels-photo-3993328.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Community Service', 'Healthcare', 'Social Impact'],
    objectives: [
      'ផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃ',
      'កសាងទំនាក់ទំនងក្នុងសហគមន៍',
      'លើកកម្ពស់សុខភាពផ្លូវចិត្តរបស់ប្រជាជន',
      'បង្កើតឱកាសស្ម័គ្រចិត្តសម្រាប់យុវជន'
    ],
    achievements: [
      'បានកាត់សក់ដល់ប្រជាជន 500+ នាក់',
      'មានស្ម័គ្រចិត្តចូលរួម 15 នាក់',
      'បានរៀបចំកម្មវិធី 24 ដង',
      'ទទួលការគាំទ្រពីសហគមន៍ 100%'
    ],
    featured: true,
  },
  {
    id: 2,
    slug: 'khmer-language-education',
    title: 'ការបង្រៀនភាសាខ្មែរដល់កុមារ',
    title_en: 'Khmer Language Education for Children',
    description: 'កម្មវិធីបង្រៀនភាសាខ្មែរ អត្ថន័យ និងលិខិតសម្ភាសន៍ដល់កុមារក្នុងតំបន់ជនបទ',
    longDescription: 'កម្មវិធីការអប់រំនេះបានចាប់ផ្តើមឡើងក្នុងឆ្នាំ 2019 ដើម្បីបង្រៀនភាសាខ្មែរ ការសរសេរ ការអាន និងវប្បធម៌ប្រពៃណីដល់កុមារដែលមិនមានឱកាសទៅសាលារៀន។ យើងផ្តោតលើការអភិវឌ្ឍន៍ជំនាញភាសា និងការយល់ដឹងអំពីវប្បធម៌ខ្មែរ។',
    category: 'education',
    status: 'ongoing',
    startDate: '2019-03-01',
    location: 'ខេត្តកន្ទាល',
    beneficiaries: 200,
    volunteers: 8,
    budget: '$3,000',
    duration: '5 years ongoing',
    images: [
      'https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/8197543/pexels-photo-8197543.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5427665/pexels-photo-5427665.jpeg?auto=compress&cs=tinysrgb&w=800',
    ],
    tags: ['Education', 'Language', 'Culture', 'Children'],
    objectives: [
      'បង្រៀនភាសាខ្មែរដល់កុមារ',
      'អភិរក្សវប្បធម៌ប្រពៃណី',
      'អភិវឌ្ឍន៍ជំនាញអាន-សរសេរ',
      'កសាងមូលដ្ឋានការអប់រំ'
    ],
    achievements: [
      'បានបង្រៀនកុមារ 200+ នាក់',
      'អត្រាចូលរៀនកើនឡើង 85%',
      'បានបង្កើតសៀវភៅបង្រៀន 5 ក្បាល',
      'ទទួលការទទួលស្គាល់ពីក្រសួងអប់រំ'
    ],
    featured: true,
  }
];

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = mockProjects.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

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
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {project.title_en}
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-khmer-gold">{project.beneficiaries}</div>
                    <div className="text-sm text-gray-600">អ្នកទទួលផល</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-khmer-red">{project.volunteers}</div>
                    <div className="text-sm text-gray-600">ស្ម័គ្រចិត្ត</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{project.budget}</div>
                    <div className="text-sm text-gray-600">ថវិកា</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{project.duration.split(' ')[0]}</div>
                    <div className="text-sm text-gray-600">ឆ្នាំ</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
                      {project.longDescription}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      គោលបំណង Objectives
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.objectives.map((objective, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-khmer-gold rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600">{objective}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      សមិទ្ធផល Achievements
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Award className="w-5 h-5 text-khmer-gold mt-0.5 flex-shrink-0" />
                          <p className="text-gray-600">{achievement}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              {/* Image Gallery */}
              <AnimatedSection delay={0.3}>
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">
                      រូបភាពគម្រោង Project Gallery
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {project.images.slice(1).map((image, index) => (
                        <motion.div
                          key={index}
                          className="aspect-video rounded-lg overflow-hidden shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        >
                          <img
                            src={image}
                            alt={`${project.title} ${index + 2}`}
                            className="w-full h-full object-cover"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
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
                            {new Date(project.startDate).toLocaleDateString('km-KH')}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-khmer-gold" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">ទីតាំង</div>
                          <div className="text-sm text-gray-600">{project.location}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-khmer-gold" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">អ្នកទទួលផល</div>
                          <div className="text-sm text-gray-600">{project.beneficiaries} នាក់</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Heart className="w-5 h-5 text-khmer-gold" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">ស្ម័គ្រចិត្ត</div>
                          <div className="text-sm text-gray-600">{project.volunteers} នាក់</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-khmer-gold" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">រយៈពេល</div>
                          <div className="text-sm text-gray-600">{project.duration}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      ស្លាកសម្គាល់ Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <Card className="bg-gradient-to-br from-khmer-gold/10 to-khmer-red/10">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      ចូលរួមជាមួយយើង
                    </h3>
                    <p className="text-gray-600 mb-6 text-sm">
                      ចង់ចូលរួមក្នុងគម្រោងនេះ ឬគម្រោងផ្សេងទៀតរបស់យើង?
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full bg-gradient-to-r from-khmer-gold to-khmer-red" asChild>
                        <Link href="/contact">
                          <Heart className="w-4 h-4 mr-2" />
                          ក្លាយជាស្ម័គ្រចិត្ត
                        </Link>
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/projects">
                          <Eye className="w-4 h-4 mr-2" />
                          មើលគម្រោងផ្សេង
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}