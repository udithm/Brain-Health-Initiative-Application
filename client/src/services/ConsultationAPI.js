import {
    addConsultationRequest,
    addConsultationSuccess,
    addConsultationFailure,
} from "../actionCreators/ConsultationActions.js";
import axios from "../common/config/AxiosConfig";


export const addConsultation = (consultation) => {
    return (dispatch) => {
        dispatch(addConsultationRequest()); 
        axios
            .post ("/v1/consultationrecords", consultation ) 
            .then ((res) => {
                dispatch(addConsultationSuccess({success: true, failure: false, message: "Consultation added successfully" }));
            })
            .catch((err)=>{
                dispatch(addConsultationFailure({success: false, failure: true, message: err.response.data.message }));
            })
    }
}

