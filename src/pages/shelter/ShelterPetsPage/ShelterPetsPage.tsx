import { useTranslation } from 'react-i18next';
import './ShelterPetsPage.css';

const ShelterPetsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="shelter-pets-page">
      <h1>{t('shelter.pages.pets.title')}</h1>
    </div>
  );
};

export default ShelterPetsPage;
