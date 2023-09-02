import { Header, Hero, Footer, Items } from "./Components"
import { useTitle } from "../../../Hook/useTitle"
export const RenterHome = () => {
  useTitle("Renter Home")
  return (
    <>
    <Header />
    <Hero />
    <Items />
    <Footer />
    </>
  )
}

