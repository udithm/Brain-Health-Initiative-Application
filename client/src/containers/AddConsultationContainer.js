import React from "react";
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux"
import {addConsultation,getCommonQuestionnaire} from "../services/ConsultationAPI";
import Consultation from "../views/Consultation";
import { setPatientByAPI } from "../services/patientAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "../common/config/AxiosConfig";

const AddConsultationContainer = () => {
    const dispatch = useDispatch();
    const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
    const patientState = useSelector(state => state.PatientReducer);
    let { id } = useParams();
    const [questions,setQuestions] = useState([])
    useEffect(()=>{
      setPatientByID(id);
      axios
      .get ("/v1/questionnaire/Common") 
      .then ((res) => {
          setQuestions(res.data);
      })
      .catch((err)=>{
          return err.message;
      })
    },[])
    // useEffect(()=>{},[questions])

    const addConsultationDetails = (consultation) => addConsultation(consultation)(dispatch);
  return (
    <Consultation view={false} add={addConsultationDetails} patient={patientState.patient} questions={questions} />
  )
}

export default AddConsultationContainer
