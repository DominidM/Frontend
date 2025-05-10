package com.sloan.backend.controller;

import com.sloan.backend.model.Producto;
import com.sloan.backend.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:5173") // Permite solicitudes CORS desde el frontend
public class ProductoController {

    @Autowired
    private ProductoService productoService;

    @GetMapping
    public List<Producto> obtenerTodos() {
        return productoService.obtenerTodos();
    }

    @GetMapping("/estado/{id}")
    public List<Producto> obtenerPorEstado(@PathVariable Long id) {
        return productoService.obtenerPorEstado(id);
    }

    @GetMapping("/categoria/{id}")
    public List<Producto> obtenerPorCategoria(@PathVariable Long id) {
        return productoService.obtenerPorCategoria(id);
    }

    @GetMapping("/{id}")
    public Producto obtenerPorId(@PathVariable Long id) {
        return productoService.obtenerPorId(id);
    }

    @PostMapping
    public Producto crearProducto(@RequestBody Producto producto) {
        return productoService.guardar(producto);
    }

    @DeleteMapping("/{id}")
    public void eliminarProducto(@PathVariable Long id) {
        productoService.eliminar(id);
    }
}
