import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

export const OwnerPrivate = ( { children } ) => {
  const token = Cookies.get("token")
  return token ? children : <Navigate to={"/owner/login"} />
}
