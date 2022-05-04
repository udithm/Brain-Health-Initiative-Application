package com.example.demo.services;
import java.util.List;
import com.example.demo.models.Hospital;

public interface HospitalService {
		List<Hospital> getAllHospitals();
		void addHospital(Hospital hospital);
		Hospital getHospitalById(long id);
		void deleteHospitalById(long id);
		List<String> getallHospitalsByType(String type);
		List<String> getallIdHospitalsByType(String type);
		Hospital getHospitalByname(String name);
}

