import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div>
          <Navigation />
        </div>
        <div className="actions">
          <button
            type="button"
            className="btn"
            aria-label="Switch language to Ukrainian"
            title="Ukrainian"
            aria-pressed="true"
          >
            UA
          </button>
          <button type="button" className="btn"></button>
          <button type="button" className="btn"></button>
        </div>
      </div>
    </header>
  );
};

export default Header;
