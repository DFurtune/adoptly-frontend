import './ShelterAnalyticsPage.css';
import { useTranslation } from 'react-i18next';

const ShelterAnalyticsPage = () => {
  const { t } = useTranslation();
  return (
    <div className="shelter-analytics-page">
      <h1>{t('shelter.pages.analytics.title')}</h1>
    </div>
  );
};

export default ShelterAnalyticsPage;
