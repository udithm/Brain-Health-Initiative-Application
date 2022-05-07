import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

export const ReferedView = ({shouldOpen, data, handleClose})  => {
    //   const [open, setOpen] = React.useState(false);
    //   const handleOpen = () => setOpen(true);
    //   const handleClose = () => setOpen(false);
    
    //   React.useEffect(() => {
    //     setOpen(shouldOpen)
    //   }, [data, shouldOpen]);
    console.log("Adfaf");
    console.log(data);
    if (JSON.stringify(data) === JSON.stringify({})){
        console.log("data");

        data={
            "id": 1000,
            "patient": {
                "id": 1000,
                "abhaId": "1000000000",
                "firstName": "string",
                "lastName": "string",
                "dob": "string",
                "age": 0,
                "gender": "string",
                "education": "string",
                "occupation": "string",
                "language": "string",
                "socioEconomicStatus": "Astring",
                "address": "string",
                "district": "string",
                "pincode": "string",
                "phoneNo": "string",
                "careGiverName": "string",
                "relationshipWithPatient": "string",
                "bloodGroup": "string"
            },

            "doctor": {
                "id": 1,
                "fname": "string",
                "lname": "string",
                "password": "string",
                "gender": "string",
                "role": "string",
                "email": "string",
                "hospitalName": "string",
                "contactNumber": "string"
            },
            "consultationDate": "string",
            "complaint": "string",
            "examination": "string",
            "illnessSummary": "string",
            "diagnosisType": "string",
            "icdDescription": "string",
            "icd10Code": "string",
            "improvementStatus": "string",
            "medicines": [
                {
                    "id": 1,
                    "medicineName": "string",
                    "dosage": "string",
                    "dosingTime": "string",
                    "duration":"string"
                }
            ],
            "responses": [],
            "treatmentInstructions": "string",
            "remarks": "string",
            "referedHospitalType":"string",
            "referedHospitalId": 4,
            "referedHospital": "string",
            "followUpDate": null,
            "moveToIp": false,
            "reviewSos": false,
            "suggestedDiagnosis": "string"
    }
}
var i = "";
      return (
    <div>
      <Dialog
        open={shouldOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

<div id ="toView" >
            <div align="center">
            {/* <DialogTitle id="scroll-dialog-title">  */}
                {/* <h1>{data.Hospital.name}</h1>
                <h2>{data.Hospital.city},{data.Hospital.district},{data.Hospital.state},{data.Hospital.pincode}</h2>
                <h3>Phone number: {data.Hospital.contactNumber}</h3> */}
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
                    <h3>Previous Doctor details </h3>
                    {/* <li>  Name : <span> {data.doctor.fname} {data.doctor.lname} </span> </li> */}
                    {/* <li>  Role : <span> {data.doctor.role} </span> </li> */}
                    
                    <h3>Patient details </h3>
                    <li>  Name : <span> {data.patient.firstName} {data.patient.lastName} </span> </li>
                    <li> Gender : <span> {data.patient.gender} </span> </li>
                    <li> Date of Birth : <span> {data.patient.dob}</span> </li>
                    <li> Blood Group : <span> {data.patient.bloodGroup}</span></li>
                    <li> Phone No: <span> </span> {data.patient.phoneNo} </li>
                    <li> Address : <span> {data.patient.address}</span> </li>
                    <li> District : <span> {data.patient.district}</span> </li>
                    <li> Pin Code : <span> {data.patient.pincode}</span> </li>

                    <h3>Consultation details </h3>
                    <li> Consultation Date : <span> {data.consultationDate} </span> </li>
                    <li> Complaint : <span> {data.complaint} </span> </li>
                    <li> Examination : <span> {data.examination} </span> </li>
                    <li> Illness Summary : <span> {data.illnessSummary} </span> </li>
                    <li> Diagnosis Type : <span> {data.diagnosisType} </span> </li>
                    <li> ICD Description : <span> {data.icdDescription} </span> </li>
                    <li> ICD10 Code : <span> {data.icd10Code} </span> </li>
                    <li> Improvement Status : <span> {data.improvementStatus} </span> </li>
                    <li>Medicines</li>
                    <ul>
                        { 
                            data.medicines.map((item, i) => {      
                            return <div>
                                {/* // item.map((item, i) => { */}
                                <li key={i}>{ "Name: "+item.medicineName+", Dosage: "+ item.dosage+", Dosage time: "+ item.dosingTime+", Duration: "+ item.duration}</li>
                                {/* // })  }                            */}
                                </div>
                            })
                        }
                    </ul>
                    <li> Treatment Instructions : <span> {data.treatmentInstructions} </span> </li>
                    <li> Remarks : <span> {data.remarks} </span> </li>
                    {/* {consultation.followUp.length >0 ? (<></>) : (<li> Follow Up : <span> {consultation.followUp} </span> </li>)} */}
                    {data.followUpDate ? (<li> Follow Up Date: <span> {data.followUpDate} </span> </li>):(<></>)}
                    {data.moveToIp ?( <li> Move To IP : <span> yes</span> </li>): (<></>) }
                    {data.reviewSos? (<li> Review SOS : <span> yes </span> </li> ): (<></>)}
                    {data.referedHospitalType? (<li> Refered Hospital Type : <span> {data.referedHospitalType} </span> </li>): (<></>)}
                    {i? (<li> Refered Hospital Name and address : <span> {i} </span> </li>): (<></>)}
                </ul>
            </DialogContentText>
        </DialogContent>

        </div>
      </Dialog>
    </div>
      );
    }

// export const ReferedView = (shouldOpen, data, handleClose)  => {
// //   const [open, setOpen] = React.useState(false);
// //   const handleOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   React.useEffect(() => {
// //     setOpen(shouldOpen)
// //   }, [data, shouldOpen]);
// // var w = data.referedHospital;
// // var nameArr = w.split('.');
// // console.log(nameArr);
// var i = "hello";
// // console.log("referereerere",i);

//   return (
//     <div>
//       <Dialog
//         open={shouldOpen}
//         onClose={handleClose}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >

// <div id ="toView" >
//             <div align="center">
//             {/* <DialogTitle id="scroll-dialog-title">  */}
//                 {/* <h1>{data.Hospital.name}</h1>
//                 <h2>{data.Hospital.city},{data.Hospital.district},{data.Hospital.state},{data.Hospital.pincode}</h2>
//                 <h3>Phone number: {data.Hospital.contactNumber}</h3> */}
//             {/* </DialogTitle> */}
//             </div>
//             <hr />
//             <DialogContent dividers={false}>
//             <DialogContentText
//             id="scroll-dialog-description"
//             // ref={descriptionElementRef}
//             tabIndex={-1}
//           >
//                 <ul>
//                     <h3>Previous Doctor details </h3>
//                     {/* <li>  Name : <span> {data.doctor.fname} {data.doctor.lname} </span> </li> */}
//                     {/* <li>  Role : <span> {data.doctor.role} </span> </li> */}
                    
//                     <h3>Patient details </h3>
//                     <li>  Name : <span> {data.patient.firstName} {data.patient.lastName} </span> </li>
//                     <li> Gender : <span> {data.patient.gender} </span> </li>
//                     <li> Date of Birth : <span> {data.patient.dob}</span> </li>
//                     <li> Blood Group : <span> {data.patient.bloodGroup}</span></li>
//                     <li> Phone No: <span> </span> {data.patient.phoneNo} </li>
//                     <li> Address : <span> {data.patient.address}</span> </li>
//                     <li> District : <span> {data.patient.district}</span> </li>
//                     <li> Pin Code : <span> {data.patient.pincode}</span> </li>

//                     <h3>Consultation details </h3>
//                     <li> Consultation Date : <span> {data.consultationDate} </span> </li>
//                     <li> Complaint : <span> {data.complaint} </span> </li>
//                     <li> Examination : <span> {data.examination} </span> </li>
//                     <li> Illness Summary : <span> {data.illnessSummary} </span> </li>
//                     <li> Diagnosis Type : <span> {data.diagnosisType} </span> </li>
//                     <li> ICD Description : <span> {data.icdDescription} </span> </li>
//                     <li> ICD10 Code : <span> {data.icd10Code} </span> </li>
//                     <li> Improvement Status : <span> {data.improvementStatus} </span> </li>
//                     <li>Medicines</li>
//                     <ul>
//                         { 
//                             data.medicines.map((item, i) => {      
//                             return <div>
//                                 {/* // item.map((item, i) => { */}
//                                 <li key={i}>{ "Name: "+item.medicineName+", Dosage: "+ item.dosage+", Dosage time: "+ item.dosingTime+", Duration: "+ item.duration}</li>
//                                 {/* // })  }                            */}
//                                 </div>
//                             })
//                         }
//                     </ul>
//                     <li> Treatment Instructions : <span> {data.treatmentInstructions} </span> </li>
//                     <li> Remarks : <span> {data.remarks} </span> </li>
//                     {/* {consultation.followUp.length >0 ? (<></>) : (<li> Follow Up : <span> {consultation.followUp} </span> </li>)} */}
//                     {data.followUpDate ? (<li> Follow Up Date: <span> {data.followUpDate} </span> </li>):(<></>)}
//                     {data.moveToIp ?( <li> Move To IP : <span> yes</span> </li>): (<></>) }
//                     {data.reviewSos? (<li> Review SOS : <span> yes </span> </li> ): (<></>)}
//                     {data.referedHospitalType? (<li> Refered Hospital Type : <span> {data.referedHospitalType} </span> </li>): (<></>)}
//                     {i? (<li> Refered Hospital Name and address : <span> {i} </span> </li>): (<></>)}
//                 </ul>
//             </DialogContentText>
//         </DialogContent>

//         </div>
//       </Dialog>
//     </div>
//   );
// }
