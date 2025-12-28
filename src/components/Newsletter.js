import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Спасибо за подписку! Email: ${email}`);
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-card">
          <div className="newsletter-icon">
            <Mail size={64} strokeWidth={1.5} />
          </div>
          <h2 className="newsletter-title">Подпишитесь на нашу рассылку и получите скидку 30%!</h2>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Ваш email"
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="newsletter-btn">
              Подписаться
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
