package com.example.demo.models;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

@Entity
@Table(name = "consultationRecords")
public class ConsultationRecord {

	public ConsultationRecord(PatientDemographics patient,Doctor doctor, @NotNull(groups = New.class) LocalDate consultationDate,
			@NotNull(groups = New.class) String complaint, @NotNull(groups = New.class) String examination,
			@NotNull(groups = New.class) String illnessSummary, @NotNull(groups = New.class) String diagnosisType,
			@NotNull(groups = New.class) String icdDescription, @NotNull(groups = New.class) String icd10Code,
			@NotNull(groups = New.class) String improvementStatus, String referedHospitalType, String referedHospital, long referedHospitalId,
			@NotNull(groups = New.class) String treatmentInstructions, String remarks, LocalDate followUpDate,
			boolean moveToIp, boolean reviewSos,String suggestedDiagnosis) {
		super();
		this.patient = patient;
		this.doctor=doctor;
		this.consultationDate = consultationDate;
		this.complaint = complaint;
		this.examination = examination;
		this.illnessSummary = illnessSummary;
		this.diagnosisType = diagnosisType;
		this.icdDescription = icdDescription;
		this.icd10Code = icd10Code;
		this.improvementStatus = improvementStatus;
		this.treatmentInstructions = treatmentInstructions;
		this.remarks = remarks;
		this.followUpDate = followUpDate;
		this.moveToIp = moveToIp;
		this.referedHospitalType= referedHospitalType;
		this.referedHospital = referedHospital;
		this.referedHospitalId = referedHospitalId;
		this.reviewSos = reviewSos;
		this.suggestedDiagnosis=suggestedDiagnosis;
	}

	public String getReferedHospitalType() {
		return referedHospitalType;
	}

	public void setReferedHospitalType(String referedHospitalType) {
		this.referedHospitalType = referedHospitalType;
	}

	public long getReferedHospitalId() {
		return referedHospitalId;
	}

	public void setReferedHospitalId(long referedHospitalId) {
		this.referedHospitalId = referedHospitalId;
	}

	public ConsultationRecord() {
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, updatable = false)
	private long id;

	// Foreign key to doctor many to one relationship needs to be added
	@ManyToOne
	@JoinColumn(name = "patientId")
	private PatientDemographics patient;
	
	@ManyToOne
	@JoinColumn(name="doctorId")
	private Doctor doctor;

	@Column(name = "consultationDate", nullable = false)
	@NotNull(groups = New.class)
	private LocalDate consultationDate;

	@Column(name = "complaint", nullable = false)
	@NotNull(groups = New.class)
	private String complaint;

	@Column(name = "examination", nullable = false)
	@NotNull(groups = New.class)
	private String examination;

	@Column(name = "illnessSummary", nullable = false)
	@NotNull(groups = New.class)
	private String illnessSummary;

	// (Differential, Provisional, Tentative, Final)
	@Column(name = "diagnosisType", nullable = false)
	@NotNull(groups = New.class)
	private String diagnosisType;

	@Column(name = "icdDescription", nullable = false)
	@NotNull(groups = New.class)
	private String icdDescription;

	@Column(name = "icd10Code", nullable = false)
	@NotNull(groups = New.class)
	private String icd10Code;

	// Condition Improved, Condition Worsened, Condition unchanged
	@Column(name = "improvementStatus", nullable = false)
	@NotNull(groups = New.class)
	private String improvementStatus;

	// ** one to many mapping with medicineTable

	@OneToMany(targetEntity = Medicine.class, cascade = CascadeType.ALL, orphanRemoval = true)
	@LazyCollection(LazyCollectionOption.FALSE)
	@JoinColumn(name = "formId", referencedColumnName = "id")
	private List<Medicine> medicines;

	// ** one to many mapping with medicineTable
	
	// ** one to many mapping with questionnaire Response
	
	@OneToMany(targetEntity = QuestionnaireResponse.class, cascade = CascadeType.ALL, orphanRemoval = true)
	@LazyCollection(LazyCollectionOption.FALSE)
	@JoinColumn(name = "formId", referencedColumnName = "id")
	private List<QuestionnaireResponse> responses;
	
	// ** one to many mapping with questionnaire Response

	public List<QuestionnaireResponse> getResponses() {
		return responses;
	}

	public void setResponses(List<QuestionnaireResponse> responses) {
		this.responses = responses;
	}

	@Column(name = "treatmentInstructions", nullable = false)
	@NotNull(groups = New.class)
	private String treatmentInstructions;

	
	@Column(name = "remarks")
	private String remarks;

	@Column(name = "referedHospitalType")
	private String referedHospitalType;
	
	public String getReferedHospital() {
		return referedHospital;
	}

	public void setReferedHospital(String referedHospital) {
		this.referedHospital = referedHospital;
	}

	@Column(name = "referedHospitalId")
	private long referedHospitalId;
	
	@Column(name = "referedHospital")
	private String referedHospital;
	
	@Column(name = "followUpDate")
	private LocalDate followUpDate;

	@Column(name = "moveToIp"

	)
	private boolean moveToIp;

	@Column(name = "reviewSOS")
	private boolean reviewSos;

	// Referral needs to be added
	
	@Column(name = "suggestedDiagnosis")
	private String suggestedDiagnosis;

	public String getSuggestedDiagnosis() {
		return suggestedDiagnosis;
	}

	public void setSuggestedDiagnosis(String suggestedDiagnosis) {
		this.suggestedDiagnosis = suggestedDiagnosis;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public PatientDemographics getPatient() {
		return patient;
	}

	public void setPatient(PatientDemographics patient) {
		this.patient = patient;
	}
	
	public Doctor getDoctor() {
		return doctor;
	}

	public void setDoctor(Doctor doctor) {
		this.doctor = doctor;
	}

	public LocalDate getConsultationDate() {
		return consultationDate;
	}

	public void setConsultationDate(LocalDate consultationDate) {
		this.consultationDate = consultationDate;
	}

	public String getComplaint() {
		return complaint;
	}

	public void setComplaint(String complaint) {
		this.complaint = complaint;
	}

	public String getExamination() {
		return examination;
	}

	public void setExamination(String examination) {
		this.examination = examination;
	}

	public String getIllnessSummary() {
		return illnessSummary;
	}

	public void setIllnessSummary(String illnessSummary) {
		this.illnessSummary = illnessSummary;
	}

	public String getDiagnosisType() {
		return diagnosisType;
	}

	public void setDiagnosisType(String diagnosisType) {
		this.diagnosisType = diagnosisType;
	}

	public String getIcdDescription() {
		return icdDescription;
	}

	public void setIcdDescription(String icdDescription) {
		this.icdDescription = icdDescription;
	}

	public String getIcd10Code() {
		return icd10Code;
	}

	public void setIcd10Code(String icd10Code) {
		this.icd10Code = icd10Code;
	}

	public String getImprovementStatus() {
		return improvementStatus;
	}

	public void setImprovementStatus(String improvementStatus) {
		this.improvementStatus = improvementStatus;
	}

	public List<Medicine> getMedicines() {
		return medicines;
	}

	public void setMedicines(List<Medicine> medicines) {
		this.medicines = medicines;
	}
	
//	public List<QuestionResponse> getResponses() {
//		return responses;
//	}
//
//	public void setResponses(List<QuestionResponse> responses) {
//		this.responses = responses;
//	}

	public String getTreatmentInstructions() {
		return treatmentInstructions;
	}

	public void setTreatmentInstructions(String treatmentInstructions) {
		this.treatmentInstructions = treatmentInstructions;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	public LocalDate getFollowUpDate() {
		return followUpDate;
	}

	public void setFollowUpDate(LocalDate followUpDate) {
		this.followUpDate = followUpDate;
	}

	public boolean isMoveToIp() {
		return moveToIp;
	}

	public void setMoveToIp(boolean moveToIp) {
		this.moveToIp = moveToIp;
	}

	public boolean isReviewSos() {
		return reviewSos;
	}

	public void setReviewSos(boolean reviewSos) {
		this.reviewSos = reviewSos;
	}

	@Override
	public String toString() {
		return "ConsultationRecord [id=" + id + ", patient=" + patient + ", consultationDate=" + consultationDate
				+ ", complaint=" + complaint + ", examination=" + examination + ", illnessSummary=" + illnessSummary
				+ ", diagnosisType=" + diagnosisType + ", icdDescription=" + icdDescription + ", icd10Code=" + icd10Code
				+ ", improvementStatus=" + improvementStatus + ", medicines=" + medicines + ", treatmentInstructions="
				+ treatmentInstructions + ", remarks=" + remarks + ", followUpDate=" + followUpDate + ", moveToIp="
				+ moveToIp + ", reviewSos=" + reviewSos + "]";
	}

	public interface New {
	}

}
