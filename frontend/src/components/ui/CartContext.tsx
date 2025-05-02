import React, { createContext, useState, useContext } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  // Puedes añadir más propiedades según tus necesidades
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  addTestProduct: () => void; // Nueva función para agregar un producto de prueba
}

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  addTestProduct: () => {}, // Valor por defecto para la nueva función
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (newItem: CartItem) => {
    console.log('CartContext - addItem llamado con:', newItem);
    const existingItemIndex = items.findIndex(item => item.id === newItem.id);
    let updatedItems = [...items];
    if (existingItemIndex > -1) {
      updatedItems[existingItemIndex].quantity += newItem.quantity;
    } else {
      updatedItems = [...items, newItem];
    }
    setItems(updatedItems);
    console.log('CartContext - Items después de addItem:', updatedItems);
  };

  const removeItem = (itemId: string) => {
    console.log('CartContext - removeItem llamado con ID:', itemId);
    const filteredItems = items.filter(item => item.id !== itemId);
    setItems(filteredItems);
    console.log('CartContext - Items después de removeItem:', filteredItems);
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    console.log('CartContext - updateQuantity llamado con ID:', itemId, 'y cantidad:', quantity);
    const updatedItems = items.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setItems(updatedItems);
    console.log('CartContext - Items después de updateQuantity:', updatedItems);
  };

  const addTestProduct = () => {
    const testProduct: CartItem = {
      id: 'test-product-1',
      name: 'Producto de Prueba',
      price: 0.1,
      quantity: 1,
    };
    addItem(testProduct);
  };

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, addTestProduct }}>
      {children}
    </CartContext.Provider>
  );
};