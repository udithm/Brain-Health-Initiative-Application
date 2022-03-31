import React from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import {addConsultation} from "../services/ConsultationAPI";
import Consultation from "../views/Consultation";
import { setPatientByAPI } from "../services/patientAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const AddConsultationContainer = () => {
    const dispatch = useDispatch();
    const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
    const patientState = useSelector(state => state.PatientReducer);
    let { id } = useParams();
    useEffect(()=>{
      setPatientByID(id);
    },[id])

    const addConsultationDetails = (consultation) => addConsultation(consultation)(dispatch);
  return (
    <Consultation view={false} add={addConsultationDetails} patient={patientState.patient} />
  )
}

export default AddConsultationContainer
