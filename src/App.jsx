import ProductCard from "./components/ProductCard";
import "./App.css";
import { useState } from "react";

function App() {
  //cart- array of products in cart
  const [cartItems, setCartItems] = useState([]);

  //Wishlist- array of product IDs that are wishlisted
  const [wishlist, setWishlist] = useState([]);

  //Search- what user types in search box
  const [searchTerm, setSearchTerm] = useState("");

  //Brand filter- which brand is selected ('All means all)
  const [selectedBrand, setSelectedBrand] = useState("All");

  //sort-how to sort products
  const [sortBy, setSortBy] = useState([]);

  //add to cart function
  function onAddToCart(product) {
    //check if cart item exist or not
    const existingItem = cartItems.find((item) => item.id === product.id);
    //product is there in the cart
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      //product is not there in cart
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  //calculate total number of cart items
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //calculate total price
  const cartTotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  //wishlist function
  function onToggleWishlist(productId) {
    if (wishlist.includes(productId)) {
      //already existing remove it
      setWishlist(wishlist.filter((id) => id !== productId));
    } else {
      //not in wishlist we can add
      setWishlist([...wishlist, productId]);
    }
  }

  //step1: filter based on search [based on brand]
  let filteredProducts = products.filter((product) => {
    const matchesSearch = product.brand
      .toLowerCase()
      .includes(searchTerm.toLocaleLowerCase());
    return matchesSearch;
  });
  //step2: sort based on filtered products

  const products = [
    {
      id: 1,
      name: "Apple iMac 27, 1TB HDD, Retina 5K",
      price: 169999,
      originalPrice: 1999,
      discount: "35% OFF",
      rating: 5.0,
      image:
        "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Computers%20Peripherals/Desktops/Images/311754_0_p4etiv.png",
      isBestSeller: true,
      brand: "Apple",
    },
    {
      id: 2,
      name: "Apple iPhone 17 Pro Max, 1TB",
      price: 129999,
      rating: 4.9,
      discount: "15% OFF",
      image:
        "https://media-ik.croma.com/prod/https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/317417_0_7ISiBcc4Y.png?updatedAt=1757529273198",
      isBestSeller: true,
      brand: "Apple",
    },
    {
      id: 3,
      name: "PlayStation 5 Console - 1TB, PRO Controller",
      price: 68999,
      rating: 4.8,
      discount: "10% OFF",
      image:
        "https://media.tatacroma.com/Croma%20Assets/Gaming/Gaming%20Consoles/Images/305985_ilpfe3.png",
      brand: "Oppo",
    },
    {
      id: 4,
      name: "MacBook Air 13-Inch (M1): 8GB RAM, 256GB SSD",
      price: 129999,
      originalPrice: 149999,
      discount: "15% OFF",
      rating: 4.7,
      image:
        "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/309621_0_ik7tc9.png",
      brand: "Apple",
    },
    {
      id: 5,
      name: "SamSung Galaxy S23 Ultra, 1TB, Phantom Black",
      price: 199998,
      originalPrice: 249999,
      discount: "5% OFF",
      rating: 4.8,
      image:
        "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/275152_nf5e9i.png",
      brand: "Samsung",
    },
    {
      id: 6,
      name: "Anker PowerCore 26800mAh Portable Charger, 30W PD",
      price: 229999,
      originalPrice: 249999,
      discount: "25% OFF",
      rating: 4.9,
      image:
        "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/314881_0_wp8tuj.png",
      brand: "Android",
    },
    {
      id: 7,
      name: "onePlus 11R 5G, 12GB RAM, 256GB Storage",
      price: 219999,
      originalPrice: 259999,
      discount: "10% OFF",
      rating: 5.0,
      image:
        "https://cdn.beebom.com/mobile/oneplus-11r-5g-front-and-back-1.png",
      brand: "OnePlus",
    },
    {
      id: 8,
      name: "oppo Reno 15 Pro 5G, 12GB RAM, 256GB Storage",
      price: 209999,
      originalPrice: 149999,
      discount: "15% OFF",
      rating: 4.8,
      image:
        "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/319979_0_kzAp32Aa9W.png?updatedAt=1767602430201",
      brand: "OPPO",
    },
  ];

  // const allBrands = [... new Set(products.map(p => p.brand))];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="/" className="logo">
            <span className="logo-icon">◆</span>
            TechStore
          </a>

          <ul className="nav-links">
            <li>
              <a href="#" className="nav-link">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Deals
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="nav-link">
                About
              </a>
            </li>
          </ul>

          <div className="nav-actions">
            <button className="nav-btn">Sign In</button>
            <button className="nav-btn primary">Shop Now</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">New Arrivals 2025</p>
          <h1 className="hero-title">
            The Future of Tech
            <br />
            <span className="hero-highlight">Is Here.</span>
          </h1>
          <p className="hero-description">
            Discover the latest in premium technology. From powerful computers
            to cutting-edge smartphones, find everything you need in one place.
          </p>
          <div className="hero-cta">
            <button className="btn-primary">Explore Products</button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat">
            <span className="stat-number">200+</span>
            <span className="stat-label">Premium Products</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Customer Support</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section" id="products">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <p className="section-subtitle">
            Our most popular products loved by customers
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              rating={product.rating}
              isBestSeller={product.isBestSeller}
              brand={product.brand}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 TechStore. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
