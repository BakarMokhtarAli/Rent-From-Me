import { Routes, Route } from "react-router-dom"
import { Home, Register, About, SignIn, PageNotFound } from "../Dashboard/Pages"
import { OwnerRegister, RenterRegister } from "../Dashboard/Pages/Register"
import { Contact } from "../Dashboard/Components"
import { OwnerLogin, OwnerHome, ItemRegistration, UpdateItem, OwnerAbout, OwnerContact } from "../Owner/pages"
import { RenterHome, RenterLogin,  RenterAbout, RenterContact, RentedItems } from "../Renter/Pages"
import RentItem from "../Renter/Pages/RentItems"

import { RenterPrivate } from "./RenterPrivate"
import { OwnerPrivate } from "./OwnerPrivate"
import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

export const AllRoutes = () => {
  const token = Cookies.get("token")
  return (
    <Routes>

    <Route path="/" element={<Home />} />
    <Route path="*" element={<PageNotFound />} />
    <Route path="/register" element={<Register />} />
    <Route path="/signin" element={<SignIn />} />
    <Route path="/about" element={<About />} />
    <Route path="/owner/register" element={<OwnerRegister />} />
    <Route path="/renter/register" element={<RenterRegister />} />
    <Route path="/owner/login" element={<OwnerLogin />} />
    <Route path="/owner/contact" element={<OwnerContact />} />

    <Route path="/contact" element={  token ? <Contact /> : <Navigate to={"/signin"} />  } />

    <Route path="/owner/home" element={<OwnerPrivate> <OwnerHome /> </OwnerPrivate>}/>

    <Route path="/owner/addItem" element={ <OwnerPrivate> <ItemRegistration /> </OwnerPrivate>}/>
    <Route path="update/item/:id" element={ <OwnerPrivate> <UpdateItem /> </OwnerPrivate>}/>
    <Route path="/owner/about" element={ <OwnerAbout /> } />

    <Route path="/renter/home" element={ <RenterPrivate> <RenterHome /> </RenterPrivate> } />
    <Route path="/renter/login" element={<RenterLogin />} />
    <Route path="/renter/rentItem/:id" element={<RenterPrivate> <RentItem /> </RenterPrivate>} />
    <Route path="/renter/items" element={<RenterPrivate> <RentedItems /> </RenterPrivate>} />
    <Route path="/renter/about" element={<RenterAbout />} />
    <Route path="/renter/contact" element={<RenterContact />} />

    </Routes>
  )
}
