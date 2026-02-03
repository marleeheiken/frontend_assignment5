import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from 'react'; 

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {

  const products = [
    {
      id: 1,
      name: "Pencil",
      price: 0.99,
      image: "https://placehold.co/600x400",
      description: "Sharpened lead writing utinsil with eraser."
    },
    {
      id: 2,
      name: "Pen",
      price: 1.29,
      image: "https://placehold.co/600x400",
      description: "Ink powered clickable writing utinsil."
    },
    {
      id: 3,
      name: "Paper",
      price: 0.33,
      image: "https://placehold.co/600x400",
      description: "8x11 flat white construction paper to write on."
    },
    {
      id: 4,
      name: "Binder",
      price: 1.99,
      image: "https://placehold.co/600x400",
      description: "3 ring binder with pen holder."
    },
    {
      id: 5,
      name: "Notebook",
      price: 2.29,
      image: "https://placehold.co/600x400",
      description: "Spiral notebook with college ruled lined paper."
    },
    {
      id: 6,
      name: "Mackbook Air",
      price: 1029.00,
      image: "https://placehold.co/600x400",
      description: "14 inch Macbook air with M2 chip and 8 gigs of ram"
    }
  ]; 

  // Initialize cartItems from localStorage
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('componentcorner-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    try {
      localStorage.setItem('componentcorner-cart', JSON.stringify(cartItems));
    } catch (error) {
      console.warn('Could not save cart to localStorage:', error);
    }
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };
  

  return (
    <BrowserRouter>
      <div className="app">
        <Header 
          storeName="School Supplies Store"
          cartCount= {cartItems.length}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>


        <Footer
          title = "ComponentCenter"
          storeName = "School Supplies Store"
          storeEmail = "componentcenter.bushnell.edu"
          storePhone = "541.602.9963"
          storeLocation = "123 Bushnell St. Eugene, OR"

        />
      </div>
    </BrowserRouter>

  );
}

export default App;



