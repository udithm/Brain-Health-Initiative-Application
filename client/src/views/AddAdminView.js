import React,{ useState } from 'react';
import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { Grid,Paper,Typography,Link } from '@material-ui/core'
import sha256 from "sha256";
import Autocomplete from '@mui/material/Autocomplete';
import MuiPhoneNumber from "material-ui-phone-number";

import { addAdmin } from '../services/CreateApi';


const rolesList = ["Admin"];

const genderList = [  "Male","Female"];

const orgList = [ "Admin org 1", "Admin org 2","Admin org 3", "Admin org 4","Admin org 5","Admin org 6", "Admin org 7", "Admin org 8"];

const validationSchema = yup.object({
    email: yup
      .string('Enter your email')
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
    confirmPassword: yup
      .string('Enter your new password')
      .required('Password is required')
      .test('passwords-match', 'Passwords must match', function(value){
          return this.parent.password === value
        }),
    // phoneNumber: yup
    //     // regexr.com/6anqd
    //     .string().matches(phoneRegex, "Invalid phone").required("Phone is required")
  });

  export const AddAdminView = () => {

    const dispatch = useDispatch();
    const history = useHistory();
    const add = (fname, lname, email, hashedPassword, role, gender,orgName,phoneNumber) => addAdmin(fname, lname, email, hashedPassword, role, gender,orgName,phoneNumber,history)(dispatch);
    
    const formik = useFormik({
      initialValues: {
        fname: '',
        lname: '',
        email: '',
        password: '',
        confirmPassword: '',
        role: '',
        gender: '',
        orgName: '',
        phoneNumber: '',
      },
      validationSchema: validationSchema,
      onSubmit: (values) => {
          add(values.fname,values.lname,values.email,sha256(values.confirmPassword),values.role,values.gender,values.orgName,values.phoneNumber);
      },
    });
    const [role, setRole] = useState(rolesList[0]);
    const [gender,setGender] = useState(genderList[0])
    const [orgName,setOrgName] = useState(orgList[0])
    const paperStyle={padding :30,height:'100vh',width:610, margin:"70px auto"};
    const btnstyle={margin:'30px 0', align: 'center'};
    const textstyle={margin:'15px 0'};
  
    const changeRole = (event, value) => {
        formik.values.role = value;
        setRole(value);
    }
    const changeGender = (event, value) => {
        formik.values.gender = value;
        setGender(value);
    }
    const changeOrgName = (event, value) => {
        formik.values.orgName = value;
        setOrgName(value);
    }
    const handlePhoneNumberChange = (value) => {
        formik.values.phoneNumber = value;
    }


    return (
      <div>
        <form onSubmit={formik.handleSubmit}>
        <Paper elevation={10} style={paperStyle}>
            <Grid container spacing={2}>
                    <Grid align='center' item xs={12} sm={12}>
                        <h2>Add admin</h2>
                    </Grid>

                    <Grid item md={1}lg={6}> 
                        <TextField
                            required
                            id="fname"
                            name="fname"
                            label="First Name"
                            style={textstyle}
                            value={formik.values.fname}
                            onChange={formik.handleChange}
                            error={formik.touched.fname && Boolean(formik.errors.fname)}
                            helperText={formik.touched.fname && formik.errors.fname}
                            variant="outlined"
                        />
                    </Grid> 
                    <Grid item md={6} lg={6} > 
                        <TextField
                            required
                            id="lname"
                            name="lname"
                            label="Last Name"
                            style={textstyle}
                            value={formik.values.lname}
                            onChange={formik.handleChange}
                            error={formik.touched.lname && Boolean(formik.errors.lname)}
                            helperText={formik.touched.lname && formik.errors.lname}
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
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            style={textstyle}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}> 
                        <TextField
                            fullWidth
                            required
                            id="confirmPassword"
                            name="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            style={textstyle}
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
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
                    <Grid item xs={6} sm={6}>  
                        <Autocomplete
                            disablePortal
                            openOnFocus
                            id="gender"
                            options={genderList}
                            autoHighlight
                            onChange={changeGender}
                            renderInput={(params) => <TextField {...params} required 
                            label="Gender" name= "gender" variant="outlined" />}
                        />
                    </Grid>
                    <Grid item xs={12}>  
                        <Autocomplete
                            disablePortal
                            openOnFocus
                            id="orgName"
                            options={orgList}
                            autoHighlight
                            onChange={changeOrgName}
                            renderInput={(params) => <TextField {...params} required 
                            label="Organisation Name" name="orgName" variant="outlined"/>}
                        />
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
             </Grid> 
        </Paper>
        </form>
      </div>
    );
  };
  
  
  