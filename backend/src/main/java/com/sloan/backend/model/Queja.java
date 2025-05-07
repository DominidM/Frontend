package com.sloan.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "queja")
public class Queja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "fecha", columnDefinition = "timestamp")
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss") // ISO 8601
    private LocalDateTime fecha;

    @Column(name = "nombre_queja", length = 100)
    private String nombreQueja;

    @Column(name = "dni_queja", length = 15)
    private String dniQueja;

    @Column(name = "correo_queja", length = 100)
    private String correoQueja;

    @Column(name = "telefono_queja", length = 20)
    private String telefonoQueja;

    @Column(name = "producto_servicio", length = 50)
    private String productoServicio;

    @Column(name = "texto", nullable = false, columnDefinition = "TEXT")
    private String texto;

    public Queja() {}

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
        this.fecha = LocalDateTime.now();
    }

    // Getters y Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDateTime getFecha() {
        return fecha;
    }

    public void setFecha(LocalDateTime fecha) {
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
