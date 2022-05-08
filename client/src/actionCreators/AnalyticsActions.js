import {
    DISEASE_ANALYTICS_FAILURE,
    DISEASE_ANALYTICS_REQUEST,
    DISEASE_ANALYTICS_SUCCESS,
    PHC_ANALYTICS_FAILURE,
    PHC_ANALYTICS_REQUEST,
    PHC_ANALYTICS_SUCCESS,
    REFERAL_ANALYITICS_FAILURE,
    REFERAL_ANALYITICS_REQUEST,
    REFERAL_ANALYITICS_SUCCESS
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