'use client';

import { ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

export default function CartIcon() {
  const itemsCount = useCartStore((state) => state.getItemsCount());

  return (
    <Link href="/cart" className="relative group">
      <ShoppingBagIcon className="h-6 w-6 text-gray-700 group-hover:text-green-700" />
      {itemsCount > 0 && (
        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-green-600 text-xs font-medium text-white">
          {itemsCount}
        </span>
      )}
    </Link>
  );
}
