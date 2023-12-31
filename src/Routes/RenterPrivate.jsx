import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

export const RenterPrivate = ( {children} ) => {
    const token = Cookies.get("token")
  return token ? children : <Navigate to={"/renter/login"} />
}
