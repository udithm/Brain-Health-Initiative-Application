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

const AllConsultations = (props) => {
  let history = useHistory();
  const [results, setResult] = useState([]);

  useEffect(() => {
    setResult(props.values);
  }, [props.values]);

  const ViewConsultation = (result) => {
    props.set(result);
    return history.push(
      "/viewConsultation/" + props.patient.id + "/" + result.id
    );
  };
  const columns = [
    {
      label: "Doctor",
      name: "doctor",
      options: {
        filterOptions: { fullWidth: false },
        customBodyRenderLite: (dataIndex) => {
          let val = results[dataIndex].doctor.name;
          return val;
        },
      },
    },
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
    onRowClick: (rowData, rowState) => {
      console.log(results[rowState.dataIndex]);
      ViewConsultation(results[rowState.dataIndex]);
    },
  };
  const goBack = () => {
    setResult([]);
    return history.goBack();
  };
  const addConsultation = (result) => {
    return history.push("/addConsultation/" + result.patient.id);
  };
  const viewPatient = (result) => {
    return history.push("/viewPatient/" + result.patient.id);
  };

  const [value, setValue] = useState("No");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(value);
    value === "Yes" ? props.get(props.patient.id) : console.log("Hee");
  }, [value]);

  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Box sx={{ mt: 6 }}>
        <Container maxWidth="lg" className="searchPatient">
          {/* <FormControlLabel control={<Checkbox color="success" />} label="I hereby declare that I have the consent of the concerned patient to view all his past e-health records" /> */}
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="Yes"
                control={<Radio />}
                label="I hereby declare that I have the consent of the concerned patient to view all his past e-health records"
              />
            </RadioGroup>
          </FormControl>
          <MUIDataTable
            title={
              "Consultation History of " +
              props.patient.firstName +
              " " +
              props.patient.lastName +
              ", " +
              props.patient.age +
              " years old, " +
              props.patient.gender
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
            <Button
              variant="outlined"
              color="primary"
              style={{ marginLeft: "5px" }}
              onClick={() => addConsultation(props)}
            >
              Add Consultation
            </Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AllConsultations;
