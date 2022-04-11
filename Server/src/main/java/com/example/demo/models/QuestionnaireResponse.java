package com.example.demo.models;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import com.vladmihalcea.hibernate.type.json.JsonType;

@Entity
@Table(name = "questionnaireResponses")
@TypeDef(name="json", typeClass = JsonType.class)
public class QuestionnaireResponse {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, updatable = false)
	private long id;
	
	@ManyToOne
    @JoinColumn(name = "questionnaireId")
    private Questionnaire questionnaire;
	
	@Type(type = "json")
    @Column(columnDefinition = "json")
    private Map<String, String> answers = new HashMap<>();

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public Questionnaire getQuestionnaire() {
		return questionnaire;
	}

	public void setQuestionnaire(Questionnaire questionnaire) {
		this.questionnaire = questionnaire;
	}

	public Map<String, String> getAnswers() {
		return answers;
	}

	public void setAnswers(Map<String, String> answers) {
		this.answers = answers;
	}

	public QuestionnaireResponse(Questionnaire questionnaire, Map<String, String> answers) {
		super();
		this.questionnaire = questionnaire;
		this.answers = answers;
	}

	public QuestionnaireResponse() {
		super();
	}


	
	

}
