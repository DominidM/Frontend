# Sloan_WebSystem

Sistema web completo para la gestión y venta de productos de gasfitería. Este repositorio integra tanto el frontend (React + Vite + Tailwind) como el backend (Node.js con Bun), utilizando **MySQL** como base de datos.

---

## 📁 Estructura del Proyecto

Sloan_WebSystem/
│
├── backend/ # Lógica del servidor (API REST)
├── frontend/ # Interfaz pública (React + Vite)
├── docs/ # Documentación técnica y modelo de base de datos
├── README.md # Este archivo
└── .env # Variables de entorno (no versionado)

yaml
Copiar
Editar

---

## 🚀 Requisitos Previos

- [Node.js](https://nodejs.org/) instalado
- [Bun](https://bun.sh/) instalado
- [MySQL](https://www.mysql.com/) en ejecución
- Un archivo `.env` configurado (ver más abajo)

---

## ⚙️ Instalación del Proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/Sloan_WebSystem.git
cd Sloan_WebSystem
2. Instala las dependencias
🔹 Backend
bash
Copiar
Editar
cd backend
bun install
🔹 Frontend
bash
Copiar
Editar
cd ../frontend
bun install
🔧 Configuración
Crea un archivo .env en la raíz con tus variables de entorno:

env
Copiar
Editar
# Variables comunes
PORT=3000

# Variables de base de datos
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=sloan_web
▶️ Ejecución del Proyecto
1. Levanta la base de datos
Asegúrate de que tu base de datos MySQL esté corriendo y el esquema sloan_web esté creado.

2. Ejecuta el backend
bash
Copiar
Editar
cd backend
bun run dev
3. Ejecuta el frontend
bash
Copiar
Editar
cd ../frontend
bun run dev
Por defecto, el frontend estará disponible en http://localhost:5173 y el backend en http://localhost:3000.

📚 Documentación
La carpeta docs/ contiene:

Diagramas de entidad-relación

Instrucciones de despliegue

Manual de usuario y administrador

Carga inicial de la base de datos

🧪 Tests (opcional)
Si tienes pruebas implementadas:

bash
Copiar
Editar
bun test
📦 Producción
Para producción, se recomienda compilar el frontend y servirlo desde el backend:

bash
Copiar
Editar
cd frontend
bun run build
Luego configura el backend para servir frontend/dist como estático.

📌 Licencia
Este proyecto está licenciado bajo MIT License.

yaml
Copiar
Editar

---

¿Te gustaría que genere este `README.md` directamente para guardarlo en tu proyecto o deseas adaptarlo tú mismo?







