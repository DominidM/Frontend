package com.sloan.backend.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "queja")
public class Queja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // La tabla tiene una columna 'fecha' de tipo TIMESTAMP
    @Column(name = "fecha")
    private String fecha; // Cambiado a String

    @Column(name = "nombre_queja") // Coincide con el nombre de la columna SQL
    private String nombreQueja;    // Cambiado a nombreQueja

    @Column(name = "dni_queja")  // Coincide con el nombre de la columna SQL
    private String dniQueja;      // Cambiado a dniQueja

    @Column(name = "correo_queja") // Coincide con el nombre de la columna SQL
    private String correoQueja;    // Cambiado a correoQueja

    @Column(name = "telefono_queja") // Coincide con el nombre de la columna SQL
    private String telefonoQueja;    // Cambiado a telefonoQueja

    @Column(name = "producto_servicio")
    private String productoServicio;

    @Column(name = "texto", nullable = false, columnDefinition = "TEXT")
    private String texto;

    // Constructor por defecto
    public Queja() {
    }

    // Constructor con parámetros (útil para crear objetos Queja)
    public Queja(String nombreQueja, String dniQueja, String correoQueja, String telefonoQueja, String productoServicio, String texto) {
        this.nombreQueja = nombreQueja;
        this.dniQueja = dniQueja;
        this.correoQueja = correoQueja;
        this.telefonoQueja = telefonoQueja;
        this.productoServicio = productoServicio;
        this.texto = texto;
    }

    @PrePersist
    public void prePersist() {
        this.fecha = LocalDateTime.now().toString();  // Formato ISO 8601
    }

    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public String getNombreQueja() {
        return nombreQueja;
    }

    public void setNombreQueja(String nombreQueja) {
        this.nombreQueja = nombreQueja;
    }

    public String getDniQueja() {
        return dniQueja;
    }

    public void setDniQueja(String dniQueja) {
        this.dniQueja = dniQueja;
    }

    public String getCorreoQueja() {
        return correoQueja;
    }

    public void setCorreoQueja(String correoQueja) {
        this.correoQueja = correoQueja;
    }

    public String getTelefonoQueja() {
        return telefonoQueja;
    }

    public void setTelefonoQueja(String telefonoQueja) {
        this.telefonoQueja = telefonoQueja;
    }

    public String getProductoServicio() {
        return productoServicio;
    }

    public void setProductoServicio(String productoServicio) {
        this.productoServicio = productoServicio;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }
}
