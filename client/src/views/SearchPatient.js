import React, { useState, useEffect } from 'react';
import MUIDataTable from "mui-datatables";
import TextField from "@mui/material/TextField";
import { Button }from "@mui/material";
import { Grid, Select, MenuItem, Container, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useHistory } from 'react-router-dom';
import { NavBar } from "../components/NavBar";

const SearchPatient = (props) => {
    let history = useHistory();
    const fetchUrl = (id,field) => {
      return "/v1/patientdemographics/"+ field + "/" + id;
    }

    const [value, setValue] = useState("");

    const [field, setField] = useState('abhaId');

    const [results, setResult] = useState([]);
    useEffect(() => {
      setResult(props.values) 
    }, [props.values]);
    useEffect(()=>{
      console.log(localStorage.getItem('Value'),localStorage.getItem('Field'))
      let val = localStorage.getItem('Value');
      let field = localStorage.getItem('Field');
      val ? props.get(fetchUrl(val,field)):console.log("no call");
    },[])
    const handleSubmit =  async (event) => {
      // Prevent form from submitting:
      event.preventDefault();
      localStorage.setItem('Value', value);
      localStorage.setItem('Field', field);
      props.get(fetchUrl(value,field));
      // console.log(res);
      // setResult(res.data);
    }

    const viewPatient = (result) => {
      props.set(result);
      return history.push("/viewPatient/"+result.id);
    }
    const addConsultation = (result) => {
      props.set(result);
      return history.push("/addConsultation/"+result.id);
    }
    const pastHistory = (result) => {
      props.set(result);
      return history.push("/viewPastConsultations/"+result.id);
    }

    const columns = 
    [
        { label: "Name",name:"name", options: { filterOptions: { fullWidth: false } ,
        customBodyRenderLite: (dataIndex) => {
            let val = (results[dataIndex].firstName + " " + results[dataIndex].lastName);
            return val;
          } } 
        },
        {label:"Age",name:"age",options: { filterOptions: { fullWidth: false} ,
        customBodyRenderLite: (dataIndex) => {
            let val = results[dataIndex].age;
            return val;
          } } },
        {label:"Contact Number", name:"phoneNo",       
        options: { filterOptions: { fullWidth: false } ,
        customBodyRenderLite: (dataIndex) => {
            let val = results[dataIndex].phoneNo;
            return val;
          } } 
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
        },
        {name: "Past History",
            options: {
                customBodyRenderLite: (dataIndex) => {
                    return (<>
                        <Button variant="outlined" color="primary" onClick={() => pastHistory(results[dataIndex])}>View Patient History</Button>
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
    //   onRowClick: (rowData, rowState) => {
    //     console.log(results[rowState.dataIndex]);
    //     viewPatient(results[rowState.dataIndex]);
    //   },
    };
  return (
    <React.Fragment>
      <NavBar></NavBar>
        <Box sx={{mt : 6}}>
        <Container maxWidth="lg" className='searchPatient'>
        <Grid container direction="row" alignItems="center" style = {{marginBottom: "10px", background: "white", padding: "10px", borderRadius: "10px"}}
          justifyContent="center">
            <Grid item  xs={5}>
            <TextField variant="outlined" id="outlined-value" name = "value" label="Please enter value"  style = {{width: "90%"}} value = {value} onChange={(e) => setValue(e.target.value)}/>
            </Grid>
            <Grid item xs={4}>
            <Select
              style={{width:"150px"}}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={field}
              label="Select Field"
              style = {{width: "90%"}} 
              onChange={(e) => setField(e.target.value)}
              variant = "outlined"
            >
              <MenuItem value={'abhaId'}>Abha ID</MenuItem>
              <MenuItem value={'firstName'}>First Name</MenuItem>
              <MenuItem value={'contact'}>Phone Number</MenuItem>
            </Select>
            </Grid>
            <Grid item xs={3}>
            <Button variant="contained" size="large" color="primary" endIcon={<SearchIcon />}type="submit" onClick={handleSubmit}>
              Search
            </Button>
            
          </Grid>
        </Grid>
        <MUIDataTable
        title={"Patients List"}
        data={results}
        columns={columns}
        options={options}></MUIDataTable>
      </Container>
      </Box>
    </React.Fragment>
  )
}

export default SearchPatient