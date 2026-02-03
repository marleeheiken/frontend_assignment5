import CartItem from '../components/CartItem';

function CartPage({cartItems, removeFromCart}) {
  return (

    <section className="cart-section">
        <h2>Your Cart</h2> 
            {cartItems.length > 0 ? (
                <>
                    {cartItems.map((item) => (
                        <CartItem
                        key={item.id}
                        id={item.id}        
                        name={item.name}
                        price={item.price}
                        onRemove={removeFromCart}
                        />
                    ))}

                    <h3 className="cart-total">
                        Total: ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                    </h3>
                    </>
                ) : (
            <p className="empty-cart" >Your cart is empty.</p>
        )}
    </section>
  );
}

export default CartPage;
