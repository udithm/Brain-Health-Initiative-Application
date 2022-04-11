package com.example.demo.request;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.validation.constraints.*;
public class HospitalRequest {
		
		
	  public HospitalRequest(@JsonProperty("hospitalName") @NotBlank @Size(min = 3, max = 30) String name,
				@JsonProperty("email") @NotBlank @Size(max = 50) @Email String email, 
				@JsonProperty("city") @NotBlank String city,
				@JsonProperty("district") @NotBlank String district,
				@JsonProperty("stateName") @NotBlank String state,
				@JsonProperty("pincode") @NotBlank String pincode,
				@JsonProperty("role") @NotBlank String type,
				@JsonProperty("phoneNumber") @NotBlank String contactNumber) {
			super();
			this.name = name;
			this.email = email;
			this.city = city;
			this.district = district;
			this.state = state;
			this.pincode = pincode;
			this.type = type;
			this.contactNumber = contactNumber;
		}

	@NotBlank
	  @Size(min = 3, max = 20)
	  private String name;

	  @NotBlank
	  @Size(max = 50)
	  @Email
	  private String email;

	  @NotBlank
	  private String city;
	  
	  @NotBlank
	  private String district;
	  
	  @NotBlank
	  private String state;
	  
	  @NotBlank
	  private String pincode;

	  @NotBlank
	  private String type;

	  @NotBlank
	  private String contactNumber;
	  
	  public String getname() {
	    return name;
	  }

	  public void setname(String name) {
	    this.name = name;
	  }

	  public String getEmail() {
	    return email;
	  }

	  public void setEmail(String email) {
	    this.email = email;
	  }

	  public String getCity() {
	    return city;
	  }

	  public void setCity(String city) {
	    this.city = city;
	  }
	  
	  public String getDistrict() {
		  return district;
	  }

	  public void setDistrict(String district) {
		  this.district = district;
	  }
	  public String getState() {
		  return state;
	  }

	  public void setState(String state) {
		  this.state = state;
	  }
	  public String gettype() {
	    return this.type;
	  }

	  public void settype(String type) {
	    this.type = type;
	  }
	  
	  public String getPincode() {
		    return this.pincode;
	  }

	  public void setPincode(String pincode) {
		    this.pincode = pincode;
	  }
	  
	  public String getcontactNumber() {
		    return this.contactNumber;
	  }

	  public void setcontactNumber(String contactNumber) {
		    this.contactNumber = contactNumber;
	  }

}
