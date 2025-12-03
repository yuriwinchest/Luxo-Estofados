export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  tag?: string;
  category: 'sofa' | 'poltrona' | 'decor';
}

export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface FilterOption {
  label: string;
  value: string;
  count?: number;
}

export interface CartItem {
  cartId: string;
  productId: string;
  name: string;
  price: string;
  image: string;
  quantity: number;
  options?: {
    tecido?: string;
    cor?: string;
    acabamento?: string;
  };
}