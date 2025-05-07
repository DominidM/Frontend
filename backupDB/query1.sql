SELECT*FROM queja;
SELECT*FROM contacto;


create table contacto(
	idContacto SERIAL PRIMARY KEY,
    fechaContacto TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	nombreContacto VARCHAR(100) NOT NULL,
	correoContacto VARCHAR(100) NOT NULL,
	textoContacto TEXT NOT NULL
);


CREATE TABLE queja (
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    nombre_queja VARCHAR(100) NOT NULL,
    dni_queja VARCHAR(15) NOT NULL,
    correo_queja VARCHAR(100) NOT NULL,
    telefono_queja VARCHAR(20),
    producto_servicio VARCHAR(100) NOT NULL,
    texto TEXT NOT NULL
);


-- Tabla ESTADO: estados de producto (activo, inactivo, etc.)
CREATE TABLE estado (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla CATEGORIA: clasifica productos
CREATE TABLE categoria (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla PRODUCTO: catálogo de productos
CREATE TABLE producto (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    pk_categoria INTEGER NOT NULL,
    pk_estado INTEGER NOT NULL,
    FOREIGN KEY (pk_categoria) REFERENCES categoria(id),
    FOREIGN KEY (pk_estado) REFERENCES estado(id)
);

-- Tabla METODO_PAGO: formas de pago disponibles
CREATE TABLE metodo_pago (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

-- Tabla PEDIDO: representa una compra confirmada
CREATE TABLE pedido (
    id SERIAL PRIMARY KEY,
    fecha TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    pk_metodoDePago INTEGER NOT NULL,
    FOREIGN KEY (pk_metodoDePago) REFERENCES metodo_pago(id)
);

-- Tabla PEDIDO_DETALLE: productos que contiene un pedido
CREATE TABLE pedido_detalle (
    id SERIAL PRIMARY KEY,
    cantidad INTEGER NOT NULL,
    producto_id INTEGER NOT NULL,
    pedido_id INTEGER NOT NULL,
    FOREIGN KEY (producto_id) REFERENCES producto(id),
    FOREIGN KEY (pedido_id) REFERENCES pedido(id)
);

