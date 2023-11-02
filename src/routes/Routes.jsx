
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,

} from "react-router-dom";
import App from "../App";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App></App>,
    },
]);

export default router