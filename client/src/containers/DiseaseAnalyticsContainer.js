import React from "react";
import { useSelector } from "react-redux";
import {DiseaseView} from "../views/DiseaseView"

export const DiseaseAnalyticsContainer = () => {
    //const authState = useSelector(state => state.AuthReducer);

          const data = [];
for (let i = 0; i < 5; i += 1) {
  data.push({ category: `Disease${i}`, val: (i*i*(i/2)%20) +1 });
}
   return  <DiseaseView apiData={data}></DiseaseView>
}