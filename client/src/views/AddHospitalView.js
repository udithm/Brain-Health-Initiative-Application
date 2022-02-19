import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { Grid,Paper,Typography,Link } from '@material-ui/core'
import Autocomplete from '@mui/material/Autocomplete';
import MuiPhoneNumber from "material-ui-phone-number";
import { getDropdownList } from '../utlis/utils';
import statesData from "../common/StatesData.json";
import { NavBar } from '../components/NavBar';
import { addHospital } from '../services/CreateApi';

const rolesList = [ "Primary Health Centre","Secondary Health Centre", "Tertiary Health Centre"]


// const phoneRegex = RegExp(
//     /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
//   );
const validationSchema = yup.object({
    email: yup
      .string('Enter Hospital email')
      .email('Enter a valid email')
      .required('Email is required'),
    pincode: yup
      .number('Enter Hospital Pincode ')
      .min(6,'pincode should be of length 6')
//      .max(6,'pincode should be of length 6')
      .required('Pincode is required'),
    // phoneNumber: yup
    //     // regexr.com/6anqd
    //     .string().matches(phoneRegex, "Invalid phone").required("Phone is required")
  });
  
  export const AddHospitalView = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const add = (email,role,hospitalName,phoneNumber,stateName,district,city,pincode) => addHospital(email,role,hospitalName,phoneNumber,stateName,district,city,pincode,history)(dispatch);
    
    const formik = useFormik({
      initialValues: {
        email: '',
        role: '',
        hospitalName: '',
        phoneNumber: '',
        district: '',
        stateName: '',
        pincode: '',
        city: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
        add(values.email,values.role,values.hospitalName,values.phoneNumber,values.stateName,values.district,values.city,values.pincode)
      },
    });
    const [role, setRole] = useState(rolesList[0]);

    const [stateName, setStateName] = useState("");
    const [district, setDistrict] = useState([]);
    const paperStyle={padding :30,height:'90vh',width:"50vw", margin:"7vh auto"};
    const btnstyle={margin:'30px 0', align: 'center'};
    const textstyle={margin:'15px 0'};
    const statesList = getDropdownList(statesData.states.map(stateInfo => stateInfo.state));

    const getDistrictList = () => {
        let districtList = [];
        if (stateName) {
            districtList = statesData.states.filter((stateInfo) => stateInfo.state === stateName)[0].districts;
        }
       
        return districtList;
    }
    // const [disrtict,setDistrict] = useState(districtList[0])

    const handleStatesChange = (event, value, reason) => {
        if (reason === "selectOption") {
            // setDistrictsList([]);
            formik.values.stateName = value;
            setStateName(value);
        }
    }
    const changeRole = (event, value) => {
        formik.values.role = value;
        setRole(value);
    }
    const changeDistrict = (event, value) => {
        formik.values.district = value;
        setDistrict(value);
    }
    const handlePhoneNumberChange = (value) => {
        formik.values.phoneNumber = value;
    }
    return (
      <div>
          <NavBar></NavBar>
        <form onSubmit={formik.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
            <Grid container spacing={2}>
                    <Grid align='center' item xs={12} sm={12}>
                        <h2>Add A Hospital</h2>
                    </Grid>

                    <Grid item xs={12} sm={12}> 
                        <TextField
                            required
                            id="hospitalName"
                            name="hospitalName"
                            label="Hospital Name"
                            style={textstyle}
                            value={formik.values.hospitalName}
                            onChange={formik.handleChange}
                            error={formik.touched.hospitalName && Boolean(formik.errors.hospitalName)}
                            helperText={formik.touched.hospitalName && formik.errors.hospitalName}
                            variant="outlined"
                        />
                    </Grid> 
                    <Grid item xs={6} sm={6}>  
                        <Autocomplete
                            disablePortal
                            id="roles"
                            options={rolesList}
                            openOnFocus
                            autoHighlight
                            onChange={changeRole}
                            renderInput={(params) => <TextField {...params} required
                            name="role"
                            label="Role" variant="outlined"/>}
                        />
                    </Grid> 
                    <Grid item xs={12} sm={12}> 
                        <TextField
                            fullWidth
                            required
                            id="email"
                            name="email"
                            label="Email"
                            style={textstyle}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            variant="outlined"
                        />
                    </Grid>

                    <Grid item xs={12} sm={12}> 
                        <TextField
                            fullWidth
                            required
                            id="city"
                            name="city"
                            label="City/Town"
                            value={formik.values.city}
                            onChange={formik.handleChange}
                            style={textstyle}
                            error={formik.touched.city && Boolean(formik.errors.city)}
                            helperText={formik.touched.city && formik.errors.city}
                            variant="outlined"
                        />
                    </Grid>
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
                    {/* <Grid item xs={12} sm={12}> 
                        <TextField
                            fullWidth
                            required
                            id="district"
                            name="district"
                            label="District"
                            value={formik.values.district}
                            onChange={formik.handleChange}
                            style={textstyle}
                            error={formik.touched.district && Boolean(formik.errors.district)}
                            helperText={formik.touched.district && formik.errors.district}
                            variant="outlined"
                        />
                    </Grid> */}
                    <Grid item xs={12} sm={12}> 
                        <TextField
                            fullWidth
                            required
                            id="pincode"
                            name="pincode"
                            label="Pincode"
                            value={formik.values.pincode}
                            onChange={formik.handleChange}
                            style={textstyle}
                            error={formik.touched.pincode && Boolean(formik.errors.pincode)}
                            helperText={formik.touched.pincode && formik.errors.pincode}
                            variant="outlined"
                        />
                    </Grid>

                    </Grid>

                    <Grid item xs ={8} sm={12} >
                        <MuiPhoneNumber
                            name="phoneNumber"
                            label="Phone Number"
                            defaultCountry={"in"}
                            onChange={handlePhoneNumberChange}
                            value={formik.values.phoneNumber}
                            variant="outlined"
                        /> 
                    </Grid>          
                  <Grid align='center'>
                  <Button align="center" color="primary" variant="contained"  type="submit" style={btnstyle} >
                  Submit
                  </Button>
                </Grid>
                {/* <Typography> Don't have an account ?
                      <Link component="button"variant="body1" onClick={() => signUp(true)} >
                          Sign Up 
                      </Link>
                   </Typography>  */}

        </Paper>
        </form>
      </div>
    );
  };
  
  
  