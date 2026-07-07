import { useTranslation } from 'react-i18next';

const ShelterApplicationsPage = () => {
  const { t } = useTranslation();
  return <h1>{t('shelter.pages.applications.title')}</h1>;
};

export default ShelterApplicationsPage;
