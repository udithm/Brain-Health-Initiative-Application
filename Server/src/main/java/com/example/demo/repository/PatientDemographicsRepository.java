package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.models.PatientDemographics;

@Repository
public interface PatientDemographicsRepository extends JpaRepository<PatientDemographics,Long> {
	PatientDemographics findById(long id);
	
	List<PatientDemographics> findByAbhaId(String abhaId);
	
	List<PatientDemographics> findByPhoneNo(String phoneNo);
	
	List<PatientDemographics> findByFirstNameIgnoreCase(String firstName);

}
