'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ProductCard from '@/components/ui/ProductCard';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import Image from 'next/image';
import { Product, ProductCondition } from '@/types/product';

// Mock data - replace with actual API call later
const products: Product[] = [
  {
    id: '1',
    title: 'Eco-friendly Sewing Machine',
    description: 'Professional grade, energy-efficient sewing machine',
    price: 599.99,
    images: ['/images/products/sewing-machine.jpg'],
    category: 'Equipment',
    condition: 'new' as ProductCondition,
    seller: {
      id: 'seller1',
      name: 'EcoTools Store',
      type: 'store',
      rating: 4.8,
      totalSales: 156,
      joinedDate: '2023-01-15'
    },
    isHubRepaired: true,
    createdAt: '2024-01-01',
    tags: ['equipment', 'professional']
  },
  {
    id: '2',
    title: 'Upcycled Denim Jacket',
    description: 'Uniquely repaired and customized by our hub artisans',
    price: 89.99,
    images: ['/images/products/denim-jacket.jpg'],
    category: 'hubRepaired',
    condition: 'good' as ProductCondition,
    seller: {
      id: 'seller2',
      name: 'Copenhagen Repair Hub',
      type: 'store',
      rating: 4.9,
      totalSales: 201,
      joinedDate: '2022-06-01'
    },
    isHubRepaired: true,
    createdAt: '2023-09-01',
    tags: ['upcycled', 'denim']
  },
  // Add more products...
];

const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
const brands = ['All Brands', 'Nike', 'Adidas', 'Zara', 'H&M', 'Other'] as const;
const priceRanges = [
  'All Prices',
  'Under 50 DKK',
  '50-100 DKK',
  '100-200 DKK',
  '200+ DKK'
] as const;

export default function MarketplacePage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSize, setSelectedSize] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [selectedCondition, setSelectedCondition] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('All Prices');
  const [sortBy, setSortBy] = useState('newest');

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <LanguageSwitcher />

      {/* Hero Section */}
      <div className="bg-teal-700 text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('marketplace.title')}</h1>
          <p className="text-xl max-w-3xl">{t('marketplace.description')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hub Repaired Section */}
        <div className="mb-16">
          <div className="bg-teal-50 rounded-lg p-8 mb-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('marketplace.hubRepaired.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('marketplace.hubRepaired.description')}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products
                .filter(product => product.isHubRepaired)
                .map(product => (
                  <ProductCard 
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    image={product.images[0]}
                    category={product.category}
                    condition={product.condition}
                    seller={product.seller}
                  />
                ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Categories */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('marketplace.categories.title')}
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="all">All Categories</option>
                <option value="women">{t('marketplace.categories.women')}</option>
                <option value="men">{t('marketplace.categories.men')}</option>
                <option value="kids">{t('marketplace.categories.kids')}</option>
                <option value="accessories">{t('marketplace.categories.accessories')}</option>
              </select>
            </div>

            {/* Size */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('marketplace.filters.size')}
              </label>
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="all">All Sizes</option>
                {sizes.map(size => (
                  <option key={size} value={size}>{size}</option>
                ))}
              </select>
            </div>

            {/* Brand */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('marketplace.filters.brand')}
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                {brands.map(brand => (
                  <option key={brand} value={brand}>{brand}</option>
                ))}
              </select>
            </div>

            {/* Condition */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('marketplace.filters.condition')}
              </label>
              <select
                value={selectedCondition}
                onChange={(e) => setSelectedCondition(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="all">All Conditions</option>
                <option value="new">{t('marketplace.condition.new')}</option>
                <option value="likeNew">{t('marketplace.condition.likeNew')}</option>
                <option value="good">{t('marketplace.condition.good')}</option>
                <option value="fair">{t('marketplace.condition.fair')}</option>
              </select>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('marketplace.filters.price')}
              </label>
              <select
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range}>{range}</option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('marketplace.sort.title')}
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
              >
                <option value="newest">{t('marketplace.sort.newest')}</option>
                <option value="priceAsc">{t('marketplace.sort.priceAsc')}</option>
                <option value="priceDesc">{t('marketplace.sort.priceDesc')}</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedSize('all');
                setSelectedBrand('All Brands');
                setSelectedCondition('all');
                setSelectedPrice('All Prices');
                setSortBy('newest');
              }}
              className="text-sm text-teal-600 hover:text-teal-700"
            >
              {t('marketplace.filters.clear')}
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products
            .filter(product => !product.isHubRepaired)
            .map(product => (
              <ProductCard 
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.images[0]}
                category={product.category}
                condition={product.condition}
                seller={product.seller}
              />
            ))}
        </div>
      </div>

      <Footer />
    </main>
  );
}
