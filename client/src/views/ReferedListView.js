import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { ReferedView } from "./ReferedView";
import { NavBar } from "../components/NavBar";
import axios from "../common/config/AxiosConfig";
import { useDispatch } from "react-redux";
import { alertError, alertSuccess } from "../actionCreators/AlertActions";
import { useEffect } from "react";
import { getReferalsFailure, getReferalsRequest,getReferalsSuccess } from "../actionCreators/ConsultationActions";
import { getMyReferals } from "../services/ConsultationAPI";
import { useHistory } from "react-router-dom";
export const ReferedListView = ({apiData,hid}) => {
    if (!apiData){
       apiData= [{
            "id": 10000000,
            "patient": {
                "id": 10000000,
                "abhaId": "string",
                "firstName": "string",
                "lastName": "string",
                "dob": "string",
                "age": 1110,
                "gender": "string",
                "education": "string",
                "occupation": "string",
                "language": "string",
                "socioEconomicStatus": "string",
                "address": "string",
                "district": "string",
                "pincode": "string",
                "phoneNo": "string",
                "careGiverName": "string",
                "relationshipWithPatient": "string",
                "bloodGroup": "string+"
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
                "contactNumber": "string",
                "hospital": {
                    "id": 1,
                    "name": "string",
                    "city": "string",
                    "state": "string",
                    "district": "string",
                    "type": "string",
                    "email": "string",
                    "pincode": "string",
                    "contactNumber": "string"
                }
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
                    "id": 100000,
                    "medicineName": "string",
                    "dosage": "string",
                    "dosingTime": "string",
                    "duration": "string"
                }
            ],
            "responses": [],
            "treatmentInstructions": "string",
            "remarks": "string",
            "referedHospitalType": "string",
            "referedHospitalId": 10000,
            "referedHospital": "string",
            "followUpDate": null,
            "moveToIp": false,
            "reviewSos": false,
            "suggestedDiagnosis": "string"
        }
    ]
    }
    const [open, setOpen] = useState(false);
    const [expandedData, setExpandedData] = useState({});
    const history = useHistory();
    // const dates= ["12","13","15","16","01","08","03","20","25","04","19"];
    // const Hospitals=["Abhaya Hospital","Bangalore Hospital","Healthcare Global Enterprises","Chaitanya Hospital" ,"Chord Road Hospital","Citi Hospital",
    //   "Devi Super Speciality  Hospital","D G Hospital","Dr Zamindars Hospital","Gayathri Hospital","Hosmat Hospital" ,"Karthik Netralaya Institute Of Ophthalmology" ,"Koshys Hospital"
    //   ,"M S Ramaiah Hospitals",
    //    "Mallya Hospital"];
    const dispatch = useDispatch();

    const takeUpApi = (cid,consObj) => {
        console.log(cid);
        // console.log(dataIndex);
        // apiData[dataIndex].improvementStatus="false";
        // console.log(apiData[dataIndex]);
        consObj.referralStatus = true;

        console.log("^^^^^^^^^^^^^^^^^^^consobj",consObj);
        return(dispatch) => {
            // dispatch(getReferalsRequest());

            axios
                .post("/v1/consultationrecords/update/"+cid,consObj )
                .then ( (res) => {
                    // dispatch(getReferalsSuccess(res.data));
                    console.log("-------this is then------- ", res);
                    dispatch(alertSuccess("Taken sucessful"));
                    localStorage.setItem('Value', consObj.patient.abhaId);
                    localStorage.setItem('Field', "abhaId");
                    history.push("/searchPatient")
                }
                )
                .catch ((err) => { // checking not done
                    dispatch(alertError(err.message));
                    // dispatch(getReferalsFailure(err.message));
                    console.log("eroorrr", err);
                }
                )
        }
    }
    useEffect(() => {
        var hid1= localStorage.getItem("hid")
        console.log("this is hid",hid1);
        getMyReferals(hid1)(dispatch);
    }, [])
    

    const takeUp = (cid,dataIndex) => takeUpApi(cid,dataIndex)(dispatch);

    const handleOpen = (tableMeta) => {
        console.log("!!!!!!!!!!!!!!!!!!", tableMeta);
        setOpen(true);
        setExpandedData(apiData[tableMeta.rowIndex])
    }
    const handleClose = () => setOpen(false);
    const columns = [
        { label: "Patient Name",name:" patientName", options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].patient.firstName +  apiData[dataIndex].patient.lastName;
            return val;
          } } 
        },
        {name:"consultationDate",label:"Consultation Date",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].consultationDate;
            // let val1= dates[val%11] +"-02-2022"
            return val;
          } } 
        },
        
        {label:"Previous Doctor Name ",name:"previousDoctorName",options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].doctor.fname + apiData[dataIndex].doctor.lname  ;
            return val;
          } } },
        {label:"Previous Hospital Name ",name:"previousHospitalName",options: { filterOptions: { fullWidth: true } ,
          customBodyRenderLite: (dataIndex) => {
              let val = apiData[dataIndex].doctor.hospital.name;
              return val;
            } } },
        {name:"patientPhoneNo",label:" Patient Phone Number",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
          let val = apiData[dataIndex].patient.phoneNo;
        //   let val1= Hospitals[val%15]
          return val;
          } } 
        },
        {name:"icdDescription",label:"ICD Description",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].icdDescription;
            return val;
          } } 
        },
        {name:"improvementStatus",label:"Improvement Status",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].improvementStatus;
            return val;
          } } 
        },
        {name: "Open full consultation form",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (<>
                        <Button onClick={() => handleOpen(tableMeta)}>Open</Button>
                    </>
                    )
                }
            }

        },

        {name: "Takeup consulatation",
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].referralStatus;
            console.log(val);

            let cid = apiData[dataIndex].id;
            let consObj = apiData[dataIndex];
            console.log("***********cons",consObj);
              return (<>
                <Button size="small" variant="contained"    onClick={() => {
                                console.log("***********cons in button",consObj);

                    takeUp(cid,consObj);
                }} disabled={val}>Take up consulatation</Button>
            </>
            )
          } } 

        }
    ];
    
      const options = {
        search: true,
        download: false,
        print: false,
        viewColumns: true,
        filter: true,
        filterType: "dropdown",
        responsive:"standard",
        selectableRows:"none",
      };
    return(<>
        <NavBar></NavBar>
        <MUIDataTable
        title={"Refered list"}
        data={apiData}
        columns={columns}
        options={options}
      />
      <ReferedView shouldOpen={open} handleClose={handleClose} data={expandedData}/></>
    );
}