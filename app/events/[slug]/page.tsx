'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  DollarSign,
  Share2,
  Bookmark,
  Heart,
  MessageCircle,
  User,
  Eye,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Download
} from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { SocialShare } from '@/components/news/social-share';
import { NewsletterCTA } from '@/components/news/newsletter-cta';

// Mock data - in production this would come from an API
const eventsData = [
  {
    id: 1,
    slug: "community-health-workshop",
    title: "វគ្គបណ្តុះបណ្តាលសុខភាពសហគមន៍",
    title_en: "Community Health Workshop",
    description: "ការបណ្តុះបណ្តាលអំពីការថែរក្សាសុខភាព និងការបង្ការជំងឺក្នុងសហគមន៍",
    content: `
      <p class="lead">ការបណ្តុះបណ្តាលសុខភាពសហគមន៍នេះ គឺជាកម្មវិធីសំខាន់មួយដែលរៀបចំឡើងដើម្បីលើកកម្ពស់ការយល់ដឹងអំពីសុខភាព និងការបង្ការជំងឺក្នុងសហគមន៍។</p>
      
      <h2>គោលបំណងនៃកម្មវិធី</h2>
      <p>កម្មវិធីនេះមានគោលបំណងដើម្បី៖</p>
      <ul>
        <li>ផ្តល់ចំណេះដឹងអំពីការថែរក្សាសុខភាពមូលដ្ឋាន</li>
        <li>បង្រៀនវិធីសាស្ត្របង្ការជំងឺ</li>
        <li>លើកកម្ពស់ការយល់ដឹងអំពីអនាម័យ</li>
        <li>បង្កើតសមត្ថភាពក្នុងការថែទាំសុខភាពគ្រួសារ</li>
      </ul>
      
      <blockquote>
        <p>"សុខភាពល្អគឺជាទ្រព្យសម្បត្តិដ៏មានតម្លៃបំផុតរបស់មនុស្សយើង។ ការបណ្តុះបណ្តាលនេះនឹងជួយឱ្យសហគមន៍មានចំណេះដឹងក្នុងការថែរក្សាសុខភាពខ្លួនឯង។"</p>
        <cite>— វេជ្ជបណ្ឌិត សុភា, ប្រធានកម្មវិធី</cite>
      </blockquote>
      
      <h2>មាតិកាបណ្តុះបណ្តាល</h2>
      <p>កម្មវិធីបណ្តុះបណ្តាលនេះនឹងគ្របដណ្តប់លើប្រធានបទសំខាន់ៗដូចជា៖</p>
      
      <h3>វគ្គទី១៖ សុខភាពមូលដ្ឋាន</h3>
      <p>ការយល់ដឹងអំពីសុខភាពទូទៅ ការថែរក្សាខ្លួនប្រាណ និងការរក្សាអនាម័យ។</p>
      
      <h3>វគ្គទី២៖ ការបង្ការជំងឺ</h3>
      <p>វិធីសាស្ត្របង្ការជំងឺទូទៅ ការចាក់វ៉ាក់សាំង និងការថែរក្សាបរិស្ថាន។</p>
      
      <h3>វគ្គទី៣៖ ការថែទាំគ្រួសារ</h3>
      <p>ការថែទាំកុមារ មនុស្សចាស់ និងការថែរក្សាសុខភាពស្ត្រី។</p>
      
      <div class="workshop-schedule">
        <h2>កាលវិភាគកម្មវិធី</h2>
        <div class="schedule-grid">
          <div class="schedule-item">
            <h4>8:00 - 9:00</h4>
            <p>ចុះឈ្មោះ និងអាហារពេលព្រឹក</p>
          </div>
          <div class="schedule-item">
            <h4>9:00 - 10:30</h4>
            <p>វគ្គទី១៖ សុខភាពមូលដ្ឋាន</p>
          </div>
          <div class="schedule-item">
            <h4>10:30 - 10:45</h4>
            <p>ការសម្រាក</p>
          </div>
          <div class="schedule-item">
            <h4>10:45 - 12:00</h4>
            <p>វគ្គទី២៖ ការបង្ការជំងឺ</p>
          </div>
          <div class="schedule-item">
            <h4>12:00 - 13:00</h4>
            <p>អាហារពេលថ្ងៃត្រង់</p>
          </div>
          <div class="schedule-item">
            <h4>13:00 - 14:30</h4>
            <p>វគ្គទី៣៖ ការថែទាំគ្រួសារ</p>
          </div>
          <div class="schedule-item">
            <h4>14:30 - 15:00</h4>
            <p>សំណួរ និងចម្លើយ</p>
          </div>
        </div>
      </div>
      
      <h2>អ្នកបង្រៀន</h2>
      <p>កម្មវិធីនេះនឹងមានអ្នកបង្រៀនដែលមានបទពិសោធន៍ខ្ពស់ក្នុងវិស័យសុខភាព រួមមាន៖</p>
      <ul>
        <li>វេជ្ជបណ្ឌិត និងគិលានុបដ្ឋាយិកាមានបទពិសោធន៍</li>
        <li>អ្នកជំនាញខាងសុខភាពសហគមន៍</li>
        <li>អ្នកស្រាវជ្រាវខាងសុខភាពសាធារណៈ</li>
      </ul>
      
      <p>យើងសូមអញ្ជើញប្រជាជនទាំងអស់ចូលរួមកម្មវិធីនេះ ដើម្បីទទួលបានចំណេះដឹងដ៏មានតម្លៃអំពីការថែរក្សាសុខភាព។</p>
    `,
    category: "workshop",
    organizer: "ផ្នែកសុខភាពសហគមន៍",
    organizer_en: "Community Health Department",
    organizer_avatar: "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=100",
    organizer_bio: "ផ្នែកសុខភាពសហគមន៍របស់យើងមានបេសកកម្មក្នុងការលើកកម្ពស់សុខភាពសហគមន៍តាមរយៈការអប់រំ និងការបណ្តុះបណ្តាល។",
    startDate: "2024-02-15T08:00:00Z",
    endDate: "2024-02-15T15:00:00Z",
    location: "មជ្ឈមណ្ឌលសហគមន៍ ភ្នំពេញ",
    location_en: "Community Center, Phnom Penh",
    maxParticipants: 100,
    registeredParticipants: 75,
    registrationFee: 0,
    isRegistrationRequired: true,
    registrationDeadline: "2024-02-10T23:59:59Z",
    image: "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    views: 850,
    likes: 45,
    comments: 12,
    tags: ["health", "workshop", "community", "education", "prevention"],
    requirements: [
      "មិនចាំបាច់មានចំណេះដឹងមុន",
      "សម្ភារៈសរសេរ",
      "ការចូលរួមពេញម៉ោង"
    ],
    benefits: [
      "វិញ្ញាបនបត្រចូលរួម",
      "សម្ភារៈបណ្តុះបណ្តាល",
      "អាហារ និងភេសជ្ជៈ",
      "ការតាមដានក្រោយកម្មវិធី"
    ]
  }
];

const categories = [
  { id: "workshop", name: "វគ្គបណ្តុះបណ្តាល", name_en: "Workshop" },
  { id: "community", name: "សហគមន៍", name_en: "Community" },
  { id: "culture", name: "វប្បធម៌", name_en: "Culture" },
  { id: "fundraising", name: "រៃអង្គាស", name_en: "Fundraising" },
];

interface EventDetailPageProps {
  params: {
    slug: string;
  };
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const [isRegistered, setIsRegistered] = useState(false);
  
  const event = eventsData.find(e => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  const categoryInfo = categories.find(c => c.id === event.category);
  const isUpcoming = new Date(event.startDate) > new Date();
  const isRegistrationOpen = new Date(event.registrationDeadline) > new Date();
  const spotsLeft = event.maxParticipants - event.registeredParticipants;

  const handleRegistration = () => {
    setIsRegistered(true);
    // In production, this would make an API call
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/events">
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={event.image}
            alt={event.title_en}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container max-w-4xl">
              <AnimatedSection>
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <Badge className="bg-khmer-gold text-white text-sm px-4 py-2 font-medium">
                    {categoryInfo?.name_en}
                  </Badge>
                  <div className="flex items-center text-white/90 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.startDate).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-white/90 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {new Date(event.startDate).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })} - {new Date(event.endDate).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                  {isUpcoming && (
                    <Badge variant="outline" className="border-green-400 text-green-400 bg-green-400/10">
                      Upcoming
                    </Badge>
                  )}
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {event.title_en}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-3xl">
                  {event.description}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center text-white/90">
                    <Avatar className="w-10 h-10 mr-3 ring-2 ring-white/20">
                      <AvatarImage src={event.organizer_avatar} alt={event.organizer_en} />
                      <AvatarFallback className="bg-khmer-gold text-white">
                        {event.organizer_en.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{event.organizer_en}</p>
                      <p className="text-sm text-white/70">Organizer</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-white/90">
                    <div className="flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      <span>{event.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      <span>{event.likes} interested</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      <span>{event.registeredParticipants}/{event.maxParticipants} registered</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                {/* Event Actions */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
                  <SocialShare title={event.title_en} url={`/events/${event.slug}`} />
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                      <Heart className="w-4 h-4 mr-2" />
                      Interested ({event.likes})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>

                {/* Event Body */}
                <article className="prose prose-lg max-w-none">
                  <style jsx>{`
                    .prose {
                      --tw-prose-body: #374151;
                      --tw-prose-headings: #111827;
                      --tw-prose-lead: #4B5563;
                      --tw-prose-links: #D97706;
                      --tw-prose-bold: #111827;
                      --tw-prose-counters: #6B7280;
                      --tw-prose-bullets: #D1D5DB;
                      --tw-prose-hr: #E5E7EB;
                      --tw-prose-quotes: #111827;
                      --tw-prose-quote-borders: #D97706;
                      --tw-prose-captions: #6B7280;
                      --tw-prose-code: #111827;
                      --tw-prose-pre-code: #E5E7EB;
                      --tw-prose-pre-bg: #1F2937;
                      --tw-prose-th-borders: #D1D5DB;
                      --tw-prose-td-borders: #E5E7EB;
                    }
                    
                    .prose .lead {
                      font-size: 1.25rem;
                      line-height: 1.6;
                      margin-bottom: 2rem;
                      color: #4B5563;
                      font-weight: 400;
                    }
                    
                    .prose blockquote {
                      border-left: 4px solid #D97706;
                      background: #FEF3C7;
                      padding: 1.5rem;
                      margin: 2rem 0;
                      border-radius: 0.5rem;
                      font-style: italic;
                    }
                    
                    .prose blockquote cite {
                      display: block;
                      margin-top: 1rem;
                      font-style: normal;
                      font-weight: 600;
                      color: #92400E;
                    }
                    
                    .prose .workshop-schedule {
                      margin: 2rem 0;
                      padding: 2rem;
                      background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
                      border-radius: 1rem;
                    }
                    
                    .prose .schedule-grid {
                      display: grid;
                      gap: 1rem;
                      margin-top: 1.5rem;
                    }
                    
                    .prose .schedule-item {
                      display: flex;
                      align-items: center;
                      padding: 1rem;
                      background: white;
                      border-radius: 0.75rem;
                      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                    
                    .prose .schedule-item h4 {
                      font-size: 1rem;
                      font-weight: 700;
                      color: #D97706;
                      margin: 0 1rem 0 0;
                      min-width: 120px;
                    }
                    
                    .prose .schedule-item p {
                      margin: 0;
                      font-size: 0.875rem;
                      color: #6B7280;
                      font-weight: 500;
                    }
                    
                    .prose h2 {
                      margin-top: 3rem;
                      margin-bottom: 1.5rem;
                      position: relative;
                      padding-bottom: 0.5rem;
                    }
                    
                    .prose h2::after {
                      content: '';
                      position: absolute;
                      bottom: 0;
                      left: 0;
                      width: 3rem;
                      height: 3px;
                      background: linear-gradient(90deg, #D97706, #F59E0B);
                      border-radius: 2px;
                    }
                    
                    .prose h3 {
                      color: #D97706;
                      margin-top: 2rem;
                      margin-bottom: 1rem;
                    }
                    
                    .prose ul li {
                      margin: 0.5rem 0;
                      padding-left: 0.5rem;
                    }
                    
                    .prose ul li::marker {
                      color: #D97706;
                    }
                  `}</style>
                  
                  <div
                    dangerouslySetInnerHTML={{ __html: event.content }}
                  />
                </article>

                {/* Event Requirements & Benefits */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="p-6 bg-blue-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Requirements
                    </h3>
                    <ul className="space-y-2">
                      {event.requirements.map((req, index) => (
                        <li key={index} className="text-blue-800 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-6 bg-green-50 rounded-xl">
                    <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      What You'll Get
                    </h3>
                    <ul className="space-y-2">
                      {event.benefits.map((benefit, index) => (
                        <li key={index} className="text-green-800 text-sm flex items-start">
                          <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2 text-khmer-gold" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm hover:bg-khmer-gold hover:text-white transition-colors cursor-pointer">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Organizer Bio */}
                <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">About the Organizer</h3>
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-20 h-20 ring-4 ring-white shadow-lg">
                      <AvatarImage src={event.organizer_avatar} alt={event.organizer_en} />
                      <AvatarFallback className="bg-khmer-gold text-white text-xl">
                        {event.organizer_en.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{event.organizer_en}</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">{event.organizer_bio}</p>
                      <div className="flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                          <User className="w-4 h-4 mr-2" />
                          View Profile
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="w-4 h-4 mr-2" />
                          Follow
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Registration Card */}
                <AnimatedSection delay={0.2}>
                  <Card className="overflow-hidden">
                    <div className="bg-gradient-to-r from-khmer-gold to-khmer-red p-6 text-white">
                      <h3 className="text-xl font-bold mb-2">Event Registration</h3>
                      <div className="flex items-center space-x-2">
                        {event.registrationFee > 0 ? (
                          <>
                            <DollarSign className="w-5 h-5" />
                            <span className="text-2xl font-bold">${event.registrationFee}</span>
                          </>
                        ) : (
                          <span className="text-2xl font-bold">Free</span>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Spots Available</span>
                          <span className="font-semibold text-green-600">{spotsLeft} left</span>
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Registration Deadline</span>
                          <span className="font-semibold">
                            {new Date(event.registrationDeadline).toLocaleDateString()}
                          </span>
                        </div>

                        {isRegistrationOpen && isUpcoming ? (
                          <Button 
                            className="w-full bg-gradient-to-r from-khmer-gold to-khmer-red"
                            onClick={handleRegistration}
                            disabled={isRegistered || spotsLeft === 0}
                          >
                            {isRegistered ? (
                              <>
                                <CheckCircle className="w-4 h-4 mr-2" />
                                Registered
                              </>
                            ) : spotsLeft === 0 ? (
                              <>
                                <AlertCircle className="w-4 h-4 mr-2" />
                                Event Full
                              </>
                            ) : (
                              <>
                                <Users className="w-4 h-4 mr-2" />
                                Register Now
                              </>
                            )}
                          </Button>
                        ) : (
                          <Button variant="outline" disabled className="w-full">
                            Registration Closed
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                {/* Event Details */}
                <AnimatedSection delay={0.3}>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Event Details</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="w-5 h-5 text-khmer-gold mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Date & Time</div>
                          <div className="text-sm text-gray-600">
                            {new Date(event.startDate).toLocaleDateString("en-US", {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </div>
                          <div className="text-sm text-gray-600">
                            {new Date(event.startDate).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })} - {new Date(event.endDate).toLocaleTimeString("en-US", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-khmer-gold mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Location</div>
                          <div className="text-sm text-gray-600">{event.location_en}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <Users className="w-5 h-5 text-khmer-gold mt-0.5" />
                        <div>
                          <div className="font-medium text-gray-900">Capacity</div>
                          <div className="text-sm text-gray-600">
                            {event.registeredParticipants} / {event.maxParticipants} registered
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </AnimatedSection>

                {/* Quick Actions */}
                <AnimatedSection delay={0.4}>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Event
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Download className="w-4 h-4 mr-2" />
                        Download Details
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Add to Calendar
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>

                {/* Newsletter CTA */}
                <AnimatedSection delay={0.5}>
                  <NewsletterCTA />
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}