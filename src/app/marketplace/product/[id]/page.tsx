'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/20/solid';
import { HeartIcon, ShareIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart';
import type { Product } from '@/types/product';

// Mock data - replace with API call
const product: Product = {
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
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
              <Image
                src={product.images[selectedImage]}
                alt={product.title}
                width={600}
                height={600}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={classNames(
                    'relative aspect-h-1 aspect-w-1 overflow-hidden rounded-lg',
                    selectedImage === index ? 'ring-2 ring-green-500' : 'ring-1 ring-gray-200'
                  )}
                >
                  <Image
                    src={image}
                    alt={`${product.title} ${index + 1}`}
                    width={150}
                    height={150}
                    className="h-full w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.title}</h1>
            </div>

            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">${product.price}</p>

              {/* Seller info */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Seller</h3>
                <div className="mt-2 flex items-center">
                  <p className="text-sm text-gray-500">{product.seller.name}</p>
                  <span className="mx-2">•</span>
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          product.seller.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-4 w-4 flex-shrink-0'
                        )}
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">{product.seller.rating} stars</span>
                </div>
              </div>

              {/* Product details */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Details</h3>
                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.description}</p>
                </div>
                <dl className="mt-4 space-y-3">
                  {product.brand && (
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 w-24">Brand:</dt>
                      <dd className="text-sm text-gray-900">{product.brand}</dd>
                    </div>
                  )}
                  {product.size && (
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 w-24">Size:</dt>
                      <dd className="text-sm text-gray-900">{product.size}</dd>
                    </div>
                  )}
                  {product.color && (
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 w-24">Color:</dt>
                      <dd className="text-sm text-gray-900">{product.color}</dd>
                    </div>
                  )}
                  {product.material && (
                    <div className="flex items-center">
                      <dt className="text-sm font-medium text-gray-500 w-24">Material:</dt>
                      <dd className="text-sm text-gray-900">{product.material}</dd>
                    </div>
                  )}
                  <div className="flex items-center">
                    <dt className="text-sm font-medium text-gray-500 w-24">Condition:</dt>
                    <dd className="text-sm text-gray-900 capitalize">{product.condition}</dd>
                  </div>
                </dl>
              </div>

              {/* Sustainability features */}
              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Sustainability Features</h3>
                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product.sustainabilityFeatures.map((feature) => (
                      <li key={feature} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 flex gap-4">
                <div className="flex-1 flex items-center gap-4">
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="rounded-md border-gray-300 py-1.5 text-base focus:border-green-500 focus:outline-none focus:ring-green-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                    ))}
                  </select>
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
                  >
                    Add to Cart
                  </button>
                </div>
                <button
                  type="button"
                  className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                >
                  <HeartIcon className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="rounded-md bg-gray-100 p-2 text-gray-600 hover:bg-gray-200"
                >
                  <ShareIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
