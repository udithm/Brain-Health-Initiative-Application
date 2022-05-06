package com.example.demo.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.*;
public class DoctorRequest {
		
		
	  public DoctorRequest(@JsonProperty("fname") @NotBlank @Size(max = 30) String fname,
			  	@JsonProperty("lname") @NotBlank String lname,
				@JsonProperty("email") @NotBlank @Size(max = 50) @Email String email, 
				@JsonProperty("hashedPassword") @NotBlank String password,
				@JsonProperty("role") @NotBlank String role,
				@JsonProperty("gender") @NotBlank String gender,
				@JsonProperty("hospitalName") @NotBlank String hospitalName,
				@JsonProperty("phoneNumber") @NotBlank String contactNumber,
				@JsonProperty("hospitalId") @NotBlank Long hospitalId
				) {
			super();
			this.fname = fname;
			this.lname = lname;
			this.email = email;
			this.password = password;
			this.role = role;
			this.gender = gender;
			this.hospitalName = hospitalName;
			this.contactNumber = contactNumber;
			this.hospitalId = hospitalId;
		}

	  @NotBlank
	  @Size(min = 3, max = 30)
	  private String fname;
	  
	  @NotBlank
	  @Size(min = 3, max = 30)
	  private String lname;

	  @NotBlank
	  @Size(max = 50)
	  @Email
	  private String email;

	  @NotBlank
	  private String password;
	  
	  @NotBlank
	  private String role;
	  
	  @NotBlank
	  private String gender;
	  
	  @NotBlank
	  private String hospitalName;

	  @NotBlank
	  private String contactNumber;
	  
	  @NotBlank
	  private Long hospitalId;

	public Long getHospitalId() {
		return hospitalId;
	}

	public void setHospitalId(Long hospitalId) {
		this.hospitalId = hospitalId;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getHospitalName() {
		return hospitalName;
	}

	public void setHospitalName(String hospitalName) {
		this.hospitalName = hospitalName;
	}

	public String getContactNumber() {
		return contactNumber;
	}

	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	  
	  
}