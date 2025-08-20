import { useEffect } from 'react';
import Button from '../../components/Button/Button';

const HomePage = () => {
  useEffect(() => {
    if (import.meta.env.DEV) {
      /* eslint-disable no-console */
      console.debug('[HomePage] component mounted');
      console.debug(
        '[HomePage] This is a simple log message for debugging purposes.'
      );
      /* eslint-enable no-console */
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
