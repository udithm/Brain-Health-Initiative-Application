import React from "react";
import { useSelector } from "react-redux";

import {PrintView} from "../views/PrintView";

const PrintContainer = () => {
    const authState = useSelector(state => state.AuthReducer);
    const consultState = useSelector (state => state.ConsultationReducer);
    const paState = useSelector (state => state.PatientReducer);
    console.log(authState.name);
    return (
    <PrintView 
        dName={authState.userName}
        role={authState.role}
        patient={paState.patient}
        consultation={consultState.consultation}
        />);
};
export default PrintContainer;