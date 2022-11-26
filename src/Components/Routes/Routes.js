import { createBrowserRouter } from "react-router-dom";
import Blog from "../Blog/Blog";
import AllSellers from "../Dashboard/AllSellers/AllSellers";
import AllBuyers from "../Dashboard/AllBuyers/AllBuyers";
import Myorders from "../Dashboard/MyOrders/Myorders";


import Home from "../Home/Home";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Products from "../Products/Products";
import Register from "../Register/Register";
import ErrorDisplay from "../Shared/ErrorDisplay/ErrorDisplay";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import BuyerRoute from "./BuyerRoute";
import SellerRoute from "./SellerRoute";
import AddProduct from "../Dashboard/AddProduct/AddProduct";
import MyProducts from "../Dashboard/MyProducts/MyProducts";

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
             
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
           
        ]
    },
    {
      path:'/dashboard',
      element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      errorElement:<ErrorDisplay></ErrorDisplay>,
      children:[
          {
              path:'/dashboard/myorders',
              element:<BuyerRoute><Myorders></Myorders></BuyerRoute>
          },
          {
            path:'/dashboard/sellers',
            element:<AdminRoute><AllSellers></AllSellers></AdminRoute>
          },
          {
            path:'/dashboard/buyers',
            element:<AdminRoute><AllBuyers></AllBuyers></AdminRoute>
          },
          {
            path:'/dashboard/addproduct',
            element:<SellerRoute><AddProduct></AddProduct></SellerRoute>
          },
          {
            path:'/dashboard/myproducts',
            element:<SellerRoute><MyProducts></MyProducts></SellerRoute>
          }
      ]
    }
])

export default router;