import { Card } from "@material-ui/core";
import { CardActionArea, CardContent, Typography, Grid, Paper, Link, Button } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "../components/NavBar";

import { ReactComponent as SearchIcon } from "../common/Icons/search.svg";
import { ReactComponent as AddPatientIcon } from "../common/Icons/addPatient.svg";
import { useHistory } from "react-router-dom";

export const PatientOptionsView = () => {
    let history = useHistory()
    const useStyles = makeStyles({
        root: {
          maxWidth: "20vw",
        //   margin: 10
          
        }
      });
      const classes = useStyles();
      const paperStyle={padding :50, margin:"4.8vw"};
    const gotoAddPatient = () => {
        history.push('/addPatient')
    }
    const gotoSearchPatient = () => {
        history.push('/searchPatient')
    }
    return (
        <>
        <NavBar></NavBar>
         <Paper elevation={5} style={paperStyle}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                    <Button onClick={gotoAddPatient} href="/addPatient">
                    <Card variant="outlined" className={classes.root}>
                        <CardActionArea >
                            <CardContent>
                                <div style={{height: "29vh", width: "240px", padding: "10px"}}>
                                    <AddPatientIcon></AddPatientIcon>
                                </div>
                                <Typography align="center">
                                    Add Patient
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                    </Button>
             
                </Grid>

                <Grid item xs={12} sm={3}>
                    <Button onClick={gotoSearchPatient} href="/searchPatient">
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardContent>
                                    <div style={{height: "29vh", width: "240px", padding: "10px"}}>
                                        <SearchIcon/>
                                    </div>
                                    <Typography align="center">
                                        search a patient
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Button>
                </Grid>

            </Grid>
         </Paper>
        </>
    )
}