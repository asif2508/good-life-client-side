import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const RequiredAuth = ({children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
    if(loading){
        return <Loading></Loading>
    }
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
}

export default RequiredAuth;