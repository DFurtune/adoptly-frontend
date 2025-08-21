import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container header__inner">
        <div>
          <nav>
            <ul className="list">
              <li className="item">
                <a href="#home">Головна</a>
              </li>
              <li className="item">
                <a href="#about">Про нас</a>
              </li>
              <li className="item">
                <a href="#help">Як допомогти</a>
              </li>
              <li className="item">
                <a href="#shelters">Притулкам</a>
              </li>
              <li className="item">
                <a href="#contacts">Контакти</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="actions">
          <button className="btn">UA</button>
          <button className="btn">F</button>
          <button className="btn">P</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
