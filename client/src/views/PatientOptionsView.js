import { Card } from "@material-ui/core";
import { CardActionArea, CardContent, Typography, Grid, Paper, Link } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { NavBar } from "../components/NavBar";

import { ReactComponent as SearchIcon } from "../common/Icons/search.svg";
import { ReactComponent as AddPatientIcon } from "../common/Icons/addPatient.svg";

export const PatientOptionsView = () => {
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
        <NavBar></NavBar>
         <Paper elevation={5} style={paperStyle}>
            <Grid container spacing={2}>
                <Grid item xs={3} sm={3}>
                    <Link href="/addPatient">
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
                    </Link>
             
                </Grid>

                <Grid item xs={3} sm={3}>
                    <Link href="/searchPatient">
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
                    </Link>
                </Grid>

            </Grid>
         </Paper>
        </>
    )
}