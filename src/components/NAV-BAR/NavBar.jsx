import User from "../User";
import Toggle from "./Toggle";
import Wishlist from "./Wishlist";
import Cart from "./Cart";
import NavLinks from "./NavLinks";
import NavLogo from "./NavLogo";

function NavBar({
  wishlistLength,
  cartCount,
  isDarkMode,
  onToggleTheme,
  onOpenCart,
  userName,
}) {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLogo />
        <NavLinks />

        <div className="nav-actions">
          <Toggle isDarkMode={isDarkMode} onToggleTheme={onToggleTheme} />
          <Wishlist wishlistLength={wishlistLength} />
          <Cart cartCount={cartCount} onOpenCart={onOpenCart} />
          <button className="nav-btn">Sign In</button>
          <button className="nav-btn primary">Shop Now</button>
          <User userName={userName} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
