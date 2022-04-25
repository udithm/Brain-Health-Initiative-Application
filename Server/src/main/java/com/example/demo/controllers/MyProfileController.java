package com.example.demo.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import javax.validation.Valid;import javax.validation.constraintvalidation.SupportedValidationTarget;

//import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Doctor;
import com.example.demo.models.Hospital;
import com.example.demo.models.User;
import com.example.demo.repository.HospitalRepository;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.MyProfileRequest;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
import com.example.demo.services.DoctorServiceImpl;
import com.example.demo.services.HospitalServiceImpl;
//import com.example.demo.request.MyProfileRequest;
import com.example.demo.services.UserDetailsImpl;
//import com.example.demo.services.UserDetailsServiceImpl;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

@RequestMapping("/api")
public class MyProfileController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	DoctorServiceImpl doctorServiceimpl;
	@Autowired
	HospitalServiceImpl hospitalServiceimpl;
	@Autowired
	HospitalRepository hospitalRepository;
	
	public UserDetailsImpl loadUserByUsername(String username) throws UsernameNotFoundException {
		User user = userRepository.findByUsername(username)
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
		return UserDetailsImpl.build(user);
	}
	
	public UserDetailsImpl loadUserById(Long id) throws ArithmeticException {
		User user = userRepository.findById(id)
				.orElseThrow(() -> new ArithmeticException("User Not Found with username: " + id));
		return UserDetailsImpl.build(user);
	}
	
	@PostMapping("/myProfile")
	public ObjectNode viewprofile(@RequestBody MyProfileRequest profilerequest ) {
	   
		List<Hospital> listHospitals = hospitalRepository.findAll();
       Map<Long, String> hospmap = new HashMap<>();
       for(Hospital h:listHospitals) {
      	 hospmap.put(h.getId(), h.getName()); 
       }
		UserDetailsImpl user = loadUserById (profilerequest.getId());
		Doctor doc = doctorServiceimpl.getDoctorById(user.getReferenceId());
		Hospital hosp = doc.getHospital();
		List<String> roles = user.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());
		ObjectMapper mapper = new ObjectMapper();
		JsonNode hospnode = mapper.convertValue(hosp, JsonNode.class);
		ObjectNode objectNode = mapper.createObjectNode();
	    objectNode.put("userName", user.getUsername());
	    objectNode.put("email", user.getEmail());
	    objectNode.put("role", roles.get(0));
	    objectNode.set("Hospital", hospnode);
	    objectNode.set("List", mapper.convertValue(hospmap,JsonNode.class));
	    
	    return objectNode;
	}
}
