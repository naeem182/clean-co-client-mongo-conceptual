import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes/Routes'
import './index.css';
import { Toaster } from 'react-hot-toast';
import {
  RouterProvider,
} from "react-router-dom";
import Authprovider from './provider/Authprovider';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
    <Toaster />
  </React.StrictMode>,
)
