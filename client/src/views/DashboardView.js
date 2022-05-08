import React from "react";

//import Button from '@material-ui/core/Button';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { NavBar } from "../components/NavBar";
import { Card } from "@material-ui/core";
import { CardActionArea, CardContent, Typography, Grid, Paper, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
// import { DoctorIcon1 } from "../components/Icons";
import {ReactComponent as DoctorIcon} from '../common/Icons/doctor.svg';
import {ReactComponent as HospitalIcon} from '../common/Icons/hospital.svg';
import {ReactComponent as PatientIcon} from '../common/Icons/patient.svg';
import {ReactComponent as OrgIcon} from '../common/Icons/organisation.svg';
import { ReactComponent as SearchIcon } from "../common/Icons/search.svg";
import { ReactComponent as AddPatientIcon } from "../common/Icons/addPatient.svg";
import { ReactComponent as MyConsultationIcon } from "../common/Icons/myConsultations.svg";
const CreateView = () => {
    const useStyles = makeStyles({
        root: {
          maxWidth: 300,
        //   margin: 10
          
        }
      });
      const classes = useStyles();
      const paperStyle={padding :50, margin:"70px"};
      
    return (
        <>
         <Paper elevation={5} style={paperStyle}>
            <Grid container spacing={2}>
                <Grid item xs={3} sm={3}>
                    <Link href="/addHospital">
                    <Card variant="outlined" className={classes.root}>
                        <CardActionArea >
                            <CardContent>
                                <div style={{height: "240px", width: "240px", padding: "10px"}}><HospitalIcon/></div>
                                <Typography align="center">
                                    Add Hospital
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Link>
             
                </Grid>

                <Grid item xs={3} sm={3}>
                    <Link href="/addDoctor">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <div style={{height: "240px", width: "240px", padding: "10px"}}>
                                <DoctorIcon/></div>
                                    <Typography align="center">
                                        Add doctor
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Link href="/addAdminOrg">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <div style={{height: "240px", width: "240px", padding: "10px"}}>
                                    <OrgIcon/>
                                    </div>
                                    <Typography align="center">
                                        Add Admin Organisation
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={3} sm={3}>
                    <Link href="/addAdmin">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                <div style={{height: "240px", width: "240px", padding: "10px"}}>
                                    <PatientIcon/></div>
                                    <Typography align="center">
                                        Add Admin
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Link>
       
                </Grid>


            </Grid>
         </Paper>
     

          

          
        
        </>
    )
} 

const DoctorOptionsView = () => {
    const useStyles = makeStyles({
        root: {
          maxWidth: "20vw",
        //   margin: 10
          
        }
      });
      const classes = useStyles();
      const paperStyle={padding :50, margin:"4.8vw"};
        
    return (
      <>
        <Paper elevation={5} style={paperStyle}>
          <Grid container spacing={2}>
            <Grid item xs={3} sm={3}>
              <Link href="/addPatient">
                <Card variant="outlined" className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          height: "29vh",
                          width: "240px",
                          padding: "10px",
                        }}
                      >
                        <AddPatientIcon></AddPatientIcon>
                      </div>
                      <Typography align="center">Add Patient</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Link href="/searchPatient">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          height: "29vh",
                          width: "240px",
                          padding: "10px",
                        }}
                      >
                        <SearchIcon />
                      </div>
                      <Typography align="center">search a patient</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Link href="/doctorConsultations">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          height: "29vh",
                          width: "240px",
                          padding: "10px",
                        }}
                      >
                        <MyConsultationIcon />
                      </div>
                      <Typography align="center">My consultations</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>

            <Grid item xs={3} sm={3}>
              <Link href="/refered">
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardContent>
                      <div
                        style={{
                          height: "29vh",
                          width: "240px",
                          padding: "10px",
                        }}
                      >
                        <SearchIcon />
                      </div>
                      <Typography align="center">My Referals</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
}


export const DashboardView = ({name,role}) =>{
    const textstyle = {margin: "25px"};
    // const backStyle = {backgroundColor: "#1976d2"}
    return (
        <>
        <NavBar></NavBar>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} style={textstyle} >
                <h2>Welcome to Brain Health Initiative Program {name}!!!, This is dashboard </h2>
        </Typography>
        {role ? (role === "ADMIN" ? (
                        <>
                        <CreateView></CreateView>
                        </>
                    ) : (
                        <>
                            <DoctorOptionsView></DoctorOptionsView>
                        </>
                    )) : (
                        <>
                        </>
                    )}
        </>
    );
};