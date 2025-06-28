// Centralized data management for the application

import { Post, Video, Project, GalleryItem } from '@/lib/types';

// Mock data for development - in production, this would come from a CMS or database

export const newsData: Post[] = [
  {
    id: 1,
    title: 'ការកាត់សក់ដោយឥតគិតថ្លៃ ចំនួន 200 នាក់',
    title_en: 'Free Haircuts for 200 People',
    excerpt: 'ក្រុម Mettyerng បានរៀបចំកម្មវិធីកាត់សក់ដោយឥតគិតថ្លៃ ដល់ប្រជាជនដែលមានស្ថានភាពពិបាក',
    content: 'ក្នុងកម្មវិធីបេរ័ត្នសង្គមនេះ យើងបានអាចជួយដល់ប្រជាជន 200 នាក់...',
    category: 'community',
    author: 'ក្រុមការងារ Mettyerng',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    featured: true,
    views: 1250,
  },
  // Additional news items would be added here
];

export const videosData: Video[] = [
  {
    id: 1,
    title: 'ការកាត់សក់ដោយឥតគិតថ្លៃ - ការបេរ័ត្នសង្គម',
    title_en: 'Free Haircut Project - Community Service',
    description: 'ការផ្តល់សេវាកាត់សក់ដោយឥតគិតថ្លៃដល់ប្រជាជនដែលមានស្ថានភាពពិបាក',
    category: 'community',
    duration: '8:45',
    views: 12500,
    date: '2024-01-15',
    thumbnail: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    videoId: 'dQw4w9WgXcQ',
    featured: true,
  },
  // Additional videos would be added here
];

export const projectsData: Project[] = [
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
      'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
      'https://images.pexels.com/photos/3993327/pexels-photo-3993327.jpeg',
      'https://images.pexels.com/photos/3993328/pexels-photo-3993328.jpeg',
    ],
    featured: true,
  },
  // Additional projects would be added here
];

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: 'ការកាត់សក់ដោយឥតគិតថ្លៃ',
    title_en: 'Free Haircut Service',
    category: 'community',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    thumbnail: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    description: 'សកម្មភាពកាត់សក់ដោយឥតគិតថ្លៃដល់ប្រជាជនក្នុងសហគមន៍',
    views: 1250,
  },
  // Additional gallery items would be added here
];

// Helper functions for data manipulation
export const getPostsByCategory = (category: string) => {
  return category === 'all' 
    ? newsData 
    : newsData.filter(post => post.category === category);
};

export const getFeaturedPosts = () => {
  return newsData.filter(post => post.featured);
};

export const getVideosByCategory = (category: string) => {
  return category === 'all' 
    ? videosData 
    : videosData.filter(video => video.category === category);
};

export const getFeaturedVideos = () => {
  return videosData.filter(video => video.featured);
};

export const getProjectsByCategory = (category: string) => {
  return category === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
  return projectsData.filter(project => project.featured);
};

export const getGalleryItemsByCategory = (category: string) => {
  return category === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === category);
};