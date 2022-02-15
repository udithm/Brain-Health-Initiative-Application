import React from 'react';
import {Route} from "react-router-dom";
import {Redirect} from "react-router";

const ProtectedRoute = ({component: Component, ...restProps}) => {
    const jwt = localStorage.getItem("jwt");
  return (
    //   jwt ? <Route path={path} component={component}></Route> :  <Redirect from="*" to="/login"></Redirect> 
        <Route {...restProps} render={ props => (
            jwt ? <Component {...props} />: <Redirect from="*" to="/login" state={ {from: props.location}}></Redirect> )}/>
    );
}

export default ProtectedRoute