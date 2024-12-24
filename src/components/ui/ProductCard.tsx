import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  condition: 'new' | 'like-new' | 'good' | 'fair';
  seller: {
    name: string;
    type: 'user' | 'store';
  };
}

export default function ProductCard({
  id,
  title,
  price,
  image,
  category,
  condition,
  seller,
}: ProductCardProps) {
  const conditionColor = {
    new: 'bg-green-100 text-green-800',
    'like-new': 'bg-blue-100 text-blue-800',
    good: 'bg-yellow-100 text-yellow-800',
    fair: 'bg-orange-100 text-orange-800',
  };

  return (
    <Link href={`/marketplace/product/${id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={image}
          alt={title}
          width={300}
          height={400}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex justify-between items-start">
          <h3 className="text-sm text-gray-700 font-medium">{title}</h3>
          <p className="text-lg font-medium text-gray-900">${price.toFixed(2)}</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${conditionColor[condition]}`}>
            {condition}
          </span>
          <span className="text-xs text-gray-500">{category}</span>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <span>{seller.name}</span>
          <span className="mx-1">•</span>
          <span className="capitalize">{seller.type}</span>
        </div>
      </div>
    </Link>
  );
}
