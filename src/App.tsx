import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

const ErrorFallback = () => (
  <div className="route-error">
    <p>Щось пішло не так</p>
    <button type="button" onClick={() => window.location.reload()}>
      Оновити
    </button>
  </div>
);

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
