import React, { useContext } from 'react';
import {Navigate, Route, useLocation } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({children }) => {
  const location = useLocation()
    const [loggedInUser ] = useContext(userContext)
    return  loggedInUser.email ? children : <Navigate to="/login" state ={{from: location}} replace></Navigate>
    
    
    
    
    
};

export default PrivateRoute;