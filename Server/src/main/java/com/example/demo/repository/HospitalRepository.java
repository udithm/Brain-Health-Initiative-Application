package com.example.demo.repository;

import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Doctor;
import com.example.demo.models.Hospital;

@Repository
public interface HospitalRepository extends JpaRepository<Hospital, Long> {
	Optional<Hospital> findById(Long id);
	List<Hospital> findByType(String role);
}
