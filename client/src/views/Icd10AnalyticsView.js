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
import Autocomplete from '@mui/material/Autocomplete';
import { getDropdownList } from '../utlis/utils';
import TextField from '@material-ui/core/TextField';
import statesData from "../common/StatesData.json";
import { NavBar } from '../components/NavBar';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { EventTracker } from '@devexpress/dx-react-chart';
import { Animation } from '@devexpress/dx-react-chart';
import { useDispatch } from 'react-redux';
import MUIDataTable from "mui-datatables";
import {icd10Analytics} from '../services/AnalyticsApi';


export const Icd10AnalyticsView = ({apiData,data1}) => {
    console.log("api1",apiData);
    // console.log("api2",apiData1);
    // console.log("data2",data2);
   const dispatch = useDispatch();
    useEffect(() => {
        icd10Analytics()(dispatch);
    }, [])
return(<>
    <NavBar></NavBar>
    <Paper>
        <Chart
          data={data1}
        >
        <PieSeries
            valueField="val"
            argumentField="category"
        />
        <Title text=" ICD10 Statistics" />

        <Legend/>
        </Chart>

      </Paper>
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
        <Title text=" ICD10 Statistics" />
          <Animation />
          <EventTracker />
          <Tooltip />
        </Chart>
      </Paper>
  </>
);
}