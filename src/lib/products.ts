import type { Product, ProductCondition } from '@/types/product';

// Mock products data - replace with actual API calls in production
const products: Product[] = [
  {
    id: '1',
    title: 'Eco-friendly Cotton Dress',
    description: 'This beautiful dress is made from 100% organic cotton, sourced from sustainable farms. The design emphasizes both comfort and style while maintaining our commitment to environmental responsibility.',
    price: 45.99,
    images: ['/images/products/dress-1.jpg', '/images/products/dress-1-alt.jpg', '/images/products/dress-1-detail.jpg'],
    category: 'Dresses',
    condition: 'like-new',
    brand: 'EcoStyle',
    size: 'M',
    color: 'Sage Green',
    material: '100% Organic Cotton',
    sustainabilityFeatures: [
      'Organic Materials',
      'Fair Trade Certified',
      'Water-Saving Production',
      'Recyclable Packaging'
    ],
    seller: {
      id: 's1',
      name: 'Green Fashion Store',
      type: 'store',
      rating: 4.8,
      totalSales: 1234,
      joinedDate: '2023-01-15'
    },
    createdAt: '2024-01-19T09:00:00Z',
    updatedAt: '2024-01-19T09:00:00Z'
  },
  {
    id: '2',
    title: 'Upcycled Denim Jacket',
    description: 'A unique piece created from recycled denim. Each jacket is one-of-a-kind and represents our commitment to reducing textile waste.',
    price: 35.00,
    images: ['/images/products/jacket-1.jpg', '/images/products/jacket-1-alt.jpg'],
    category: 'Outerwear',
    condition: 'good',
    brand: 'Reworked',
    size: 'L',
    color: 'Blue',
    material: 'Recycled Denim',
    sustainabilityFeatures: [
      'Upcycled Materials',
      'Zero Waste Production',
      'Local Craftsmanship'
    ],
    seller: {
      id: 'u1',
      name: 'Sarah K.',
      type: 'user',
      rating: 4.5,
      totalSales: 45,
      joinedDate: '2023-06-20'
    },
    createdAt: '2024-01-18T15:30:00Z',
    updatedAt: '2024-01-18T15:30:00Z'
  },
];

export async function getProducts(options?: {
  category?: string;
  condition?: ProductCondition;
  sortBy?: 'newest' | 'price-low' | 'price-high';
}) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  let filteredProducts = [...products];

  // Apply filters
  if (options?.category && options.category !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === options.category);
  }

  if (options?.condition && options.condition !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.condition === options.condition);
  }

  // Apply sorting
  if (options?.sortBy) {
    switch (options.sortBy) {
      case 'newest':
        filteredProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
    }
  }

  return filteredProducts;
}

export async function getProduct(id: string) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  const product = products.find(p => p.id === id);
  if (!product) {
    throw new Error('Product not found');
  }

  return product;
}
