import React from 'react';
import ReactDOM from 'react-dom'; // Correct import for ReactDOM
import router from './routes/Routes';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom'; // Correct import for RouterProvider

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AuthProvider from './provider/Authprovider';


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider> {/* Correct component name */}
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </QueryClientProvider>
  </React.StrictMode>
);
