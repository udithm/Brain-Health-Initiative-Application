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



export const DiseaseView = ({apiData}) => {
    console.log(apiData);

    const formik = useFormik({
        initialValues: {
          district: '',
          stateName: '',
        },
        onSubmit: (values) => {
          //add(values.email,values.role,values.hospitalName,values.phoneNumber,values.stateName,values.district,values.city,values.pincode)
            console.log(values.stateName,values.district);
        },
      });
    const [stateName, setStateName] = useState("");
    const [district, setDistrict] = useState([]);
    const statesList = getDropdownList(statesData.states.map(stateInfo => stateInfo.state));
    const btnstyle={margin:'30px 0', align: 'center'};

    const getDistrictList = () => {
        let districtList = [];
        if (stateName) {
            districtList = statesData.states.filter((stateInfo) => stateInfo.state === stateName)[0].districts;
        }
       
        return districtList;
    }

    const handleStatesChange = (event, value, reason) => {
        if (reason === "selectOption") {
            // setDistrictsList([]);
            formik.values.stateName = value;
            setStateName(value);
        }
    }

    const changeDistrict = (event, value) => {
        formik.values.district = value;
        setDistrict(value);
    }

return(<>
    <NavBar></NavBar>
    <form onSubmit={formik.handleSubmit}>
    <Paper>
        <Typography> 
        <h2>
            Please select the state and district to view the disease pie chart distribution of diseases
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

            <Grid item xs={6} sm={6}>  
                <Autocomplete
                    disablePortal
                    id="district"
                    options={getDistrictList()}
                    openOnFocus
                    autoHighlight
                    onChange={changeDistrict}
                    renderInput={(params) => <TextField {...params} required value={formik.values.district}
                    label="District" variant="outlined"/>}
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

    <Paper>
        <Chart
          data={apiData}
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
// import * as React from 'react';
// import Paper from '@mui/material/Paper';
// import {
//   Chart,
//   PieSeries,
// } from '@devexpress/dx-react-chart-material-ui';

// import { NavBar } from '../components/NavBar';

// const data = [];
// for (let i = 0; i < 15; i += 1) {
//   data.push({ category: `item${i}`, val: 1 });
// }

// export class DiseaseView extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data,
//     };

//   }

//   render() {
//     const { data: chartData } = this.state;

//     return (<>
//             <NavBar></NavBar>

//       <Paper>
//         <Chart
//           data={chartData}
//         >
//           {/* <Palette  /> */}
//           <PieSeries
//             valueField="val"
//             argumentField="category"
//           />
//         </Chart>
//       </Paper>
//       </>
//     );
//   }
// };
// export default DiseaseView;
