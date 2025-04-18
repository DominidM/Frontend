import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import {Footer} from '../components/Footer';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
