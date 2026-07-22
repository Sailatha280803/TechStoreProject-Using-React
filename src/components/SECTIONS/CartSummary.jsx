function CartSummary({ cartCount, cartTotal, onOpenCart }) {
  if (cartCount <= 0) return null;

  return (
    <div className="cart-summary" onClick={onOpenCart}>
      <span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ verticalAlign: "middle", marginRight: "8px" }}
        >
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <path d="M16 10a4 4 0 0 1-8 0" />
        </svg>
        Cart: {cartCount} items
      </span>
      <span className="cart-total">Total: ₹{cartTotal.toLocaleString()}</span>
    </div>
  );
}

export default CartSummary;
