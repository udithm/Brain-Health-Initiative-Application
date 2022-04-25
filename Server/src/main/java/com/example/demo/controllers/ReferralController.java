package com.example.demo.controllers;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Pair;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.jwt.JwtUtils;
import com.example.demo.models.Admin;
import com.example.demo.models.ConsultationRecord;
import com.example.demo.models.Doctor;
import com.example.demo.models.ERole;
import com.example.demo.models.Hospital;
import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.DoctorRepository;
import com.example.demo.repository.HospitalRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.AdminRequest;
import com.example.demo.request.DoctorRequest;
import com.example.demo.request.HospitalRequest;
import com.example.demo.request.LoginRequest;
import com.example.demo.request.SignupRequest;
import com.example.demo.response.JwtResponse;
import com.example.demo.response.MessageResponse;
import com.example.demo.services.ConsultationRecordService;
import com.example.demo.services.DoctorServiceImpl;
import com.example.demo.services.HospitalService;
import com.example.demo.services.HospitalServiceImpl;
import com.example.demo.services.UserDetailsImpl;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import java.util.AbstractMap;
import io.jsonwebtoken.lang.Arrays;

import org.springframework.ui.Model;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class ReferralController {
	
	@Autowired
	private HospitalService hospitalService;
	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	DoctorRepository doctorRepository;
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	DoctorServiceImpl doctorServiceimpl;
	@Autowired
	HospitalServiceImpl hospitalServiceimpl;
	@Autowired
	ConsultationRecordService consultationRecordService;

	@GetMapping("/getallDoctors/{role}")
	
	public List<String> getAllDoctorsByType(@PathVariable(value = "role", required = true) String role) {
		List<String> docs = doctorServiceimpl.getallDoctorsByRole(role);
		return docs;
	}
	
	@GetMapping("/getallDoctors/{hospitalId}")
	
	public List<String> getAllDoctorsByHospitalId(@PathVariable(value = "hospitalId", required = true) long hospitalId) {
		List<String> docs = doctorServiceimpl.getallDoctorsByHospitalId(hospitalId);
		return docs;
}
	
	@GetMapping("/getDoctorsforReferral")
	
	public Map<String, List<String>> getAllDoctorsforReferral(){
		List<Doctor> listDoctors = doctorRepository.findAll();
		Map<String, List<String>> docmap = new HashMap<>();
		for(Doctor d:listDoctors) {
        	 docmap.put(d.getRole(), doctorServiceimpl.getallDoctorsByRole(d.getRole())); 
         }
		return docmap;
		
	}
	
	@GetMapping("/getallPatients/{id}")
	
	public List<ConsultationRecord> getAllPatientsByDoctorId(@PathVariable(value = "id", required = true) Long id) {
		List<ConsultationRecord> docs = consultationRecordService.getAllConsultationRecordsByDoctorId(id);
		return docs;
	}
	
	@GetMapping("/getHospitalsandDoctorsforReferral")
	
	public ObjectNode getHandDReferral(){
		List<Hospital> listHospitals = hospitalRepository.findAll();
		Map<Hospital, List<String>> hospmap = new HashMap<>();
		for(Hospital h:listHospitals) {
        	 hospmap.put(h, doctorServiceimpl.getallDoctorsByHospitalId(h.getId())); 
         }
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode objectNode = mapper.createObjectNode();
		//Map<String, Pair<String, List<String>>> bigmap = new HashMap<>();
		//Pair<String, List<String>> pair;
		hospmap.entrySet().forEach(entry -> {
		    System.out.println(entry.getKey() + " " + entry.getValue());
		});
		
		for(Map.Entry<Hospital, List<String>> pair : hospmap.entrySet()) {
			if(pair.getKey().getType().equals("Primary Health Centre")) {
				objectNode.set(pair.getKey().getType(), mapper.convertValue(pair,JsonNode.class));
				//bigmap.put(h1.getType(), new Pair<String, List<String>> (h1.getName(),hospmap.get(h1.getName())));
			}
			else if(pair.getKey().getType().equals("Secondary Health Centre")) {
				objectNode.set(pair.getKey().getType(), mapper.convertValue(pair,JsonNode.class));
			}
			else if(pair.getKey().getType().equals("Tertiary Health Centre")) {
				objectNode.set(pair.getKey().getType(), mapper.convertValue(pair,JsonNode.class));
			}
			
		}
		return objectNode;
	}
	
	@GetMapping("/getHospitalsByType")
	public ObjectNode getHospitalsByType() {
		List<Hospital> listHospitals = hospitalRepository.findAll();
//		Map<Hospital, List<String>> hospmap = new HashMap<>();
//		for(Hospital h:listHospitals) {
//        	 hospmap.put(h, doctorServiceimpl.getallDoctorsByHospitalId(h.getId())); 
//         }
		ObjectMapper mapper = new ObjectMapper();
		ObjectNode objectNode = mapper.createObjectNode();
		System.out.print(listHospitals);
		
		return objectNode;
	}
	@GetMapping("getHospitalsforReferral")
	
	public Map<String, List<String>> getAllHospitalsforReferral(){
		List<Hospital> listHospitals = hospitalRepository.findAll();
		Map<String, List<String>> hospmap = new HashMap<>();
		for(Hospital h:listHospitals) {
        	 hospmap.put(h.getType(), hospitalServiceimpl.getallHospitalsByType(h.getType())); 
         }
		return hospmap;
}
}