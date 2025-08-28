import React from 'react';
import './NumberCard.css';

interface NumberCardProps {
  cardNumber: string;
  cardText: string;
}

const NumberCard: React.FC<NumberCardProps> = ({ cardNumber, cardText }) => {
  const words = cardText.split(' ');
  const firstWord = words[0];
  const textRest = words.slice(1).join(' ');

  return (
    <div className="number-card">
      <div className="number">{cardNumber}</div>
      <div className="text">
        <div>{firstWord}</div>
        <div>{textRest}</div>
      </div>
    </div>
  );
};

export default NumberCard;
