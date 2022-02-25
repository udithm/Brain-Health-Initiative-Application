import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { ReferedView } from "./ReferedView";

export const ReferedListView = ({apiData}) => {
    const [open, setOpen] = useState(false);
    const [expandedData, setExpandedData] = useState({});
    const handleOpen = (tableMeta) => {
        console.log("!!!!!!!!!!!!!!!!!!", tableMeta);
        setOpen(true);
        setExpandedData(apiData[tableMeta.rowIndex])
    }
    const handleClose = () => setOpen(false);
    const columns = [
        { label: "Name",name:"name", options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].name;
            return val;
          } } 
        },
        {label:"Role",name:"role",options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].role;
            return val;
          } } },
        {name:"orgName",label:"Organisation Name",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].name;
            return val;
          } } 
        },
        {name: "Actions",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (<>
                        <Button onClick={() => handleOpen(tableMeta)}>Open modal</Button>
                    </>
                    )
                }
            }

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
        <MUIDataTable
        title={"users list"}
        data={apiData}
        columns={columns}
        options={options}
      />
      <ReferedView shouldOpen={open} handleClose={handleClose} data={expandedData}/></>
    );
}