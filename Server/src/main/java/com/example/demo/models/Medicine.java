package com.example.demo.models;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.example.demo.models.PatientDemographics.New;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "medicineTable")
public class Medicine {

	public Medicine() {
	}

	public Medicine(String medicineName, String dosage, String dosingTime, String duration) {
		super();
		this.medicineName = medicineName;
		this.dosage = dosage;
		this.dosingTime = dosingTime;
		this.duration = duration;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getMedicineName() {
		return medicineName;
	}

	public void setMedicineName(String medicineName) {
		this.medicineName = medicineName;
	}

	public String getDosage() {
		return dosage;
	}

	public void setDosage(String dosage) {
		this.dosage = dosage;
	}

	public String getDosingTime() {
		return dosingTime;
	}

	public void setDosingTime(String dosingTime) {
		this.dosingTime = dosingTime;
	}

	public String getDuration() {
		return duration;
	}

	public void setDuration(String duration) {
		this.duration = duration;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, updatable = false)
	private long id;

	@Column(name = "medicineName", nullable = false)
	// @NotNull(groups = New.class)
	private String medicineName;

	@Column(name = "dosage", nullable = false)
	// @NotNull(groups = New.class)
	private String dosage;

	@Column(name = "dosingTime", nullable = false)
	// @NotNull(groups = New.class)
	private String dosingTime;

	@Column(name = "duration", nullable = false)
	// @NotNull(groups = New.class)
	private String duration;


	@Override
	public String toString() {
		return "Medicine [id=" + id + ", medicineName=" + medicineName + ", dosage=" + dosage + ", dosingTime="
				+ dosingTime + ", duration=" + duration + "]";
	}

	public interface New {
	}

}
