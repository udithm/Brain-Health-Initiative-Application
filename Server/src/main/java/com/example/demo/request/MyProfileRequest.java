package com.example.demo.request;

import javax.validation.constraints.NotBlank;
// import com.example.demo.services.*;
//import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MyProfileRequest {
	@NotBlank
	private Long id;
	
	public MyProfileRequest(@JsonProperty("id") Long id) {
		super();
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	
}
