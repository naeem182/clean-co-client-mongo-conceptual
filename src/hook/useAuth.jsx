import { useContext } from "react"
import { AuthContext } from "../provider/Authprovider"


const useAuth = () => {
    const authutils = useContext(AuthContext);
    return authutils;
}
export default useAuth
