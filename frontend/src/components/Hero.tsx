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
    <div className="relative w-full max-w-7xl mx-auto mt-2 rounded-lg overflow-hidden shadow-lg">
        <img
            src={images[currentImage].src}
            alt={images[currentImage].alt}
            className="w-full h-[100px] object-cover"
        />
        {/* Difuminado inferior */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent"></div>

        {/* Línea azul debajo del difuminado */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-[#]"></div>
    </div>

    
  );
}
