import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import LatestArrivals from './components/LatestArrivals';
import DailyOffer from './components/DailyOffer';
import WinterPromo from './components/WinterPromo';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Hero />
      <Categories />
      <LatestArrivals addToCart={addToCart} />
      <DailyOffer />
      <Newsletter />
      <WinterPromo />
      <Footer />
    </div>
  );
}

export default App;
