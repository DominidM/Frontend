import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaChevronLeft, FaChevronRight, FaHeart, FaShoppingCart } from "react-icons/fa";

type Product = {
  id: number;
  name: string;
  price: number;
  pk_categoria: number;
  pk_estado: number;
  imageUrl: string; // puedes ajustar esto según cómo llegue la imagen desde tu backend
  marca: string; // para mostrar la marca (categoria)
  medida: string; // puedes agregar más campos según necesites
};

interface Props {
  apiEndpoint: string;
  titulo: string;
  subtitulo?: string;
}

const ProductCarouselContainer: React.FC<Props> = ({ apiEndpoint, titulo, subtitulo }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    axios.get(apiEndpoint)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, [apiEndpoint]);

  const scroll = (offset: number) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += offset;
    }
  };

  return (
    <div className="w-full px-4 py-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">{titulo}</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mt-2 mb-4" />
        {subtitulo && <p className="text-sm text-gray-600">{subtitulo}</p>}
      </div>

      <div className="relative">
        <button onClick={() => scroll(-300)} className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100">
          <FaChevronLeft />
        </button>
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden space-x-4 scroll-smooth"
        >
          {products.map((product) => (
            <div key={product.id} className="min-w-[250px] bg-white rounded-lg shadow-md flex-shrink-0">
              <img src={product.imageUrl} alt={product.name} className="h-48 w-full object-cover rounded-t-lg" />
              <div className="p-4">
                <h4 className="text-xs text-gray-500 uppercase">{product.marca}</h4>
                <p className="text-sm font-medium text-gray-800">{product.name}</p>
                <p className="text-blue-600 font-semibold mt-2">S/ {product.price}</p>
                <div className="flex justify-between mt-4 text-blue-700">
                  <FaHeart className="cursor-pointer" />
                  <FaShoppingCart className="cursor-pointer" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll(300)} className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow hover:bg-gray-100">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default ProductCarouselContainer;
