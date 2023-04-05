import Header from '../Header'
import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        className="products-image"
        alt="nav products"
      />
    </div>
    <div className="hb-container">
      <h1 className="products-heading">Products</h1>
      <button type="button" className="products-button">
        View More
      </button>
    </div>
  </>
)

export default Products
