import { Outlet } from 'react-router-dom';
import ShelterSidebar from '../ShelterSidebar/ShelterSidebar';
import './ShelterLayout.css';

const ShelterLayout = () => {
  return (
    <div className="container shelter-layout">
      <ShelterSidebar />
      <section className="shelter-content">
        <div className="shelter-page">
          <Outlet />
        </div>
      </section>
    </div>
  );
};
export default ShelterLayout;
