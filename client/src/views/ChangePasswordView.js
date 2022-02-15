import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@mui/material/Button';
import TextField from '@material-ui/core/TextField';
import { Grid,Paper } from '@material-ui/core'
import sha256 from 'sha256';

const validationSchema = yup.object({
    newPassword: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
    confirmPassword: yup
    .string('Enter your new password')
    .required('Password is required')
    .test('passwords-match', 'Passwords must match', function(value){
        return this.parent.newPassword === value
      }),
});

export const ChangePasswordView = ({change, err}) => {
  const formik = useFormik({
    initialValues: {
      //oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      change(sha256(values.confirmPassword));
    },
  });
  const paperStyle={padding :30,height:'40vh',width:280, margin:"150px auto"};
  const btnstyle={margin:'30px 0', align: 'center'};
  const textstyle={margin:'15px 0'};

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
      <Grid>
            <Paper elevation={10} style={paperStyle}>
            <Grid align='center'>
                   <h2>Change Password</h2>
              </Grid>
        <TextField
          fullWidth
          id="newPassword"
          name="newPassword"
          label="New Password"
          type="password"
          style={textstyle}
          value={formik.values.newPassword}
          onChange={formik.handleChange}
          error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
          helperText={formik.touched.newPassword && formik.errors.newPassword}
        />
        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          style={textstyle}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
          helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
        />
        <Grid align='center'>
        <Button color="primary" variant="contained"  type="submit" style={btnstyle}>
          Submit
        </Button>
        </Grid>
        </Paper>
        </Grid> 
      </form>
      <div>{err}</div>
    </div>
  );
};