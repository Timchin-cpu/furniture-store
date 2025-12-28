import React, { useState, useEffect } from 'react';
import './DailyOffer.css';

const DailyOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 32,
    minutes: 35,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = [
    {
      title: 'Стулья',
      discount: '30% скидка',
      image: '/1.jfif'
    },
    {
      title: 'Столы',
      discount: '50% скидка',
      image: '/2.jfif'
    }
  ];

  return (
    <section className="daily-offer">
      <div className="container">
        <div className="offer-header">
          <div>
            <h2 className="section-title">Ежедневные предложения</h2>
            <p className="offer-subtitle">
              Ознакомьтесь с нашими ежедневными предложениями! Сочетайте большие скидки на все товары. 
              Предложения могут меняться каждый день, поэтому не упустите свой шанс :)
            </p>
          </div>
          <button className="btn-open-store">Открыть магазин</button>
        </div>

        <div className="offers-grid">
          {offers.map((offer, index) => (
            <div key={index} className="offer-card">
              <div className="offer-content">
                <h3 className="offer-title">{offer.title}</h3>
                <p className="offer-discount">{offer.discount}</p>
                <button className="btn-explore">Узнать больше</button>
              </div>
              <div className="offer-image">
                <img src={offer.image} alt={offer.title} />
              </div>
            </div>
          ))}
        </div>

        <div className="timer-section">
          <div className="timer-card">
            <h3 className="timer-title">Зимнее предложение</h3>
            <div className="timer">
              <div className="timer-unit">
                <span className="timer-value">{timeLeft.days}d</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-value">{timeLeft.hours}h</span>
              </div>
              <span className="timer-separator">:</span>
              <div className="timer-unit">
                <span className="timer-value">{timeLeft.minutes}m</span>
              </div>
            </div>
            <div className="timer-image">
              <img src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80" alt="Диван" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyOffer;
