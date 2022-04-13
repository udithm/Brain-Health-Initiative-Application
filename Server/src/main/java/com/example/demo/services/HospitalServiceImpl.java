package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.Doctor;
import com.example.demo.models.Hospital;
import com.example.demo.repository.HospitalRepository;

@Service
public class HospitalServiceImpl implements HospitalService{

	@Autowired
	private HospitalRepository hospitalRepository;

	@Override
	public List<Hospital> getAllHospitals() {
		return hospitalRepository.findAll();
	}

	@Override
	public void addHospital(Hospital hospital) {
		this.hospitalRepository.save(hospital);
	}

	@Override
	public Hospital getHospitalById(long id) {
		Optional<Hospital> optional = hospitalRepository.findById(id);
		Hospital hospital = null;
		if (optional.isPresent()) {
			hospital = optional.get();
		} else {
			throw new RuntimeException(" Hospital not found for id :: " + id);
		}
		return hospital;
	}
	
	@Override
	public List<String> getallHospitalsByType(String type) {
		List<Hospital> hosps = new ArrayList<Hospital>();
		hospitalRepository.findByType(type).forEach(hosps::add);

		List<String> hospnames = new ArrayList<String>();
		for(Hospital d:hosps) {
			hospnames.add(d.getName());
		}
		return hospnames;
	}

	@Override
	public void deleteHospitalById(long id) {
		this.hospitalRepository.deleteById(id);
	}
}
