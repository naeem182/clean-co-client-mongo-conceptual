import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hook/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, isloading } = useAuth()

    const location = useLocation()
    // console.log(location.pathname)


    if (isloading) {
        return <>
            <span className="loading loading-spinner loading-xs"></span>
            <span className="loading loading-spinner loading-sm"></span>
            <span className="loading loading-spinner loading-md"></span>
            <span className="loading loading-spinner loading-lg"></span>
        </>
    }

    else if (user) {
        return children;
    }
    else
        return <Navigate state={location.pathname} to="/login"></Navigate>;
};
export default PrivateRoute
