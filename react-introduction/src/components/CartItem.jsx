import './CartItem.css';

function CartItem({name, price, id, onRemove}) {
    return (
        <div className="cart-item">
            <div className="cart-item-info">
                <h4>{name}</h4>
                <p>${price}</p>
            </div>


            <button className="remove-btn" onClick={() => onRemove(id)} >
                Remove
            </button>
        </div>
          
    );
  }
  
  export default CartItem;