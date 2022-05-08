import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addConsultation,
  setConsultationSelected,
} from "../services/ConsultationAPI";
import Consultation from "../views/Consultation";
import { setPatientByAPI } from "../services/patientAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "../common/config/AxiosConfig";
import { getHospitalsforReferral } from "../services/ConsultationAPI";
const AddConsultationContainer = () => {
  const dispatch = useDispatch();
  const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
  const setConsultationCurrent = (consultation) =>
    setConsultationSelected(consultation)(dispatch);

  const patientState = useSelector((state) => state.PatientReducer);
  const doctorState = useSelector((state) => state.AuthReducer);
  const ConsultationState = useSelector(state => state.ConsultationReducer);
  let { id } = useParams();
  const [questionnaire, setQuestionnaire] = useState([]);
  useEffect(() => {
    console.log("ADD Container");
    setPatientByID(id);
    axios
      .get("/v1/questionnaire/")
      .then((res) => {
        console.log(res.data);
        setQuestionnaire(res.data);
      })
      .catch((err) => {
        console.log(err);
        return err.message;
      });
  }, []);
  useEffect(() => {
    // var hid1= localStorage.getItem("hid")
    // console.log("this is hid",hid1);
    getHospitalsforReferral()(dispatch);
}, [])
  useEffect(() => {}, [patientState.patient]);
  const addConsultationDetails = (consultation) =>
    addConsultation(consultation)(dispatch);
  return (
    <Consultation
      view={false}
      add={addConsultationDetails}
      set={setConsultationCurrent}
      patient={patientState.patient}
      doctor={doctorState}
      questionnaire={questionnaire}
      getHospitalsforRef ={ConsultationState.refHosList}
    />
  );
};

export default AddConsultationContainer;
