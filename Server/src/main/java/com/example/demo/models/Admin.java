package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "admin")
public class Admin {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(length = 30)
	private String fname;
	@Column(length = 30)
	private String lname;
	@Column(length = 30)
	private String password;
	@Column(length = 25)
	private String gender;
	@Column(length = 50)
	private String role;
	@Column(length = 30)
	@Email
	@NotNull
	private String email;
	@Column(length = 30)
	private String orgName;
	@Column(length = 20)
	private String contactNumber;
	
	public Admin() {
		super();
	}
	
	public Admin(String fname, String lname, String email, String password, String role, String gender, String orgName, String contactNumber) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.password = password;
		this.gender = gender;
		this.role = role;
		this.email = email;
		this.orgName = orgName;
		this.contactNumber = contactNumber;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
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
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getOrgName() {
		return orgName;
	}
	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}
	
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

}
