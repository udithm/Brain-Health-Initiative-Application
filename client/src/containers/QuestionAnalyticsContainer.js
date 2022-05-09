import React from "react";
import { useSelector } from "react-redux";
import { QuestionAnalyticsView } from "../views/QuestionAnalyticsView";

export const QuestionAnalyticsContainer = () => {
    const analiticsState = useSelector(state => state.AnalyticsReducer);
    let data1 = [];
    let data2 = [];
    let temp = analiticsState.questionChartData;
    console.log(temp);
    // data.push(analiticsState.diseaseChartData);
    const c1 = ["NumberOfConsultations","TotalQuestionnaireUsed"];
    for (let i = 0; i < 2; i += 1) {
        data1.push({ category: c1[i], val: temp[c1[i]] });
      }
      console.log("contai question data1",data1);
   return  <QuestionAnalyticsView apiData ={analiticsState.questionChartData} data1={data1}></QuestionAnalyticsView>
}