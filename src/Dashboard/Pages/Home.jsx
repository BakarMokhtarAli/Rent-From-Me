import { Header, Hero, Faqs, Footer } from "../Components"
import { useTitle } from "../../Hook/useTitle"
import Cookies from "js-cookie"
import { useEffect } from "react"

export const Home = () => {

  useTitle("Home")
  const token = Cookies.get("token")
  
  useEffect(()=>{
    if(token){
      Cookies.remove("token")
    }
    
  },[token])
  
  return (
    <div>
      <Header />
      <Hero />
      <Faqs />
      <Footer />
    </div>
  )
}
