import './HomePage.css';
import Header from '../../components/Header/Header';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurSkillsInNumbers from '../../components/OurSkillsInNumbers/OurSkillsInNumbers';

const HomePage = () => {
  return (
    <main>
      <Header />
      <div className="container">
        <HeroSection />
        <HowItWorks />
        <OurSkillsInNumbers />
      </div>
    </main>
  );
};

export default HomePage;
