import Button from '../../components/Button/Button';

const HomePage = () => {

  console.log('HomePage component rendered');

  console.log('This is a simple log message for debugging purposes.');
  
  
  return (
    <div>
      <h1>Домашня сторінка</h1>
      <Button onClick={() => alert('Кнопка натиснута!')}>Натисни мене</Button>
    </div>
  );
};

export default HomePage;
