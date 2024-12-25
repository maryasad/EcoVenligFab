import type { Product, ProductCondition } from '@/types/product';

// Mock products data - replace with actual API calls in production
export const products: Product[] = [
  {
    id: '1',
    title: 'Eco-Friendly Summer Dress',
    description: 'Beautiful summer dress made from sustainable materials. Perfect for warm days and eco-conscious fashion lovers.',
    price: 89.99,
    images: ['/images/products/dress.jpg'],
    category: 'Dresses',
    condition: 'like-new' as ProductCondition,
    material: '100% Organic Cotton',
    seller: {
      id: 'seller1',
      name: 'EcoStyle Shop',
      type: 'store',
      rating: 4.8,
      totalSales: 245,
      joinedDate: '2023-01-15'
    },
    isHubRepaired: false,
    createdAt: '2024-01-01',
    tags: ['summer', 'dress', 'eco-friendly'],
    sustainabilityFeatures: [
      'Made from organic cotton',
      'Low-impact dyes',
      'Zero-waste packaging'
    ]
  },
  {
    id: '2',
    title: 'Upcycled Denim Jacket',
    description: 'Uniquely repaired and customized by our hub artisans. Each piece tells its own story.',
    price: 129.99,
    images: ['/images/products/jacket.jpg'],
    category: 'Outerwear',
    condition: 'good' as ProductCondition,
    material: 'Upcycled Denim',
    seller: {
      id: 'seller2',
      name: 'Copenhagen Repair Hub',
      type: 'store',
      rating: 4.9,
      totalSales: 189,
      joinedDate: '2023-02-01'
    },
    isHubRepaired: true,
    createdAt: '2024-01-15',
    tags: ['denim', 'upcycled', 'jacket'],
    sustainabilityFeatures: [
      'Upcycled materials',
      'Local craftsmanship',
      'Zero-waste design'
    ]
  }
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
