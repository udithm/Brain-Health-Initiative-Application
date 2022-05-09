import React, { useState } from 'react';
import { useFormik } from 'formik';import { Grid,Paper,Typography,Link } from '@material-ui/core'
import {
  Chart,
  PieSeries,
  Legend,
  Title,
} from '@devexpress/dx-react-chart-material-ui';
import Autocomplete from '@mui/material/Autocomplete';
import { getDropdownList } from '../utlis/utils';
import TextField from '@material-ui/core/TextField';
import statesData from "../common/StatesData.json";
import { NavBar } from '../components/NavBar';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { referalAnalytics } from '../services/AnalyticsApi';
import MUIDataTable from "mui-datatables";

export const ReferalAnalyticsView = ({apiData,data1,data2}) => {
    console.log("data1",data1);
    console.log("data2",data2);
    console.log("apidata",apiData);
    const dispatch = useDispatch();
    useEffect(() => {
        referalAnalytics()(dispatch);
    }, [])
    apiData = [apiData];
    const columns = [
        { label: "Number Of No Referals",name:" NumberOfNoReferals", options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].NumberOfNoReferals;
            return val;
          } } 
        },
        {name:"NumberOfReferalsNotTaken",label:"Number Of Referals Not Taken",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].NumberOfReferalsNotTaken;
            // let val1= dates[val%11] +"-02-2022"
            return val;
          } } 
        },
        
        {label:"Number Of Referals",name:"NumberOfReferals",options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].NumberOfReferals  ;
            return val;
          } } },
        {label:"Total Consultations",name:"TotalConsultations",options: { filterOptions: { fullWidth: true } ,
          customBodyRenderLite: (dataIndex) => {
              let val = apiData[dataIndex].TotalConsultations;
              return val;
            } } },
        {name:"NumberOfReferalsTaken",label:"Number Of Referals Taken",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
          let val = apiData[dataIndex].NumberOfReferalsTaken;
        //   let val1= Hospitals[val%15]
          return val;
          } } 
        }
    ];
    
    const options = {
        search: true,
        download: true,
        print: true,
        viewColumns: true,
        filter: true,
        filterType: "dropdown",
        responsive:"standard",
        selectableRows:"none",
      };

    return(
        <>
            <NavBar></NavBar>
            <MUIDataTable
        title={"Refered list"}
        data={apiData}
        columns={columns}
        options={options}
      />
        {/* <Paper> */}
            <Chart
            data={data1}
            >
            <PieSeries
                valueField="val"
                argumentField="category"
            />
            <Legend/>
            <Title text="Comparision for refral feature being used" />

            </Chart>
      {/* </Paper> */}
      {/* <Paper> */}
            <Chart
            data={data2}
            >
            <PieSeries
                valueField="val"
                argumentField="category"
            />
            <Legend/>
            <Title text="Comparision for refral Seen by the Doctor" />

            </Chart>

      {/* </Paper> */}
        </>
    );
}