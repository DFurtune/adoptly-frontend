import Button from '../../components/Button/Button';

const HomePage = () => {
  return (
    <div>
      <h1>Домашня сторінка</h1>
      <Button onClick={() => alert('Кнопка натиснута!')}>
        Натисни мене
      </Button>
    </div>
  );
};

export default HomePage;