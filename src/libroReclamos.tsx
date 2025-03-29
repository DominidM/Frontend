import { FaSearch, FaBars } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NavbarCarrusel() {
    const [menuOpen, setMenuOpen] = useState(false);

        {/* Navbar */}
    <nav className="bg-white shadow-md">
    <div className="container mx-auto flex justify-between items-center p-4">
    {/* Logo y búsqueda */}
    <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Logo WHC" className="h-10" />
        <FaSearch className="text-gray-600 cursor-pointer text-xl" />
    </div>

    {/* Menú desktop */}
    <ul className="hidden md:flex gap-6 text-gray-800 text-lg font-medium">
        <li className="hover:text-blue-600 cursor-pointer">¿Qué somos?</li>
        <li className="hover:text-blue-600 cursor-pointer">Ofertas</li>
        <li className="hover:text-blue-600 cursor-pointer">Productos</li>
        <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
    </ul>

    {/* Botón carrito y menú hamburguesa */}
    <div className="flex items-center gap-4">
        <Button variant="outline" className="border border-blue-600 text-blue-600 hover:bg-blue-800 hover:text-white px-4 py-2 rounded-lg">
        Carrito
        </Button>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        <FaBars className="text-2xl text-gray-700" />
        </button>
    </div>
    </div>

    {/* Menú móvil */}
    {menuOpen && (
    <div className="md:hidden bg-white shadow-lg p-4 absolute top-16 left-0 w-full">
        <ul className="flex flex-col gap-4 text-gray-800 text-lg font-medium">
        <li className="hover:text-blue-600 cursor-pointer">¿Qué somos?</li>
        <li className="hover:text-blue-600 cursor-pointer">Ofertas</li>
        <li className="hover:text-blue-600 cursor-pointer">Productos</li>
        <li className="hover:text-blue-600 cursor-pointer">Contacto</li>
        </ul>
        
    </div>

    )}
    </nav>
}
