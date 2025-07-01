import { Product } from '../types'

interface ProductDisplayProps {
  product: Product | null
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  // Filter out products with errors or unsuccessful results
  if (product === null) {
    return (
      <div className="product-display">
        <h2>🛍️ Product Analysis Results</h2>
        <div className="no-products">
          <p>No valid product analysis results found.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="product-display">
      <h2>🛍️ Product Analysis Results</h2>
      <div className="products-grid">
        <div className="product-card">
            <div className="product-info">
              {product.name && (
                <h3 className="product-name">{product.name}</h3>
              )}
              
              {product.description && (
                <p className="product-description">{product.description}</p>
              )}
              
              <div className="product-details">
                {product.style && (
                  <div className="detail-item">
                    <strong>Style:</strong> <span>{product.style}</span>
                  </div>
                )}
                
                {product.features && (
                  <div className="detail-item">
                    <strong>Features:</strong> <span>{product.features}</span>
                  </div>
                )}
                
                {product.audience && (
                  <div className="detail-item">
                    <strong>Target Audience:</strong> <span>{product.audience}</span>
                  </div>
                )}
                
                {product.quality && (
                  <div className="detail-item">
                    <strong>Quality:</strong> <span>{product.quality}</span>
                  </div>
                )}
                
                {product.keywords && product.keywords.length > 0 && (
                  <div className="detail-item">
                    <strong>Keywords:</strong>
                    <div className="keywords-container">
                      {product.keywords.map((keyword, keywordIndex) => (
                        <span key={keywordIndex} className="keyword-tag">{keyword}</span>
                      ))}
                    </div>
                  </div>
                )}
                
                {product.category && product.category.length > 0 && (
                  <div className="detail-item">
                    <strong>Categories:</strong>
                    <div className="categories-container">
                      {product.category.map((cat, catIndex) => (
                        <span key={catIndex} className="category-tag">{cat}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
      
      <div className="api-note">
        <p>
          <strong>Note:</strong> This shows the analysis results from the visual search API.
          Product information is extracted from the uploaded image.
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay 