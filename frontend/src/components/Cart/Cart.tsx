import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice: number;
  quantity: number;
  image: string;
};

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "producto xxx",
      brand: "Sloan",
      description: "Fluxometro de 6mm - Green",
      price: 84.32,
      originalPrice: 93.94,
      quantity: 6,
      image: "/assets/fluxometro1.webp",
    },
    {
      id: 2,
      name: "producto xxx",
      brand: "Trebol",
      description: "Fluxometro de 6mm - BlueCyan",
      price: 70.30,
      originalPrice: 93.94,
      quantity: 3,
      image: "/assets/fluxometro2.webp",
    },
  ]);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-1 bg-white">
      <h2 className="text-2xl font-bold mb-6">Carro de compras</h2>
      <div className="flex flex-col md:flex-row gap-6">
        {/* Lista de productos */}
        <div className="flex-1 bg-white border rounded-x1 p-10 space-y-6">
          {cartItems.map(item => (
            <div key={item.id} className="flex items-center gap-10 border-b pb-">
              {/* Imagen del producto */}
              <img src={item.image} alt={item.name} className="w-24 h-24 bg-gray-200 rounded-md" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
                <div className="mt-2 flex items-center gap-2 text-sm">
                  <span className="font-semibold text-gray-800">US ${item.price.toFixed(2)}</span>
                  <span className="line-through text-gray-400 text-xs">US ${item.originalPrice.toFixed(2)}</span>
                </div>
                <label className="text-sm mt-2 block">Cant</label>
                <select
                  className="border rounded px-2 py-1 mt-1"
                  value={item.quantity}
                  onChange={e =>
                    handleQuantityChange(item.id, Number(e.target.value))
                  }
                >
                  {[...Array(10).keys()].map(n => (
                    <option key={n + 1} value={n + 1}>
                      {n + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen del pedido */}
        <div className="w-full md:w-80 bg-gray-100 rounded-xl p-4">
          <div className="mb-2 flex justify-between">
            <span>Artículos ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})</span>
            <span className="font-semibold">US ${total.toFixed(2)}</span>
          </div>
          <div className="mb-2 flex justify-between">
            <span>Envío a 15000</span>
            <span className="text-green-600 font-semibold">Gratis</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between font-semibold text-lg">
            <span>Subtotal</span>
            <span>US ${total.toFixed(2)}</span>
          </div>
          <button className="mt-6 w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full">
            Completar la transacción
          </button>
          <div className="flex justify-center items-center gap-2 mt-4">
            <img src="./assets/visa.png" alt="Visa" className="h-6" />
            <img src="./assets/yape.png" alt="Yape" className="h-6" />
            <img src="./assets/efectivo.png" alt="Efectivo" className="h-6" />
          </div>
        </div>
      </div>
    </div>
  );
}
