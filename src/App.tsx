import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
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
import ShelterLayout from './components/ShelterLayout/ShelterLayout';


import PasswordResetForm from './components/PasswordResetForm/PasswordResetForm';

const ShelterProfilePage = lazy(
  () => import('./pages/shelter/ShelterProfilePage/ShelterProfilePage')
);
const ShelterPetsPage = lazy(
  () => import('./pages/shelter/ShelterPetsPage/ShelterPetsPage')
);
const ShelterApplicationsPage = lazy(
  () => import('./pages/shelter/ShelterApplicationsPage/ShelterApplicationsPage')
);
const ShelterAnalyticsPage = lazy(
  () => import('./pages/shelter/ShelterAnalyticsPage/ShelterAnalyticsPage')
);

function App() {
  
  const handleResetSubmit = async (email: string) => {
    console.log('Запит на відновлення паролю для:', email);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
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
            <Route path="privacy-policy" element={<PolicyPage />} />
            
          
            <Route 
              path="reset-password" 
              element={
                <PasswordResetForm 
                  onBackToLogin={() => window.history.back()} 
                  onSubmitEmail={handleResetSubmit} 
                />
              } 
            />

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
  );
}

export default App;