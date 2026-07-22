function CartTotal({ cartCount, cartTotal }) {
  return (
    <div className="cart-totals">
      <div className="cart-totals-row">
        <span>Subtotal ({cartCount} items)</span>
        <span>₹{cartTotal.toLocaleString()}</span>
      </div>
      <div className="cart-totals-row">
        <span>Shipping</span>
        <span className="free-shipping">FREE</span>
      </div>
      <div className="cart-totals-row total">
        <span>Total</span>
        <span>₹{cartTotal.toLocaleString()}</span>
      </div>
    </div>
  );
}

export default CartTotal;
