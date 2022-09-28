import React from 'react';
import './Card.css';
import productDesktop from '../../images/image-product-desktop.jpg';

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <img src={productDesktop} alt="Product" />
      </div>
      <div className="card__description">
        <span>PERFUME</span>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div>
          <strong>$149.99</strong>
          <span>$169.99</span>
        </div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
};

export default Card;
