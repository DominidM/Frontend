import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Llave de paso metálica",
      price: 18.5,
      quantity: 2,
      image: "/assets/llave.webp",
    },
    {
      id: 2,
      name: "Fluxómetro industrial",
      price: 42.99,
      quantity: 1,
      image: "/assets/fluxometro.webp",
    },
  ]);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Tu carrito está vacío.</p>
      ) : (
        <>
          <ul className="divide-y">
            {cartItems.map(item => (
              <li key={item.id} className="flex items-center py-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">
                    Cantidad: {item.quantity}
                  </p>
                  <p className="text-sm text-gray-800">
                    Precio: S/. {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 font-bold px-3"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right mt-6">
            <p className="text-xl font-semibold">
              Total: S/. {total.toFixed(2)}
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Confirmar compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
