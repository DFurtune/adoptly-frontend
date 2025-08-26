import './HomePage.css';
import Header from '../../components/Header/Header';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import HeroSection from '../../components/HeroSection/HeroSection';

const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <HeroSection />
        <HowItWorks />
      </div>
    </main>
  );
};

export default HomePage;
