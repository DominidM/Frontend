import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/assets/Ruleta1.webp",
  "/assets/Ruleta2.webp",
  "/assets/Ruleta3.webp",
  "/assets/Ruleta4.webp"
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
    <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
      {/* Imagen actual */}
      <img
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-auto object-cover transition duration-500 rounded-lg"
      />

      {/* Botón izquierdo */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Botón derecho */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
