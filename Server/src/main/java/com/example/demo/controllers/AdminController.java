package com.example.demo.controllers;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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
import com.example.demo.services.HospitalService;
import com.example.demo.services.UserDetailsImpl;
import org.springframework.ui.Model;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class AdminController {
	
	@Autowired
	private HospitalService hospitalService;
	@Autowired
	HospitalRepository hospitalRepository;
	@Autowired
	DoctorRepository doctorRepository;
	@Autowired
	AdminRepository adminRepository;
	@Autowired
	UserRepository userRepository;
	
	@GetMapping ("/showHospitalform")
	public String showHospitalForm(Model model) {
		Hospital hospital = new Hospital();
		model.addAttribute("hospital", hospital);
		return "redirect:/api";
	}
	
	@PostMapping("/addHospital")
	//public String addHospital(@ModelAttribute("hospital") Hospital hospital) {
	//	hospitalService.addHospital(hospital);
	//	return "redirect:/api";
	//}
	public ResponseEntity<?> addHospital(@RequestBody HospitalRequest hospitalRequest){
		
		Hospital hospital = new Hospital(hospitalRequest.getname(),
										 hospitalRequest.getCity(),
										 hospitalRequest.getState(),
										 hospitalRequest.getDistrict(),
										 hospitalRequest.gettype(),
										 hospitalRequest.getEmail(),
										 hospitalRequest.getPincode(),
										 hospitalRequest.getcontactNumber());
		hospitalRepository.save(hospital);
		return ResponseEntity.ok(new MessageResponse("Hospital added successfully!"));
	}
	
	@GetMapping("/showFormForUpdate/{id}")
	public String showFormForUpdate(@PathVariable ( value = "id") long id, Model model) {
		
		Hospital hospital = hospitalService.getHospitalById(id);
		
		model.addAttribute("hospital", hospital);
		return "update_hospital";
	}
	
	@GetMapping("/deleteHospital/{id}")
	public String deleteEmployee(@PathVariable (value = "id") long id) {
		
		this.hospitalService.deleteHospitalById(id);
		return "redirect:/";
	}
	
	@PostMapping("/addDoctor")
	public ResponseEntity<?> addDoctor(@RequestBody DoctorRequest doctorRequest) {
		Doctor doctor = new Doctor(doctorRequest.getFname(),
				 doctorRequest.getLname(),
				 doctorRequest.getEmail(),
				 doctorRequest.getPassword(),
				 doctorRequest.getRole(),
				 doctorRequest.getGender(),
				 doctorRequest.getHospitalName(),
				 doctorRequest.getContactNumber());
		
		User user = new User(doctorRequest.getFname(),
							 doctorRequest.getEmail(),
							 doctorRequest.getPassword());
		
		doctorRepository.save(doctor);
		userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("Doctor registered successfully!"));
	}
	
	@PostMapping("/addAdmin")
	public ResponseEntity<?> addAdmin(@RequestBody AdminRequest adminRequest) {
		Admin admin = new Admin(adminRequest.getFname(),
				adminRequest.getLname(),
				adminRequest.getEmail(),
				adminRequest.getPassword(),
				adminRequest.getRole(),
				adminRequest.getGender(),
				adminRequest.getOrgName(),
				adminRequest.getContactNumber());
		
		adminRepository.save(admin);
		return ResponseEntity.ok(new MessageResponse("Doctor registered successfully!"));
	}

}