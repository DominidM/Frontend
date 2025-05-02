import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../ui/CartContext'; // Asumiendo que tienes un contexto para el carrito

interface CartIconProps {
  onOpenCart: () => void; // Función para abrir el modal/sidebar del carrito
}

export const CartIcon: React.FC<CartIconProps> = ({ onOpenCart }) => {
  const { items } = useCart();

  return (
    <div onClick={onOpenCart} className="relative cursor-pointer">
      <ShoppingCart className="h-6 w-6" />
      {items.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">
          {items.length}
        </span>
      )}
    </div>
  );
};