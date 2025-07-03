"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Star, 
  Award, 
  Building, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  ExternalLink,
  Handshake,
  Target,
  TrendingUp,
  Calendar,
  MapPin
} from 'lucide-react';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const sponsorTiers = [
  {
    id: 'platinum',
    name: 'Platinum Partners',
    name_km: 'ដៃគូប្លាទីន',
    color: 'from-gray-400 to-gray-600',
    bgColor: 'bg-gray-50',
    minAmount: '$10,000+',
    benefits: [
      'Logo prominently displayed on all materials',
      'Dedicated social media posts',
      'Speaking opportunities at events',
      'Custom partnership packages',
      'Quarterly impact reports'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Supporters',
    name_km: 'អ្នកគាំទ្រមាស',
    color: 'from-secondary to-secondary/80',
    bgColor: 'bg-secondary/10',
    minAmount: '$5,000+',
    benefits: [
      'Logo on website and event materials',
      'Monthly social media mentions',
      'Event invitation privileges',
      'Impact reports',
      'Recognition certificates'
    ]
  },
  {
    id: 'silver',
    name: 'Silver Contributors',
    name_km: 'អ្នកចូលរួមប្រាក់',
    color: 'from-gray-300 to-gray-500',
    bgColor: 'bg-gray-100',
    minAmount: '$2,500+',
    benefits: [
      'Logo on website',
      'Social media recognition',
      'Event updates',
      'Annual impact summary'
    ]
  },
  {
    id: 'bronze',
    name: 'Bronze Friends',
    name_km: 'មិត្តភក្តិស្ពាន់ដែង',
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    minAmount: '$1,000+',
    benefits: [
      'Name recognition on website',
      'Thank you mentions',
      'Newsletter updates'
    ]
  }
];

const currentSponsors = [
  {
    id: 1,
    name: 'Cambodia Development Bank',
    name_km: 'ធនាគារអភិវឌ្ឍន៍កម្ពុជា',
    tier: 'platinum',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://example.com',
    description: 'Leading financial institution supporting community development across Cambodia.',
    description_km: 'ស្ថាប័នហិរញ្ញវត្ថុឈានមុខគេក្នុងការគាំទ្រការអភិវឌ្ឍន៍សហគមន៍នៅទូទាំងកម្ពុជា',
    partnership_since: '2020',
    contribution_focus: ['Education', 'Community Development', 'Youth Programs'],
    contact: {
      email: 'partnership@cdb.com.kh',
      phone: '+855 23 123 456'
    },
    impact: {
      projects_supported: 8,
      beneficiaries: 500,
      amount_contributed: '$25,000'
    }
  },
  {
    id: 2,
    name: 'Khmer Heritage Foundation',
    name_km: 'មូលនិធិបេតិកភណ្ឌខ្មែរ',
    tier: 'gold',
    logo: 'https://images.pexels.com/photos/3184466/pexels-photo-3184466.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://example.com',
    description: 'Dedicated to preserving and promoting Khmer culture and traditions.',
    description_km: 'ប្តេជ្ញាចិត្តក្នុងការអភិរក្ស និងលើកកម្ពស់វប្បធម៌ និងប្រពៃណីខ្មែរ',
    partnership_since: '2021',
    contribution_focus: ['Cultural Preservation', 'Traditional Arts', 'Heritage Education'],
    contact: {
      email: 'info@khmerheritage.org',
      phone: '+855 12 345 678'
    },
    impact: {
      projects_supported: 5,
      beneficiaries: 300,
      amount_contributed: '$8,000'
    }
  },
  {
    id: 3,
    name: 'Green Future Cambodia',
    name_km: 'អនាគតបៃតងកម្ពុជា',
    tier: 'silver',
    logo: 'https://images.pexels.com/photos/3184467/pexels-photo-3184467.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://example.com',
    description: 'Environmental organization focused on sustainable development and green initiatives.',
    description_km: 'អង្គការបរិស្ថានដែលផ្តោតលើការអភិវឌ្ឍន៍ប្រកបដោយចីរភាព និងគំនិតផ្តួចផ្តើមបៃតង',
    partnership_since: '2022',
    contribution_focus: ['Environmental Education', 'Sustainability', 'Green Projects'],
    contact: {
      email: 'contact@greenfuture.org.kh',
      phone: '+855 10 987 654'
    },
    impact: {
      projects_supported: 3,
      beneficiaries: 200,
      amount_contributed: '$4,500'
    }
  },
  {
    id: 4,
    name: 'Tech for Good Cambodia',
    name_km: 'បច្ចេកវិទ្យាសម្រាប់ការល្អកម្ពុជា',
    tier: 'bronze',
    logo: 'https://images.pexels.com/photos/3184468/pexels-photo-3184468.jpeg?auto=compress&cs=tinysrgb&w=400',
    website: 'https://example.com',
    description: 'Technology company providing digital solutions for social impact.',
    description_km: 'ក្រុមហ៊ុនបច្ចេកវិទ្យាដែលផ្តល់ដំណោះស្រាយឌីជីថលសម្រាប់ផលប៉ះពាល់សង្គម',
    partnership_since: '2023',
    contribution_focus: ['Digital Literacy', 'Technology Training', 'Online Platforms'],
    contact: {
      email: 'hello@techforgood.com.kh',
      phone: '+855 15 555 777'
    },
    impact: {
      projects_supported: 2,
      beneficiaries: 150,
      amount_contributed: '$2,000'
    }
  }
];

const partnershipStats = [
  {
    icon: Building,
    value: '15+',
    label: 'Active Partners',
    label_km: 'ដៃគូសកម្ម',
    color: 'text-accent'
  },
  {
    icon: Heart,
    value: '$50K+',
    label: 'Total Contributions',
    label_km: 'ការរួមចំណែកសរុប',
    color: 'text-secondary'
  },
  {
    icon: Users,
    value: '1,200+',
    label: 'Lives Impacted',
    label_km: 'ជីវិតបានជួយ',
    color: 'text-primary'
  },
  {
    icon: Target,
    value: '25+',
    label: 'Projects Supported',
    label_km: 'គម្រោងបានគាំទ្រ',
    color: 'text-accent'
  }
];

export default function SponsorsPage() {
  const [selectedTier, setSelectedTier] = useState('all');
  const [selectedSponsor, setSelectedSponsor] = useState(null);

  const filteredSponsors = selectedTier === 'all' 
    ? currentSponsors 
    : currentSponsors.filter(sponsor => sponsor.tier === selectedTier);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-accent/20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"
            animate={{ 
              y: [0, -30, 0],
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-10 w-24 h-24 bg-secondary/20 rounded-full blur-2xl"
            animate={{ 
              y: [0, 20, 0],
              x: [0, 15, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>

        <div className="container relative">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow"
            >
              <Handshake className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Our Amazing
              <span className="block text-accent"> Partners & Sponsors</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
              Together, we're building stronger communities and creating lasting impact across Cambodia
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white border-0 shadow-glow"
              >
                <Heart className="mr-2 w-5 h-5" />
                Become a Partner
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-primary"
              >
                <ExternalLink className="mr-2 w-5 h-5" />
                Partnership Guide
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Partnership Stats */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Partnership Impact
              <span className="block text-xl md:text-2xl text-accent mt-2">
                ផលប៉ះពាល់ដៃគូ
              </span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnershipStats.map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card className="text-center hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${
                      stat.color === 'text-accent' ? 'from-accent to-accent/80' :
                      stat.color === 'text-secondary' ? 'from-secondary to-secondary/80' :
                      'from-primary to-primary/80'
                    } flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="py-16 bg-neutral-50">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Partnership Levels
              <span className="block text-xl md:text-2xl text-accent mt-2">
                កម្រិតដៃគូ
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the partnership level that aligns with your organization's goals and capacity
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sponsorTiers.map((tier, index) => (
              <AnimatedSection key={tier.id} delay={index * 0.1}>
                <Card className={`h-full hover:shadow-large transition-all duration-300 hover:-translate-y-2 ${tier.bgColor} border-l-4 border-l-accent`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <CardTitle className="text-xl font-bold text-primary">
                        {tier.name}
                      </CardTitle>
                      <Badge className={`bg-gradient-to-r ${tier.color} text-white`}>
                        {tier.minAmount}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{tier.name_km}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start space-x-3">
                          <Star className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6 bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Valued Partners
              <span className="block text-xl md:text-2xl text-accent mt-2">
                ដៃគូដ៏មានតម្លៃរបស់យើង
              </span>
            </h2>
          </AnimatedSection>

          <Tabs value={selectedTier} onValueChange={setSelectedTier} className="w-full">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">All Partners</TabsTrigger>
              <TabsTrigger value="platinum">Platinum</TabsTrigger>
              <TabsTrigger value="gold">Gold</TabsTrigger>
              <TabsTrigger value="silver">Silver</TabsTrigger>
              <TabsTrigger value="bronze">Bronze</TabsTrigger>
            </TabsList>

            <TabsContent value={selectedTier}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredSponsors.map((sponsor, index) => (
                  <AnimatedSection key={sponsor.id} delay={index * 0.1}>
                    <Card className="h-full hover:shadow-large transition-all duration-300 hover:-translate-y-1 group">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4 mb-6">
                          <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 shadow-medium">
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                              {sponsor.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-2">{sponsor.name_km}</p>
                            <div className="flex items-center space-x-2">
                              <Badge className={`bg-gradient-to-r ${
                                sponsorTiers.find(t => t.id === sponsor.tier)?.color
                              } text-white text-xs`}>
                                {sponsorTiers.find(t => t.id === sponsor.tier)?.name}
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Calendar className="w-3 h-3 mr-1" />
                                Since {sponsor.partnership_since}
                              </div>
                            </div>
                          </div>
                        </div>

                        <p className="text-sm text-foreground leading-relaxed mb-4">
                          {sponsor.description}
                        </p>

                        <div className="space-y-4">
                          <div>
                            <h4 className="text-sm font-semibold text-primary mb-2">Focus Areas:</h4>
                            <div className="flex flex-wrap gap-1">
                              {sponsor.contribution_focus.map((focus, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {focus}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
                            <div className="text-center">
                              <div className="text-lg font-bold text-accent">
                                {sponsor.impact.projects_supported}
                              </div>
                              <div className="text-xs text-muted-foreground">Projects</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-secondary">
                                {sponsor.impact.beneficiaries}
                              </div>
                              <div className="text-xs text-muted-foreground">Beneficiaries</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-primary">
                                {sponsor.impact.amount_contributed}
                              </div>
                              <div className="text-xs text-muted-foreground">Contributed</div>
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <div className="flex items-center space-x-3">
                              <Button variant="ghost" size="sm" asChild>
                                <a href={`mailto:${sponsor.contact.email}`}>
                                  <Mail className="w-4 h-4" />
                                </a>
                              </Button>
                              <Button variant="ghost" size="sm" asChild>
                                <a href={sponsor.website} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4" />
                                </a>
                              </Button>
                            </div>
                            <Button size="sm" variant="outline">
                              View Partnership
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-primary via-primary/90 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="container relative">
          <AnimatedSection className="text-center text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Join Our Mission
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-2 text-accent">
                ចូលរួមបេសកកម្មរបស់យើង
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
              Partner with us to create meaningful change and build stronger communities across Cambodia
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-accent to-secondary hover:from-accent/90 hover:to-secondary/90 text-white border-0 shadow-glow text-lg px-8 py-4"
              >
                <Handshake className="mr-2 w-6 h-6" />
                Become a Partner
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
              >
                <Mail className="mr-2 w-6 h-6" />
                Contact Partnership Team
              </Button>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </section>
    </div>
  );
}