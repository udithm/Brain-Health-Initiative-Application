package com.example.demo.controllers;

import java.util.HashMap;

import com.example.demo.models.QuestionnaireResponse;
import com.example.demo.services.QuestionnaireResponseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(path = "api/v1/response")

public class QuestionnaireResponseController {
    @Autowired
    private QuestionnaireResponseService questionnaireResponseService;

    @PostMapping
    public HashMap<String, String> getNextQuestionnaire(@RequestBody QuestionnaireResponse questionnaireResponse){
        return questionnaireResponseService.getNextQuestionnaire(questionnaireResponse);
    }
}
