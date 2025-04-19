import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactHero } from "../components/ContactHero"; // Asegúrate de que la ruta sea correcta


const ContactPage = () => {
    const Input = ({ id, type, placeholder, className, ...props }: { id: string, type: string, placeholder: string, className?: string }) => (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
            {...props}
        />
    );
    const Textarea = ({ id, placeholder, rows, className, ...props }: { id: string, placeholder: string, rows: number, className?: string }) => (
        <textarea
            id={id}
            placeholder={placeholder}
            rows={rows}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${className}`}
            {...props}
        />
    );
    const Button = ({ type, className, children, ...props }: { type: 'button' | 'submit' | 'reset', className?: string, children: React.ReactNode }) => (
        <button
            type={type}
            className={`w-full px-6 py-2.5 text-white bg-blue-600 hover:bg-blue-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
            {...props}
        >
            {children}
        </button>
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <ContactHero 
            />
            <h1 className="text-4xl font-bold text-center mb-8 text-blue-700">Contáctanos</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Formulario de Contacto */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Envíanos un Mensaje</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                            <Input
                                id="nombre"
                                type="text"
                                placeholder="Tu nombre"

                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo Electrónico</label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Tu correo electrónico"

                            />
                        </div>
                        <div>
                            <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">Mensaje</label>
                            <Textarea
                                id="mensaje"
                                placeholder="Tu mensaje"
                                rows={4}

                            />
                        </div>
                        <Button type="submit" >
                            Enviar Mensaje
                        </Button>
                    </form>
                </div>

                {/* Información de Contacto */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Información de Contacto</h2>
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Phone className="h-5 w-5 text-gray-600" />
                            <p className="text-gray-700">Teléfono: +51 999 888 777</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="h-5 w-5 text-gray-600" />
                            <p className="text-gray-700">Email: info@whc.com.pe</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 mt-0.5 text-gray-600" />
                            <p className="text-gray-700">
                                Dirección: Av. Principal 1234,
                                <br />
                                Lima, Perú
                            </p>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-lg font-semibold mb-2 text-gray-800">Síguenos en Redes Sociales</h3>
                            <div className="flex space-x-4">
                                {/* Aquí puedes agregar enlaces a tus redes sociales */}
                                <a href="#" className="text-blue-500 hover:text-blue-700">Facebook</a>
                                <a href="#" className="text-blue-500 hover:text-blue-700">Instagram</a>
                                <a href="#" className="text-blue-500 hover:text-blue-700">Twitter</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
