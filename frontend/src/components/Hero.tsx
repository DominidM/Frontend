import { useState, useEffect } from "react";

const images = [
  { src: "/assets/Ruleta4.webp", alt: "comunidad y elegancia" },
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const randomImage = Math.floor(Math.random() * images.length);
    setCurrentImage(randomImage);
  }, []);

  return (
    <div className="relative w-full max-w-7xl mx-auto rounded-xl overflow-hidden shadow-xl">
      <img
        src={images[currentImage].src}
        alt={images[currentImage].alt}
        className="w-full h-[320px] md:h-[250px] object-cover transition-all duration-500"
      />

      {/* Difuminado inferior para el efecto visual */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent" />
      {/* Difuminado inferior para el efecto visual */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Línea azul decorativa */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-[#0d3c6b]" />
    </div>
  );
}
