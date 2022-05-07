import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { ReferedView } from "./ReferedView";
import { NavBar } from "../components/NavBar";
import axios from "../common/config/AxiosConfig";
import { useDispatch } from "react-redux";
import { alertError, alertSuccess } from "../actionCreators/AlertActions";

export const ReferedListView = ({apiData}) => {
    const [open, setOpen] = useState(false);
    const [expandedData, setExpandedData] = useState({});
    // const dates= ["12","13","15","16","01","08","03","20","25","04","19"];
    // const Hospitals=["Abhaya Hospital","Bangalore Hospital","Healthcare Global Enterprises","Chaitanya Hospital" ,"Chord Road Hospital","Citi Hospital",
    //   "Devi Super Speciality  Hospital","D G Hospital","Dr Zamindars Hospital","Gayathri Hospital","Hosmat Hospital" ,"Karthik Netralaya Institute Of Ophthalmology" ,"Koshys Hospital"
    //   ,"M S Ramaiah Hospitals",
    //    "Mallya Hospital"];
    const dispatch = useDispatch();

    const takeUpApi = (cid,dataIndex) => {
        console.log(cid);
        apiData[dataIndex].improvementStatus="false"
        return(dispatch) => {
            axios
                .post("/takeUp",{cid})
                .then ( (res) => {
                    console.log("-------this is then------- ", res);
                    dispatch(alertSuccess("Taken sucessful"));
                }
                )
                .catch ((err) => { // checking not done
                    dispatch(alertError(err.message));
                    console.log("eroorrr", err);
                }
                )
        }
    }

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
            let val = apiData[dataIndex].firstLogin;
            let cid = apiData[dataIndex].id;
              return (<>
                <Button size="small" variant="contained"    onClick={() => {
                    takeUp(cid,dataIndex);
                        val=false;
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