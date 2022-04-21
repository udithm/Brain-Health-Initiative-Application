import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800 ,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
  };

export const PrintView = ({dName,dRole,patient,consultation,shouldOpen, handleClose}) => {
    console.log("asdfhgasbjdf");
    console.log(shouldOpen)
    

    return (
        <>
        <Modal
        open={shouldOpen.shouldOpen}
        onClose={shouldOpen.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <div id="modal-modal-title">
                <h1>Hospital name</h1>
                <h2>Hospital adreess</h2>
                <h3>Hospital Number</h3>
            </div>
            <hr />
            <div id="modal-modal-title">
                <ul>
                    <h3>Doctor details </h3>
                    <li>  Name : <span> {dName}</span> </li>
                    <li>  Role : <span> {dRole} </span> </li>
                    
                    <h3>Patient details </h3>
                    <li>  Name : <span> {patient.firstName} {patient.lastName} </span> </li>
                    <li> Gender : <span> {patient.gender} </span> </li>
                    <li> Date of Birth : <span> {patient.dob}</span> </li>
                    <li> Blood Group : <span> {patient.bloodgroup}</span></li>
                    <li> Phone No: <span> </span> {patient.num} </li>
                    <li> Address : <span> {patient.address}</span> </li>
                    <li> District : <span> {patient.district}</span> </li>
                    <li> Pin Code : <span> {patient.pincode}</span> </li>

                    <h3>Consultation details </h3>
                    <li> Consultation Date : <span> {consultation.consultationDate} </span> </li>
                    <li> Complaint : <span> {consultation.complaint} </span> </li>
                    <li> Examination : <span> {consultation.examination} </span> </li>
                    <li> Illness Summary : <span> {consultation.illnessSummary} </span> </li>
                    <li> Diagnosis Type : <span> {consultation.diagnosisType} </span> </li>
                    <li> ICD Description : <span> {consultation.iCDDescription} </span> </li>
                    <li> ICD10 Code : <span> {consultation.iCD10Code} </span> </li>
                    <li> Improvement Status : <span> {consultation.improvementStatus} </span> </li>
                    <li> Treatment Instructions : <span> {consultation.treatmentInstructions} </span> </li>
                    <li> Remarks : <span> {consultation.remarks} </span> </li>
                    <li> Follow Up : <span> {consultation.followUp} </span> </li>
                    <li> Referral : <span> {consultation.referral} </span> </li>
                    <li> Move To IP : <span> {consultation.moveToIP} </span> </li>
                    <li> Review SOS : <span> {consultation.reviewSos} </span> </li>

                </ul>
            </div>
        </Box>
      </Modal>
        </>
    );

};