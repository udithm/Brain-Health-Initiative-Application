import React from "react";
import { useSelector } from "react-redux";
import {DistrictHospitalView} from "../views/DistrictHospitalView"

export const DistrictHospitalAnalyticsContainer = () => {
    const analiticsState = useSelector(state => state.AnalyticsReducer);
    let data1 = [];
    let data2 = [];
    let temp = analiticsState.phcChartData;    // data.push(analiticsState.diseaseChartData);
    console.log(temp);
    let temp1 = analiticsState.districtHospitalChartData;    // data.push(analiticsState.diseaseChartData);
    console.log(temp1);
    const c1 = ["NumberOfPHC","NumberOfSHC","NumberOfTHC","TotalHospitals"];

    for (let i = 0; i < 4; i += 1) {
        data1.push({ category: c1[i], val: temp[c1[i]] });  
    }
    for (let i = 0; i < 3; i += 1) {
        data2.push({ category: c1[i], val: temp1[c1[i]] });  
    }
   return  <DistrictHospitalView apiData={temp} data1={data1} apiData1={temp1} data2={data2}></DistrictHospitalView>
}