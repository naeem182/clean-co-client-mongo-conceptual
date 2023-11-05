
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AdminLayout from "../AdminLayout/AdminLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Services from "../Pages/services/Services";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            },
            {
                path: 'about',
                element: <PrivateRoute> <About></About></PrivateRoute>,
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
            {
                path: 'services',
                element: <PrivateRoute><Services></Services></PrivateRoute>
            },
        ]
    },
    {
        path: "/register",
        element: <Register></Register>
    },
    {
        path: "/login",
        element: <Login></Login>
    },


    {
        path: "/admin",
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                path: 'about',
                element: <About></About>,
            },

        ]
    },
]);

export default router
