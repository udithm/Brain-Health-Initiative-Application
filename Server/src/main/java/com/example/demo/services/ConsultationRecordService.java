package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.ConsultationRecord;
import com.example.demo.models.Medicine;
import com.example.demo.models.QuestionnaireResponse;
import com.example.demo.repository.ConsultationRecordRepository;
import com.example.demo.repository.MedicineRepository;

@Service
public class ConsultationRecordService {

	@Autowired
	private ConsultationRecordRepository consultationRecordRepository;
	
	public ConsultationRecord addNewConsultation(ConsultationRecord consultationRecord) {
		ConsultationRecord newConsultationRecord = new ConsultationRecord(
				consultationRecord.getPatient(),
				consultationRecord.getDoctor(),
				consultationRecord.getConsultationDate(),
				consultationRecord.getComplaint(),
				consultationRecord.getExamination(),
				consultationRecord.getIllnessSummary(),
				consultationRecord.getDiagnosisType(),
				consultationRecord.getIcdDescription(),
				consultationRecord.getIcd10Code(),
				consultationRecord.getImprovementStatus(),
				consultationRecord.getReferedHospitalType(),
				consultationRecord.getReferedHospital(),
				consultationRecord.getReferedHospitalId(),
				consultationRecord.getTreatmentInstructions(),
				consultationRecord.getRemarks(),
				consultationRecord.getFollowUpDate(),
				consultationRecord.isMoveToIp(),
				consultationRecord.isReviewSos(),
				consultationRecord.getSuggestedDiagnosis());
		ArrayList < Medicine > medicineList = new ArrayList<>();
		for (Medicine m : consultationRecord.getMedicines()) {
		     medicineList.add(new Medicine(m.getMedicineName(),m.getDosage(),m.getDosingTime(),m.getDuration()));
		}
		newConsultationRecord.setMedicines(medicineList);
		
		ArrayList < QuestionnaireResponse > responseList = new ArrayList<>();
		for (QuestionnaireResponse r : consultationRecord.getResponses()) {
			responseList.add(new QuestionnaireResponse(r.getQuestionnaire(),r.getAnswers()));
		}
		newConsultationRecord.setResponses(responseList);
		
		System.out.println("add new inside service" + consultationRecord.toString());
		return consultationRecordRepository.save(newConsultationRecord);
	}
	
	public List<ConsultationRecord> getAllConsultationRecords(){
		List<ConsultationRecord> records = new ArrayList<ConsultationRecord>();
		consultationRecordRepository.findAll().forEach(records::add);
		for(ConsultationRecord e:records) {
			System.out.println("get all inside service" + e.toString());
		}
		return records;
	}
	
	public ConsultationRecord getConsultationRecordById(long id){
		return consultationRecordRepository.findById(id);
	}

	public List<ConsultationRecord> getAllConsultationRecordsByPatientId(long patientId) {
		List<ConsultationRecord> records = new ArrayList<ConsultationRecord>();
		consultationRecordRepository.findByPatientId(patientId).forEach(records::add);
		for(ConsultationRecord e:records) {
			System.out.println("get by patient inside service" + e.toString());
		}
		return records;
	}
	
	public List<ConsultationRecord> getHospitalConsultationRecordsByPatientId(long patientId,long hospitalId) {
		List<ConsultationRecord> records = new ArrayList<ConsultationRecord>();
		consultationRecordRepository.findByPatientIdAndDoctorHospitalId(patientId, hospitalId).forEach(records::add);
		for(ConsultationRecord e:records) {
			System.out.println("get by hospital : patient inside service" + e.toString());
		}
		return records;
	}
	
	public List<ConsultationRecord> getAllConsultationRecordsByDoctorId(long Doctor_id) {
		List<ConsultationRecord> records = new ArrayList<ConsultationRecord>();
		consultationRecordRepository.findByDoctorId(Doctor_id).forEach(records::add);
		for(ConsultationRecord e:records) {
			System.out.println("get by doctor inside service" + e.toString());
		}
		return records;
	}
}
