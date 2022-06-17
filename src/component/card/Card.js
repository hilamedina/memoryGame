import React from 'react';
import './Card.css';

const Card = ({ name, handleClick }) => {
  return (
    <div className="card" onClick={handleClick}>
      <div className="flip-card-inner">
        <div class="flip-card-front"> {name}</div>
        <div className="flip-card-back">
          <h1>John Doe</h1>
          <p>Architect & Engineer</p>
          <p>We love that guy</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
