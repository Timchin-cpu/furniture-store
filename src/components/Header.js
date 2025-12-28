import React, { useState } from "react";
import { Heart, ShoppingCart, User, Menu, X } from "lucide-react";
import "./Header.css";

const Header = ({ cartItems }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">SoFi</span>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className={`nav ${menuOpen ? "open" : ""}`}>
            <a href="#home" className="nav-link active">
              Главная
            </a>
            <a href="#about" className="nav-link">
              О нас
            </a>
            <a href="#store" className="nav-link">
              Магазин
            </a>
            <a href="#blog" className="nav-link">
              Блог
            </a>
            <a href="#sale" className="nav-link">
              Акции
            </a>
          </nav>

          <div className="header-actions">
            <button className="icon-btn">
              <Heart size={20} />
            </button>
            <button className="icon-btn cart-btn">
              <ShoppingCart size={20} />
              {cartItems > 0 && <span className="cart-badge">{cartItems}</span>}
            </button>
            <button className="icon-btn user-btn">
              <User size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
