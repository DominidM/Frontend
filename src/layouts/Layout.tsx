import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import {Footer} from '../components/Footer';
import ScrollToTopButton  from '../components/ScrollToTopButton'; // Importa el nuevo componente
import { WhatsAppButton } from '../components/WhatsAppButton';

const Layout: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen px-4 py-6">
        <Outlet />
      </main>
      <WhatsAppButton />
      <ScrollToTopButton/>
      <Footer />
    </>
  );
};

export default Layout;
