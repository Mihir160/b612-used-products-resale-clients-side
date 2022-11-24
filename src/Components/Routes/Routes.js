import { createBrowserRouter } from "react-router-dom";
import Header from "../Home/Header";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Header></Header>
            }
        ]
    }
])

export default router;