package com.example.demo.controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.validation.annotation.Validated;

import com.example.demo.models.PatientDemographics;
import com.example.demo.models.PatientDemographics.New;
import com.example.demo.services.PatientDemographicsService;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "api/v1/patientdemographics")
public class PatientDemographicsController {
	
	private final PatientDemographicsService patientDemographicsService;

	@Autowired
	public PatientDemographicsController(PatientDemographicsService patientDemographicsService) {
		this.patientDemographicsService = patientDemographicsService;
	}
	
	//API to Add a patient's PatientDemographics to the database 
	@PostMapping
	public PatientDemographics addPatientDetails(@Validated(New.class) @RequestBody PatientDemographics patientDetails) {
		return patientDemographicsService.addPatientDetails(patientDetails);
	}
	
	//API to Get all Patient Demographics in the database
	@GetMapping
	public List<PatientDemographics> getAllPatientDetails() {
		return patientDemographicsService.getAllPatientDetails();
	}
	
	//API to Get all Patient Demographics in the database
	@GetMapping(path = "/id/{id}")
	public PatientDemographics getPatientDetailById(@PathVariable(value = "id", required = true) long id) {
		return patientDemographicsService.getPatientDetailById(id);
	}
	
	//API to Get Patient Demographics for a given abhaId
	@GetMapping(path = "/abhaId/{id}")
	public List<PatientDemographics> getPatientDetailsByAbhaId(@PathVariable(value = "id", required = true) String abhaId) {
//		System.out.println(abhaId);
		return patientDemographicsService.getPatientDetailsByAbhaId(abhaId);
	}
	
	//API to Get Patient Demographics for a given Name(case doesn't matter)
		@GetMapping(path = "/firstName/{firstName}")
		public List <PatientDemographics> getPatientDetailsByFirstNameIgnoreCase(@PathVariable(value = "firstName", required = true) String name) {
//			System.out.println(name);
			return patientDemographicsService.getPatientDetailsByFirstNameIgnoreCase(name);
		}
	
	//API to Get List of Patient Demographics for a given Name(case doesn't matter) and Phone number
	@GetMapping(path = "/contact/{phoneNo}")
	public List <PatientDemographics> getPatientDetailsByPhoneNo(@PathVariable(value = "phoneNo", required = true) String phoneNo) {
		return patientDemographicsService.getPatientDetailsByPhoneNo(phoneNo);
	}
	
	@ExceptionHandler(HttpMessageNotReadableException.class)
	public ResponseEntity<Map<String, String>> handleException(
	        HttpMessageNotReadableException e) throws IOException {

	    Map<String, String> errorResponse = new HashMap<>();
	    errorResponse.put("message", e.getMessage());
	    errorResponse.put("status", HttpStatus.BAD_REQUEST.toString());

	    return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}

}