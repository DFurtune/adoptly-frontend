import React from 'react';
import { GUIDE_CARD_DATA } from '../../constants/GUIDE_CARD_DATA';
import GuideCard from '../GuideCard/GuideCard';
import animalTracksSrc from '../../assets/images/animal_tracks.png';

import './HowItWorks.css';

interface GuideCardData {
  cardImgSrc: string;
  cardImgAlt: string;
  cardNumber: string;
  cardStep: string;
  cardDescription: { text: string; bold: boolean }[];
}

const HowItWorks: React.FC = React.memo(() => {
  if (!GUIDE_CARD_DATA.length) {
    return (
      <section className="how-it-works">Немає даних для відображення</section>
    );
  }

  return (
    <section className="how-it-works">
      <div className="how-it-works-header">
        <h2>Як це працює</h2>
        <p>Покрокова інструкція</p>
        <img
          src={animalTracksSrc}
          alt="Animal tracks illustration for step-by-step guide"
          loading="lazy"
        />
      </div>
      <div className="steps">
        {GUIDE_CARD_DATA.map((item: GuideCardData, index: number) => (
          <GuideCard
            key={index}
            cardImgSrc={item.cardImgSrc}
            cardImgAlt={item.cardImgAlt}
            cardNumber={item.cardNumber}
            cardStep={item.cardStep}
            cardDescription={item.cardDescription}
          />
        ))}
      </div>
    </section>
  );
});

export default HowItWorks;
