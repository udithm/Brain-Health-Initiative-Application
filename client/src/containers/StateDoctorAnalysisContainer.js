import React from "react";
import { useSelector } from "react-redux";
import {StateDoctorAnalyticsView} from "../views/StateDoctorAnalyticsView"

export const StateDoctorAnalyticsContainer = () => {
    const analiticsState = useSelector(state => state.AnalyticsReducer);
    let data1 = [];
    let data2 = [];
    let temp = analiticsState.stateDoctorChartData;    // data.push(analiticsState.diseaseChartData);
    console.log(temp);
    const c1 = ["NumberOfPD","NumberOfSS","NumberOfTS"];

    for (let i = 0; i < 4; i += 1) {
        data1.push({ category: c1[i], val: temp[c1[i]] });  
    }

   return  <StateDoctorAnalyticsView apiData={temp} data1={data1}></StateDoctorAnalyticsView>
}