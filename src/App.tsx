import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Carousel } from "@/components/Carousel";
import { WhatsAppButton } from './components/WhatsAppButton'; // Importa el botón de WhatsApp
import { Footer } from './components/Footer'; // Importa el botón de WhatsApp


export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
    <Navbar />
     <Carousel /> 
     <main className="p-4">
        <Outlet />
      </main>
      <WhatsAppButton /> {/* Renderiza el botón de WhatsApp fuera del main */}
      <Footer /> 
    </div>
  );
}
