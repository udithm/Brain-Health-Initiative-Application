package com.example.demo.services;

import java.util.HashMap;
import java.util.Map;

import com.example.demo.models.QuestionnaireResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QuestionnaireResponseService {

    HashMap<String, String> ret = new HashMap<>();

    @Autowired
    // private QuestionnaireResponseRepository questionnaireResponseRepository;

    public HashMap<String, String> getNextQuestionnaire(QuestionnaireResponse questionnaireResponse) {
        ret.put("nextQuestionnaire", "none");
        ret.put("Diagnosis", "none");
        ret.put("Referral", "none");

        if (questionnaireResponse.getQuestionnaire().getName().equals("Common")) {
            Map<String, String> answers = questionnaireResponse.getAnswers();
            String yes = "Yes";
            if (answers.get("Q1").equals(yes) || answers.get("Q2").equals(yes) || answers.get("Q3").equals(yes)) {
                ret.put("nextQuestionnaire", "Epilepsy1");
                return ret;
            }
            if (answers.get("Q4").equals(yes) || answers.get("Q5").equals(yes) || answers.get("Q6").equals(yes)
                    || answers.get("Q7").equals(yes) || answers.get("Q8").equals(yes)) {
                ret.put("nextQuestionnaire", "Stroke1");
                return ret;
            }
            if (answers.get("Q11").equals(yes) || answers.get("Q12").equals(yes)) {
                ret.put("nextQuestionnaire", "Headache");
                return ret;
            }
            if (answers.get("Q9").equals(yes) || answers.get("Q13").equals(yes)) {
                ret.put("nextQuestionnaire", "Dementia");
                return ret;
            }
        } else if (questionnaireResponse.getQuestionnaire().getName().equals("Stroke1")) {
            Map<String, String> answers = questionnaireResponse.getAnswers();
            String yes = "Yes";
            if (answers.get("Q1").equals(yes) || answers.get("Q2").equals(yes) || answers.get("Q3").equals(yes)
                    || answers.get("Q4").equals(yes) || answers.get("Q5").equals(yes) || answers.get("Q6").equals(yes)
                    || answers.get("Q7").equals(yes) || answers.get("Q8").equals(yes)) {
                ret.put("Diagnosis", "Stroke");
                ret.put("Referral", "Secondary");
                return ret;
            }
        }
        return ret;
    }
}
