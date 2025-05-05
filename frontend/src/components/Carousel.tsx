import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "/assets/Ruleta1.webp", text: "elegante y moderno" },
  { src: "/assets/Ruleta2.webp", text: "calidad garantizada" },
  { src: "/assets/Ruleta3.webp", text: "lo mejor para ti" },
  { src: "/assets/Ruleta4.webp", text: "comunidad y elegancia" },
];

export function Carousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-1 rounded-lg overflow-hidden shadow-lg">
      {/* Imagen con altura fija */}
      <img
        src={images[current].src}
        alt={`Slide ${current}`}
        className="w-full h-[400px] object-cover transition duration-500"
      />
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/100 to-transparent"></div>
      {/* Difuminado superior */}  
      {/* Difuminado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>

      {/* Cuadro de texto decorativo superpuesto - Ajustado a la izquierda */}
      <div className="absolute bottom-6 left-0 bg-[#0d3c6b] text-white px-8 py-3 rounded-md shadow-lg text-lg font-semibold">
        {images[current].text}
      </div>
    
      {/* Flechas */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
      >
        <ChevronLeft className="w-6 h-10" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 rounded-full p-2 shadow"
      >
        <ChevronRight className="w-6 h-10" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2.5 h-2.5 rounded-full ${
              index === current ? "bg-blue-600" : "bg-gray-400"

            }`}
          />
        ))}
      </div>
        {/* Línea azul decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-[#0d3c6b]" />
    
    </div>
  );
}