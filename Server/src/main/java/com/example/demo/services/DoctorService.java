package com.example.demo.services;

import java.util.List;

import com.example.demo.models.Doctor;

public interface DoctorService {
	List<Doctor> getAllDoctors();
	void addDoctor(Doctor doctor);
	Doctor getDoctorById(long id);
	void deleteDoctorById(long id);
	List<String> getallDoctorsByRole(String role);
	List<String> getallDoctorsByHospitalId(long hospitalId);
}
