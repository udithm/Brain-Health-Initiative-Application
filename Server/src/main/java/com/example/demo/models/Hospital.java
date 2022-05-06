package com.example.demo.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "hospital")
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(length = 20)
	private String name;
	@Column(length = 25)
	private String city;
	@Column(length = 25)
	private String state;
	@Column(columnDefinition="TEXT")
//	@Type(type="text")
	private String district;
	@Column(length = 50)
	private String type;
	@Column(length = 30)
	@Email
	@NotNull
	private String email;
	@Column(length = 10)
	private String pincode;
	@Column(length = 20)
	private String contactNumber;
	
	public Hospital() {
		super();
	}
	
	public Hospital(String name, String city, String state, String district, String type, String email, String pincode, String contactNumber) {
		super();
		this.name = name;
		this.city = city;
		this.state = state;
		this.district = district;
		this.type = type;
		this.email = email;
		this.pincode = pincode;
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
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	public String getDistrict() {
		return district;
	}
	public void setDistrict(String district) {
		this.district = district;
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
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}

	@Override
	public String toString() {
		return "Hospital [id=" + id + ", name=" + name + ", address=" + city + state + district +", Type=" + type
				+ ", contactNumber=" + contactNumber + ", email=" + email + ", pincode="+ pincode + "]";
	}
}
