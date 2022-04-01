import React from "react";
import { useSelector } from "react-redux";

import { AnalyticsView } from "../views/AnalyticsView";

export const AnalyticsContainer = () => {
    //const authState = useSelector(state => state.AuthReducer);
    const appiData = [
            {State:"Uttar Pradesh",count:3560},
            {State:"Karnataka",count:2562},
            {State :"Rajasthan",count:2459},
            {State:"Maharashtra",count:2366},
            {State:"Bihar",count:1994},
            {State:"Tamil Nadu",count:1885},
            {State:"Gujarat",count:1794},
            {State:"Andhra Pradesh",count:1509},
            {State:"Odisha",count:1375},
            {State:"West Bengal",count:1356},
            {State:"Madhya Pradesh",count:1335},
            {State:"Assam",count:1001},
            {State:"Kerala",count:931},
            {State:"Telangana",count:885},
            {State:"Chhattisgarh",count:837},
            //{State:"Jammu & Kashmir",count:671},{State:"Himachal Pradesh",count:606},{State:"Delhi",count:540},
            //{State:"Haryana",count:476},
          ];
   return  <AnalyticsView apiData={appiData} ></AnalyticsView>
}