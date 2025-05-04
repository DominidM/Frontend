import { useRef } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

interface Props {
  products: Product[];
  title?: string;
}

export function SimilarProductsCarousel({ products, title = "Productos relacionados" }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (offset: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="relative">
        {/* Botones para deslizar */}
        <button
          onClick={() => scroll(-300)}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        >
          ◀
        </button>
        <button
          onClick={() => scroll(300)}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full shadow p-2"
        >
          ▶
        </button>

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="flex space-x-4 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="min-w-[200px] bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex-shrink-0"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-blue-600 font-bold">S/. {product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
