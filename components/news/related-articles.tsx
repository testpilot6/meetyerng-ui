"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Eye, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Article {
  id: number;
  title: string;
  title_en: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  views: number;
  slug?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (!articles.length) return null;

  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center">
          <ArrowRight className="w-5 h-5 text-khmer-gold mr-2" />
          Related Articles
        </h3>
        
        <div className="space-y-4">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                href={`/news/${article.slug || article.id}`}
                className="group block"
              >
                <div className="flex space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title_en}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 group-hover:text-khmer-gold transition-colors duration-200 line-clamp-2 mb-2">
                      {article.title_en}
                    </h4>
                    
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(article.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-3 h-3 mr-1" />
                        {article.views}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200">
          <Link 
            href="/news"
            className="text-sm text-khmer-gold hover:text-khmer-gold-dark font-medium flex items-center group"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}