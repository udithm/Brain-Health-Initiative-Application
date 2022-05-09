import {
    DISEASE_ANALYTICS_FAILURE,
    DISEASE_ANALYTICS_REQUEST,
    DISEASE_ANALYTICS_SUCCESS,
    PHC_ANALYTICS_FAILURE,
    PHC_ANALYTICS_REQUEST,
    PHC_ANALYTICS_SUCCESS,
    REFERAL_ANALYITICS_FAILURE,
    REFERAL_ANALYITICS_REQUEST,
    REFERAL_ANALYITICS_SUCCESS,
    DISTRICT_HOSPITAL_ANALYITICS_FAILURE,
    DISTRICT_HOSPITAL_ANALYITICS_REQUEST,
    DISTRICT_HOSPITAL_ANALYITICS_SUCCESS,
    ICD10_ANALYITICS_FAILURE,
    ICD10_ANALYITICS_REQUEST,
    ICD10_ANALYITICS_SUCCESS,
    STATE_DOCTOR_ANALYITICS_FAILURE,
    STATE_DOCTOR_ANALYITICS_REQUEST,
    STATE_DOCTOR_ANALYITICS_SUCCESS
} from "../common/constants/ActionConstants";

const initialState ={
    diseaseChartData:{},
    diseaseChartLoading: true,
    diseaseChartError:"",
    phcChartData:{},
    phcChartLoading: true,
    phcChartError:"",
    referalChartData:{},
    referalChartLoading: true,
    referalChartError:"",
    districtHospitalChartData:{},
    districtHospitalChartLoading: true,
    districtHospitalChartError:"",
    icd10ChartData:{},
    icd10ChartLoading: true,
    icd10ChartError:"",
    stateDoctorChartData:{},
    stateDoctorChartLoading: true,
    stateDoctorChartError:"",
}

export const AnalyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISEASE_ANALYTICS_SUCCESS:
            return {
                ...state,
                chartDataDisease: action.chartDataDisease
            };
        case DISEASE_ANALYTICS_REQUEST:
            return {
                ...state,
                diseaseChartLoading:false
            };    
        case DISEASE_ANALYTICS_FAILURE:
            return {
                ...state,
                diseaseChartLoading:false,
                diseaseChartError: action.err
            };
        case PHC_ANALYTICS_SUCCESS:
            console.log("phccc reddd",action);
            return {
                ...state,
                phcChartData: action.phcChartData
            };
        case PHC_ANALYTICS_REQUEST:
            return {
                ...state,
                phcChartLoading:false
            };   
        case PHC_ANALYTICS_FAILURE:
            return {
                ...state,
                phcChartLoading:false,
                phcChartError: action.err
            };
        case REFERAL_ANALYITICS_SUCCESS:
            console.log("reduceee",action);
            return {
                ...state,
                referalChartData: action.referalChartData,
                referalChartLoading:true
            };
        case REFERAL_ANALYITICS_REQUEST:
            return {
                ...state,
                referalChartLoading:false
            };   
        case REFERAL_ANALYITICS_FAILURE:
            return {
                ...state,
                referalChartLoading:false,
                referalChartError: action.err
            };
        case DISTRICT_HOSPITAL_ANALYITICS_SUCCESS:
            console.log(" districtttt reduceee",action);
            return {
                ...state,
                districtHospitalChartData: action.districtHospitalChartData,
                districtHospitalChartLoading:true
            };
        case DISTRICT_HOSPITAL_ANALYITICS_REQUEST:
            return {
                ...state,
                districtHospitalChartLoading:false
            };   
        case DISTRICT_HOSPITAL_ANALYITICS_FAILURE:
            return {
                ...state,
                districtHospitalChartLoading:false,
                districtHospitalChartError: action.err
            };
        case ICD10_ANALYITICS_SUCCESS:
            console.log("reduceee",action);
            return {
                ...state,
                icd10ChartData: action.icd10ChartData,
                icd10ChartLoading:true
            };
        case ICD10_ANALYITICS_REQUEST:
            return {
                ...state,
                icd10ChartLoading:false
            };   
        case ICD10_ANALYITICS_FAILURE:
            return {
                ...state,
                icd10ChartLoading:false,
                icd10ChartError: action.err
            };
        case STATE_DOCTOR_ANALYITICS_SUCCESS:
            console.log("reduceee",action);
            return {
                ...state,
                stateDoctorChartData: action.stateDoctorChartData,
                stateDoctorChartLoading:true
            };
        case STATE_DOCTOR_ANALYITICS_REQUEST:
            return {
                ...state,
                stateDoctorChartLoading:false
            };   
        case STATE_DOCTOR_ANALYITICS_FAILURE:
            return {
                ...state,
                stateDoctorChartLoading:false,
                stateDoctorChartError: action.err
            };
        default:
                return state;
    }
}