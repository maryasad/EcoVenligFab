'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  description: string;
  date: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: '/images/Gallery/events/Community sewing hub.jpg',
    alt: 'Community Sewing Hub',
    category: 'events',
    description: 'Our vibrant community sewing hub in action',
    date: '2023-11-15'
  },
  {
    id: 2,
    src: '/images/Gallery/transformations/before-and-after_old jeans.jpg',
    alt: 'Jeans Transformation',
    category: 'transformations',
    description: 'Before and after: Old jeans transformed into something new',
    date: '2023-10-20'
  },
  {
    id: 3,
    src: '/images/Gallery/workshops/Image_Sewing_Machine.jpg',
    alt: 'Sewing Workshop',
    category: 'workshops',
    description: 'Professional sewing equipment in our workshop',
    date: '2023-09-05'
  },
  {
    id: 4,
    src: '/images/Gallery/workshops/jeans being deconstructed.jpg',
    alt: 'Jeans Deconstruction',
    category: 'workshops',
    description: 'Learning the art of garment deconstruction',
    date: '2023-08-12'
  },
  {
    id: 5,
    src: '/images/Gallery/impact/Landfill Overflowing.jpg',
    alt: 'Landfill Impact',
    category: 'impact',
    description: 'The reality of textile waste in landfills',
    date: '2023-07-28'
  },
  {
    id: 6,
    src: '/images/Gallery/transformations/Downcycled_insulation.jpg',
    alt: 'Downcycled Insulation',
    category: 'transformations',
    description: 'Transforming textile waste into useful insulation material',
    date: '2023-11-01'
  },
  {
    id: 7,
    src: '/images/Gallery/transformations/high-fashion_diverse group.jpg',
    alt: 'High Fashion Transformation',
    category: 'transformations',
    description: 'Sustainable high fashion created from recycled materials',
    date: '2023-10-15'
  },
  {
    id: 8,
    src: '/images/Gallery/impact/Microplastics_in_ocean.jpg',
    alt: 'Microplastics Impact',
    category: 'impact',
    description: 'The environmental impact of textile microplastics',
    date: '2023-09-20'
  },
  {
    id: 9,
    src: '/images/Gallery/transformations/a pile of old jeans.jpg',
    alt: 'Raw Materials',
    category: 'transformations',
    description: 'Collection of old jeans ready for transformation',
    date: '2023-08-25'
  },
  {
    id: 10,
    src: '/images/Gallery/community/A fashion show or exhibition featuring.jpg',
    alt: 'Fashion Show Exhibition',
    category: 'community',
    description: 'Community fashion show featuring sustainable designs',
    date: '2023-12-01'
  },
  {
    id: 11,
    src: '/images/Gallery/community/A warm and inviting image of people.jpg',
    alt: 'Community Gathering',
    category: 'community',
    description: 'Warm gathering of community members sharing sustainable fashion ideas',
    date: '2023-11-25'
  },
  {
    id: 12,
    src: '/images/Gallery/community/A warm and inviting image of people_2.jpg',
    alt: 'Community Workshop',
    category: 'community',
    description: 'Community members learning sustainable fashion practices',
    date: '2023-11-20'
  },
  {
    id: 13,
    src: '/images/Gallery/community/A warm and inviting image of people_3.jpg',
    alt: 'Community Collaboration',
    category: 'community',
    description: 'Collaborative session on sustainable fashion techniques',
    date: '2023-11-15'
  },
  {
    id: 14,
    src: '/images/Gallery/community/a fashion show or exhibition.jpg',
    alt: 'Fashion Exhibition',
    category: 'community',
    description: 'Community-driven fashion exhibition showcasing sustainable designs',
    date: '2023-11-10'
  }
];

const categories = [
  'all',
  'events',
  'transformations',
  'community',
  'workshops',
  'impact'
];

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages = galleryImages.filter(
    image => selectedCategory === 'all' || image.category === selectedCategory
  );

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <LanguageSwitcher />

      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('gallery.title')}</h1>
          <p className="text-xl max-w-3xl">{t('gallery.description')}</p>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="sr-only">{t('gallery.categories.title')}</h2>
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
              {category === 'all' 
                ? t('common.all')
                : t(`gallery.categories.${category}`)}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={image.id <= 6} // Prioritize loading for first 6 images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{image.alt}</h3>
                <p className="text-sm text-gray-500 mb-2">
                  {t(`gallery.categories.${image.category}`)}
                </p>
                <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] sm:aspect-[4/3] lg:aspect-[16/9]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1536px) 100vw, 1536px"
                className="object-contain"
                priority
                quality={90}
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                      {t(`gallery.categories.${selectedImage.category}`)}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(selectedImage.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-900">
                    {selectedImage.alt}
                  </h2>
                  <p className="text-gray-600">{selectedImage.description}</p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
