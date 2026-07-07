import { useTranslation } from 'react-i18next';

const ShelterAnalyticsPage = () => {
  const { t } = useTranslation();
  return <h1>{t('shelter.pages.analytics.title')}</h1>;
};

export default ShelterAnalyticsPage;
