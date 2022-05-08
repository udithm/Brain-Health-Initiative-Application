import React, { useState } from "react";
import { useSelector } from "react-redux";
import Consultation from "../views/Consultation";
import { setPatientByAPI } from "../services/patientAPI";
import { setConsultationByAPI } from "../services/ConsultationAPI";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Questionnaire from "../views/Questionnaire";
// import { getHospitalsforReferral } from "../services/patientAPI";
const ViewConsultationContainer = () => {
  const dispatch = useDispatch();
  const consultationState = useSelector((state) => state.ConsultationReducer);
  const patientState = useSelector((state) => state.PatientReducer);
  const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
  const setConsultationByID = (id) => setConsultationByAPI(id)(dispatch);
  const [questionnaire, setQuestionnaire] = useState([]);
  let { pid, cid } = useParams();
  useEffect(() => {
    setPatientByID(pid);
    setConsultationByID(cid);
    // getHospitalsforReferral();
  }, [pid, cid]);
  useEffect(() => {
    consultationState.consultation.responses &&
      consultationState.consultation.responses.length !== 0 &&
      setQuestionnaire([
        ...questionnaire,
        consultationState.consultation.responses[0].questionnaire,
      ]);
  }, [consultationState.consultation]);
  return consultationState.consultation.responses ? (
    <Consultation
      view={true}
      values={consultationState.consultation}
      patient={patientState.patient}
      questionnaire={questionnaire}
    />
  ) : (
    <></>
  );
};

export default ViewConsultationContainer;
