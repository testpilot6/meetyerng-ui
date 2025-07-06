import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Calendar, User, Eye, ArrowLeft, Clock } from "lucide-react"
import { AnimatedSection } from "@/components/ui/animated-section"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SocialShare } from "@/components/news/social-share"
import { RelatedArticles } from "@/components/news/related-articles"
import { NewsletterCTA } from "@/components/news/newsletter-cta"

// Mock data - in a real app, this would come from a database or CMS
const newsData = [
  {
    id: 1,
    slug: "free-haircuts-200-people",
    title: "ការកាត់សក់ដោយឥតគិតថ្លៃ ចំនួន 200 នាក់",
    title_en: "Free Haircuts for 200 People",
    excerpt: "ក្រុម Mettyerng បានរៀបចំកម្មវិធីកាត់សក់ដោយឥតគិតថ្លៃ ដល់ប្រជាជនដែលមានស្ថានភាពពិបាក",
    content: `
      <p>ក្នុងកម្មវិធីបេរ័ត្នសង្គមនេះ យើងបានអាចជួយដល់ប្រជាជន 200 នាក់ ដែលមានស្ថានភាពពិបាកក្នុងការទទួលបានសេវាកម្មកាត់សក់។ កម្មវិធីនេះត្រូវបានរៀបចំឡើងដោយក្រុមការងារ Mettyerng ជាមួយនឹងការសហការពីសំណាក់ជាងកាត់សក់ជំនាញការ។</p>
      
      <h2>គោលបំណងនៃកម្មវិធី</h2>
      <p>កម្មវិធីនេះមានគោលបំណងដើម្បី៖</p>
      <ul>
        <li>ជួយដល់ប្រជាជនដែលមានស្ថានភាពពិបាកក្នុងការទទួលបានសេវាកម្មកាត់សក់</li>
        <li>បង្កើតឱកាសឱ្យសហគមន៍បានជួបជុំគ្នា</li>
        <li>លើកកម្ពស់ស្មារតីនៃការជួយគ្នាទៅវិញទៅមក</li>
      </ul>
      
      <blockquote>
        "ការជួយគ្នាទៅវិញទៅមកគឺជាគុណតម្លៃដ៏សំខាន់មួយក្នុងសង្គមខ្មែរ។ យើងមានកាតព្វកិច្ចក្នុងការជួយដល់អ្នកដែលត្រូវការជំនួយ។"
      </blockquote>
      
      <h2>លទ្ធផលនៃកម្មវិធី</h2>
      <p>កម្មវិធីនេះបានទទួលការឆ្លើយតបយ៉ាងល្អពីសំណាក់សហគមន៍ ហើយយើងបានឃើញការចូលរួមយ៉ាងសកម្មពីប្រជាជនក្នុងតំបន់។ ការកាត់សក់ដោយឥតគិតថ្លៃនេះមិនត្រឹមតែជួយសន្សំចំណាយរបស់គ្រួសារប៉ុណ្ណោះទេ ប៉ុន្តែថែមទាំងបង្កើតបរិយាកាសនៃការរួមចំណែកដល់សហគមន៍ផងដែរ។</p>
      
      <p>យើងសូមអរគុណចំពោះការចូលរួមរបស់អ្នកទាំងអស់គ្នា ហើយនឹងបន្តរៀបចំកម្មវិធីបែបនេះនាពេលអនាគត។</p>
    `,
    category: "community",
    author: "ក្រុមការងារ Mettyerng",
    author_en: "Mettyerng Team",
    date: "2024-01-15",
    readTime: 5,
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: true,
    views: 1250,
    tags: ["community", "charity", "social-work"],
  },
  {
    id: 2,
    slug: "khmer-language-classes-children",
    title: "ការបង្រៀនភាសាខ្មែរដល់កុមារ 50 នាក់",
    title_en: "Khmer Language Classes for 50 Children",
    excerpt: "កម្មវិធីបង្រៀនភាសាខ្មែរ និងសំណេរដល់កុមារក្នុងតំបន់ជនបទ",
    content: `
      <p>ការអប់រំគឺជាមូលដ្ឋានសំខាន់បំផុតនៃការអភិវឌ្ឍន៍ប្រទេសជាតិ។ ដោយយល់ដឹងពីសារៈសំខាន់នេះ ក្រុមការងារយើងបានរៀបចំកម្មវិធីបង្រៀនភាសាខ្មែរដល់កុមារចំនួន 50 នាក់ក្នុងតំបន់ជនបទ។</p>
      
      <h2>ការរៀបចំកម្មវិធី</h2>
      <p>កម្មវិធីនេះត្រូវបានរៀបចំឡើងក្នុងរយៈពេល 3 ខែ ដោយមានការចូលរួមពីគ្រូបង្រៀនជំនាញការ និងអ្នកស្ម័គ្រចិត្តពីសហគមន៍។</p>
    `,
    category: "education",
    author: "អ្នកស្រី គិម សុផល",
    author_en: "Ms. Kim Sophol",
    date: "2024-01-10",
    readTime: 3,
    image: "https://images.pexels.com/photos/5427652/pexels-photo-5427652.jpeg?auto=compress&cs=tinysrgb&w=1200",
    featured: false,
    views: 890,
    tags: ["education", "children", "language"],
  },
  // Add more articles as needed...
]

const categories = [
  { id: "education", name: "ការអប់រំ", name_en: "Education" },
  { id: "culture", name: "វប្បធម៌", name_en: "Culture" },
  { id: "community", name: "សហគមន៍", name_en: "Community" },
  { id: "sports", name: "កីឡា", name_en: "Sports" },
]

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = newsData.find((item) => item.slug === slug)

  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  return {
    title: `${article.title_en} | Mettyerng News`,
    description: article.excerpt,
    openGraph: {
      title: article.title_en,
      description: article.excerpt,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
      authors: [article.author_en],
    },
  }
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params
  const article = newsData.find((item) => item.slug === slug)

  if (!article) {
    notFound()
  }

  const categoryInfo = categories.find((c) => c.id === article.category)
  const relatedArticles = newsData
    .filter((item) => item.id !== article.id && item.category === article.category)
    .slice(0, 3)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Back Button */}
        <div className="absolute top-6 left-6 z-10">
          <Link href="/news">
            <Button variant="outline" size="sm" className="bg-white/90 backdrop-blur-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              ត្រលប់ក្រោយ
            </Button>
          </Link>
        </div>

        {/* Hero Image */}
        <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
          <img
            src={article.image || "/placeholder.svg"}
            alt={article.title_en}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

          {/* Hero Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container max-w-4xl">
              <AnimatedSection>
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <Badge className="bg-khmer-gold text-white text-sm px-3 py-1">{categoryInfo?.name_en}</Badge>
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

                <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">{article.excerpt}</p>

                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center text-white/90">
                    <User className="w-5 h-5 mr-2" />
                    <span className="font-medium">{article.author_en}</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Eye className="w-5 h-5 mr-2" />
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                  <SocialShare title={article.title_en} url={`/news/${article.slug}`} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <article className="prose prose-lg max-w-none">
                  <div
                    dangerouslySetInnerHTML={{ __html: article.content }}
                    className="prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-khmer-gold prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-blockquote:border-l-khmer-gold prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:not-italic prose-blockquote:text-gray-800"
                  />
                </article>

                {/* Tags */}
                {article.tags && article.tags.length > 0 && (
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-sm">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Author Info */}
                <div className="mt-12 p-6 bg-gray-50 rounded-xl">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-khmer-gold rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{article.author_en}</h4>
                      <p className="text-gray-600">
                        Content creator and community organizer passionate about social impact and education.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Social Share */}
                <AnimatedSection delay={0.2}>
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Share Article</h3>
                    <SocialShare title={article.title_en} url={`/news/${article.slug}`} vertical={true} />
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gradient-to-br from-khmer-gold/10 via-white to-khmer-red/10">
        <div className="container">
          <AnimatedSection>
            <NewsletterCTA />
          </AnimatedSection>
        </div>
      </section>

      {/* Next Article */}
      <section className="section-padding border-t border-gray-200">
        <div className="container">
          <AnimatedSection>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Continue Reading</h2>
              <Link href="/news">
                <Button size="lg" className="bg-khmer-gold hover:bg-khmer-gold/90">
                  View All Articles
                  <ArrowLeft className="ml-2 w-5 h-5 rotate-180" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
