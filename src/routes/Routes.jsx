
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import AdminLayout from "../AdminLayout/AdminLayout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
        children: [
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
