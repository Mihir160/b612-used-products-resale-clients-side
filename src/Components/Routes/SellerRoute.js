import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider"
import useSeller from "../Hooks/useSeller";


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    if (loading || isSellerLoading) {
        return <progress className="progress bg-orange-500 w-56"></progress>
    }
 
     
    if (user && !isSeller) {
        return children;
    }
    if (user && isSeller) {
        return children;
    }
 
 

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;