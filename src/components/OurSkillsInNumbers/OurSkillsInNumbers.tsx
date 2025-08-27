import NumberCard from '../NumberCard/NumberCard';
import './OurSkillsInNumbers.css';
import { NUMBER_CARD_DATA } from '../../constants/NUMBER_CARD_DATA';

const OurSkillsInNumbers = () => {
  return (
    <section className="our-skills-in-numbers">
      <h2>Наш вплив у цифрах</h2>
      <div className="text-grid">
        <p>
          Назва - платформа, де кожна людина може знайти свого вірного друга.
        </p>
        <p>
          Тут ти можеш побачити фото, прочитати історії, відчути зв’язок і
          зробити важливий крок.
        </p>
        <p>
          Ми об’єднали любов до хвостатих та сучасні технології, щоб зробити
          усиновлення ближчим і простішим. Наша платформа створена, щоб
          знайомити серця - твоє і їхнє.
        </p>
        <p>
          Назва працює з притулками та волонтерами по всій країні, щоб допомогти
          тваринам знайти турботливих господарів. Кожне “метч” тут -це шанс на
          нове життя.
        </p>
      </div>
      <div className="cards">
        {NUMBER_CARD_DATA.map((card, index) => (
          <NumberCard
            key={index}
            cardNumber={card.cardNumber}
            cardText={card.cardText}
          />
        ))}
      </div>
    </section>
  );
};
export default OurSkillsInNumbers;
