import Button from '../Button/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="textAndButtons">
        <h1>
          Знайди друга <br /> Врятуй життя
        </h1>
        <p>
          Свайпай, знайомся, допомагай: <br />
          твій свайп може змінити життя
        </p>
        <div className="buttons">
          <Button
            variant="primary"
            onClick={() => alert('Кнопка "Знайти улюбленця" натиснута!')}
          >
            Знайти улюбленця
          </Button>
          <Button
            variant="secondary"
            onClick={() => alert('Кнопка "Задонатити" натиснута!')}
          >
            Задонатити
          </Button>
        </div>
      </div>
      <div>
        <img src="images/pets.svg" />
      </div>
    </div>
  );
};
export default HeroSection;
