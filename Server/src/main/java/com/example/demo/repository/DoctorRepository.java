package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.Doctor;

public interface DoctorRepository extends JpaRepository<Doctor, Long>{
	
	Optional<Doctor> findById(Long id);
	List<Doctor> findByRole(String role);
}
