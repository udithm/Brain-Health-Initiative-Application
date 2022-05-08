package com.example.demo.controllers;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
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
import com.example.demo.repository.RoleRepository;
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
	@Autowired
	RoleRepository roleRepository;
	@Autowired
	PasswordEncoder encoder;
	
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
	
	@GetMapping("/getAllHospitals")

	public  List<String> getAllHospitals() {
	        List<Hospital> listHospitals = hospitalRepository.findAll();
	        List<String> list = new ArrayList<String>();
	         for(Hospital h:listHospitals) {
	         String str = h.getId() + ". " + h.getName() + ", " + h.getCity() + "," + h.getPincode();
	         list.add(str);
	         }
	         return list;
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
		
		doctor.setHospital(hospitalService.getHospitalById(doctorRequest.getHospitalId()));

		doctorRepository.save(doctor);
		
		User user = new User(doctorRequest.getFname(),
							 doctorRequest.getEmail(),
							 encoder.encode(doctorRequest.getPassword()),
							 doctor.getId());
		
		String strRole = doctorRequest.getRole();
		Set<Role> roles = new HashSet<>();
		
		if(strRole.equals("Primary Doctor")) {
			System.out.println(strRole);
			Role primaryRole = roleRepository.findByName(ERole.PRIMARY_DOCTOR)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(primaryRole);
		}
		else if(strRole.equals("Secondary Specalist")) {
			System.out.println(strRole);
			Role secondaryRole = roleRepository.findByName(ERole.SECONDARY_SPECIALIST)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(secondaryRole);
		}
		else if(strRole.equals("Tertiary Specalist")) {
			System.out.println(strRole);
			Role tertiaryRole = roleRepository.findByName(ERole.TERTIARY_SPECIALIST)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(tertiaryRole);
		}
		else{
			Role adminRole = roleRepository.findByName(ERole.ADMIN)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(adminRole);
		}
		
		user.setRoles(roles);
		
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
		User user = new User(admin.getFname(),
				 admin.getEmail(),
				 encoder.encode(admin.getPassword()),
				 admin.getId());
		String strRole = admin.getRole();
		Set<Role> roles = new HashSet<>();
		if(strRole.equals("Admin"))
		{
			Role adminRole = roleRepository.findByName(ERole.ADMIN)
					.orElseThrow(() -> new RuntimeException("Error: Role is not found."));
			roles.add(adminRole);
		}
		user.setRoles(roles);
		userRepository.save(user);
		return ResponseEntity.ok(new MessageResponse("Admin registered successfully!"));
	}

}