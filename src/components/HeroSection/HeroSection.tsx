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
          <Button onClick={() => alert('Кнопка натиснута!')}>
            Знайти улюбленця
          </Button>
          <Button onClick={() => alert('Кнопка натиснута!')}>Задонатити</Button>
        </div>
      </div>
      <div>
        <img src="images/pets.svg" />
      </div>
    </div>
  );
};
export default HeroSection;
