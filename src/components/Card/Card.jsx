import React from 'react';
import style from './Card.module.css';

const Card = () => {
  return (
    <div className={style.card}>
      <div>
        <img src="" alt="" />
      </div>
      <div>
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
