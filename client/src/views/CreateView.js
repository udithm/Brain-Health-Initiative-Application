import { Card } from "@material-ui/core";
import { CardActionArea, CardContent, Typography, Grid, Paper, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
// import { DoctorIcon1 } from "../components/Icons";
import {ReactComponent as DoctorIcon} from '../common/Icons/doctor.svg';
import {ReactComponent as HospitalIcon} from '../common/Icons/hospital.svg';
import {ReactComponent as PatientIcon} from '../common/Icons/patient.svg';
import {ReactComponent as OrgIcon} from '../common/Icons/organisation.svg';
import { NavBar } from "../components/NavBar";
// import {ReactComponent as AdminIcon} from '../common/Icons/admin.svg';
export const CreateView = () => {
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
        <NavBar></NavBar>
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