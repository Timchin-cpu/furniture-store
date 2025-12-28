import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import './LatestArrivals.css';

const LatestArrivals = ({ addToCart }) => {
  const [favorites, setFavorites] = useState([]);

  const products = [
    {
      id: 1,
      name: 'Кресло Comfort',
      price: '8 545 ₽',
      badge: 'Открытое место',
      image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=400&q=80',
      discount: null
    },
    {
      id: 2,
      name: 'Серое кресло',
      price: '9 345 ₽',
      badge: null,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80',
      discount: '-5%'
    },
    {
      id: 3,
      name: 'Кожаное кресло',
      price: '9 545 ₽',
      badge: null,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&q=80',
      discount: null
    },
    {
      id: 4,
      name: 'Кресло Armchair',
      price: '8 144 ₽',
      badge: null,
      image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=400&q=80',
      discount: '-3%'
    },
    {
      id: 5,
      name: 'Желтый диван',
      price: '9 146 ₽',
      badge: 'Открытое место',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80',
      discount: '-8%'
    },
    {
      id: 6,
      name: 'Гардероб',
      price: '8 854 ₽',
      badge: null,
      image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400&q=80',
      discount: '-6%'
    }
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(fav => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  return (
    <section className="latest-arrivals">
      <div className="container">
        <h2 className="section-title">Последние поступления</h2>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              {product.badge && (
                <div className="product-badge yellow">{product.badge}</div>
              )}
              {product.discount && (
                <div className="product-badge discount">{product.discount}</div>
              )}
              
              <button 
                className={`favorite-btn ${favorites.includes(product.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(product.id)}
              >
                <Heart 
                  size={18} 
                  fill={favorites.includes(product.id) ? 'currentColor' : 'none'}
                />
              </button>

              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={addToCart}
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="view-all-btn">Смотреть всё</button>
      </div>
    </section>
  );
};

export default LatestArrivals;
