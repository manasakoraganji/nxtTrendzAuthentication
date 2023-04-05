import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo-img"
        alt="website logo"
      />
      <ul className="unordered-items">
        <Link to="/" className="nav-link">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li className="nav-link">Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li className="nav-link">Cart</li>
        </Link>
        <div className="button-container">
          <button type="button" className="lg-button">
            Logout
          </button>
        </div>
      </ul>
    </div>
  </nav>
)

export default Header
