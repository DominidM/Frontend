import React from 'react';
import { ContactHero } from '../components/Contact/ContactHero';
import { ContactAlbum } from '../components/Contact/ContactAlbum';
import { ContactSection } from '../components/Contact/ContactSection';

const ContactPage = () => {
    return (
        <div className="min-h-screen bg-gray-100">
        <ContactHero />
        <ContactSection />
        <ContactAlbum />
        <div>
            <video controls width="640" height="360" className="mx-auto rounded-lg shadow-md">
                <source src="../assets/Sloan TruFlush Instalación  Español.mp4" type="video/mp4" />
                Tu navegador no soporta el tag de video.
            </video>
        </div>
      </div>
    );
};

export default ContactPage;
