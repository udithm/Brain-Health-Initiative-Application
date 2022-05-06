import React, { useEffect, useState, useRef } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "react-phone-input-2/lib/style.css";
import Dialog from "@mui/material/Dialog";
import axios from "../common/config/AxiosConfig";

const Questionnaire = (props) => {
  const scrollRef = useRef(null);
  const executeScroll = () => scrollRef.current.scrollIntoView();
  const [response, setResponse] = useState(props.currentQuestionnaireAnswers);
  const [isSubmitted, setIsSubmitted] = useState(false || props.isSubmitted);
  const [open, setOpen] = useState(false);
  const [diagnosis, setDiagnosis] = useState("");
  const [referTo, setReferTo] = useState("");
  console.log(response);

  const handleQButton = (e, key) => {
    console.log(response);
    setResponse({ ...response, [key]: e.target.value });
  };

  useEffect(() => {
    if (!isSubmitted) executeScroll();
    setResponse(props.currentQuestionnaireAnswers);
  }, [props.currentQuestionnaireAnswers]);

  const func = (e) => {
    console.log(e);
    // props.setQuestionnaireInUse(false);
    let responses = {
      answers: response ? response : props.currentQuestionnaireAnswers,
      questionnaire: props.currentQuestionnaire[0],
    };
    props.setResponseList([...props.responseList, responses]);
    setIsSubmitted(true);

    //Send api call and use for next questionnaire
    console.log(responses);
    axios
      .post("/v1/response/", responses)
      .then((res) => {
        console.log(res.data);
        if (res.data.nextQuestionnaire !== "none") {
          props.setQuestionnaireNames([
            ...props.questionnaireNames,
            res.data.nextQuestionnaire,
          ]);
        } else if (res.data.Diagnosis !== "none") {
          props.setDiagnosis(res.data.Diagnosis);
          setDiagnosis(res.data.Diagnosis);
          setOpen(true);
          props.setIsSubmitted(true);
          // props.setQuestionnaireInUse(false);
        }
        if (res.data.Diagnosis !== "none") {
          props.setDiagnosis(res.data.Diagnosis);
          setDiagnosis(res.data.Diagnosis);
        }
        if (res.data.Referral !== "none") {
          props.setReferTo(res.data.Referral);
          setReferTo(res.data.Referral);
          props.setIsSubmitted(true);
          setOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        return err.message;
      });
    // if (props.name === "Common")
    //   props.setQuestionnaireNames([...props.questionnaireNames, "Stroke1"]);
    // else
    //   props.setQuestionnaireNames([...props.questionnaireNames, "Epilepsy1"]);
  };
  const backToConsultation = () => {
    props.setQuestionnaireInUse(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // console.log(props.formValues.responses[props.id], props.id);
    props.view
      ? setResponse(props.formValues.responses[props.id].answers)
      : setResponse(props.currentQuestionnaireAnswers);
  }, [props.view]);
  useEffect(() => {
    console.log("Response is changed", response);
  }, [response]);

  return (
    <>
      <>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll="paper"
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
          maxWidth="m"
        >
          <div style={{ margin: "20px" }}>
            <h2 style={{ textAlign: "center", marginTop: "5px" }}>
              {diagnosis !== "" ? "Diagnosis: " + diagnosis : ""}{" "}
            </h2>
            <h2 style={{ textAlign: "center", marginTop: "5px" }}>
              {referTo !== "" ? "Refer to: " + referTo : ""}{" "}
            </h2>
            <Button
              style={{ width: "280", margin: "20px !important" }}
              variant="contained"
              color="primary"
              onClick={backToConsultation}
            >
              Back To Consultation
            </Button>
          </div>
        </Dialog>
      </>
      <h1
        ref={scrollRef}
        id={props.name}
        style={{ textAlign: "center", marginTop: "10px" }}
        className="heading"
      >
        {props.name + " Questionnaire"}
      </h1>
      <div style={{ maxWidth: "100%", margin: "auto" }}>
        <Grid container alignItems="center" justifyContent="center">
          {props.currentQuestionnaire.map((data, key) => {
            console.log(data);
            return (
              <fieldset
                style={{ border: "none" }}
                disabled={props.view || props.isSubmitted}
              >
                <form>
                  {/* onSubmit={func} */}
                  <div style={{ maxWidth: "80%", margin: "auto" }}>
                    <Grid container alignItems="center" justifyContent="center">
                      {Object.entries(
                        props.currentQuestionnaire[0].questions
                      ).map(([key, data]) => {
                        if (data.options.length === 0) {
                          return (
                            <Grid container spacing={15}>
                              <Grid item xs={9} sm={9} md={9} xl={9.1}>
                                <h3>{data.question}</h3>
                              </Grid>
                              <Grid item>
                                <TextField
                                  variant="outlined"
                                  id="age"
                                  name="age"
                                  label="Age"
                                  type="text"
                                  style={{ width: "130px" }}
                                  value={props.patient.age}
                                />
                              </Grid>
                            </Grid>
                          );
                        }
                        if (data.options.length <= 3) {
                          {
                            console.log(response[key]);
                          }
                          return (
                            <Grid container spacing={15}>
                              <Grid item xs={9} sm={9} md={9} xl={9}>
                                <h3>{data.question}</h3>
                              </Grid>
                              <Grid item>
                                <FormControl>
                                  <RadioGroup
                                    row
                                    aria-labelledby="response"
                                    name="response"
                                    value={response ? response[key] : "NA"}
                                    onChange={(e) => handleQButton(e, key)}
                                  >
                                    {data.options
                                      .filter((option) => {
                                        return option !== "NA";
                                      })
                                      .map((option, itr) => {
                                        return (
                                          <>
                                            <FormControlLabel
                                              value={option}
                                              control={<Radio />}
                                              label={option}
                                              labelPlacement="start"
                                            />
                                          </>
                                        );
                                      })}
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </Grid>
                          );
                        }

                        return (
                          <Grid container spacing={15}>
                            <Grid item xs={9} sm={9} md={9} xl={9}>
                              <h3>{data.question}</h3>
                            </Grid>
                            <Grid item>
                              <TextField
                                variant="standard"
                                name="selectOption"
                                label="select option"
                                value={response ? response[key] : "NA"}
                                type="text"
                                InputProps={{ readOnly: props.view }}
                                select
                                style={{ width: "200px" }}
                                onChange={(e) => handleQButton(e, key)}
                              >
                                {data.options.map((option, itr) => {
                                  return (
                                    <MenuItem value={option}>{option}</MenuItem>
                                  );
                                })}
                              </TextField>
                            </Grid>
                          </Grid>
                        );
                      })}
                    </Grid>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      maxWidth: "400px",
                      margin: "50px auto",
                    }}
                  >
                    <Button
                      style={
                        props.view || isSubmitted
                          ? { display: "none" }
                          : { width: "200px" }
                      }
                      variant="contained"
                      color="primary"
                      onClick={func}
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </fieldset>
            );
          })}
        </Grid>
      </div>
    </>
  );
};
export default Questionnaire;
