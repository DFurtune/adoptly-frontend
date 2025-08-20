import { useEffect } from 'react';
import Button from '../../components/Button/Button';

const HomePage = () => {
  useEffect(() => {
    if (import.meta.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.debug('[HomePage] component mounted');
      // eslint-disable-next-line no-console
      console.debug(
        '[HomePage] This is a simple log message for debugging purposes.'
      );
    }
  }, []);

  return (
    <div>
      <h1>Домашня сторінка</h1>
      <Button onClick={() => alert('Кнопка натиснута!')}>Натисни мене</Button>
    </div>
  );
};

export default HomePage;
