import { Navigate } from "react-router-dom"
import { useAuth } from "../../context/AuthProvider"

export const PrivateRouter = ({children}) => {
    const { isLoggedIn } = useAuth()
    return isLoggedIn ? children : <Navigate to="/login"/>

}