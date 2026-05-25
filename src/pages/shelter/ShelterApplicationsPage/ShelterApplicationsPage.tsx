import { useTranslation } from 'react-i18next';
import './ShelterApplicationsPage.css';

const ShelterApplicationsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="shelter-applications-page">
      <h1>{t('shelter.pages.applications.title')}</h1>
    </div>
  );
};

export default ShelterApplicationsPage;
