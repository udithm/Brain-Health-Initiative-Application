package com.example.demo.request;

import javax.validation.constraints.NotBlank;
// import com.example.demo.services.*;
//import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonProperty;

public class changePasswordRequest {
	
	public changePasswordRequest(@JsonProperty("userName") String username,
								 @JsonProperty("newPassword") String newpassword) {
		super();
		this.username = username;
		this.newpassword = newpassword;
	}
	
	@NotBlank
	private String username;
	@NotBlank
	private String newpassword;
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getNewpassword() {
		return newpassword;
	}
	public void setNewpassword(String newpassword) {
		this.newpassword = newpassword;
	}


	
}
