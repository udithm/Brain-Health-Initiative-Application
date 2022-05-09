import React from "react";
import { useSelector } from "react-redux";
import {ReferalAnalyticsView} from "../views/ReferalAnalyticsView"

export const ReferalAnalyticsContainer = () => {
    const analiticsState = useSelector(state => state.AnalyticsReducer);
    let data1 = [];
    let data2 = [];
    let temp = analiticsState.referalChartData;
    console.log(temp);
    // data.push(analiticsState.diseaseChartData);
    const c1 = ["TotalConsultations","NumberOfReferals","NumberOfNoReferals"];
    const c2 = ["NumberOfReferals","NumberOfReferalsTaken","NumberOfReferalsNotTaken"]
    for (let i = 1; i < 3; i += 1) {
        data1.push({ category: c1[i], val: temp[c1[i]] });
        data2.push({category: c2[i], val: temp[c2[i]] });
      }
      console.log("contai data1",data1);
   return  <ReferalAnalyticsView apiData ={analiticsState.referalChartData} data1={data1} data2={data2}></ReferalAnalyticsView>
}