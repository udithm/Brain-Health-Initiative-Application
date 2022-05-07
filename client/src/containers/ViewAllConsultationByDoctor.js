import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setConsultationSelected } from "../services/ConsultationAPI";
import DoctorConsultationsView from "../views/DoctorConsultationsView";
import {
  getConsulationByDoctorId
} from "../services/ConsultationAPI";
import { setPatientByAPI } from "../services/patientAPI";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ViewAllConsultationsByDoctorContainer = () => {
  const dispatch = useDispatch();
  const consultationState = useSelector((state) => state.ConsultationReducer);
  const doctorState = useSelector((state) => state.AuthReducer);
  const getDoctorConsulation = (id) =>
    getConsulationByDoctorId(id)(dispatch);
  const setConsultationCurrent = (consultation) =>
    setConsultationSelected(consultation)(dispatch);
  let { id } = useParams();
  useEffect(() => {
    getDoctorConsulation(doctorState.doctorId);
  }, []);
  return (
    <DoctorConsultationsView
      set={setConsultationCurrent}
      doctor={doctorState}
      values={consultationState.consultations}
    />
  );
};

export default ViewAllConsultationsByDoctorContainer;
