

export interface Product {
  success: boolean;
  error?: string;
  name?: string;
  description?: string;
  style?: string;
  features?: string;
  audience?: string;
  quality?: string;
  keywords?: string[];
  category?: string[];
}

export interface UploadedImage {
  file: File;
  base64: string;
  preview: string;
} 