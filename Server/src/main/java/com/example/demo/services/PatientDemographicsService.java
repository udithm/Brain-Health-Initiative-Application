package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.PatientDemographics;
import com.example.demo.repository.PatientDemographicsRepository;

@Service
public class PatientDemographicsService {
	
	@Autowired
	private PatientDemographicsRepository patientDemographicsRepository;
	
	public PatientDemographics addPatientDetails(PatientDemographics patientDetails) {
		List<PatientDemographics> patientOptional = patientDemographicsRepository.findByAbhaId(patientDetails.getAbhaId());
		if(!patientOptional.isEmpty()) {
			throw new IllegalStateException("Abha Id already exists");
		}
		return patientDemographicsRepository.save(patientDetails);
	}
	
	public List<PatientDemographics> getAllPatientDetails() {
		return patientDemographicsRepository.findAll();
	}
	
	public PatientDemographics getPatientDetailById(long id) {
		return patientDemographicsRepository.findById(id);
	}
	
	public List<PatientDemographics> getPatientDetailsByAbhaId(String abhaId) {
		return patientDemographicsRepository.findByAbhaId(abhaId);
	}
	
	public List<PatientDemographics> getPatientDetailsByPhoneNo(String phoneNo) {
		return patientDemographicsRepository.findByPhoneNo(phoneNo);
	}
	
	public List<PatientDemographics> getPatientDetailsByFirstNameIgnoreCase(String name) {
		return patientDemographicsRepository.findByFirstNameIgnoreCase(name);
	}
}
