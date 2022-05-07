import React, { useState, useEffect } from "react";
import MUIDataTable from "mui-datatables";
import Button from "@mui/material/Button";
import { Grid, Select, MenuItem, Container, Box, Radio } from "@mui/material";
import { NavBar } from "../components/NavBar";
import { useHistory } from "react-router-dom";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const DoctorConsultationsView = (props) => {
  let history = useHistory();
  const [results, setResult] = useState([]);

  useEffect(() => {
    setResult(props.values);
  }, [props.values]);

  const ViewConsultation = (result) => {
    props.set(result);
    return history.push(
      "/viewConsultation/" + result.patient.id + "/" + result.id
    );
  };
  const columns = [
    {
      label: "Consultation Date",
      name: "consultationDate",
      options: {
        filterOptions: { fullWidth: false },
        customBodyRenderLite: (dataIndex) => {
          let val = results[dataIndex].consultationDate;
          return val;
        },
      },
    },
    {
      label: "Complaint",
      name: "compliant",
      options: {
        filterOptions: { fullWidth: false },
        customBodyRenderLite: (dataIndex) => {
          let val = results[dataIndex].complaint;
          return val;
        },
      },
    },
    {
      label: "Improvement Status",
      name: "improvementStatus",
      options: {
        filterOptions: { fullWidth: false },
        customBodyRenderLite: (dataIndex) => {
          let val = results[dataIndex].improvementStatus;
          return val;
        },
      },
    },
    {
      name: "View Consultation",
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => ViewConsultation(results[dataIndex])}
              >
                View Full Consultation
              </Button>
            </>
          );
        },
      },
    },
    {
      name: "View Patient",
      options: {
        customBodyRenderLite: (dataIndex) => {
          return (
            <>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => viewPatient(results[dataIndex])}
              >
                View Patient Details
              </Button>
            </>
          );
        },
      },
    },
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
    setResult([]);
    return history.goBack();
  };
  const viewPatient = (result) => {
    return history.push("/viewPatient/" + result.patient.id);
  };

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Box sx={{ mt: 6 }}>
        <Container maxWidth="lg" className="searchPatient">
          <MUIDataTable
            title={
              "Consultation Records created by " +
              props.doctor.name +
              ", " +
              props.doctor.Hospital.name +
              ", " +
              props.doctor.Hospital.city
            }
            data={results}
            columns={columns}
            options={options}
          ></MUIDataTable>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="center"
          style={{ paddingLeft: "20px", marginTop: "5px" }}
        >
          <Grid item xs={12} sm={12} md={12} xl={12} direction="column">
            <Button variant="outlined" color="primary" onClick={() => goBack()}>
              Go Back
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default DoctorConsultationsView;
