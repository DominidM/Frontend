package com.sloan.backend.controller;

import com.sloan.backend.model.Queja;
import com.sloan.backend.service.QuejaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid; // Importa la anotación @Valid

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/quejas")
@CrossOrigin(origins = "http://localhost:5173") // Permite solicitudes CORS desde el frontend
public class QuejaController {

    private final QuejaService quejaService;

    @Autowired
    public QuejaController(QuejaService quejaService) {
        this.quejaService = quejaService;
    }

    @PostMapping
    public ResponseEntity<?> registrarQueja(@Valid @RequestBody Queja queja, BindingResult result) {
        if (result.hasErrors()) {
            // Si hay errores de validación, devuelve un error 400 Bad Request con los detalles del error
            List<String> errores = result.getFieldErrors().stream()
                    .map(error -> error.getField() + ": " + error.getDefaultMessage())
                    .collect(Collectors.toList());
            return ResponseEntity.badRequest().body(errores);
        }

        try {
            Queja nuevaQueja = quejaService.guardarQueja(queja);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevaQueja); // Devuelve 201 Created con la queja creada
        } catch (RuntimeException e) {
            // Captura la excepción propagada por el servicio
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al guardar la queja: " + e.getMessage()); // Devuelve el mensaje de error específico
        }
    }

    @GetMapping
    public ResponseEntity<List<Queja>> obtenerTodasLasQuejas() {
        List<Queja> quejas = quejaService.obtenerTodasQuejas();
        return ResponseEntity.ok(quejas);
    }
}

