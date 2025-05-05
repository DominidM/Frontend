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
    // Enviar datos a backend con fetch o axios
  };

  return (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6 py-16">
    <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-10 border border-blue-100">
        <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-8 tracking-tight">
          Libro de Reclamaciones
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Datos personales */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Nombre completo
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">DNI</label>
              <input
                type="text"
                name="dni"
                value={formData.dni}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700">Teléfono</label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Reclamo */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Producto o servicio
            </label>
            <input
              type="text"
              name="producto"
              value={formData.producto}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Detalle del reclamo
            </label>
            <textarea
              name="detalle"
              value={formData.detalle}
              onChange={handleChange}
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            />
          </div>

          {/* Aceptación */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="acepta"
              checked={formData.acepta}
              onChange={handleChange}
              className="mt-1 accent-blue-700 w-5 h-5"
            />
            <label className="text-sm text-gray-600 leading-snug">
              Acepto que esta información será tratada según la política de
              protección de datos personales.
            </label>
          </div>

          {/* Botón */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition duration-300 ease-in-out"
            >
              Enviar reclamo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
