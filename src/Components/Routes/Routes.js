import { createBrowserRouter } from "react-router-dom";


import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Products from "../Products/Products";
import ErrorDisplay from "../Shared/ErrorDisplay/ErrorDisplay";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorDisplay></ErrorDisplay>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/products/:id',
                element:<Products></Products>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            }
           
        ]
    }
])

export default router;