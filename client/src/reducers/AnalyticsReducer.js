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

const initialState ={
    diseaseChartData:{},
    diseaseChartLoading: true,
    diseaseChartError:"",
    phcChartData:"",
    phcChartLoading: true,
    phcChartError:"",
    referalChartData:{},
    referalChartLoading: true,
    referalChartError:"",
}

export const AnalyticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISEASE_ANALYTICS_SUCCESS:
            return {
                ...state,
                phcChartData: action.chartDataDisease
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
            return {
                ...state,
                diseaseChartData: action.chartDataPhc
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
        default:
                return state;
    }
}