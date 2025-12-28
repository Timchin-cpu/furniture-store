import React from "react";
import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              <span className="logo-text">SoFi</span>
            </div>
            <p className="footer-description">
              Баннер SoFi
              <br />
              Москва, Россия
              <br />
              ZIP 101000 (RU)
            </p>
            <div className="social-links">
              <a href="#" className="social-btn">
                <Facebook size={18} />
              </a>
              <a href="#" className="social-btn">
                <Instagram size={18} />
              </a>
              <a href="#" className="social-btn">
                <Twitter size={18} />
              </a>
              <a href="#" className="social-btn">
                <MapPin size={18} />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Полезные ссылки</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Магазин</a>
              </li>
              <li>
                <a href="#">О нас</a>
              </li>
              <li>
                <a href="#">Новости</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Свяжитесь с нами</h3>
            <ul className="footer-links">
              <li>+8 123 456 8364</li>
              <li>+8 3 8370 9362</li>
              <li className="schedule">
                Понедельник-Пятница
                <br />
                9:00 - 5:00
                <br />
                Суббота-Воскресенье
                <br />
                10:00 - 5:00
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Обслуживание клиентов</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Оплата</a>
              </li>
              <li>
                <a href="#">Корзина</a>
              </li>
              <li>
                <a href="#">Возвраты</a>
              </li>
              <li>
                <a href="#">История заказов</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Доставка</h3>
            <ul className="footer-links">
              <li>
                <a href="#">Отправка</a>
              </li>
              <li>
                <a href="#">Бесплатная доставка</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright © 2024. Все права защищены</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
