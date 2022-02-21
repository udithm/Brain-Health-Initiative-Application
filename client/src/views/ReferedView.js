import React, { useState } from "react";
import MUIDataTable from "mui-datatables";

export const ReferedView = (apiData) => {
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
    return(
        <MUIDataTable
        title={"users list"}
        data={apiData}
        columns={columns}
        options={options}
      />
    );
}