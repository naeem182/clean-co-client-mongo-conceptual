import axios from "axios";
import useAuth from "./useAuth";
import { Navigate, useNavigate } from "react-router-dom";



const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true,
});

const useAxios = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    // Add a response interceptor
    instance.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log('error tracked in the interceptor', error.response)
        if (error.response.status === 401 || error.response.status === 403) {
            console.log('logout the user')
            logout()
                .then(() => {
                    navigate('/login')
                })

        }

        return Promise.reject(error);
    });








    return instance;
}

export default useAxios;
