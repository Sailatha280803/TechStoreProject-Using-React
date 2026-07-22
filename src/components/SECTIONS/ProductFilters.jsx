function ProductFilters({
  searchTerm,
  onSearchChange,
  selectedBrand,
  onBrandChange,
  allBrands,
  sortBy,
  onSortChange,
}) {
  return (
    <div className="filter-controls">
      <div className="filter-group">
        <input
          type="text"
          placeholder="🔍 Search products..."
          value={searchTerm}
          onChange={onSearchChange}
          className="search-input"
        />
      </div>

      <div className="filter-group">
        <select
          value={selectedBrand}
          onChange={onBrandChange}
          className="filter-select"
        >
          <option value="All">All Brands</option>
          {allBrands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <select
          value={sortBy}
          onChange={onSortChange}
          className="filter-select"
        >
          <option value="default">Sort By</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
}

export default ProductFilters;
