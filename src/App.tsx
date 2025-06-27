import { useState } from 'react'
import ImageUpload from './components/ImageUpload'
import ProductDisplay from './components/ProductDisplay'
import { Product, UploadedImage } from './types'
import { analyzeImage } from './services/api'
import './App.css'

function App() {
  const [uploadedImage, setUploadedImage] = useState<UploadedImage | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleImageUpload = async (imageData: UploadedImage) => {
    setUploadedImage(imageData)
    setIsLoading(true)
    setError(null)

    try {
      const response = await analyzeImage(imageData)
      
      if (response.success) {
        setProducts(response.products)
      } else {
        setError(response.error || 'Failed to analyze image. Please try again.')
      }
    } catch (err) {
      setError('Failed to analyze image. Please try again.')
      console.error('API Error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setUploadedImage(null)
    setProducts([])
    setError(null)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>🔍 SNAP</h1>
        <p>Search/Navigate Amazon Product Visual Search Assistant</p>
      </header>

      <main className="App-main">
        {!uploadedImage ? (
          <ImageUpload onImageUpload={handleImageUpload} />
        ) : (
          <div className="results-container">
            <div className="uploaded-image">
              <h3>Uploaded Image</h3>
              <img 
                src={uploadedImage.preview} 
                alt="Uploaded" 
                className="preview-image"
              />
              <button onClick={handleReset} className="reset-button">
                Upload Another Image
              </button>
            </div>

            {isLoading && (
              <div className="loading">
                <p>🔍 Analyzing your image...</p>
                <div className="spinner"></div>
              </div>
            )}

            {error && (
              <div className="error">
                <p>❌ {error}</p>
              </div>
            )}

            {products.length > 0 && !isLoading && (
              <ProductDisplay products={products} />
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App 