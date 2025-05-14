# Sloan_WebSystem – Plataforma e-commerce para productos de gasfitería

Sloan_WebSystem es un sistema web completo de tipo e-commerce, diseñado para la gestión, venta y administración de productos de gasfitería. El sistema integra tanto el frontend orientado al cliente final como el backend destinado a la administración del negocio, estructurado bajo una arquitectura moderna y escalable.
---

## 📁 Estructura del Proyecto

Sloan_WebSystem/
│
├── backend/ # Lógica del servidor (API REST)
├── frontend/ # Interfaz pública (React + Vite)
├── docs/ # Documentación técnica y modelo de base de datos
├── README.md # Este archivo
└── .env # Variables de entorno (no versionado)


---

## 🔧 Tecnologías utilizadas
Frontend: React + Vite + Tailwind CSS
Interfaz pública responsiva e intuitiva, diseñada según un layout profesional (Figma), donde los usuarios pueden explorar productos, registrarse, iniciar sesión y realizar compras.

Backend: Java Spring Boot (Maven)
API RESTful que gestiona productos, clientes, pedidos, ventas y reportes. Incluye un panel administrativo implementado con Spring MVC y Thymeleaf para el control interno del negocio.

Base de datos: PosgreSQL
Motor relacional utilizado para el almacenamiento persistente de la información del sistema (productos, usuarios, transacciones, etc.).
---

## ⚙️ Instalación del Proyecto

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/Sloan_WebSystem.git
cd Sloan_WebSystem
```

### 2. Instala las dependencias

🔹 Frontend
```bash Copiar Editar
cd ../frontend
bun install
```
---


### ▶️ Ejecución del Proyecto

1. Levanta la base de datos
Asegúrate de que tu base de datos MySQL esté corriendo y el esquema sloan_web esté creado.

2. Ejecuta el backend

3. Ejecuta el frontend
```bash Copiar Editar
cd ../frontend
bun run dev
```
Por defecto, el frontend estará disponible en http://localhost:5173 y el backend en http://localhost:3000.

---

### 📚 Documentación
La carpeta docs/ contiene:

Diagramas de entidad-relación

Instrucciones de despliegue

Manual de usuario y administrador

Carga inicial de la base de datos

---

### 🧪 Tests (opcional)
Si tienes pruebas implementadas:

```bash Copiar Editar
bun test
```

---

### 📦 Producción
Para producción, se recomienda compilar el frontend y servirlo desde el backend:

```bash Copiar Editar
cd frontend
bun run build
```
Luego configura el backend para servir frontend/dist como estático.

---

### 📌 Licencia
Este proyecto está licenciado bajo MIT License.

SolveGrades.com
---

¿Te gustaría que genere este `README.md` directamente para guardarlo en tu proyecto o deseas adaptarlo tú mismo?







