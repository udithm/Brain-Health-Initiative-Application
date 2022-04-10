import React from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import {setConsultationSelected} from "../services/ConsultationAPI";
import AllConsultations from "../views/AllConsultations";
import { getConsultations } from "../services/ConsultationAPI";
import { setPatientByAPI } from "../services/patientAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewAllConsultationsContainer = () => {
    const dispatch = useDispatch();
    const consultationState = useSelector(state => state.ConsultationReducer);
    const patientState = useSelector(state => state.PatientReducer);
    const getPatientConsultations = (id) => getConsultations(id)(dispatch);
    const setConsultationCurrent = (consultation) => setConsultationSelected(consultation)(dispatch);
    const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
    let { id } = useParams();
    useEffect(()=>{
      setPatientByID(id);
      getPatientConsultations(id);
    },[id])
  return (
    <AllConsultations set={setConsultationCurrent} get={getPatientConsultations} patient={patientState.patient} values={consultationState.consultations}/>
  )
}

export default ViewAllConsultationsContainer
