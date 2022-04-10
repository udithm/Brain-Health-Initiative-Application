import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import { MenuItem, Paper } from "@mui/material";
import Button from "@mui/material/Button";
import update from "immutability-helper";
import "react-phone-input-2/lib/style.css";
import { NavBar } from "../components/NavBar";
import { useHistory } from "react-router-dom";
import ConsultationForm from "./ConsultationForm";
import * as yup from "yup";
import Questionnaire from "./Questionnaire";

const tempDate = new Date();
const currentDate = tempDate.toISOString().substring(0, 10);

const formSchema = yup.object().shape({
  consultationDate: yup.date().required(),
  complaint: yup.string().required(),
  examination: yup.string().required(),
  illnessSummary: yup.string().required(),
  diagnosisType: yup.string().required(),
  icdDescription: yup.string().required(),
  icd10Code: yup.string().required(),
  improvementStatus: yup.string().required(),
  treatmentInstructions: yup.string().required(),
  remarks: yup.string().required(),
  referral: yup.string(),
  moveToIP: yup.string(),
  reviewSos: yup.string(),
});

const Consultation = (props) => {
  let commonQuestionnaire = props.questionnaire
    ? props.questionnaire.filter((element) => {
        return element.name === "Common";
      })
    : [];
  let commonQuestionnaireAnswers = {};
  console.log(commonQuestionnaire);
  commonQuestionnaire.length !== 0
    ? Object.entries(commonQuestionnaire[0].questions).map(
        ([key, data]) => (commonQuestionnaireAnswers[key] = "NA")
      )
    : console.log("empty");

  console.log(commonQuestionnaireAnswers);

  const defaultValues = {
    consultationDate: currentDate,
    complaint: "",
    examination: "",
    illnessSummary: "",
    diagnosisType: "",
    icdDescription: "",
    icd10Code: "",
    improvementStatus: "",
    treatmentInstructions: "",
    remarks: "",
    followUpDate: "",
    referral: "",
    patient: props.patient,
    moveToIP: false,
    reviewSos: false,
    // Consultation_List (List of Prior Consultation Ids)
  };
  const [errors, setErrors] = useState({
    consultationDate: false,
    complaint: false,
    examination: false,
    illnessSummary: false,
    diagnosisType: false,
    icdDescription: false,
    icd10Code: false,
    improvementStatus: false,
    treatmentInstructions: false,
    remarks: false,
    followUpDate: false,
    referral: false,
  });

  const [formValues, setFormValues] = useState(defaultValues);
  const [questionnaireInUse, setQuestionnaireInUse] = useState(false);
  const [responseList, setResponseList] = useState([]);

  useEffect(() => {
    setFormValues({
      ...formValues,
      responses: responseList,
    });
  }, [responseList]);

  useEffect(() => {
    props.view ? setFormValues(props.values) : setFormValues(formValues);
  }, [props.view, props.values]);

  const handleSubmit = React.useCallback(
    async (event) => {
      // Prevent form from submitting:
      event.preventDefault();
      // Check the schema if form is valid:
      const isFormValid = await formSchema.isValid(formValues, {
        abortEarly: false, // Prevent aborting validation after first error
      });
      if (isFormValid) {
        console.log("in");
        console.log(formValues);
        let responses = {
          answers: commonQuestionnaireAnswers,
          questionnaire: commonQuestionnaire[0],
        };
        formValues.responses
          ? props.add(formValues)
          : props.add({
              ...formValues,
              responses: [...responseList, responses],
            });
      } else {
        formSchema.validate(formValues, { abortEarly: false }).catch((err) => {
          const errors = err.inner.reduce((acc, error) => {
            console.log(error);
            return {
              ...acc,
              [error.path]: true,
            };
          }, {});
          setErrors((prevErrors) =>
            update(prevErrors, {
              $set: errors,
            })
          );
        });
      }
    },
    [formValues]
  );

  let history = useHistory();

  const goBack = () => {
    return history.goBack();
  };
  const pastHistory = () => {
    return history.push("/viewPastConsultations/" + props.patient.id);
  };
  const viewPatient = () => {
    return history.push("/viewPatient/" + props.patient.id);
  };

  return (
    <>
      <NavBar></NavBar>
      {questionnaireInUse ? (
        props.questionnaire && (
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
                paddingTop: "20px",
                paddingRight: "20px",
              }}
            >
              <Grid item xs={12} sm={12} md={12} xl={12} direction="column">
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => {
                    setQuestionnaireInUse(false);
                    // setFormValues({ ...formValues, responses: responseList });
                  }}
                >
                  Go Back
                </Button>
              </Grid>
            </Grid>
            <Paper
              elevation={10}
              style={{ margin: "20px 5%" }}
              className="page-content"
            >
              <Questionnaire
                questionnaire={props.questionnaire}
                formValues={formValues}
                view={props.view}
                setFormValues={setFormValues}
                setQuestionnaireInUse={setQuestionnaireInUse}
                responseList={responseList}
                setResponseList={setResponseList}
                commonQuestionnaire={commonQuestionnaire}
                commonQuestionnaireAnswers={commonQuestionnaireAnswers}
              />
            </Paper>
          </>
        )
      ) : (
        <Paper
          elevation={10}
          style={{ margin: "5vh 10%", width: "80%" }}
          className="page-content"
        >
          <ConsultationForm
            formValues={formValues}
            setFormValues={setFormValues}
            handleSubmit={handleSubmit}
            errors={errors}
            setErrors={setErrors}
            setQuestionnaireInUse={setQuestionnaireInUse}
          />
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            style={{
              paddingBottom: "10px",
              marginTop: "-30px",
              paddingLeft: "20px",
            }}
          >
            <Grid item xs={12} sm={4} md={4} xl={4} direction="column">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => goBack()}
              >
                Go Back
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={4} xl={4} direction="column">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => viewPatient()}
              >
                View Patient Details
              </Button>
            </Grid>
            <Grid item xs={12} sm={4} md={4} xl={4} direction="column">
              <Button
                variant="outlined"
                color="primary"
                onClick={() => pastHistory()}
              >
                View Patient History
              </Button>
            </Grid>
          </Grid>
        </Paper>
      )}
    </>
  );
};
export default Consultation;
