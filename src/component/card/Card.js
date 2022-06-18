import React from 'react';
import './Card.css';

const Card = ({ name, handleClick }) => {
  return (
    <div className="card">
      {/* <div className="card" onClick={handleClick}> */}

      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
            alt="Avatar"
            style={{ width: '140px', height: '140px' }}
          />
          {/* {name} */}
        </div>
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
