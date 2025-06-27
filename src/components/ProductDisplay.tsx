import { Product } from '../types'

interface ProductDisplayProps {
  products: Product[]
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ products }) => {
  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐')
    }
    if (hasHalfStar) {
      stars.push('⭐')
    }
    
    return stars.join('')
  }

  return (
    <div className="product-display">
      <h2>🛍️ Products Found</h2>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              
              {product.brand && (
                <p className="product-brand">by {product.brand}</p>
              )}
              
              <p className="product-description">{product.description}</p>
              
              <div className="product-details">
                <div className="price-availability">
                  <span className="product-price">{product.price}</span>
                  <span className={`availability ${product.availability.toLowerCase().replace(' ', '-')}`}>
                    {product.availability}
                  </span>
                </div>
                
                {product.rating && (
                  <div className="product-rating">
                    <span className="stars">{renderStars(product.rating)}</span>
                    <span className="rating-value">({product.rating})</span>
                    {product.reviewCount && (
                      <span className="review-count">{product.reviewCount} reviews</span>
                    )}
                  </div>
                )}
                
                <div className="product-category">
                  <span className="category-tag">{product.category}</span>
                </div>
              </div>
              
              <div className="product-actions">
                <button className="view-product-btn">
                  View on Amazon
                </button>
                <button className="add-to-cart-btn">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="api-note">
        <p>
          <strong>Note:</strong> This is a mock response. 
          Integrate with a real visual search API to get actual product matches.
        </p>
      </div>
    </div>
  )
}

export default ProductDisplay 