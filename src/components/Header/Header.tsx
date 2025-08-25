import { Icon } from '../Icon/Icon';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header_inner">
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

          <button type="button" className="btn" title="Favourite">
            <Icon id="icon-heart" size={16} />
          </button>
          <button type="button" className="btn" title="Username">
            <Icon id="icon-user" size={16} />
          </button>

          <button type="button" className="btn" title="Favourite"></button>
          <button type="button" className="btn" title="Username"></button>

        </div>
      </div>
    </header>
  );
};

export default Header;
