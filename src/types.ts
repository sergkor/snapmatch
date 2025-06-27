export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  category: string;
  brand?: string;
  availability: string;
  rating?: number;
  reviewCount?: number;
}

export interface ApiResponse {
  success: boolean;
  products: Product[];
  error?: string;
}

export interface UploadedImage {
  file: File;
  base64: string;
  preview: string;
} 