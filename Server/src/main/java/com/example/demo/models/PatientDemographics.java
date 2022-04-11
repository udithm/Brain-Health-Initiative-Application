package com.example.demo.models;

import java.time.LocalDate;
import java.time.Period;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;

@Entity
@Table(name = "patientDemographics")
public class PatientDemographics {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, updatable = false)
	private long id;

	@Column(name = "abhaId", nullable = false, unique = true)
	@Pattern(regexp = "(^[0-9]+[0-9]*$)", groups = New.class)
	private String abhaId;
	@Column(name = "firstName", nullable = false)
	@NotNull(groups = New.class)
	private String firstName;
	@Column(name = "lastName", nullable = false)
	@NotNull(groups = New.class)
	private String lastName;
	@Column(name = "dob", nullable = false)
	@NotNull(groups = New.class)
	private LocalDate dob;
	@Transient
	private Integer age;
	@Column(name = "gender", nullable = false)
	@NotNull(groups = New.class)
	private String gender;
	@Column(name = "education", nullable = false)
	@NotNull(groups = New.class)
	private String education;
	@Column(name = "occupation", nullable = false)
	@NotNull(groups = New.class)
	private String occupation;
	@Column(name = "language", nullable = false)
	@NotNull(groups = New.class)
	private String language;
	@Column(name = "socioEconomicStatus", nullable = false)
	@NotNull(groups = New.class)
	private String socioEconomicStatus;
	@Column(name = "address", nullable = false)
	@NotNull(groups = New.class)
	private String address;
	@Column(name = "district", nullable = false)
	@NotNull(groups = New.class)
	private String district;
	@Column(name = "pincode", nullable = false)
	@NotNull(groups = New.class)
	@Pattern(regexp = "([0-9]{6})", groups = New.class)
	private String pincode;
	@Column(name = "phoneNo", nullable = false)
	@Pattern(regexp = "(^[6-9]+[0-9]{9})", groups = New.class)
	private String phoneNo;
	@Column(name = "careGiverName", nullable = false)
	@NotNull(groups = New.class)
	private String careGiverName;
	@Column(name = "relationshipWithPatient", nullable = false)
	@NotNull(groups = New.class)
	private String relationshipWithPatient;
	@Column(name = "bloodGroup", nullable = false)
	@NotNull(groups = New.class)
	private String bloodGroup;

	public PatientDemographics() {
	}

	public PatientDemographics(String abhaId, String firstName, String lastName, LocalDate dob, String gender,
			String education,
			String occupation, String language, String socioEconomicStatus, String address, String district,
			String pincode, String phoneNo,
			String careGiverName, String relationshipWithPatient, String bloodGroup) {
		super();
		this.abhaId = abhaId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.dob = dob;
		this.gender = gender;
		this.education = education;
		this.occupation = occupation;
		this.language = language;
		this.socioEconomicStatus = socioEconomicStatus;
		this.address = address;
		this.district = district;
		this.pincode = pincode;
		this.phoneNo = phoneNo;
		this.careGiverName = careGiverName;
		this.relationshipWithPatient = relationshipWithPatient;
		this.bloodGroup = bloodGroup;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String name) {
		this.firstName = name;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String name) {
		this.lastName = name;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}

	public Integer getAge() {
		return Period.between(this.dob, LocalDate.now()).getYears();
	}

	public void setAge(int age) {
		this.age = age;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getLanguage() {
		return language;
	}

	public void setLanguage(String language) {
		this.language = language;
	}

	public String getSocioEconomicStatus() {
		return socioEconomicStatus;
	}

	public void setSocioEconomicStatus(String socioEconomicStatus) {
		this.socioEconomicStatus = socioEconomicStatus;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getDistrict() {
		return district;
	}

	public void setDistrict(String district) {
		this.district = district;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public String getPhoneNo() {
		return phoneNo;
	}

	public void setPhoneNo(String phoneNo) {
		this.phoneNo = phoneNo;
	}

	public String getCareGiverName() {
		return careGiverName;
	}

	public void setCareGiverName(String careGiverName) {
		this.careGiverName = careGiverName;
	}

	public String getRelationshipWithPatient() {
		return relationshipWithPatient;
	}

	public void setRelationshipWithPatient(String relationshipWithPatient) {
		this.relationshipWithPatient = relationshipWithPatient;
	}

	public String getBloodGroup() {
		return bloodGroup;
	}

	public void setBloodGroup(String bloodGroup) {
		this.bloodGroup = bloodGroup;
	}

	public String getAbhaId() {
		return abhaId;
	}

	public void setAbhaId(String abhaId) {
		this.abhaId = abhaId;
	}

	public interface New {
	}

}
