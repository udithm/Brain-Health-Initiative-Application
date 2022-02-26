package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;

@Entity
@Table(name = "hospital")
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(length = 20)
	private String name;
	@Column(length = 50)
	private String address;
	@Column(length = 20)
	private String type;
	@Column(length = 30)
	@Email
	private String email;
	@Column(length = 13)
	private long contactNumber;
	
	public Hospital() {
		super();
	}
	
	public Hospital(String name, String address, String type, String email, long contactNumber) {
		super();
		this.name = name;
		this.address = address;
		this.type = type;
		this.email = email;
		this.contactNumber = contactNumber;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(long contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "Hospital [id=" + id + ", name=" + name + ", address=" + address + ", Type=" + type
				+ ", contactNumber=" + contactNumber + ", email=" + email + "]";
	}
}
