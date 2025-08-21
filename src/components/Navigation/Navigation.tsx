import './Navigation.css';
const Navigation = () => {
  return (
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
  );
};

export default Navigation;
