import { useTranslation } from 'react-i18next';

const ShelterPetsPage = () => {
  const { t } = useTranslation();
  return <h1>{t('shelter.pages.pets.title')}</h1>;
};

export default ShelterPetsPage;
