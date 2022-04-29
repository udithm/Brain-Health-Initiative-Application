import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux"
import { setConsultationSelected } from "../services/ConsultationAPI";
import AllConsultations from "../views/AllConsultations";
import { getConsultations, getPatientConsultationsInHospital } from "../services/ConsultationAPI";
import { setPatientByAPI } from "../services/patientAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewAllConsultationsContainer = () => {
  const dispatch = useDispatch();
  const consultationState = useSelector(state => state.ConsultationReducer);
  const patientState = useSelector(state => state.PatientReducer);
  const doctorState = useSelector(state => state.AuthReducer);
  const getPatientConsultations = (id) => getConsultations(id)(dispatch);
  const getConsultationsbyHospitalAndPatient = (pid, hid) => getPatientConsultationsInHospital(pid, hid)(dispatch);
  const setConsultationCurrent = (consultation) => setConsultationSelected(consultation)(dispatch);
  const setPatientByID = (id) => setPatientByAPI(id)(dispatch);
  let { id } = useParams();
  useEffect(() => {
    setPatientByID(id);
    // getPatientConsultations(id);
    console.log(doctorState.Hospital.id);
    getConsultationsbyHospitalAndPatient(id, doctorState.Hospital.id);
  }, [id, doctorState.Hospital.id])
  return (
    <AllConsultations set={setConsultationCurrent} get={getPatientConsultations} patient={patientState.patient} values={consultationState.consultations} />
  )
}

export default ViewAllConsultationsContainer
