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
    const [questionnaire,setQuestionnaire] = useState([])
    useEffect(()=>{
      console.log("ADD Container");
      setPatientByID(id);
      axios
      .get ("/v1/questionnaire/") 
      .then ((res) => {
          console.log(res.data)
          setQuestionnaire(res.data);
      })
      .catch((err)=>{
        console.log(err);
          return err.message;
      })
    },[])

    const addConsultationDetails = (consultation) => addConsultation(consultation)(dispatch);
  return (
    <Consultation view={false} add={addConsultationDetails} patient={patientState.patient} questionnaire={questionnaire} />
  )
}

export default AddConsultationContainer
