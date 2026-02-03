import './ProductCard.css';

function ProductCard({ name, price, image, description, onAddToCart }) {


    return (
        
      <div className="product-card">

        <img className= "product-image" src={image} alt={name} />
  
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>{description}</p>

        <a href="/product-details" className="product-details-link">Product Details</a> 
        <br />
        <button onClick={onAddToCart}>
          Add to Cart
        </button>

        

      </div>
    );
  }
  
  // Every component file must export the component
  export default ProductCard;