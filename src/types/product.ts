export type ProductCondition = 'new' | 'like-new' | 'good' | 'fair';

export type SellerType = 'user' | 'store';

export interface Seller {
  id: string;
  name: string;
  type: SellerType;
  rating: number;
  totalSales: number;
  joinedDate: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  condition: ProductCondition;
  brand?: string;
  size?: string;
  color?: string;
  material?: string;
  sustainabilityFeatures: string[];
  seller: Seller;
  isHubRepaired: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface ProductReview {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  createdAt: string;
}
