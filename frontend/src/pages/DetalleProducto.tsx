import { useParams } from "react-router-dom";

export function DetalleProducto() {
  const { id } = useParams();

  // Aquí puedes hacer una solicitud para traer los datos del producto con ese ID
  // fetch(`/api/productos/${id}`) o buscar en tu estado global

  return (
    <div>
      <h1>Detalle del producto: {id}</h1>
      {/* Renderiza la especificación aquí */}
    </div>
  );
}
