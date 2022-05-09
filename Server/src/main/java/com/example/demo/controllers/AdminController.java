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
import com.example.demo.models.ConsultationRecord;
import com.example.demo.models.Doctor;
import com.example.demo.models.ERole;
import com.example.demo.models.Hospital;
import com.example.demo.models.Role;
import com.example.demo.models.User;
import com.example.demo.repository.AdminRepository;
import com.example.demo.repository.ConsultationRecordRepository;
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
	@Autowired
	ConsultationRecordRepository consultationRepository;
	
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
	
//	API for sending statistics
	@GetMapping("/referalAnalysis")
	public Map<String, Integer> referalsAnalysis(){
		List<ConsultationRecord> records = consultationRepository.findAll();
		Map<String, Integer> hm = new HashMap<String, Integer>();
		if(records.equals(null)) {
			return hm;
		}
		int TotalConsultations = 0;
		int NumberOfReferals = 0;
		int NumberOfReferalsTaken = 0;
		for(ConsultationRecord e: records) {
			TotalConsultations+=1;
			if(e.getReferedHospitalId()!=0L) {
				NumberOfReferals+=1;
				if(e.isReferralStatus()) {
					NumberOfReferalsTaken+=1;
				}
			}
		}
		int NumberOfNoReferals = TotalConsultations - NumberOfReferals;
		int NumberOfReferalsNotTaken = NumberOfReferals - NumberOfReferalsTaken;
		 hm.put("TotalConsultations", TotalConsultations);
		 hm.put("NumberOfReferals", NumberOfReferals);
		 hm.put("NumberOfReferalsTaken", NumberOfReferalsTaken);
		 hm.put("NumberOfNoReferals", NumberOfNoReferals);
		 hm.put("NumberOfReferalsNotTaken", NumberOfReferalsNotTaken);
		 
		 return hm;
		
	}
	
//	API for sending statistics of hospitals
	@GetMapping("/HospitalAnalysis")
	public Map<String, Integer> HospitalAnalysis(){
		List<Hospital> records = hospitalRepository.findAll();
		Map<String, Integer> hm = new HashMap<String, Integer>();
		if(records.equals(null)) {
			return hm;
		}
		int TotalHospitals = 0;
		int NumberOfPHC = 0;
		int NumberOfSHC = 0;
		int NumberOfTHC = 0;
		for(Hospital e :records) {
			TotalHospitals+=1;
			System.out.print(e.getType());
			if(e.getType().equals("Primary Health Centre")) {
				NumberOfPHC+=1;
			}
			else if(e.getType().equals("Secondary Health Centre")) {
				NumberOfSHC+=1;
			}
			else if(e.getType().equals("Tertiary Health Centre")) {
				NumberOfTHC+=1;
			}
			
		}
		hm.put("TotalHospitals", TotalHospitals);
		hm.put("NumberOfPHC", NumberOfPHC);
		hm.put("NumberOfSHC", NumberOfSHC);
		hm.put("NumberOfTHC", NumberOfTHC);
		
		return hm;
	}
	
//	API for sending statistics of questionnaire
	@GetMapping("/QuestionnaireAnalysis")
	public Map<String, Integer> QuestionnaireAnalysis(){
		List<ConsultationRecord> records = consultationRepository.findAll();
		Map<String, Integer> hm = new HashMap<String, Integer>();
		if(records.equals(null)) {
			return hm;
		}
		int TotalQuestionnaireUsed = 0;
		for(ConsultationRecord e: records) {
			System.out.println("ConsulationForm*********************************");
			System.out.print(e.getResponses());
		}
		
		return hm;
	}
	
//	API for sending statistics of questionnaire
	@GetMapping("/ICD10CodeAnalysis")
	public Map<String, Integer> ICD10CodeAnalysis(){
		List<ConsultationRecord> records = consultationRepository.findAll();
		Map<String, Integer> hm = new HashMap<String, Integer>();
		if(records.equals(null)) {
			return hm;
		}
		for(ConsultationRecord e : records) {
			if(!hm.containsKey(e.getIcd10Code())) {
				hm.put(e.getIcd10Code(), 1);
			}
			else {
				hm.put(e.getIcd10Code(), hm.get(e.getIcd10Code())+1);
			}
		}
		
		return hm;
	}
	
//	API for sending statistics of # of Hospitals in each district
	@GetMapping(path = "/StateHospitalAnalysis/{d}")
	public Map<String, Integer> DistrictHospitalAnalysis(@PathVariable(value ="d", required = true) String d){
		List<Hospital> records = hospitalRepository.findAll();
		Map<String, Integer> hm = new HashMap<String, Integer>();
		if(records.equals(null)) {
			return hm;
		}
		int NumberOfPHC = 0;
		int NumberOfSHC = 0;
		int NumberOfTHC = 0;
		for(Hospital h: records) {
			if(h.getDistrict().equals(d)) {
				if(h.getType().equals("Primary Health Centre")){
					NumberOfPHC+=1;
				}
				else if(h.getType().equals("Secondary Health Centre")) {
					NumberOfSHC+=1;
				}
				else if(h.getType().equals("Tertiary Health Centre")) {
					NumberOfTHC+=1;
				}
			}
		}
		int TotalHospitals = NumberOfPHC + NumberOfSHC + NumberOfTHC;
		hm.put("TotalHospitals", TotalHospitals);
		hm.put("NumberOfPHC", NumberOfPHC);
		hm.put("NumberOfSHC", NumberOfSHC);
		hm.put("NumberOfTHC", NumberOfTHC);
		
		return hm;
	}
	
	
//	API for sending statistics of # of Doctors in each state
	@GetMapping(path = "/StateDoctorAnalysis/{s}")
	public Map<String, Integer> DistrictDoctorAnalysis(@PathVariable(value ="s", required = true) String s){
		Map<String, Integer> hm = new HashMap<String, Integer>();
		List<Doctor> records = doctorRepository.findAll();
		if(records.equals(null)) {
			return hm;
		}
		int NumberOfPD = 0;
		int NumberOfSS = 0;
		int NumberOfTS = 0;
		for(Doctor d: records) {
			Hospital hosp = d.getHospital();
			if(hosp.getState().equals(s)) {
//				System.out.println(d.getRole());
				if(d.getRole().equals("Primary Doctor")){
					NumberOfPD+=1;
				}
				else if(d.getRole().equals("Secondary Specalist")) {
					NumberOfSS+=1;
				}
				else if(d.getRole().equals("Tertiary Specalist")) {
					NumberOfTS+=1;
				}
			}
		}
		int TotalDoctors = NumberOfPD + NumberOfSS + NumberOfTS;
		hm.put("TotalDoctors", TotalDoctors);
		hm.put("NumberOfPD", NumberOfPD);
		hm.put("NumberOfSS", NumberOfSS);
		hm.put("NumberOfTS", NumberOfTS);
		
		return hm;
	}

}








