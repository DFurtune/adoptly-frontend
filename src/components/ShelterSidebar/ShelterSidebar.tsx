import { Link } from 'react-router-dom';
import './ShelterSidebar.css';

const ShelterSidebar = () => {
  return (
    <nav className="shelter-sidebar">
      <h2>Shelter Name</h2>
      <ul>
        <li>
          <Link to="profile">Профіль притулку</Link>
        </li>
        <li>
          <Link to="pets">Картки тварин</Link>
        </li>
        <li>
          <Link to="applications">Заявки на адопцію</Link>
        </li>
        <li>
          <Link to="analytics">Аналітика</Link>
        </li>
      </ul>
    </nav>
  );
};

export default ShelterSidebar;
