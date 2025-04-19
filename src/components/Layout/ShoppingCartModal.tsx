import React from 'react';
import { useCart } from '../ui/CartContext';
import { Link } from 'react-router-dom';
import { XCircle, Trash2, PlusCircle, MinusCircle } from 'lucide-react';

interface ShoppingCartModalProps {
    onClose: () => void;
}

export const ShoppingCartModal: React.FC<ShoppingCartModalProps> = ({ onClose }) => {
    const { items, removeItem, updateQuantity } = useCart();

    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    if (items.length === 0) {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end">
                <div className="bg-white w-80 p-4 rounded-md shadow-lg relative">
                    <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                        <XCircle className="h-6 w-6" />
                    </button>
                    <h2 className="text-lg font-semibold mb-3">Carrito de compras</h2>
                    <p className="text-sm text-gray-600">Tu carrito está vacío.</p>
                    <Link to="/cart" onClick={onClose} className="inline-block mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm">
                        Ver carrito
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-end">
            <div className="bg-white w-80 p-4 rounded-md shadow-lg relative">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
                    <XCircle className="h-6 w-6" />
                </button>
                <h2 className="text-lg font-semibold mb-3">Carrito de compras</h2>
                <ul className="space-y-3">
                    {items.map(item => (
                        <li key={item.id} className="flex items-center border-b pb-2">
                            <div className="w-16 h-16 bg-gray-200 rounded mr-2" /> {/* Espacio para la imagen */}
                            <div className="flex-grow">
                                <h6 className="text-sm font-semibold">{item.name}</h6>
                                <p className="text-xs text-gray-600">S/ {item.price}</p>
                                <div className="flex items-center space-x-2 mt-1">
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        className="text-gray-500 hover:text-blue-500 focus:outline-none"
                                    >
                                        <MinusCircle className="h-4 w-4" />
                                    </button>
                                    <span className="text-sm">Cant: {item.quantity}</span>
                                    <button
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="text-gray-500 hover:text-blue-500 focus:outline-none"
                                    >
                                        <PlusCircle className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700 focus:outline-none ml-2"
                            >
                                <Trash2 className="h-5 w-5" />
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="mt-4 pt-2 border-t">
                    <p className="font-semibold text-sm">Subtotal: S/ {calculateTotal()}</p>
                    <Link to="/cart" onClick={onClose} className="inline-block mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm w-full text-center">
                        Ir a mi carrito
                    </Link>
                    {/* Espacio para un input (si es necesario) */}
                    {/* <input type="text" placeholder="Código de descuento" className="mt-3 w-full border rounded py-2 px-3 text-sm focus:outline-none focus:ring focus:ring-blue-300" /> */}
                </div>
            </div>
        </div>
    );
};