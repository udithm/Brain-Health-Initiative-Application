import React from "react";
import { useSelector } from "react-redux";
import {Icd10AnalyticsView} from "../views/Icd10AnalyticsView"

export const Icd10AnalyticsContainer = () => {
    const analiticsState = useSelector(state => state.AnalyticsReducer);
    let data1 = [];
    let data2 = [];
    let temp = analiticsState.icd10ChartData;    // data.push(analiticsState.diseaseChartData);
    console.log(temp);
    let temp1 = analiticsState.icd10ChartData;    // data.push(analiticsState.diseaseChartData);
    console.log(temp1);
    const c1 = []
    for (var k in temp) c1.push(k);
    for (let i = 0; i < c1.length; i += 1) {
        data1.push({ category: c1[i], val: temp[c1[i]] });  
    }
    // for (let i = 0; i < 3; i += 1) {
    //     data2.push({ category: c1[i], val: temp1[c1[i]] });  
    // }
   return  <Icd10AnalyticsView apiData={temp} data1={data1}></Icd10AnalyticsView>
}