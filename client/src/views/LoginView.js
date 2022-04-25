//https://github.com/vikas62081/YT/blob/loginPage/src/components/login.js

// import React from 'react'
// import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// export const LoginView =()=>{

//     const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
//     const avatarStyle={backgroundColor:'#1bbd7e'}
//     const btnstyle={margin:'8px 0'}
//     return(
//         <Grid>
//             <Paper elevation={10} style={paperStyle}>
//                 <Grid align='center'>
//                      <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
//                     <h2>Sign In</h2>
//                 </Grid>
//                 <TextField label='Username' placeholder='Enter username' fullWidth required/>
//                 <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
//                 {<FormControlLabel
//                     control={
//                     <Checkbox
//                         name="checkedB"
//                         color="primary"
//                     />
//                     }
//                     label="Remember me"
//                  /> }
//                 <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
//                 { <Typography >
//                      <Link href="#" >
//                         Forgot password ?
//                 </Link>
//                 </Typography>
//                 <Typography > Do you have an account ?
//                      <Link href="#" >
//                         Sign Up 
//                 </Link>
//                 </Typography> }
//             </Paper>
//         </Grid>
//     )
// }

//https://formik.org/docs/examples/with-material-ui
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper } from '@material-ui/core'
import sha256 from "sha256";
import { Container } from '@mui/material';
// import { baseUrl } from '../common/constants/AppConstants';

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    // .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const LoginView = ({ login, err }) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // email: "",
      // password: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      login(values.email, values.password);
    },
  });
  const paperStyle = { padding: 30, height: '40vh', width: '20vw', margin: "25vh auto" };
  const btnstyle = { margin: '3vh 0', align: 'center' };
  const textstyle = { margin: '15px 0' };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Grid>
          <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
              <h2>Sign In</h2>
            </Grid>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              style={textstyle}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              style={textstyle}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}

            />
            <div style={{ color: "red" }}>{err}</div>
            <Grid align='center'>
              <Button color="primary" variant="contained" type="submit" style={btnstyle} >
                Submit
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </form>
    </div>
  );
};


