import {
    ADD_CONSULTATION_REQUEST,
    ADD_CONSULTATION_SUCCESS,
    ADD_CONSULTATION_FAILURE,
    GET_CONSULTATION_REQUEST,
    GET_CONSULTATION_SUCCESS,
    GET_CONSULTATION_FAILURE,
    SET_CURRENT_CONSULTATION,
    GET_REFERALS_FAILURE,
    GET_REFERALS_REQUEST,
    GET_REFERALS_SUCCESS,
    GET_HOSPITALS_FOR_REFERAL_FAILURE,
    GET_HOSPITALS_FOR_REFERAL_REQUEST,
    GET_HOSPITALS_FOR_REFERAL_SUCCESS
} from "../common/constants/ActionConstants";

const consultationState = {
    consultation: {
        consultationDate: "",
        complaint: "",
        examination: "",
        illnessSummary: "",
        diagnosisType: "",
        icdDescription: "",
        icd10Code: "",
        improvementStatus: "",
        treatmentInstructions: "",
        remarks: "",
        followUp: "",
        referral: "",
        moveToIP: "",
        reviewSos: "",
        medicines: [],
        responses: [],
        referedHospitalType: "",
        referedHospital: ""
    },
    errMessage: "",
    consultationLoading: false,
    consultationAdding: false,
    consultations: [],
    referals:[],
    refHosList: {},
    refHosListLoading: false,
    referalsLoading: false

}

export const ConsultationReducer = (state = consultationState, action) => {
    switch (action.type) {
        case GET_CONSULTATION_SUCCESS:
            return {
                ...state,
                consultations: action.consultations,
                consultationLoading: false
            };
        case GET_CONSULTATION_FAILURE:
            return {
                ...state,
                consultationLoading: false,
                errMessage: action.err
            }

        case GET_CONSULTATION_REQUEST:
            return {
                ...state,
                consultationLoading: true
            }
        case ADD_CONSULTATION_REQUEST:
            return {
                ...state,
                consultationAdding: true
            }

        case ADD_CONSULTATION_SUCCESS:
            return {
                ...state,
                consultationAdding: false,
            }
        case ADD_CONSULTATION_FAILURE:
            return {
                ...state,
                consultationAdding: false,
            }
        case SET_CURRENT_CONSULTATION:
            return {
                ...state,
                consultation: action.consultation
            }
        case GET_REFERALS_REQUEST:
            return {
                ...state,
                referalsLoading: true
            }

        case GET_REFERALS_SUCCESS:
            return {
                ...state,
                referals: action.referals,
                referalsLoading: false,
            }
        case GET_REFERALS_FAILURE:
            return {
                ...state,
                referalsLoading: false,
            }
        case GET_HOSPITALS_FOR_REFERAL_REQUEST:
            return {
                ...state,
                refHosListLoading: true
            }

        case GET_HOSPITALS_FOR_REFERAL_SUCCESS:
            return {
                ...state,
                refHosList: action.refHosList,
                refHosListLoading: false,
            }
        case GET_HOSPITALS_FOR_REFERAL_FAILURE:
            return {
                ...state,
                refHosListLoading: false,
            }    
        default:
            return { ...state };

    }
}