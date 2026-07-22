import ProductCard from "./ProductCard";

function ProductGrid({
  filteredProducts,
  wishlist,
  onAddToCart,
  onToggleWishlist,
}) {
  return (
    <div className="product-grid">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((data) => (
          <ProductCard
            key={data.id}
            id={data.id}
            image={data.image}
            name={data.name}
            price={data.price}
            originalPrice={data.originalPrice}
            discount={data.discount}
            rating={data.rating}
            isBestSeller={data.isBestSeller}
            isWishlisted={wishlist.includes(data.id)}
            onAddToCart={() => onAddToCart(data)}
            onToggleWishlist={() => onToggleWishlist(data.id)}
          />
        ))
      ) : (
        <div className="no-products">
          <p>No products found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
