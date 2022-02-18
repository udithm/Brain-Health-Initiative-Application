import React,{ useState } from 'react';
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

import { addAdminOrg } from '../services/CreateApi';


// const rolesList = [
//     {label: "Admin", value: "Admin"}
// ]

const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );
const validationSchema = yup.object({
    email: yup
      .string('Enter Hospital email')
      .email('Enter a valid email')
      .required('Email is required'),
    pincode: yup
      .number('Enter Organisation Pincode ')
      .min(6,'pincode should be of length 6')
      .max(6,'pincode should be of length 6')
      .required('Pincode is required'),
    phoneNumber: yup
        // regexr.com/6anqd
        .string().matches(phoneRegex, "Invalid phone").required("Phone is required")
  });
  
  export const AddAdminOrgView = () => {


    const dispatch = useDispatch();
    const history = useHistory();
    const add = (email,orgName,phoneNumber,stateName,district,city,pincode) => addAdminOrg(email,orgName,phoneNumber,stateName,district,city,pincode,history)(dispatch);
    


    const formik = useFormik({
      initialValues: {
        email: '',
        orgName: '',
        phoneNumber: '',
        district: '',
        stateName: '',
        pincode: '',
        city: ''
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          add(values.email,values.orgName,values.phoneNumber,values.stateName,values.district,values.city,values.pincode)
      },
    });
    const [selectedState, setSelectedState] = useState("");
    // const [districtsList, setDistrictsList] = useState([]);
    const paperStyle={padding :30,height:'100vh',width:610, margin:"70px auto"};
    const btnstyle={margin:'30px 0', align: 'center'};
    const textstyle={margin:'15px 0'};
    const statesList = getDropdownList(statesData.states.map(stateInfo => stateInfo.state));

    const getDistrictList = () => {
        let districtList = [];
        if (selectedState) {
            districtList = getDropdownList(statesData.states.filter((stateInfo) => stateInfo.state === selectedState)[0].districts);
        }
       
        return districtList;
    }
    const handleStatesChange = (event, value, reason) => {
        if (reason === "selectOption") {
            // setDistrictsList([]);
            setSelectedState(value.value);
    

        }
    }
    return (
        <div>
        <form onSubmit={formik.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
            <Grid container spacing={2}>
                    <Grid align='center' item xs={12} sm={12}>
                        <h2>Add A Organisation</h2>
                    </Grid>

                    <Grid item md={1}lg={6}> 
                        <TextField
                            required
                            id="orgName"
                            name="orgName"
                            label="Organisation Name"
                            style={textstyle}
                            value={formik.values.orgName}
                            onChange={formik.handleChange}
                            error={formik.touched.orgName && Boolean(formik.errors.orgName)}
                            helperText={formik.touched.orgName && formik.errors.orgName}
                            variant="outlined"
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
                    <Grid item xs ={8} sm={12} >
                        <MuiPhoneNumber
                            name="phone"
                            label="Phone Number"
                            defaultCountry={"in"}
                            value={formik.values.phone}
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
             </Grid> 

        </Paper>
        </form>
      </div>
    );
  };

  
  
  