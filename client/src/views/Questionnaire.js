import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import "react-phone-input-2/lib/style.css";

const Questionnaire = (props) => {
  const [response, setResponse] = useState(props.commonQuestionnaireAnswers);
  // console.log(questions)

  const handleQButton = (e, key) => {
    setResponse({...response,[key]: e.target.value});
    console.log(response);
  };

  const func = (e) => {
    console.log(e);
    props.setQuestionnaireInUse(false);
    let responses = {
      answers: response,
      questionnaire: props.commonQuestionnaire[0],
    };
    props.setResponseList([...props.responseList, responses]);
  };

  useEffect(() => {
    console.log(props.view);
    props.view
      ? setResponse(props.formValues.responses[0].answers)
      : setResponse(props.commonQuestionnaireAnswers);
  }, [props.view]);
  useEffect(()=>{
    console.log("Response is changed")
  },[response])

  return (
    <>
      <h1
        style={{ textAlign: "center", marginTop: "10px" }}
        className="heading"
      >
        {"Common Questionnaire"}
      </h1>
      <div style={{ maxWidth: "100%", margin: "auto" }}>
        <Grid
          container
          spacing={3}
          // direction="column"
          alignItems="center"
          justifyContent="center"
        >
          {props.commonQuestionnaire.map((data, key) => {
            console.log(data);
            return (
              <fieldset style={{ border: "none" }} disabled={props.view}>
                <form onSubmit={func}>
                  <div style={{ maxWidth: "80%", margin: "auto" }}>
                    <Grid
                      container
                      spacing={3}
                      // direction="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {Object.entries(
                        props.commonQuestionnaire[0].questions
                      ).map(([key, data]) => {
                        if (data.options.length <= 3) {
                          return (
                            <>
                              <Grid item xs={9} sm={9} md={9} xl={9}>
                                <h3>
                                  {data.question} 
                                </h3>
                              </Grid>
                              <Grid>
                                <FormControl>
                                  <RadioGroup
                                    row
                                    aria-labelledby="response"
                                    name="response"
                                    value={response[key]}
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
                                              labelPlacement="top"
                                            />
                                          </>
                                        );
                                      })}
                                  </RadioGroup>
                                </FormControl>
                              </Grid>
                            </>
                          );
                        }
                        return (
                          <>
                            <Grid item xs={9} sm={9} md={9} xl={9}>
                              <h3>{data.question}</h3>
                            </Grid>
                            <Grid>
                              <TextField
                                variant="outlined"
                                name="selectOption"
                                label="select option"
                                value={response[key]}
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
                          </>
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
                        props.view ? { display: "none" } : { width: "200px" }
                      }
                      variant="contained"
                      color="primary"
                      type="submit"
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
