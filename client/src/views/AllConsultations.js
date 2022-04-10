import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { Grid, Select, MenuItem, Container, Box } from '@mui/material';
import { NavBar } from '../components/NavBar';
import { useHistory } from 'react-router-dom';

const AllConsultations = (props) => {
  let history = useHistory();
  const [results, setResult] = useState([]);
  useEffect(() => {
    props.get(props.patient.id)
  }, [])

  useEffect(() => {
    setResult(props.values)
  }, [props.values]);

  const ViewConsultation = (result) => {
    props.set(result);
    return history.push("/viewConsultation/"+props.patient.id+"/"+result.id);
  }
  const columns =
    [
      {
        label: "Consultation Date", name: "consultationDate", options: {
          filterOptions: { fullWidth: false },
          customBodyRenderLite: (dataIndex) => {
            let val = (results[dataIndex].consultationDate);
            return val;
          }
        }
      },
      {
        label: "Complaint", name: "compliant", options: {
          filterOptions: { fullWidth: false },
          customBodyRenderLite: (dataIndex) => {
            let val = results[dataIndex].complaint;
            return val;
          }
        }
      },
      {
        label: "Improvement Status", name: "improvementStatus",
        options: {
          filterOptions: { fullWidth: false },
          customBodyRenderLite: (dataIndex) => {
            let val = results[dataIndex].improvementStatus;
            return val;
          }
        }
      },
      {
        name: "View Consultation",
        options: {
          customBodyRenderLite: (dataIndex) => {
            return (<>
              <Button variant="outlined" color="primary" onClick={() => ViewConsultation(results[dataIndex])}>View Full Consultation</Button>
            </>
            )
          }
        }
      },
      {name: "View Patient",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    return (<>
                        <Button variant="outlined" color="primary" onClick={() => viewPatient(results[dataIndex])}>View Patient Details</Button>
                    </>
                    )}
            }
        },
        {name: "Add Consultation",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    return (<>
                        <Button variant="outlined" color="primary" onClick={() => addConsultation(results[dataIndex])}>Add Consultation</Button>
                    </>
                    )}
            }
        }
    ];

  const options = {
    search: true,
    download: false,
    print: false,
    viewColumns: true,
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    selectableRows: "none",
  };
  const goBack = () => {
    return history.goBack()
  }
  const addConsultation = (result) => {
    return history.push("/addConsultation/"+result.patient.id);
  }
  const viewPatient = (result) => {
      return history.push("/viewPatient/"+result.patient.id);
    }

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Box sx={{ mt: 6 }}>
        <Container maxWidth="lg" className='searchPatient'>
          
          <MUIDataTable
            title={"Consultation History of "+props.patient.firstName+" "+props.patient.lastName+", "+props.patient.age+" years old, "+props.patient.gender }
            data={results}
            columns={columns}
            options={options}></MUIDataTable>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          style={{paddingLeft:"20px",marginTop:"5px"}}
        >
          <Grid item xs={12} sm={12} md={12} xl={12} direction="column">
                <Button variant="outlined" color="primary" onClick={() => goBack()}>Go Back</Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  )
}

export default AllConsultations