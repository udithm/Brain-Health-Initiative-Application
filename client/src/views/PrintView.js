import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {useRef} from 'react';
import { useReactToPrint } from "react-to-print";
import { Button } from "@mui/material";

const style = {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -60%)",
    width: 800 ,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    overflow:'scroll',
    // scroll: "paper",
    p: 4
  };

export const PrintView = ({dName,dRole,Hospital,patient,consultation,shouldOpen, handleClose}) => {
    // console.log("asdfhgasbjdf");
    // console.log(shouldOpen)
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
    console.log("This is print view@@@@@" , consultation);
    var w = consultation.referedHospital;
    var nameArr = w.split('.');
    // console.log(nameArr);
    var i = nameArr[1];
    console.log("referereerere",i);
    // var idArr = i.split(/(\s+)/).filter( function(e) { return e.trim().length > 0; } );
    // idArr[0]=idArr[0].slice(0, -1);

    // let rowArr = [];
    // Object.keys(consultation.medicine).forEach(function(key) {
    //    rowArr.push(consultation.medicine[key])
    // })
    // var temp = consultation.medicine;
    // console.log("ad234321sfasdf",consultation.medicines);
    return (
        <>
        <Dialog
        open={shouldOpen.shouldOpen}
        onClose={shouldOpen.handleClose}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        fullWidth
        maxWidth="xl"
      >
        {/* <Box sx={style}> */}
        <div style={{
                display: "flex",
                flexDirection: "row",
                maxWidth: "400px",
              }}>
        <Button width= "20px"variant="outlined" onClick={handlePrint}>  Print </Button> 
        <Button color="primary" variant="outlined" onClick={shouldOpen.handleClose}> Close </Button>
        </div>
        <div ref={componentRef} id ="toPriint" >
            <div align="center">
            {/* <DialogTitle id="scroll-dialog-title">  */}
                <h1>{Hospital.name}</h1>
                <h2>{Hospital.city},{Hospital.district},{Hospital.state},{Hospital.pincode}</h2>
                <h3>Phone number: {Hospital.contactNumber}</h3>
            {/* </DialogTitle> */}
            </div>
            <hr />
            <DialogContent dividers={false}>
            <DialogContentText
            id="scroll-dialog-description"
            // ref={descriptionElementRef}
            tabIndex={-1}
          >
                <ul>
                    <h3>Doctor details </h3>
                    <li>  Name : <span> {dName}</span> </li>
                    <li>  Role : <span> {dRole} </span> </li>
                    
                    <h3>Patient details </h3>
                    <li>  Name : <span> {patient.firstName} {patient.lastName} </span> </li>
                    <li> Gender : <span> {patient.gender} </span> </li>
                    <li> Date of Birth : <span> {patient.dob}</span> </li>
                    <li> Blood Group : <span> {patient.bloodGroup}</span></li>
                    <li> Phone No: <span> </span> {patient.phoneNo} </li>
                    <li> Address : <span> {patient.address}</span> </li>
                    <li> District : <span> {patient.district}</span> </li>
                    <li> Pin Code : <span> {patient.pincode}</span> </li>

                    <h3>Consultation details </h3>
                    <li> Consultation Date : <span> {consultation.consultationDate} </span> </li>
                    <li> Complaint : <span> {consultation.complaint} </span> </li>
                    <li> Examination : <span> {consultation.examination} </span> </li>
                    <li> Illness Summary : <span> {consultation.illnessSummary} </span> </li>
                    <li> Diagnosis Type : <span> {consultation.diagnosisType} </span> </li>
                    <li> ICD Description : <span> {consultation.icdDescription} </span> </li>
                    <li> ICD10 Code : <span> {consultation.icd10Code} </span> </li>
                    <li> Improvement Status : <span> {consultation.improvementStatus} </span> </li>
                    <li>Medicines</li>
                    <ul>
                        { 
                            consultation.medicines.map((item, i) => {      
                            return <div>
                                {/* // item.map((item, i) => { */}
                                <li key={i}>{ "Name: "+item.medicineName+", Dosage: "+ item.dosage+", Dosage time: "+ item.dosingTime+", Duration: "+ item.duration}</li>
                                {/* // })  }                            */}
                                </div>
                            })
                        }
                    </ul>
                    <li> Treatment Instructions : <span> {consultation.treatmentInstructions} </span> </li>
                    <li> Remarks : <span> {consultation.remarks} </span> </li>
                    {/* {consultation.followUp.length >0 ? (<></>) : (<li> Follow Up : <span> {consultation.followUp} </span> </li>)} */}
                    {consultation.followUpDate ? (<li> Follow Up Date: <span> {consultation.followUpDate} </span> </li>):(<></>)}
                    {consultation.moveToIp ?( <li> Move To IP : <span> yes</span> </li>): (<></>) }
                    {consultation.reviewSos? (<li> Review SOS : <span> yes </span> </li> ): (<></>)}
                    {consultation.referedHospitalType? (<li> Refered Hospital Type : <span> {consultation.referedHospitalType} </span> </li>): (<></>)}
                    {i? (<li> Refered Hospital Name and address : <span> {i} </span> </li>): (<></>)}

                    
                        {/* <table>
        {rowArr.map(row => (
            <tr key={row}>
                <td>{row.Task}</td>
                <td>{row.Description}</td>
                <td>{row.Assignee}</td>
                <td>{row.Client}</td>
                <td>{row.Contact}</td>
            </tr>
        ))}
    </table>  */}
                </ul>
            {/* </div> */}
            </DialogContentText>
        </DialogContent>

        </div>
        {/* </Box> */}
        </Dialog>
      </>
    );

};