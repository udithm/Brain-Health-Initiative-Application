package com.example.demo.services;

import java.util.HashMap;
import java.util.Map;

import com.example.demo.models.QuestionnaireResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionnaireResponseService {

    HashMap<String, String> ret = new HashMap<>();

    public HashMap<String, String> getNextQuestionnaire(QuestionnaireResponse questionnaireResponse) {
        ret.put("nextQuestionnaire", "none");
        ret.put("Diagnosis", "none");
        ret.put("Referral", "none");

        if (questionnaireResponse.getQuestionnaire().getName().equals("Common")) {
            Map<String, String> answers = questionnaireResponse.getAnswers();
            String yes = "Yes";
            if (answers.get("Q1").equals(yes) || answers.get("Q2").equals(yes) || answers.get("Q3").equals(yes)) {
                ret.put("nextQuestionnaire", "Epilepsy1");
            } else if (answers.get("Q4").equals(yes) || answers.get("Q5").equals(yes) || answers.get("Q6").equals(yes)
                    || answers.get("Q7").equals(yes) || answers.get("Q8").equals(yes)) {
                ret.put("nextQuestionnaire", "Stroke1");
            } else if (answers.get("Q11").equals(yes) || answers.get("Q12").equals(yes)) {
                ret.put("nextQuestionnaire", "Headache");
            } else if (answers.get("Q9").equals(yes) || answers.get("Q13").equals(yes)) {
                ret.put("nextQuestionnaire", "Dementia");
            }
        } else if (questionnaireResponse.getQuestionnaire().getName().equals("Stroke1")) {
            Map<String, String> answers = questionnaireResponse.getAnswers();
            String yes = "Yes";
            if (answers.get("Q1").equals(yes) || answers.get("Q2").equals(yes) || answers.get("Q3").equals(yes)
                    || answers.get("Q4").equals(yes) || answers.get("Q5").equals(yes) || answers.get("Q6").equals(yes)
                    || answers.get("Q7").equals(yes) || answers.get("Q8").equals(yes)) {
                ret.put("Diagnosis", "Stroke");
                ret.put("Referral", "Secondary");
            }
        } else if (questionnaireResponse.getQuestionnaire().getName().equals("Epilepsy1")) {
            Map<String, String> answers = questionnaireResponse.getAnswers();
            String yes = "Yes";
            int cnt = 0;
            int i = 1;
            for (String answer : answers.values()) {
                if (answer.equals(yes)) {
                    cnt += 1;
                }

                i++;
                if (i > 6) {
                    break;
                }
            }
            if (cnt >= 4) {
                if (Integer.parseInt(answers.get("age")) < 10) {
                    if (answers.get("Q9").equals(yes)) {
                        ret.put("nextQuestionnaire", "Apx4");
                    } else {
                        ret.put("nextQuestionnaire", "Apx5");
                    }
                } else {
                    if (answers.get("Q8").equals(yes)) {
                        ret.put("Diagnosis", "Epilepsy");
                    } else {
                        ret.put("Diagnosis", "Uncertain for Epilepsy");
                    }
                }
            } else if (cnt <= 3) {
                if (answers.get("Q7").equals(yes)) {
                    if (answers.get("Q8").equals(yes)) {
                        ret.put("Diagnosis", "Epilepsy");
                    } else {
                        ret.put("Diagnosis", "Uncertain for Epilepsy");
                    }
                } else {
                    ret.put("Diagnosis", "uncertain for seizure");
                }
            }
        } else if (questionnaireResponse.getQuestionnaire().getName().equals("Apx4")) {
            Map<String, String> answers = questionnaireResponse.getAnswers();
            String yes = "Yes";
            if (answers.get("Q1").equals(yes) || answers.get("Q2").equals(yes) || answers.get("Q5").equals(yes)
                    || answers.get("Q6").equals(yes)) {
                ret.put("Diagnosis", "Typical absence seizures");
            } else {
                if (answers.get("Q3").equals(yes) || answers.get("Q4").equals(yes)) {
                    ret.put("Diagnosis", "Probable absence seizures");
                } else {
                    ret.put("Diagnosis", "Generalized seizure");
                }
            }
        } else if (questionnaireResponse.getQuestionnaire().getName().equals("Apx5")) {
            Map<String, String> answers = questionnaireResponse.getAnswers();
            String yes = "Yes";
            if ((answers.get("Q1").equals(yes) || answers.get("Q2").equals(yes) || answers.get("Q3").equals(yes)
                    || answers.get("Q4").equals(yes) || answers.get("Q5").equals(yes) || answers.get("Q6").equals(yes))
                    && Integer.parseInt(answers.get("age")) < 5) {
                ret.put("Diagnosis", "Typical febrile seizure");
            } else {
                ret.put("Diagnosis", "Atypical febrile seizure");
            }
        }
        return ret;
    }
}
