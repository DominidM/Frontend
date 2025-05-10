package com.sloan.backend.model;
import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "producto")
public class Producto {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 150, nullable = false)
    private String name;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @ManyToOne
    @JoinColumn(name = "categoria_id") // Asegúrate de que este nombre coincida con el de la columna en la base de datos
    private Categoria categoria;

    @ManyToOne
    @JoinColumn(name = "estado_id") // Nombre de la columna en la tabla producto
    private Estado estado;

    public Producto() {}

    public Producto(String name, BigDecimal price, Categoria categoria, Estado estado) {
        this.name = name;
        this.price = price;
        this.categoria = categoria;
        this.estado = estado;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Estado getPkEstado() {
        return estado;
    }
    
    public void setPkEstado(Estado estado) {
        this.estado = estado;
    }
}
