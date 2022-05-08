import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import "react-phone-input-2/lib/style.css";
import calculatorData from "../common/icd10CodesFSeries.json";
import { Autocomplete } from "@mui/material";

const ConsultationForm = (props) => {
  const defaultProps = {
    options: calculatorData,
  };

  const handleButton = (e, index) => {
    const { name, value } = e.target;
    const list = [...props.formValues.medicines];
    list[index][name] = value;
    props.setFormValues({
      ...props.formValues,
      medicines: list,
    });
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...props.formValues.medicines];
    list.splice(index, 1);
    props.setFormValues({
      ...props.formValues,
      medicines: list,
    });
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    props.setFormValues({
      ...props.formValues,
      medicines: [
        ...props.formValues.medicines,
        {
          medicineName: "",
          dosage: "",
          dosingTime: "",
          duration: "",
        },
      ],
    });
  };
  const handleRadioChange = (event) => {
    if (!props.view) {
      console.log(event.target.value, event.target.value === "moveToIP");
      props.setRadioValue(event.target.value);
      props.setFormValues({
        ...props.formValues,
        moveToIp: event.target.value === "moveToIP",
        reviewSos: event.target.value === "reviewSOS",
        followUpDate:
          event.target.value !== "followUpDate"
            ? ""
            : props.formValues.followUpDate,
        referral:
          event.target.value !== "referral" ? "" : props.formValues.referral,
      });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    props.setErrors({
      ...props.errors,
      [name]: false,
    });
    props.setFormValues({
      ...props.formValues,
      [name]: value,
    });
  };

  const handleICDcode = (e) => {
    const selected =
      calculatorData.find((product) => product.CODE === e.target.textContent) ||
      calculatorData.find(
        (product) => product.icdDescription === e.target.textContent
      );
    props.setErrors({
      ...props.errors,
      icd10Code: false,
      icdDescription: false,
    });

    props.setFormValues({
      ...props.formValues,
      icd10Code: selected.CODE,
      icdDescription: selected.icdDescription,
    });
  };

  useEffect(() => {
    console.log(props.formValues.reviewSos, props.formValues);
    props.view
      ? props.setRadioValue(
        props.formValues.reviewSos
          ? "reviewSOS"
          : props.formValues.moveToIp
            ? "moveToIP"
            : props.formValues.followUpDate
              ? "followUpDate"
              : props.formValues.referedHospital !== ""
                ? "referral" : ""
      )
      : console.log("");
  }, [props.view, props.formValues.reviewSos, props.formValues.moveToIp]);

  const [hospitalType, setHospitalType] = useState("");

  const handleHospitalTypeChange = (event, value, reason) => {
    if (reason === "selectOption") {
      props.formValues.referedHospitalType = value;
      setHospitalType(value);
    }
  }
  const hospitalTypeList = ["Primary Health Centre", "Secondary Health Centre", "Tertiary Health Centre"]
  // const referalData = {
  //     "Tertiary Health Centre": [
  //         "4. narayna, bengaluru, 560100"
  //     ],
  //     "Primary Health Centre": [
  //         "1. Apollo, vijayawada, 520007"
  //     ],
  //     "Secondary Health Centre": [
  //         "2. kims, ongole, 523002",
  //         "3. sangamithra, ongole, 523302"
  //     ]
  // }
  const [referedHospital, setReferedHospital] = useState([]);
  const gethospitalsList = () => {
    const referalData = JSON.parse(localStorage.getItem("getHospitalsforReferral"))

    let hos = [];
    if (hospitalType) {
      hos = referalData[hospitalType];
    }

    // if (hospitalType) 
    // if (1){
    //     hos = referalData.map((listHos,type) => type === hospitalType);
    //     // hos = referalData.map((item, i) => {      
    //     //     console.log(i,item);
    //     //     return (item);
    //     // })
    //     // (listHos,i) => listHos === "Primary Health Centre");

    //     // hos = referalData.map(function(type) {
    //     //     // console.log(type);
    //     //     // if (type === "Primary Health Centre")
    //     //     //   return 1 ;
    //     //     return type;    
    //     // }
    //     // )
    // }

    //    console.log("This is refeal data: ",referalData);
    //    console.log(hos); 
    return hos;
  }

  // console.log(gethospitalsList());
  const changeReferedHospital = (event, value) => {
    props.formValues.referedHospital = value;
    setReferedHospital(value);
  }

  //  useEffect(() => {
  //  }, [props.formValues.reviewSos, props.formValues.moveToIp]);

  return (
    <>
      <Grid
        container
        spacing={3}
        alignItems="center"
        justifyContent="center"
        style={{
          display: "flex",
          alignItems: "flex-end",
          flexDirection: "column",
          paddingRight: "20px",
        }}
      >
        {props.formValues.responses.length === 0 && props.view ? (
          <></>
        ) : (
          <Grid item xs={12} sm={12} md={12} xl={12} direction="column">
            <Button
              variant="outlined"
              color="primary"
              onClick={() => {
                props.setQuestionnaireInUse(true);
                // setResponseList(questions);
              }}
            >
              Questionnaire
            </Button>
          </Grid>
        )}
      </Grid>
      <fieldset style={{ border: "none" }} disabled={props.view}>
        <h2
          style={{ textAlign: "center", marginTop: "5px" }}
          className="heading"
        >
          {props.view ? "Consultation Details" : "Add Consultation Details"}
        </h2>

        <form onSubmit={props.handleSubmit}>
          <div style={{ maxWidth: "95%", margin: "auto" }}>
            <Grid
              container
              spacing={3}
              // direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="date"
                  name="consultationDate"
                  label="Date of Consulting"
                  type="date"
                  value={props.formValues.consultationDate}
                  style={{ width: "100%" }}
                  sx={{ width: 220 }}
                  onChange={handleInputChange}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  error={props.errors.consultationDate}
                  helperText={
                    props.errors.consultationDate
                      ? "Date of Consultation is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="Complaint"
                  name="complaint"
                  label="Complaint"
                  type="text"
                  style={{ width: "100%" }}
                  // variant="outlined"
                  value={props.formValues.complaint}
                  onChange={handleInputChange}
                  error={props.errors.complaint}
                  helperText={
                    props.errors.complaint ? "Complaint is required" : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="Examination"
                  name="examination"
                  label="Examination"
                  type="text"
                  style={{ width: "100%" }}
                  value={props.formValues.examination}
                  onChange={handleInputChange}
                  error={props.errors.examination}
                  helperText={
                    props.errors.examination ? "Examination is required" : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="IllnessSummary"
                  name="illnessSummary"
                  label="Illness Summary"
                  type="text"
                  style={{ width: "100%" }}
                  value={props.formValues.illnessSummary}
                  onChange={handleInputChange}
                  error={props.errors.illnessSummary}
                  helperText={
                    props.errors.illnessSummary
                      ? "Illness Summary is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="DiagnosisType"
                  name="diagnosisType"
                  label="Diagnosis Type"
                  type="text"
                  select
                  InputProps={{ readOnly: props.view }}
                  style={{ width: "100%" }}
                  value={props.formValues.diagnosisType}
                  onChange={handleInputChange}
                  error={props.errors.diagnosisType}
                  helperText={
                    props.errors.diagnosisType
                      ? "Diagnosis Type is required"
                      : ""
                  }
                >
                  <MenuItem value="Differential">Differential</MenuItem>
                  <MenuItem value="Provisional">Provisional</MenuItem>
                  <MenuItem value="Tentative">Tentative</MenuItem>
                  <MenuItem value="Final">Final</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <Autocomplete
                  {...defaultProps}
                  id="icdDescription"
                  value={props.formValues.icdDescription}
                  onChange={handleICDcode}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      name="icdDescription"
                      label="ICD Description"
                      error={props.errors.icdDescription}
                      helperText={
                        props.errors.icdDescription
                          ? "ICD Description is required"
                          : ""
                      }
                    />
                  )}
                  getOptionLabel={(option) =>
                    option.icdDescription || props.formValues.icdDescription
                  }
                />
                {/* <TextField
                  variant="outlined"
                  id="icdDescription"
                  name="icdDescription"
                  label="ICD Description"
                  type="text"
                  style={{ width: "100%" }}
                  value={props.formValues.icdDescription}
                  onChange={handleInputChange}
                  error={props.errors.icdDescription}
                  helperText={
                    props.errors.icdDescription
                      ? "ICD Description is required"
                      : ""
                  }
                /> */}
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <Autocomplete
                  {...defaultProps}
                  id="icd10Code"
                  value={props.formValues.icd10Code}
                  onChange={handleICDcode}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      name="icd10Code"
                      label="ICD 10 Code"
                      error={props.errors.icd10Code}
                      helperText={
                        props.errors.icd10Code ? "ICD 10 Code is required" : ""
                      }
                    />
                  )}
                  getOptionLabel={(option) =>
                    option.CODE || props.formValues.icd10Code
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="ImprovementStatus"
                  name="improvementStatus"
                  label="Improvement Status"
                  type="text"
                  select
                  InputProps={{ readOnly: props.view }}
                  style={{ width: "100%" }}
                  value={props.formValues.improvementStatus}
                  onChange={handleInputChange}
                  error={props.errors.improvementStatus}
                  helperText={
                    props.errors.improvementStatus
                      ? "Improvement Status is required"
                      : ""
                  }
                >
                  <MenuItem value="Condition Improved">
                    Condition Improved
                  </MenuItem>
                  <MenuItem value="Condition Worsened">
                    Condition Worsened
                  </MenuItem>
                  <MenuItem value="Condition Unchanged">
                    Condition Unchanged
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={12} md={12} xl={12}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      textAlign: "left",
                      marginTop: "5px",
                      marginRight: "15px",
                    }}
                  >
                    Medicines
                  </h3>
                </div>
                {props.formValues.medicines.map((x, i) => {
                  return (
                    <Grid
                      container
                      spacing={3}
                      // direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid
                        item
                        xs={12}
                        sm={4}
                        md={6}
                        xl={2.5}
                        direction="column"
                      >
                        <TextField
                          name="medicineName"
                          label="Medicine Name"
                          value={x.medicineName}
                          style={{ width: "100%" }}
                          onChange={(e) => handleButton(e, i)}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        xl={2.5}
                        direction="column"
                      >
                        <TextField
                          name="dosage"
                          label="Dosage"
                          value={x.dosage}
                          style={{ width: "100%" }}
                          onChange={(e) => handleButton(e, i)}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        xl={2.5}
                        direction="column"
                      >
                        <TextField
                          name="dosingTime"
                          label="Dosing Time"
                          value={x.dosingTime}
                          style={{ width: "100%" }}
                          onChange={(e) => handleButton(e, i)}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        xl={2.5}
                        direction="column"
                      >
                        <TextField
                          name="duration"
                          label="Duration"
                          value={x.duration}
                          style={{ width: "100%" }}
                          onChange={(e) => handleButton(e, i)}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        xl={2}
                        direction="column"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "right",
                            margin: "20px 0px 20px 0px",
                          }}
                        >
                          {props.formValues.medicines.length !== 1 &&
                            (props.view ? (
                              <></>
                            ) : (
                              <Button
                                onClick={() => handleRemoveClick(i)}
                                style={
                                  props.view
                                    ? { display: "none" }
                                    : { width: "100px" }
                                }
                                variant="contained"
                                color="primary"
                              // type="submit"
                              >
                                Remove
                              </Button>
                            ))}
                        </div>
                      </Grid>
                    </Grid>
                  );
                })}
                <Grid item>
                  {props.view ? (
                    <></>
                  ) : (
                    <Button
                      onClick={handleAddClick}
                      style={{ width: "139px", marginTop: "10px" }}
                      variant="contained"
                      color="primary"
                    // type="submit"x
                    >
                      Add medicine
                    </Button>
                  )}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="Treatment Instructions"
                  name="treatmentInstructions"
                  label="Treatment Instructions"
                  style={{ width: "100%" }}
                  value={props.formValues.treatmentInstructions}
                  onChange={handleInputChange}
                  error={props.errors.treatmentInstructions}
                  helperText={
                    props.errors.treatmentInstructions
                      ? "Treatment Instruction is required"
                      : ""
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                <TextField
                  variant="outlined"
                  id="Remarks"
                  name="remarks"
                  label="Remarks"
                  type="text"
                  style={{ width: "100%" }}
                  value={props.formValues.remarks}
                  onChange={handleInputChange}
                  error={props.errors.remarks}
                  helperText={
                    props.errors.remarks ? "Remarks are required" : ""
                  }
                />
              </Grid>

              <Grid item xs={12} sm={12} md={12} xl={12}>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="next-steps"
                  value={props.radioValue}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value="moveToIP"
                    control={<Radio />}
                    label="Move To IP"
                  />
                  <FormControlLabel
                    value="reviewSOS"
                    control={<Radio />}
                    label="Review SOS"
                  />
                  <FormControlLabel
                    value="referral"
                    control={<Radio />}
                    label="Referral"
                  />
                  <FormControlLabel
                    value="followUpDate"
                    control={<Radio />}
                    label="Follow Up Date"
                  />
                </RadioGroup>
              </Grid>
              {props.radioValue === "followUpDate" && (
                <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                  <TextField
                    variant="outlined"
                    id="followUpDate"
                    name="followUpDate"
                    label="Follow Up"
                    type="date"
                    style={{ width: "100%" }}
                    value={props.formValues.followUpDate}
                    onChange={handleInputChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    error={props.errors.followUpDate}
                    helperText={
                      props.errors.followUpDate ? "Follow Up is required" : ""
                    }
                  />
                </Grid>
              )}
              {props.radioValue === "referral" && (
                props.view ? <>
                  <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                    <TextField
                      variant="outlined"
                      id="hospitalType"
                      label="Hospital Type"
                      type="text"
                      style={{ width: "100%" }}
                      value={props.formValues.referedHospitalType}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} xl={4} direction="column">
                    <TextField
                      variant="outlined"
                      id="hospitalType"
                      label="Referred Hospital Name"
                      type="text"
                      style={{ width: "100%" }}
                      value={props.formValues.referedHospital}
                    />
                  </Grid>
                </> :
                  <>
                    <Grid item xs={12} sm={6} md={6} xl={4}>
                      <Autocomplete
                        disablePortal
                        id="hospitalType"
                        options={hospitalTypeList}
                        openOnFocus
                        autoHighlight
                        onChange={handleHospitalTypeChange}
                        renderInput={(params) => <TextField {...params} required value={props.formValues.referedHospitalType}
                          label="Hospital Type" variant="outlined" />}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} xl={4}>

                      <Autocomplete
                        disablePortal
                        id="referedHospitalName"
                        options={gethospitalsList()}
                        openOnFocus
                        autoHighlight
                        onChange={changeReferedHospital}
                        renderInput={(params) => <TextField {...params} required value={props.formValues.referedHospital}
                          label="Referred Hospital Name" variant="outlined" />}
                      />
                    </Grid>

                    {/* <TextField
                    variant="outlined"
                    id="referral"
                    name="referral"
                    label="Referral"
                    value={props.formValues.referral}
                    onChange={handleInputChange}
                    style={{ width: "100%" }}
                    error={props.errors.referral}
                    helperText={
                      props.errors.referral ? "Referral is required" : ""
                    }
                  ></TextField> */}
                  </>
              )}
            </Grid>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxWidth: "400px",
                margin: "20px auto",
              }}
            >
              {
                !props.isSubmitted && <Button
                style={props.view ? { display: "none" } : { width: "200px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Submit
              </Button>}
            </div>
          </div>
        </form>
      </fieldset>
    </>
  );
};
export default ConsultationForm;
