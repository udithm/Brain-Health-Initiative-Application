package com.example.demo.models;

import java.util.HashMap;
import java.util.Map;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;
import org.hibernate.annotations.TypeDef;

import com.vladmihalcea.hibernate.type.json.JsonType;

@Entity
@Table(name = "questionnaire")
@TypeDef(name="json", typeClass = JsonType.class)
public class Questionnaire {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false, updatable = false)
	private long id;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "version", nullable = false)
	private String version;
	
	@Type(type = "json")
    @Column(columnDefinition = "json")
    private Map<String, Question> questions = new HashMap<>();

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

	public String getVersion() {
		return version;
	}

	public void setVersion(String version) {
		this.version = version;
	}

	public Map<String, Question> getQuestions() {
		return questions;
	}

	public void setQuestions(Map<String, Question> questions) {
		this.questions = questions;
	}
	
	public void addQuestion(String key, Question value) {
		questions.put(key, value);
	}

	public Questionnaire(String name, String version, Map<String, Question> questions) {
		super();
		this.name = name;
		this.version = version;
		this.questions = questions;
	}

	public Questionnaire() {
		super();
	}
	
}
