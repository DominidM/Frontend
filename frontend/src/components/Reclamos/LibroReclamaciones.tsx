import { useState } from "react";

export function LibroReclamacionesForm() {
    const [formData, setFormData] = useState({
    nombre: "",
    dni: "",
    email: "",
    telefono: "",
    producto: "",
    detalle: "",
    acepta: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target;
    const { name, value, type } = target;
  
    const newValue =
      type === "checkbox" && target instanceof HTMLInputElement
        ? target.checked
        : value;
  
    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.acepta) {
      alert("Debe aceptar los términos para continuar.");
      return;
    }

    console.log("Formulario enviado:", formData);
    // Aquí podrías enviar los datos con fetch/axios
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 bg-white shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
        Libro de Reclamaciones
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Datos personales */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">
              Nombre completo
            </label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">DNI</label>
            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Teléfono</label>
            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Reclamo */}
        <div>
          <label className="block font-medium text-gray-700">
            Producto o servicio
          </label>
          <input
            type="text"
            name="producto"
            value={formData.producto}
            onChange={handleChange}
            required
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Detalle del reclamo
          </label>
          <textarea
            name="detalle"
            value={formData.detalle}
            onChange={handleChange}
            rows={5}
            required
            className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Aceptación */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="acepta"
            checked={formData.acepta}
            onChange={handleChange}
            className="mt-1"
          />
          <label className="text-sm text-gray-600">
            Acepto que esta información será tratada según la política de
            protección de datos.
          </label>
        </div>

        {/* Botón */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-lg shadow"
          >
            Enviar reclamo
          </button>
        </div>
      </form>
    </div>
  );
}
