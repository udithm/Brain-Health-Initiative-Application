import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { ReferedView } from "./ReferedView";
import { NavBar } from "../components/NavBar";

export const ReferedListView = ({apiData}) => {
    const [open, setOpen] = useState(false);
    const [expandedData, setExpandedData] = useState({});
    const dates= ["12","13","15","16","01","08","03","20","25","04","19"];
    const Hospitals=["Abhaya Hospital","Bangalore Hospital","Healthcare Global Enterprises","Chaitanya Hospital" ,"Chord Road Hospital","Citi Hospital",
      "Devi Super Speciality  Hospital","D G Hospital","Dr Zamindars Hospital","Gayathri Hospital","Hosmat Hospital" ,"Karthik Netralaya Institute Of Ophthalmology" ,"Koshys Hospital"
      ,"M S Ramaiah Hospitals",
       "Mallya Hospital"];

    const handleOpen = (tableMeta) => {
        console.log("!!!!!!!!!!!!!!!!!!", tableMeta);
        setOpen(true);
        setExpandedData(apiData[tableMeta.rowIndex])
    }
    const handleClose = () => setOpen(false);
    const columns = [
        { label: "Patient Name",name:"name", options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].name;
            return val;
          } } 
        },
        {name:"firstLogin",label:"Date",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].userId;
            let val1= dates[val%11] +"-02-2022"
            return val1
          } } 
        },
        
        {label:"Refered Doctor Role ",name:"role",options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].role;
            return val;
          } } },
        {name:"orgName",label:" Refered Hospital Name",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
          let val = apiData[dataIndex].userId;
          let val1= Hospitals[val%15]
          return val1;
          } } 
        },
        {name:"firstLogin",label:"Referal Completed",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].firstLogin;
            if (val)
              return "COMPLETED"
            return "YET TO BE TAKEN"
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
              return (<>
                <Button size="small" variant="contained" disabled={val}>Take up consulatation</Button>
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