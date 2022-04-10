import React, { useState } from "react";
import {useSelector} from "react-redux"
import Consultation from "../views/Consultation";
import { setPatientByAPI } from "../services/patientAPI";
import { setConsultationByAPI } from "../services/ConsultationAPI"; 
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Questionnaire from "../views/Questionnaire";

const ViewConsultationContainer = () => {
    const dispatch = useDispatch();
    const consultationState = useSelector(state => state.ConsultationReducer);
    const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
    const setConsultationByID = (id) => setConsultationByAPI(id)(dispatch);
    const [questionnaire,setQuestionnaire] = useState([])
    let { pid,cid } = useParams();
    useEffect(()=>{
      setPatientByID(pid);
      setConsultationByID(cid);
    },[pid,cid])
    useEffect(()=>{
      setQuestionnaire([...questionnaire, consultationState.consultation.responses[0].questionnaire])
    },[])
  return (
    <Consultation view={true} values={consultationState.consultation} questionnaire={questionnaire} />
  )
}

export default ViewConsultationContainer
