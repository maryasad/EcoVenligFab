'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useState } from 'react';

interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  readTime: string;
  featured?: boolean;
}

const articles: Article[] = [
  {
    id: 1,
    title: 'The True Cost of Fast Fashion',
    description: 'Explore the environmental and social impact of fast fashion on our planet and communities.',
    category: 'Environmental Impact',
    image: '/images/learn/fast-fashion-impact.jpg',
    readTime: '8 min',
    featured: true
  },
  {
    id: 2,
    title: 'From Waste to Wardrobe: Success Stories',
    description: 'Inspiring stories from our repair hubs: how local artisans are transforming discarded clothing into treasured pieces.',
    category: 'Success Stories',
    image: '/images/learn/success-stories.jpg',
    readTime: '6 min',
    featured: true
  },
  {
    id: 3,
    title: 'Guide to Sustainable Materials',
    description: 'Learn about eco-friendly fabrics and materials that minimize environmental impact.',
    category: 'Sustainable Materials',
    image: '/images/learn/sustainable-materials.jpg',
    readTime: '7 min'
  },
  {
    id: 4,
    title: 'Basic Clothing Repair Skills',
    description: 'Master essential sewing techniques to extend the life of your favorite garments.',
    category: 'Repair & Upcycling',
    image: '/images/learn/repair-skills.jpg',
    readTime: '10 min'
  },
  {
    id: 5,
    title: 'Building a Sustainable Wardrobe',
    description: 'Practical tips for transitioning to a more sustainable and mindful approach to fashion.',
    category: 'Sustainable Living',
    image: '/images/learn/sustainable-wardrobe.jpg',
    readTime: '5 min'
  },
  {
    id: 6,
    title: 'Creative Upcycling Projects',
    description: 'Step-by-step guides for transforming old clothes into new fashion statements.',
    category: 'Repair & Upcycling',
    image: '/images/learn/upcycling-projects.jpg',
    readTime: '12 min'
  },
  {
    id: 7,
    title: 'Sustainable Fashion Brands Spotlight',
    description: 'Discover brands that are leading the way in sustainable and ethical fashion.',
    category: 'Sustainable Brands',
    image: '/images/learn/sustainable-brands.jpg',
    readTime: '6 min'
  },
  {
    id: 8,
    title: 'Textile Recycling Process Explained',
    description: 'Understanding how textiles are recycled and why it matters for our environment.',
    category: 'Environmental Impact',
    image: '/images/learn/textile-recycling.jpg',
    readTime: '7 min'
  },
  {
    id: 9,
    title: 'Hub Stories: Copenhagen Repair Workshop',
    description: 'Meet the skilled artisans at our Copenhagen hub and their incredible repair projects.',
    category: 'Success Stories',
    image: '/images/learn/copenhagen-hub.jpg',
    readTime: '5 min'
  }
];

const categories = [
  'All',
  'Environmental Impact',
  'Repair & Upcycling',
  'Sustainable Materials',
  'Sustainable Living',
  'Success Stories',
  'Sustainable Brands'
];

export default function Learn() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredArticles = articles.filter(article => 
    selectedCategory === 'All' || article.category === selectedCategory
  );

  const featuredArticles = articles.filter(article => article.featured);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <LanguageSwitcher />

      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('learn.title')}</h1>
          <p className="text-xl max-w-3xl">
            Discover insights about sustainable fashion, textile recycling, and practical tips for a more eco-conscious wardrobe.
          </p>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredArticles.map((article) => (
            <Link href={`/learn/${article.id}`} key={article.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-64">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="px-2 py-1 bg-teal-600 rounded-full text-sm">{article.category}</span>
                      <span className="text-sm">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
                    <p className="text-sm text-gray-200">{article.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white text-gray-700 shadow-sm hover:shadow-md hover:text-teal-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <Link href={`/learn/${article.id}`} key={article.id}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-teal-600">{article.category}</span>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{article.title}</h3>
                  <p className="text-gray-600 line-clamp-2">{article.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
