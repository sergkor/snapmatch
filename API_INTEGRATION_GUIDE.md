# API Integration Guide for SNAP Visual Search

## Overview
This guide explains how to integrate the SNAP Visual Search Assistant with external APIs for real product recognition.

## Current Implementation
The application currently uses a mock API implementation that returns sample data. All API logic is contained in `src/services/api.ts`.

## How to Integrate with Real APIs

### 1. Update API Configuration
Edit `src/services/api.ts` and update the `API_CONFIG` object:

```typescript
const API_CONFIG = {
  baseUrl: 'https://your-actual-api.com/api',
  apiKey: process.env.VITE_API_KEY || 'your-api-key',
  timeout: 30000,
}
```

### 2. Environment Variables
Create a `.env` file in the project root:

```bash
VITE_API_BASE_URL=https://your-visual-search-api.com/api
VITE_API_KEY=your-actual-api-key
VITE_API_TIMEOUT=30000
```

### 3. Replace Mock Implementation
In `src/services/api.ts`, replace the mock implementation with actual API calls:

```typescript
export const analyzeImage = async (imageData: UploadedImage): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_CONFIG.baseUrl}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_CONFIG.apiKey}`,
      },
      body: JSON.stringify({
        image: imageData.base64,
        options: {
          maxResults: 10,
          minConfidence: 0.5,
          includeMetadata: true,
        }
      }),
    })

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`)
    }

    const data = await response.json()
    
    // Transform API response to match our Product interface
    return {
      success: true,
      products: data.results.map(transformApiProduct),
    }
  } catch (error) {
    return {
      success: false,
      products: [],
      error: error.message
    }
  }
}
```

## Popular Visual Search APIs

### 1. Google Cloud Vision API
- **Endpoint**: `https://vision.googleapis.com/v1/images:annotate`
- **Authentication**: API Key or OAuth 2.0
- **Features**: Object detection, OCR, logo detection
- **Pricing**: Pay per request
- **Documentation**: https://cloud.google.com/vision/docs

### 2. Amazon Rekognition
- **Service**: AWS SDK
- **Authentication**: AWS credentials
- **Features**: Object detection, scene analysis
- **Pricing**: Pay per image analyzed
- **Documentation**: https://docs.aws.amazon.com/rekognition/

### 3. Microsoft Computer Vision
- **Endpoint**: `https://[region].api.cognitive.microsoft.com/vision/v3.2/analyze`
- **Authentication**: Subscription key
- **Features**: Object detection, OCR, brand detection
- **Pricing**: Tiered pricing model
- **Documentation**: https://docs.microsoft.com/azure/cognitive-services/computer-vision/

### 4. Clarifai API
- **Endpoint**: `https://api.clarifai.com/v2/models/predict`
- **Authentication**: API Key
- **Features**: Custom models, product recognition
- **Pricing**: Free tier available
- **Documentation**: https://docs.clarifai.com/

## Data Transformation
Most APIs return data in different formats. You'll need to transform the response to match the `Product` interface:

```typescript
interface Product {
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
```

## Error Handling
The current implementation includes comprehensive error handling:
- Network errors
- API rate limits
- Invalid responses
- Timeout errors

## Security Considerations
1. **Never commit API keys** to version control
2. **Use environment variables** for sensitive data
3. **Implement rate limiting** to avoid API quota issues
4. **Validate file uploads** to prevent security issues
5. **Use HTTPS** for all API communications

## Testing Your Integration
1. Replace the mock data in `analyzeImage` function
2. Test with various image types
3. Handle edge cases (no products found, API errors)
4. Test with different image sizes and formats

## Performance Optimization
1. **Image compression**: Resize images before sending to API
2. **Caching**: Cache results for identical images
3. **Progressive loading**: Show results as they arrive
4. **Retry logic**: Implement exponential backoff for failed requests

## Deployment Notes
- Set environment variables in your hosting platform
- Configure CORS if needed for your API
- Monitor API usage and costs
- Set up logging for debugging 