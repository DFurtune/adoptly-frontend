import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router basename="/adoptly-frontend">
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
