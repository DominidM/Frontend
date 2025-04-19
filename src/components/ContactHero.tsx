import { ArrowDown } from 'lucide-react'; // Importa el icono de flecha

// Define las URLs de las imágenes y los estilos directamente aquí
const imageUrl1 = "/assets/Ruleta1.webp";
const imageUrl2 = "/assets/contact2.png";

const boxStyles = {
    width: '204px',  // Equivalente a w-16 en tailwind
    height: '34px', // Equivalente a h-6 en tailwind
    backgroundColor: '#0d3c6b', // Equivalente a bg-blue-500
};

export const ContactHero = () => {
    return (
        <div className="w-full">
            {/* Contenedor principal para las dos imágenes */}
            <div className="flex flex-col gap-8">
                {/* Primera imagen */}
                <div className="relative w-full">
                    <img
                        src={imageUrl1}
                        alt="Imagen de Contacto 1"
                        className="w-full rounded-md object-cover max-h-96"
                    />
                    {/* Texto superpuesto y elementos decorativos */}
                    <div className="absolute inset-0 rounded-md flex flex-col items-center justify-center">
                        <div style={{...boxStyles, position: 'absolute',
                                bottom: '5%',    // Ajusta estos valores para mover el cuadro
                                right: '0%',}}></div>
                        <h2 className="text-5xl font-bold text-black z-10 text-center">¿Quiénes Somos?</h2>
                        <div style={{...boxStyles, position: 'absolute',
                                bottom: '80%',    // Ajusta estos valores para mover el cuadro
                                right: '66%',}}></div>
                    </div>
                </div>
                <ArrowDown
                    className="text-black text-4xl mt-10 z-20 mx-auto"
                />
                {/* Segunda imagen */}
                <div className="relative w-full">
                    <img
                        src={imageUrl2}
                        alt="Imagen de Contacto 2"
                        className="w-full rounded-md object-cover max-h-96"
                    />
                    {/* Texto superpuesto en la segunda imagen */}
                    <div className="absolute inset-0 bg-black bg-opacity-40 rounded-md flex items-center justify-center">
                        <h2 className="text-2xl font-bold text-white text-center">Somos una empresa especializada en la venta de productos de gasfitería, como fluxómetros, llaves, griferías y accesorios para instalaciones sanitarias. 

Ofrecemos alta calidad, asesoramiento técnico y un amplio stock para proyectos residenciales, comerciales e industriales.</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};
