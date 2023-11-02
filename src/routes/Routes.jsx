
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AdminLayout from "../AdminLayout/AdminLayout";
import Home from "../Pages/Home/Home";


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
                element: <About></About>,
            },
            {
                path: 'contact',
                element: <Contact></Contact>
            },
        ]
    },
    //     {
    //         path: "/login"
    // element:
    //     },


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
