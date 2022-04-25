import React from "react";
import { useSelector } from "react-redux";

import {PrintView} from "../views/PrintView";

const PrintContainer = (shouldOpen,handleClose) => {
    const authState = useSelector(state => state.AuthReducer);
    const consultState = useSelector (state => state.ConsultationReducer);
    const paState = useSelector (state => state.PatientReducer);
    console.log(authState.name);
    // console.log(shouldOpen,handleClose)
    return (
    <PrintView 
        dName={authState.userName}
        dRole={authState.role}
        patient={paState.patient}
        consultation={consultState.consultation}
        handleClose= {handleClose}
        shouldOpen= {shouldOpen}
        />);
};
export default PrintContainer;