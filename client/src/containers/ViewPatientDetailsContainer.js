import React, { useEffect } from "react";
import {useSelector} from "react-redux"
import PatientDetails from "../views/PatientDetails";
import { setPatientByAPI } from "../services/patientAPI";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const ViewPatientDetailsContainer = () => {
    const dispatch = useDispatch();
    const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
    const patientState = useSelector(state => state.PatientReducer);
    let { id } = useParams();
    useEffect(()=>{
      setPatientByID(id);
    },[id])
  return (
    <PatientDetails view={true} values={patientState.patient} />
  )
}

export default ViewPatientDetailsContainer
