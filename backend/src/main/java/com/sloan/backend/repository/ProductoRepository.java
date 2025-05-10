package com.sloan.backend.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sloan.backend.model.Producto;

@Repository
public interface ProductoRepository extends JpaRepository<Producto, Long> {
    List<Producto> findByEstado_Id(Long id);
    List<Producto> findByCategoria_Id(Long id); // Agregado método para buscar por categoría
}