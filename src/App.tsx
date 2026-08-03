import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import HowToHelpPage from './pages/HowToHelpPage/HowToHelpPage';
import SheltersPage from './pages/SheltersPage/SheltersPage';
import ContactPage from './pages/ContactPage/ContactPage';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PetsPage from './pages/PetsPage/PetsPage';
import PolicyPage from './pages/PolicyPage/PolicyPage';
import LanguageLayout from './components/LanguageLayout/LanguageLayout';
import PetDetailPage from './pages/PetDetailPage/PetDetailPage';
import ShelterLayout from './components/ShelterLayout/ShelterLayout';

const ShelterProfilePage = lazy(
  () => import('./pages/shelter/ShelterProfilePage/ShelterProfilePage')
);
const ShelterPetsPage = lazy(
  () => import('./pages/shelter/ShelterPetsPage/ShelterPetsPage')
);
const ShelterApplicationsPage = lazy(
  () =>
    import('./pages/shelter/ShelterApplicationsPage/ShelterApplicationsPage')
);
const ShelterAnalyticsPage = lazy(
  () => import('./pages/shelter/ShelterAnalyticsPage/ShelterAnalyticsPage')
);

function App() {
  const { i18n } = useTranslation();
  return (
    <GoogleOAuthProvider
      key={i18n.language}
      clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
      locale={i18n.language}
    >
      <Router basename="/adoptly-frontend">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/uk/" replace />} />
            <Route path="/:lng" element={<LanguageLayout />}>
              <Route index element={<HomePage />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="how-to-help" element={<HowToHelpPage />} />
              <Route path="shelters" element={<SheltersPage />} />
              <Route path="contacts" element={<ContactPage />} />
              <Route path="pets" element={<PetsPage />} />
              <Route path="pets/:id" element={<PetDetailPage />} />
              <Route path="privacy-policy" element={<PolicyPage />} />
              <Route path="shelter" element={<ShelterLayout />}>
                <Route index element={<Navigate to="profile" replace />} />
                <Route path="profile" element={<ShelterProfilePage />} />
                <Route path="pets" element={<ShelterPetsPage />} />
                <Route
                  path="applications"
                  element={<ShelterApplicationsPage />}
                />
                <Route path="analytics" element={<ShelterAnalyticsPage />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </Router>
    </GoogleOAuthProvider>
  );
}

export default App;
