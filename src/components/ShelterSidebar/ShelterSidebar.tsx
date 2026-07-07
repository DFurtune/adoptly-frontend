import { NavLink } from 'react-router-dom';
import './ShelterSidebar.css';
import { useTranslation } from 'react-i18next';

const ShelterSidebar = () => {
  const { t } = useTranslation();
  return (
    <nav className="shelter-sidebar" aria-label={t('shelter.menu.ariaLabel')}>
      {/* TODO: replace with real shelter name from backend */}
      <h2>Назва притулку</h2>
      <ul>
        <li>
          <NavLink to="profile">{t('shelter.menu.profile')}</NavLink>
        </li>
        <li>
          <NavLink to="pets">{t('shelter.menu.pets')}</NavLink>
        </li>
        <li>
          <NavLink to="applications">{t('shelter.menu.applications')}</NavLink>
        </li>
        <li>
          <NavLink to="analytics">{t('shelter.menu.analytics')}</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ShelterSidebar;
