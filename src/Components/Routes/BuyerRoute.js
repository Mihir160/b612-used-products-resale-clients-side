import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import useBuyer from "../Hooks/useBuyer";


const BuyerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
    const location = useLocation();

    if (loading || isBuyerLoading) {
        return <progress className="progress bg-orange-500 w-56"></progress>
    }
 
    if (user && !isBuyer) {
        return children;
    }
    if (user && isBuyer) {
        return children;
    }
 
 

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;