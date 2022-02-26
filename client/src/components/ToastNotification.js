import React, { useEffect } from "react";
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";

import {
    alertClear
} from "../actionCreators/AlertActions";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


export const ToastNotification = () => {
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
    const alertState = useSelector(state => state.AlertReducer);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(alertClear())
    }
    const position = { vertical: alertState.vertical, horizontal: alertState.horizontal};
    useEffect(() => {

    })
    return (
        <Snackbar  open={alertState.open} autoHideDuration={600000} onClose={handleClose} anchorOrigin = {position}>
            <Alert onClose={handleClose} severity = {alertState.severity} sx={{ width: '100%', color: alertState.color + " !important", backgroundColor: alertState.backgroundColor + " !important" }}>
                {alertState.message}
            </Alert>
        </Snackbar>
    )
}