import { useTranslation } from 'react-i18next';
import './ShelterProfilePage.css';

const ShelterProfilePage = () => {
  const { t } = useTranslation();
  return (
    <div className="shelter-profile-page">
      <h1>{t('shelter.pages.profile.title')}</h1>
    </div>
  );
};

export default ShelterProfilePage;
