export default function Navbar() {
    return (
      <nav className="bg-white shadow-md p-4 flex justify-between">
        <h1 className="text-xl font-bold text-gray-800">Sloan WebSystem</h1>
        <ul className="flex gap-4 text-gray-600">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
      </nav>
    );
  }
  