import {useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext) ;

    if (loading){
        return (
            <div className="text-center">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }

    return (

        <div>
            {user ? children : <Navigate to="/register"></Navigate>}
        </div>
    );
   
};

PrivateRoute.propTypes = {
    children : PropTypes.object.isRequired , 
}

export default PrivateRoute;