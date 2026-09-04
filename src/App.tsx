import { BrowserRouter as Router } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const ErrorFallback = () => {
  const { t } = useTranslation();
  return (
    <div className="route-error">
      <p>{t('errors.somethingWentWrong')}</p>
      <button type="button" onClick={() => window.location.reload()}>
        {t('errors.reload')}
      </button>
    </div>
  );
};

function App() {
  return (
    <Router basename="/adoptly-frontend">
      <Header />
      <main>
        <ErrorBoundary fallback={<ErrorFallback />}>
          <AppRoutes />
        </ErrorBoundary>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
