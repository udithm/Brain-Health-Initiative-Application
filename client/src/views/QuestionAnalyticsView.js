import React, { useState } from 'react';
import { useFormik } from 'formik';import { Grid,Paper,Typography,Link } from '@material-ui/core'
import {
    Chart,
    PieSeries,
    Legend,
    Title,
    BarSeries,
    ArgumentAxis,
    ValueAxis,
    Tooltip,
} from '@devexpress/dx-react-chart-material-ui';
import { NavBar } from '../components/NavBar';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import MUIDataTable from "mui-datatables";
import { EventTracker } from '@devexpress/dx-react-chart';
import { Animation } from '@devexpress/dx-react-chart';
import { questionereAnalytics } from '../services/AnalyticsApi';
export const QuestionAnalyticsView = ({apiData,data1}) => {
    console.log("data1",data1);
    console.log("apidata",apiData);
    const dispatch = useDispatch();
    useEffect(() => {
        questionereAnalytics()(dispatch);
    }, [])
    apiData = [apiData];
    const columns = [
        { label: "Total Number Of Consultations",name:" NumberOfConsultations", options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].NumberOfConsultations;
            return val;
          } } 
        },
        {name:"Total Questionnaires Used",label:"TotalQuestionnaireUsed",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].TotalQuestionnaireUsed;
            // let val1= dates[val%11] +"-02-2022"
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
        title={"questionere statistics"}
        data={apiData}
        columns={columns}
        options={options}
      />
      <Paper>
        <Chart
          data={data1}
        >
          <ArgumentAxis />
          <ValueAxis />

          <BarSeries
            valueField="val"
            argumentField="category"
          />
          <Title text="Total program hopital Statistics" />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
      {/* </Paper> */}
        </>
    );
}