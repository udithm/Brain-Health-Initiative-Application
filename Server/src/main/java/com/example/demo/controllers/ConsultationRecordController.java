package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.ConsultationRecord;
import com.example.demo.models.Medicine;
import com.example.demo.models.PatientDemographics;
import com.example.demo.services.ConsultationRecordService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "api/v1/consultationrecords")
public class ConsultationRecordController {
	
	private final ConsultationRecordService consultationRecordService;
	
	@Autowired
	public ConsultationRecordController(ConsultationRecordService consultationRecordService) {
		this.consultationRecordService = consultationRecordService;
	}
	
	//API to Add a new Consultation record to the database 
	@PostMapping
	public ConsultationRecord addNewConsultation(@RequestBody ConsultationRecord consultationRecord) {
		return consultationRecordService.addNewConsultation(consultationRecord);

	}
		
	//API to Get all Consultation records in the database
	@GetMapping
	public List<ConsultationRecord> getAllConsultationRecords() {
		List<ConsultationRecord> records = consultationRecordService.getAllConsultationRecords();
		return records;
	}
	
	//API to Get all Patient Demographics in the database
	@GetMapping(path = "/id/{id}")
	public ConsultationRecord getConsultationRecordById(@PathVariable(value = "id", required = true) long id) {
		return consultationRecordService.getConsultationRecordById(id);
	}
	
	//API to Get all Consultation records for a particular patient in the database
		@GetMapping(path = "/patientId/{id}")
		public List<ConsultationRecord> getAllConsultationRecordsByPatientId(@PathVariable(value = "id", required = true) long patientId) {
			List<ConsultationRecord> records = consultationRecordService.getAllConsultationRecordsByPatientId(patientId);
			return records;
		}
		
		//API to Get all Consultation records for a particular patient in the database
				@GetMapping(path = "/patientAndHospital/{pid}/{hid}")
				public List<ConsultationRecord> getHospitalConsultationRecordsByPatientId(@PathVariable(value = "pid", required = true) long patientId, @PathVariable(value = "hid", required = true) long referedhospitalId) {
					List<ConsultationRecord> records = consultationRecordService.getHospitalConsultationRecordsByPatientId(patientId, referedhospitalId);
					return records;
				}

}
