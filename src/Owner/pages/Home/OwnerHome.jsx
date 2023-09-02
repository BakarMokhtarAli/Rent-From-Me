import React from 'react'
import { Header, Hero, Footer, Items } from "./Components"
import { useTitle } from "../../../Hook/useTitle"

export const OwnerHome = () => {
  useTitle("Owner")
  return (
    <div>
        <Header />
        <Hero />
        <Items />
        <Footer />
    </div>
  )
}
