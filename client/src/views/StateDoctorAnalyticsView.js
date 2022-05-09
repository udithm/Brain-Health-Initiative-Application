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
import {stateDoctorAnalytics} from '../services/AnalyticsApi';


export const StateDoctorAnalyticsView = ({apiData,data1,}) => {
    console.log("api1",apiData);
   const dispatch = useDispatch();
    useEffect(() => {
        const s = localStorage.getItem("s");
        if (s)
            stateDoctorAnalytics(s)(dispatch);
    }, [])
    apiData = [apiData];
    const columns = [
        {name:"NumberOfTS",label:"Number Of TS",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].NumberOfTS;
            // let val1= dates[val%11] +"-02-2022"
            return val;
          } } 
        },
        
        {label:"Total Doctors",name:"TotalDoctors",options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
            let val = apiData[dataIndex].TotalDoctors  ;
            return val;
          } } },
        {label:"Number Of PD",name:"NumberOfPD",options: { filterOptions: { fullWidth: true } ,
          customBodyRenderLite: (dataIndex) => {
              let val = apiData[dataIndex].NumberOfPD;
              return val;
            } } },
        {name:"NumberOfSS",label:"Number Of SS ",        
        options: { filterOptions: { fullWidth: true } ,
        customBodyRenderLite: (dataIndex) => {
          let val = apiData[dataIndex].NumberOfSS;
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
    const formik = useFormik({
        initialValues: {
          district: '',
          stateName: '',
        },
        onSubmit: (values) => {
          //add(values.email,values.role,values.hospitalName,values.phoneNumber,values.stateName,values.district,values.city,values.pincode)
          console.log(values.stateName);
          localStorage.setItem("s",values.stateName);
          const s = values.stateName;
          stateDoctorAnalytics(s)(dispatch);
        },
      });
    const [stateName, setStateName] = useState("");
    const statesList = getDropdownList(statesData.states.map(stateInfo => stateInfo.state));
    const btnstyle={margin:'30px 0', align: 'center'};

    const handleStatesChange = (event, value, reason) => {
        if (reason === "selectOption") {
            // setDistrictsList([]);
            formik.values.stateName = value;
            setStateName(value);
        }
    }

return(<>
    <NavBar></NavBar>
    <form onSubmit={formik.handleSubmit}>
    <Paper>
        <Typography> 
        <h2>
            Please select the state to view the doctor count pie chart
        </h2>
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>  
                <Autocomplete
                    disablePortal
                    id="stateName"
                    options={statesList}
                    openOnFocus
                    autoHighlight
                    onChange={handleStatesChange}
                    renderInput={(params) => <TextField {...params} required value={formik.values.stateName}
                    label="State" variant="outlined"/>}
                />
            </Grid> 
            <Grid align='center' xs={6} sm={12}>
            <Button align="center" color="primary" variant="contained"  type="submit" style={btnstyle}>
                  Submit
                  </Button>
            </Grid> 
        </Grid> 
    </Paper>
    </form>
    <MUIDataTable
        title={"Selected hopital Statistics"}
        data={apiData}
        columns={columns}
        options={options}
      />
    <Paper>
        <Chart
          data={data1}
        >
        <PieSeries
            valueField="val"
            argumentField="category"
        />
        <Legend/>
        </Chart>

      </Paper>
  </>
);
}
