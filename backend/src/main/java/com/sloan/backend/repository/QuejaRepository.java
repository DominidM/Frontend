package com.sloan.backend.repository;

import com.sloan.backend.model.Queja;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuejaRepository extends JpaRepository<Queja, Long> {
}

