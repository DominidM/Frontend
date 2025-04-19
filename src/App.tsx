import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/Products';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFound';
import CartPage from './pages/CartPage';


import Layout from './layouts/Layout';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/contacto" element={<ContactPage />} />  
        <Route path="/cart" element={<CartPage />} />
        <Route path="/productos/1" element={<ProductsPage />} />
        <Route path="/libro" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
