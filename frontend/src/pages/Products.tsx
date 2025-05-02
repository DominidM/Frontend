import React from 'react';
import { Carousel } from "@/components/Carousel";
import { Publicidad } from '../components/Publicidad';
import  Marcas from '../components/Marcas'; // Importa el nuevo componente

const ProductsPage: React.FC = () => {
  return (
    <div>
      <Carousel />
      <div className="container mx-auto py-8 grid grid-cols-4 gap-8">
        {/* Barra lateral de filtros */}
        <aside className="col-span-1">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Marca</h3>
            {/* Checkboxes para las marcas */}
            <div>
              <input type="checkbox" id="trebol" name="marca" value="Trebol" />
              <label htmlFor="trebol" className="ml-2">Trebol</label>
            </div>
            <div>
              <input type="checkbox" id="sloan" name="marca" value="Sloan" />
              <label htmlFor="sloan" className="ml-2">Sloan</label>
            </div>
            <div>
              <input type="checkbox" id="genebre" name="marca" value="Genebre" />
              <label htmlFor="genebre" className="ml-2">Genebre</label>
            </div>
            <div>
              <input type="checkbox" id="vainsa" name="marca" value="Vainsa" />
              <label htmlFor="vainsa" className="ml-2">Vainsa</label>
            </div>
            <div>
              <input type="checkbox" id="helvex" name="marca" value="Helvex" />
              <label htmlFor="helvex" className="ml-2">Helvex</label>
            </div>
            <div>
              <input type="checkbox" id="leeyes" name="marca" value="Leeyes" />
              <label htmlFor="leeyes" className="ml-2">Leeyes</label>
            </div>
            <div>
              <input type="checkbox" id="sunmixer" name="marca" value="Sunmixer" />
              <label htmlFor="sunmixer" className="ml-2">Sunmixer</label>
            </div>
            <div>
              <input type="checkbox" id="otros" name="marca" value="Otros" />
              <label htmlFor="otros" className="ml-2">Otros</label>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Instalación</h3>
            {/* Checkboxes para la instalación */}
            {/* ... */}
          </div>
        </aside>

        {/* Grilla de productos */}
        <main className="col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Mapea tus productos aquí */}
          <div className="bg-white rounded-md shadow-md p-4">
            {/* Placeholder del producto */}
            <div className="bg-gray-200 h-32 w-full rounded-md mb-2"></div>
            <h4 className="text-sm font-semibold">Nombre del Producto</h4>
            <p className="text-xs text-gray-500">Descripción breve</p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded-md mt-2">Ver detalle</button>
          </div>
          {/* ... más productos ... */}
        </main>
      </div>
      <Publicidad textoPromocional="Delivery gratis a compras mayores a 200" />
      <Marcas/>
    </div>
  );
};

export default ProductsPage;