import React from 'react';
import './Card.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Card = () => {
  return (
    <div className="card">
      <div className="card__image"></div>
      <div className="card__description">
        <span>PERFUME</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="card__prices">
          <strong>$149.99</strong>
          <span>$169.99</span>
        </div>
        <button>
          <AiOutlineShoppingCart className="card__cart-icon" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
