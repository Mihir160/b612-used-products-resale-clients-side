import { createBrowserRouter } from "react-router-dom";
import Myorders from "../Dashboard/MyOrders/Myorders";


import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Products from "../Products/Products";
import Register from "../Register/Register";
import ErrorDisplay from "../Shared/ErrorDisplay/ErrorDisplay";
import PrivateRoute from "./PrivateRoute";

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
                element: <PrivateRoute><Products></Products></PrivateRoute>,
                loader:({params}) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
             
            }
           
        ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement:<ErrorDisplay></ErrorDisplay>,
      children:[
          {
              path:'/dashboard',
              element:<Myorders></Myorders>
          }
      ]
    }
])

export default router;