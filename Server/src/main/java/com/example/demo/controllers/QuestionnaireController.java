package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Questionnaire;
import com.example.demo.repository.QuestionnaireRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "api/v1/questionnaire")
public class QuestionnaireController {

	@Autowired
	private QuestionnaireRepository questionnaireRepository;
	
	//API to add a questionnaire in the database
	@PostMapping
	public Questionnaire addQuestionnaire(@RequestBody Questionnaire questionnaire) {
		return questionnaireRepository.save(questionnaire);
	}
	
	@GetMapping
	public List<Questionnaire> getAllQuestionnaires() {
		return questionnaireRepository.findAll();
	}
}
