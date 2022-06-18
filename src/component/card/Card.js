import React from 'react';
// import App from '../../App';
import './Card.css';

const Card = ({ name, handleClick, flip }) => {
  // const [isFlipped, setIsFlipped] = useState(false);

  return (
    // <div className="card">
    <div className="card" onClick={handleClick}>
      <div className={flip ? 'flip-card-inner' : ''}>
        <div className="flip-card-front">
          <img
            src="https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/3:2/w_3329,h_2219,c_limit/1521-WIRED-Cat.jpeg"
            alt="Avatar"
            style={{ width: '140px', height: '140px' }}
          />
        </div>
        <div className="flip-card-back">
          hila
          {name}
        </div>
        {/* <App state={isFlipped} setState={setIsFlipped}></App> */}
      </div>
    </div>
  );
};

export default Card;
