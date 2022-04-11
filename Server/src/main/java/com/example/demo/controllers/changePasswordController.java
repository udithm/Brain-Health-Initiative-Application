package com.example.demo.controllers;

import java.util.List;
import java.util.stream.Collectors;

import javax.validation.Valid;import javax.validation.constraintvalidation.SupportedValidationTarget;

//import org.apache.catalina.mapper.Mapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import com.example.demo.response.MessageResponse;
import com.example.demo.services.UserDetailsServiceImpl;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.example.demo.models.User;
import com.example.demo.repository.RoleRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.request.MyProfileRequest;
import com.example.demo.request.changePasswordRequest;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;
//import com.example.demo.request.MyProfileRequest;
import com.example.demo.services.UserDetailsImpl;
//import com.example.demo.services.UserDetailsServiceImpl;
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController

@RequestMapping("/api")
public class changePasswordController {
	@Autowired
	UserRepository userRepository;
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	PasswordEncoder encoder;
	
	@PostMapping("/changePassword")
	public ResponseEntity<?> changePassword(@RequestBody changePasswordRequest changepasswordrequest ) {
		User user = userRepository.findByUsername(changepasswordrequest.getUsername())
				.orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + changepasswordrequest.getUsername()));
		user.setPassword( encoder.encode(changepasswordrequest.getNewpassword()));
//		System.out.println(changepasswordrequest.getUsername());
//		user.setUsername("madhav@gmail.com");
		userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("Password Updated successfully!"));
	}
	
	}
