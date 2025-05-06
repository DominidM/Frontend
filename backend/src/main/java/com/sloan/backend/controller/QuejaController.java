package com.sloan.backend.controller;

import com.sloan.backend.model.Queja;
import com.sloan.backend.repository.QuejaRepository;
import jakarta.validation.Valid;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/quejas")
@CrossOrigin(origins = "*")
public class QuejaController {

    private final QuejaRepository quejaRepository;

    public QuejaController(QuejaRepository quejaRepository) {
        this.quejaRepository = quejaRepository;
    }

    @PostMapping
    public ResponseEntity<Queja> crearQueja(@RequestBody @Valid Queja queja) {
        Queja guardada = quejaRepository.save(queja);
        return ResponseEntity.status(HttpStatus.CREATED).body(guardada);
    }

    @GetMapping
    public List<Queja> obtenerTodas() {
        return quejaRepository.findAll();
    }
}
