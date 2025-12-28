import React from 'react';
import './WinterPromo.css';

const WinterPromo = () => {
  return (
    <section className="winter-promo">
      <div className="container">
        <div className="promo-wrapper">
          <div className="promo-image-section">
            <img 
              src="https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80" 
              alt="Зимняя коллекция"
            />
          </div>
          
          <div className="promo-content-section">
            <h2 className="promo-heading">Готовьтесь к зиме</h2>
            <p className="promo-text">
              Согрейтесь с близкими на наших плюшевых <strong>диванах</strong> и погрузитесь 
              в мягкие объятия тканей, <strong>готовых к зиме</strong>. <strong>Наслаждайтесь</strong> праздничными 
              мероприятиями сезона в окружении нашей <strong>стильной</strong> и уютной 
              <strong> мебели для гостиной</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WinterPromo;
