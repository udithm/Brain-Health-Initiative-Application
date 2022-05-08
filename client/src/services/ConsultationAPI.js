import {
    addConsultationRequest,
    addConsultationSuccess,
    addConsultationFailure,
    getConsultationRequest,
    getConsultationSuccess,
    getConsultationFailure,
    setConsultation,
    getReferalsFailure,
    getReferalsRequest,
    getReferalsSuccess,
    getHospitalsForReferalFailure,
    getHospitalsForReferalRequest,
    getHospitalsForReferalSuccess
} from "../actionCreators/ConsultationActions.js";
import { alertError, alertSuccess } from "../actionCreators/AlertActions";
import axios from "../common/config/AxiosConfig";


export const addConsultation = (consultation) => {
    return (dispatch) => {
        console.log("in api",consultation)
        dispatch(addConsultationRequest());
        axios
            .post("http://localhost:8080/api/v1/consultationrecords", consultation)
            .then((res) => {
                dispatch(alertSuccess("Consultation Added Successfully!"));
                dispatch(addConsultationSuccess());
            })
            .catch((err) => {
                dispatch(alertError(err.response.data.message));
                dispatch(addConsultationFailure());
            })
    }
}

export const getConsultations = (id) => {
    return (dispatch) => {
        console.log("f1");
        dispatch(getConsultationRequest());
        axios
            .get("http://localhost:8080/api/v1/consultationrecords/patientId/" + id)
            .then((res) => {
                dispatch(getConsultationSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getConsultationFailure(err.message));
                console.log("-----this is catch------", err);
            })
    }
}

export const getConsulationByDoctorId = (id) => {
  return (dispatch) => {
    console.log("f2");
    dispatch(getConsultationRequest());
    axios
      .get("/v1/consultationrecords/")
      .then((res) => {
          console.log("dataaaaaaaaaaaaaaaa",res.data)
        dispatch(getConsultationSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getConsultationFailure(err.message));
        console.log("-----this is catch------", err);
      });
  };
};

export const getPatientConsultationsInHospital = (pid, hid) => {
    return (dispatch) => {
        console.log("f2");
        dispatch(getConsultationRequest());
        axios
            .get("http://localhost:8080/api/v1/consultationrecords/patientAndHospital/" + pid + "/" + hid)
            .then((res) => {
                dispatch(getConsultationSuccess(res.data));
            })
            .catch((err) => {
                dispatch(getConsultationFailure(err.message));
                console.log("-----this is catch------", err);
            })
    }
}

export const setConsultationByAPI = (id) => {
    return (dispatch) => {
        axios
            .get("http://localhost:8080/api/v1/consultationrecords/id/" + id)
            .then((res) => {
                dispatch(setConsultation(res.data));
            })
            .catch((err) => {
                dispatch(getConsultationFailure(err.message));
                console.log("-----this is catch------", err);
            })
    }
}

export const setConsultationSelected = (consultation) => {
    console.log(consultation)
    return (dispatch) => {
        dispatch(setConsultation(consultation));
    }
}

// export const getCommonQuestionnaire = async () => {
//     axios
//     .get ("http://localhost:8080/api/v1/questionnaire/Common") 
//     .then ((res) => {
//         console.log(res.data)
//         return res.data;
//     })
//     .catch((err)=>{
//         return err.message;
//     })
// }
export const getMyReferals = (hid) => {
    console.log("referalassss11111");

    return (dispatch) => {
        console.log("referalassss");
        dispatch(getReferalsRequest());
        axios
            .get("/getMyHospitalReferrals/" +  + hid)
            .then((res) => {
                console.log("((((((((((",res,hid);
                dispatch(getReferalsSuccess(res.data));
                dispatch(alertSuccess("fetch sucessful"));
                console.log("thennnnnnn");
            })
            .catch((err) => {
                dispatch(getReferalsFailure(err.message));
                dispatch(alertError(err.message));

                console.log("----refereals failure------", err);
            })
    }
}

export const getHospitalsforReferral = () => {
    return (dispatch) => {
        dispatch(getHospitalsForReferalRequest());
        console.log("^^^^getHoRef^^^req");
        axios

        .get("/getHospitalsforReferral")
        .then((res) => {
            if (!res.data) { throw new Error("No hospitals"); } // this is added so mock server can be used(jugad)
            // dispatch(getHospitalsforReferralSuccess(res.data));
            console.log("^^^^getHoRef^^^suc",res.data);

            dispatch(getHospitalsForReferalSuccess(res.data));
            // dispatch(alertSuccess("fetch sucessful"));

            // console.log("$$$$$$$$$$$$$$$$$$$gethospiiii",res);
            // localStorage.setItem("getHospitalsforReferral",JSON.stringify(res.data));

        })
        .catch((err) => {
            dispatch(getHospitalsForReferalFailure(err.message));
            console.log("^^^^getHoRef^^^fail",err);

            dispatch(alertError(err.message));
            console.log("-----this is catch------", err);
        })

    }
}