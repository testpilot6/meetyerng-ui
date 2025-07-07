'use client';

import React from 'react';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ArrowRight,
  Calendar, 
  User, 
  Eye, 
  Clock, 
  Tag,
  Share2,
  Bookmark,
  Heart,
  MessageCircle
} from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { SocialShare } from '@/components/news/social-share';
import { RelatedArticles } from '@/components/news/related-articles';
import { NewsletterCTA } from '@/components/news/newsletter-cta';

// Mock data - in production this would come from an API
const newsData = [
  {
    id: 1,
    slug: "free-haircuts-200-people",
    title: "ការកាត់សក់ដោយឥតគិតថ្លៃ ចំនួន 200 នាក់",
    title_en: "Free Haircuts for 200 People",
    excerpt: "ក្រុម Mettyerng បានរៀបចំកម្មវិធីកាត់សក់ដោយឥតគិតថ្លៃ ដល់ប្រជាជនដែលមានស្ថានភាពពិបាក",
    content: `
      <p class="lead">ក្នុងកម្មវិធីបេរ័ត្នសង្គមនេះ យើងបានអាចជួយដល់ប្រជាជន 200 នាក់ ដែលមានស្ថានភាពពិបាកក្នុងការទទួលបានសេវាកម្មកាត់សក់។ កម្មវិធីនេះត្រូវបានរៀបចំឡើងដោយក្រុមការងារ Mettyerng ជាមួយនឹងការសហការពីសំណាក់ជាងកាត់សក់ជំនាញការ។</p>
      
      <h2>គោលបំណងនៃកម្មវិធី</h2>
      <p>កម្មវិធីនេះមានគោលបំណងដើម្បី៖</p>
      <ul>
        <li>ជួយដល់ប្រជាជនដែលមានស្ថានភាពពិបាកក្នុងការទទួលបានសេវាកម្មកាត់សក់</li>
        <li>បង្កើតឱកាសឱ្យសហគមន៍បានជួបជុំគ្នា</li>
        <li>លើកកម្ពស់ស្មារតីនៃការជួយគ្នាទៅវិញទៅមក</li>
        <li>ផ្តល់ទំនុកចិត្តដល់អ្នកដែលត្រូវការជំនួយ</li>
      </ul>
      
      <blockquote>
        <p>"ការជួយគ្នាទៅវិញទៅមកគឺជាគុណតម្លៃដ៏សំខាន់មួយក្នុងសង្គមខ្មែរ។ យើងមានកាតព្វកិច្ចក្នុងការជួយដល់អ្នកដែលត្រូវការជំនួយ។"</p>
        <cite>— លោក ម៉ែត ម៉េត្រី, ប្រធានក្រុម Mettyerng</cite>
      </blockquote>
      
      <h2>ដំណើរការអនុវត្តកម្មវិធី</h2>
      <p>កម្មវិធីនេះត្រូវបានរៀបចំឡើងក្នុងរយៈពេល 3 ខែ ដោយមានការចូលរួមពីស្ម័គ្រចិត្តចំនួន 15 នាក់ និងជាងកាត់សក់ជំនាញការចំនួន 8 នាក់។ យើងបានធ្វើការនៅតាមទីតាំងផ្សេងៗក្នុងរាជធានីភ្នំពេញ និងខេត្តជុំវិញ។</p>
      
      <h3>ការរៀបចំ និងការអនុវត្ត</h3>
      <p>ការរៀបចំកម្មវិធីនេះត្រូវការការសម្របសម្រួលយ៉ាងល្អិតល្អន់រវាងក្រុមការងារ និងសហគមន៍មូលដ្ឋាន។ យើងបានធ្វើការសិក្សាស្រាវជ្រាវអំពីតម្រូវការរបស់សហគមន៍ និងបានកំណត់ទីតាំងដែលមានការត្រូវការខ្ពស់បំផុត។</p>
      
      <h2>លទ្ធផលនៃកម្មវិធី</h2>
      <p>កម្មវិធីនេះបានទទួលការឆ្លើយតបយ៉ាងល្អពីសំណាក់សហគមន៍ ហើយយើងបានឃើញការចូលរួមយ៉ាងសកម្មពីប្រជាជនក្នុងតំបន់។ ការកាត់សក់ដោយឥតគិតថ្លៃនេះមិនត្រឹមតែជួយសន្សំចំណាយរបស់គ្រួសារប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងបង្កើតបរិយាកាសនៃការរួមចំណែកដល់សហគមន៍ផងដែរ។</p>
      
      <div class="stats-grid">
        <div class="stat-item">
          <h4>200</h4>
          <p>អ្នកទទួលផល</p>
        </div>
        <div class="stat-item">
          <h4>15</h4>
          <p>ស្ម័គ្រចិត្ត</p>
        </div>
        <div class="stat-item">
          <h4>8</h4>
          <p>ជាងកាត់សក់</p>
        </div>
        <div class="stat-item">
          <h4>5</h4>
          <p>ទីតាំង</p>
        </div>
      </div>
      
      <h2>ការទទួលស្គាល់ពីសហគមន៍</h2>
      <p>កម្មវិធីនេះបានទទួលការទទួលស្គាល់ពីអាជ្ញាធរមូលដ្ឋាន និងសហគមន៍។ ប្រជាជនបានបង្ហាញការកោតសរសើរចំពោះការខិតខំប្រឹងប្រែងរបស់ក្រុមការងារ និងបានស្នើសុំឱ្យបន្តកម្មវិធីនេះនាពេលអនាគត។</p>
      
      <p>យើងសូមអរគុណចំពោះការចូលរួមរបស់អ្នកទាំងអស់គ្នា ហើយនឹងបន្តរៀបចំកម្មវិធីបែបនេះនាពេលអនាគត។ ការជួយគ្នាទៅវិញទៅមកគឺជាគុណតម្លៃដ៏សំខាន់មួយដែលយើងត្រូវតែបន្តអភិរក្ស និងលើកកម្ពស់។</p>
    `,
    category: "community",
    author: "ក្រុមការងារ Mettyerng",
    author_en: "Mettyerng Team",
    author_avatar: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=100",
    author_bio: "ក្រុមការងារ Mettyerng គឺជាក្រុមអ្នកស្រឡាញ់សង្គមដែលប្តេជ្ញាចិត្តក្នុងការកសាងសហគមន៍ដ៏រឹងមាំ។",
    date: "2024-01-15",
    readTime: 5,
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    views: 1250,
    likes: 89,
    comments: 23,
    tags: ["community", "charity", "social-work", "haircut", "volunteer"],
  },
  // Additional articles for related content
  {
    id: 2,
    slug: "khmer-language-classes-children",
    title: "ការបង្រៀនភាសាខ្មែរដល់កុមារ 50 នាក់",
    title_en: "Khmer Language Classes for 50 Children",
    excerpt: "កម្មវិធីបង្រៀនភាសាខ្មែរ និងសំណេរដល់កុមារក្នុងតំបន់ជនបទ",
    category: "education",
    author: "អ្នកស្រី គិម សុផល",
    date: "2024-01-10",
    image: "https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 890,
  },
  {
    id: 3,
    slug: "traditional-dance-competition",
    title: "ការប្រកួតរបាំប្រពៃណីខ្មែរ",
    title_en: "Traditional Khmer Dance Competition",
    excerpt: "ការរៀបចំការប្រកួតរបាំប្រពៃណីខ្មែរ ដើម្បីលើកកម្ពស់វប្បធម៌ជាតិ",
    category: "culture",
    author: "លោក ខៀវ ផាណា",
    date: "2024-01-05",
    image: "https://images.pexels.com/photos/8369686/pexels-photo-8369686.jpeg?auto=compress&cs=tinysrgb&w=400",
    views: 650,
  }
];

const categories = [
  { id: "education", name: "ការអប់រំ", name_en: "Education" },
  { id: "culture", name: "វប្បធម៌", name_en: "Culture" },
  { id: "community", name: "សហគមន៍", name_en: "Community" },
  { id: "sports", name: "កីឡា", name_en: "Sports" },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsData.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  const categoryInfo = categories.find((c) => c.id === article.category);
  const relatedArticles = newsData
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/news">
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to News
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={article.image}
            alt={article.title_en}
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
                    {new Date(article.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </div>
                  <div className="flex items-center text-white/90 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {article.readTime} min read
                  </div>
                </div>

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                  {article.title_en}
                </h1>

                <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed max-w-3xl">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center text-white/90">
                    <Avatar className="w-10 h-10 mr-3 ring-2 ring-white/20">
                      <AvatarImage src={article.author_avatar} alt={article.author_en} />
                      <AvatarFallback className="bg-khmer-gold text-white">
                        {article.author_en.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{article.author_en}</p>
                      <p className="text-sm text-white/70">Author</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-6 text-white/90">
                    <div className="flex items-center">
                      <Eye className="w-5 h-5 mr-2" />
                      <span>{article.views.toLocaleString()} views</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      <span>{article.likes} likes</span>
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      <span>{article.comments} comments</span>
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
                {/* Article Actions */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
                  <SocialShare title={article.title_en} url={`/news/${article.slug}`} />
                  <div className="flex items-center space-x-3">
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-red-500">
                      <Heart className="w-4 h-4 mr-2" />
                      Like ({article.likes})
                    </Button>
                    <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-500">
                      <Bookmark className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </div>

                {/* Article Body */}
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
                    
                    .prose .stats-grid {
                      display: grid;
                      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                      gap: 1.5rem;
                      margin: 2rem 0;
                      padding: 2rem;
                      background: linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%);
                      border-radius: 1rem;
                    }
                    
                    .prose .stat-item {
                      text-align: center;
                      padding: 1rem;
                      background: white;
                      border-radius: 0.75rem;
                      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                    
                    .prose .stat-item h4 {
                      font-size: 2rem;
                      font-weight: 700;
                      color: #D97706;
                      margin: 0 0 0.5rem 0;
                    }
                    
                    .prose .stat-item p {
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
                    dangerouslySetInnerHTML={{ __html: article.content }}
                  />
                </article>

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Tag className="w-5 h-5 mr-2 text-khmer-gold" />
                    Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-sm hover:bg-khmer-gold hover:text-white transition-colors cursor-pointer">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">About the Author</h3>
                  <div className="flex items-start space-x-6">
                    <Avatar className="w-20 h-20 ring-4 ring-white shadow-lg">
                      <AvatarImage src={article.author_avatar} alt={article.author_en} />
                      <AvatarFallback className="bg-khmer-gold text-white text-xl">
                        {article.author_en.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{article.author_en}</h4>
                      <p className="text-gray-600 leading-relaxed mb-4">{article.author_bio}</p>
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
                {/* Quick Actions */}
                <AnimatedSection delay={0.2}>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share Article
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Bookmark className="w-4 h-4 mr-2" />
                        Save for Later
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Leave Comment
                      </Button>
                    </div>
                  </Card>
                </AnimatedSection>

                {/* Related Articles */}
                {relatedArticles.length > 0 && (
                  <AnimatedSection delay={0.3}>
                    <RelatedArticles articles={relatedArticles} />
                  </AnimatedSection>
                )}

                {/* Categories */}
                <AnimatedSection delay={0.4}>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <Link
                          key={category.id}
                          href={`/news?category=${category.id}`}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-khmer-gold hover:bg-gray-50 rounded-lg transition-colors"
                        >
                          {category.name_en}
                        </Link>
                      ))}
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

      {/* Comments Section */}
      <section className="py-12 bg-gray-50">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <MessageCircle className="w-6 h-6 mr-3 text-khmer-gold" />
                Comments ({article.comments})
              </h3>
              
              {/* Comment Form */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-4">Leave a Comment</h4>
                <div className="space-y-4">
                  <textarea
                    placeholder="Share your thoughts about this article..."
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-khmer-gold focus:border-transparent resize-none"
                    rows={4}
                  />
                  <div className="flex justify-between items-center">
                    <p className="text-sm text-gray-500">
                      Please be respectful and constructive in your comments.
                    </p>
                    <Button className="bg-khmer-gold hover:bg-khmer-gold/90">
                      Post Comment
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sample Comments */}
              <div className="space-y-6">
                <div className="flex space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-blue-500 text-white">JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">John Doe</h5>
                        <span className="text-sm text-gray-500">2 hours ago</span>
                      </div>
                      <p className="text-gray-700">
                        This is such an inspiring initiative! It's wonderful to see the community coming together to help those in need. Keep up the great work!
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                          <Heart className="w-4 h-4 mr-1" />
                          Like (5)
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Avatar className="w-10 h-10">
                    <AvatarFallback className="bg-green-500 text-white">SM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium text-gray-900">Sarah Miller</h5>
                        <span className="text-sm text-gray-500">1 day ago</span>
                      </div>
                      <p className="text-gray-700">
                        How can I volunteer for future events like this? I'd love to contribute to such meaningful community work.
                      </p>
                      <div className="flex items-center space-x-4 mt-3">
                        <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
                          <Heart className="w-4 h-4 mr-1" />
                          Like (12)
                        </Button>
                        <Button variant="ghost" size="sm" className="text-gray-500">
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button variant="outline">
                  Load More Comments
                </Button>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Next/Previous Articles */}
      <section className="py-12 border-t border-gray-200">
        <div className="container max-w-4xl">
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/news/previous-article" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-khmer-gold group-hover:text-white transition-colors">
                      <ArrowLeft className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Previous Article</p>
                      <h4 className="font-semibold text-gray-900 group-hover:text-khmer-gold transition-colors">
                        Community Health Workshop Success
                      </h4>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/news/next-article" className="group">
                <Card className="p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className="text-sm text-gray-500 mb-1 text-right">Next Article</p>
                      <h4 className="font-semibold text-gray-900 group-hover:text-khmer-gold transition-colors text-right">
                        Youth Skills Development Program
                      </h4>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-khmer-gold group-hover:text-white transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}