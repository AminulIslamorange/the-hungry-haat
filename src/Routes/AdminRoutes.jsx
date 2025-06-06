import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoutes = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const [isAdmin,isAdminLoading]=useAdmin();
   const location=useLocation();
    if(loading || isAdminLoading){
       return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default AdminRoutes;