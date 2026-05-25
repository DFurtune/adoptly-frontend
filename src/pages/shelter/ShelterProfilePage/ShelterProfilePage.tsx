import { useTranslation } from 'react-i18next';

const ShelterProfilePage = () => {
  const { t } = useTranslation();
  return <h1>{t('shelter.pages.profile.title')}</h1>;
};

export default ShelterProfilePage;
