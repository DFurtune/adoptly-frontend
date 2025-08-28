import { Icon } from '../Icon/Icon';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="container footer">
        <div className="nav-footer">
          <Icon id="icon-Logo" className="footer-logo" />

          <div>
            <ul>
              <li className="item-nav">
                <a href="/find-pet">Знайти улюбленця</a>
              </li>
              <li className="item-nav">
                <a href="/join-shelter">Доєднатись як притулок</a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="footer-list">
              <li className="item-nav">
                <a href="/donate">Задонатити</a>
              </li>
              <li className="item-nav">
                <a href="/volunteer">Волонтерство</a>
              </li>
              <li className="item-nav">
                <a href="/help-medical-food">Допомогти ліками / кормом</a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button className="btn-footer" type="button" title="Instagram">
              <Icon id="icon-instagram" size={25} />
            </button>
            <button className="btn-footer" type="button" title="Facebook">
              <Icon id="icon-facebook" size={25} />
            </button>
            <button className="btn-footer" type="button" title="TikTok">
              <Icon id="icon-tiktok" size={25} />
            </button>
          </div>
        </div>
        <div className="containerBtn">
          <button className="btnUp" type="button" title="up">
            <Icon id="icon-up" className="icon-up" size={16} />
          </button>
        </div>
        <hr className="divider" />
        <ul className="police-list">
          <li>Privacy Policy |</li>
          <li>Terms & Condition |</li>
          <li>Sitemap</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
