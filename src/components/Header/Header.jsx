import { useState } from "react";
import {
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import CartModal from "../CartModal/CartModal";
import FavoritesModal from "../FavoritesModal/FavoritesModal";
import { selectFavoritesCount } from "../../redux/favorites/favoritesSlice";

import "./Header.css";

function Header({ cartCount = 0 }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const favoritesCount = useSelector(selectFavoritesCount);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openFavorites = () => {
    setIsFavoritesOpen(true);
    closeMenu();
  };

  const openCart = () => {
    setIsCartOpen(true);
    closeMenu();
  };

  return (
    <>
      <header className="header">
        <NavLink
          to="/"
          className="logo"
          aria-label="Go to home page"
          onClick={closeMenu}
        >
          NovaStore
        </NavLink>
        {/* Desktop navigation */}
        <nav className="nav" aria-label="Main navigation">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>

        {/* Desktop actions */}
        <div className="header-actions desktop-actions">
          <button
            className="icon-btn"
            type="button"
            aria-label="Favorite items"
            onClick={() => setIsFavoritesOpen(true)}
          >
            {favoritesCount > 0 ? (
              <FaHeart size={20} color="#111111" />
            ) : (
              <FiHeart size={20} />
            )}
          </button>

          <button
            className="cart-btn"
            type="button"
            onClick={() => setIsCartOpen(true)}
            aria-label="Open cart"
          >
            <span>
              <FiShoppingCart size={20} />
            </span>

            <span>Cart</span>

            <b>{cartCount}</b>
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </header>

      {/* Mobile menu */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/products" onClick={closeMenu}>
            Products
          </NavLink>

          <NavLink to="/categories" onClick={closeMenu}>
            Categories
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </nav>

        <div className="mobile-actions">
          <button
            className="mobile-action-btn"
            type="button"
            onClick={openFavorites}
          >
            {favoritesCount > 0 ? (
              <FaHeart size={19} color="#111111" />
            ) : (
              <FiHeart size={19} />
            )}

            <span>Favorites</span>
          </button>

          <button
            className="mobile-cart-btn"
            type="button"
            onClick={openCart}
          >
            <FiShoppingCart size={19} />

            <span>Cart</span>

            <b>{cartCount}</b>
          </button>
        </div>
      </div>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />

      <FavoritesModal
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
      />
    </>
  );
}

export default Header;