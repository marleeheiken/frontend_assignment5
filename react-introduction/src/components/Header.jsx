import './Header.css';
import cart from '../assets/cart.png';
import { Link } from 'react-router-dom';



function Header({storeName, cartCount}) {
    return (
      <header className="app-header">
          <h1>{storeName}</h1>
          
          <nav className="nav-menu">
            <a href="/" className="nav-link">Home</a>
            <a href="/products" className="nav-link">Products</a>
            <a href="/about" className="nav-link">About</a>
            <a href="/cart" className="nav-link">Contact</a>
          </nav>

          <Link to="/cart">
            <div className="cart-container"> 
              <img className="cart-icon" src={cart} alt="Cart"/>
              <span className="cart-num">{cartCount}</span>
            </div>
          </Link>
          

      </header>
    );
  }
  
  export default Header;