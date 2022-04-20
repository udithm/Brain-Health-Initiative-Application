package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.models.ConsultationRecord;

public interface ConsultationRecordRepository extends JpaRepository<ConsultationRecord,Long>{
	ConsultationRecord findById(long Id);
	List<ConsultationRecord> findByPatientId(long patientId);
	List<ConsultationRecord> findByDoctorId(Long Doctor_id);
}
