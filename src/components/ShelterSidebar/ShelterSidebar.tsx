import { NavLink } from 'react-router-dom';
import './ShelterSidebar.css';

const ShelterSidebar = () => {
  return (
    <nav className="shelter-sidebar">
      <h2>Shelter Name</h2>
      <ul>
        <li>
          <NavLink to="profile">Профіль притулку</NavLink>
        </li>
        <li>
          <NavLink to="pets">Картки тварин</NavLink>
        </li>
        <li>
          <NavLink to="applications">Заявки на адопцію</NavLink>
        </li>
        <li>
          <NavLink to="analytics">Аналітика</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ShelterSidebar;
