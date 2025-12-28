import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./Hero.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Современная минималистичная мебель",
      description:
        "Откройте тщательно подобранную коллекцию изысканных предметов, разработанных для преображения любого пространства в выражение вашего уникального стиля.",
      price: "54 990 ₽",
      image:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      buttonText: "Узнать больше",
    },
    {
      title: "Элегантные диваны для дома",
      description:
        "Премиальные диваны, сочетающие комфорт и стиль для вашего идеального интерьера.",
      price: "64 990 ₽",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      buttonText: "Смотреть коллекцию",
    },
    {
      title: "Уютная мебель для гостиной",
      description:
        "Создайте пространство мечты с нашей эксклюзивной коллекцией дизайнерской мебели.",
      price: "49 990 ₽",
      image:
        "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80",
      buttonText: "Посмотреть",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-slider">
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1 className="hero-title">{slides[currentSlide].title}</h1>
                <p className="hero-description">
                  {slides[currentSlide].description}
                </p>
                <div className="hero-actions">
                  <button className="price-badge">
                    {slides[currentSlide].price}
                  </button>
                  <button className="btn-primary">
                    {slides[currentSlide].buttonText}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button
            className="slider-btn prev"
            onClick={prevSlide}
            style={{ width: "30px", height: "30px", left: "9px" }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            className="slider-btn next"
            onClick={nextSlide}
            style={{ width: "30px", height: "30px" }}
          >
            <ChevronRight size={28} />
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="promo-banner">
          <div className="promo-card yellow">
            <div className="promo-content">
              <h3>Деревянные кресла</h3>
              <p className="discount">Скидка 50%</p>
              <button className="btn-secondary">Узнать больше</button>
            </div>
            <div className="promo-image">
              <img
                src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300&q=80"
                alt="Кресло"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
