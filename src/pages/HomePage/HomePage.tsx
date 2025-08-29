import './HomePage.css';
import HowItWorks from '../../components/HowItWorks/HowItWorks';
import HeroSection from '../../components/HeroSection/HeroSection';
import OurSkillsInNumbers from '../../components/OurSkillsInNumbers/OurSkillsInNumbers';

const HomePage = () => {
  return (
    <div className="container">
      <HeroSection />
      <HowItWorks />
      <OurSkillsInNumbers />
    </div>

  );
};

export default HomePage;
