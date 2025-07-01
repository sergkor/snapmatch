import {  Product, UploadedImage } from '../types'

// Configuration for your external API
const API_CONFIG = {
  baseUrl: 'https://skorniychuk--snap-vsa-model-snap-dev.modal.run',
  apiKey: 'key', // Store this in environment variables
  timeout: 30000, // 30 seconds
}

/**
 * Analyzes an image using an external visual search API
 * @param imageData - The uploaded image data with base64 encoding
 * @returns Promise<Product> - The API response with product information
 */
export const analyzeImage = async (imageData: UploadedImage): Promise<Product> => {
  try {
    console.log('Analyzing image:', imageData)
    const response = await fetch(`${API_CONFIG.baseUrl}/snap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image: imageData.base64
      }),
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    return data
    
/*
         // Mock response - remove this when implementing real API
     // Note: API_CONFIG will be used when you replace this mock implementation
     console.log('Using mock API instead of:', API_CONFIG.baseUrl)
     
     return new Promise((resolve) => {
       setTimeout(() => {
        resolve({
          success: true,
          products: [
            {
              id: 'mock-product-1',
              name: 'Smart Wireless Headphones',
              description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.',
              price: '$199.99',
              imageUrl: imageData.preview,
              category: 'Electronics',
              brand: 'TechAudio',
              availability: 'In Stock',
              rating: 4.8,
              reviewCount: 1247
            },
            {
              id: 'mock-product-2',
              name: 'Similar Bluetooth Headphones',
              description: 'Affordable alternative with great sound quality and comfortable design.',
              price: '$89.99',
              imageUrl: imageData.preview,
              category: 'Electronics',
              brand: 'AudioPlus',
              availability: 'In Stock',
              rating: 4.3,
              reviewCount: 523
            }
          ]
        })
      }, 2000) // Simulate API delay
    })
*/
  } catch (error) {
    console.error('Error analyzing image:', error)
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }
  }
}

/**
 * Popular visual search APIs you can integrate with:
 * 
 * 1. Google Cloud Vision API
 *    - Endpoint: https://vision.googleapis.com/v1/images:annotate
 *    - Features: Object detection, text recognition, logo detection
 *    - Documentation: https://cloud.google.com/vision/docs
 * 
 * 2. Amazon Rekognition
 *    - Service: AWS Rekognition
 *    - Features: Object and scene detection, facial analysis
 *    - Documentation: https://docs.aws.amazon.com/rekognition/
 * 
 * 3. Microsoft Computer Vision API
 *    - Endpoint: https://westus.api.cognitive.microsoft.com/vision/v3.2/analyze
 *    - Features: Image analysis, OCR, object detection
 *    - Documentation: https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/
 * 
 * 4. Clarifai API
 *    - Endpoint: https://api.clarifai.com/v2/models/predict
 *    - Features: Visual recognition, custom models
 *    - Documentation: https://docs.clarifai.com/
 * 
 * 5. Imagga API
 *    - Endpoint: https://api.imagga.com/v2/tags
 *    - Features: Image tagging, categorization, color extraction
 *    - Documentation: https://docs.imagga.com/
 */ 