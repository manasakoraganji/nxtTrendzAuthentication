import Header from '../Header'
import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        className="cart-image"
        alt="nav cart"
      />
    </div>
    <div className="hbc-container">
      <h1 className="cart-heading">Cart</h1>
      <button type="button" className="cart-button">
        My Cart
      </button>
    </div>
  </>
)

export default Products
