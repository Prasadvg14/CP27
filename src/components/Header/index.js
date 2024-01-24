// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="header">
    <img
      className="logo"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <ul className="items">
      <li>Home</li>
      <li>Products</li>
      <li>Cart</li>
      <button type="button" className="btn">
        Logout
      </button>
    </ul>
  </nav>
)

export default Header
