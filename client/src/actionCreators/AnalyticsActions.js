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

export const diseaseAnalyticsRequest = () => ({
    type: DISEASE_ANALYTICS_REQUEST
})

export const diseaseAnalyticsSuccess = (diseaseChartData) => ({
    type: DISEASE_ANALYTICS_SUCCESS,
    diseaseChartData: diseaseChartData
})

export const diseaseAnalyticsFailure = (err) => ({
    type: DISEASE_ANALYTICS_FAILURE,
    err: err
})

export const phcAnalyticsRequest = () => ({
    type: PHC_ANALYTICS_REQUEST
})


export const phcAnalyticsSuccess = (phcChartData) => ({
    type: PHC_ANALYTICS_SUCCESS,
    phcChartData: phcChartData
})

export const phcAnalyticsFailure = (err) => ({
    type: PHC_ANALYTICS_FAILURE,
    err: err
})

export const referalAnalyticsRequest = () => ({
    type: REFERAL_ANALYITICS_REQUEST
})

export const referalAnalyticsSuccess = (referalChartData) => ({
    type: REFERAL_ANALYITICS_SUCCESS,
    referalChartData: referalChartData
})

export const referalAnalyticsFailure = (err) => ({
    type: REFERAL_ANALYITICS_FAILURE,
    err: err
})

export const districtHospitalAnalyticsRequest = () => ({
    type: DISTRICT_HOSPITAL_ANALYITICS_REQUEST
})

export const districtHospitalAnalyticsSuccess = (districtHospitalChartData) => ({
    type: DISTRICT_HOSPITAL_ANALYITICS_SUCCESS,
    districtHospitalChartData: districtHospitalChartData
})

export const districtHospitalAnalyticsFailure = (err) => ({
    type: DISTRICT_HOSPITAL_ANALYITICS_FAILURE,
    err: err
})

export const icd10AnalyticsRequest = () => ({
    type: ICD10_ANALYITICS_REQUEST
})

export const icd10AnalyticsSuccess = (icd10ChartData) => ({
    type: ICD10_ANALYITICS_SUCCESS,
    icd10ChartData: icd10ChartData
})

export const icd10AnalyticsFailure = (err) => ({
    type: ICD10_ANALYITICS_FAILURE,
    err: err
})

export const stateDoctorAnalyticsRequest = () => ({
    type: STATE_DOCTOR_ANALYITICS_REQUEST
})

export const stateDoctorAnalyticsSuccess = (stateDoctorChartData) => ({
    type: STATE_DOCTOR_ANALYITICS_SUCCESS,
    stateDoctorChartData: stateDoctorChartData
})

export const stateDoctorAnalyticsFailure = (err) => ({
    type: STATE_DOCTOR_ANALYITICS_FAILURE,
    err: err
})