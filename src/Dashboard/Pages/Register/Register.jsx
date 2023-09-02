import React from 'react'
import { Header, Footer } from "../../Components"
import { Link } from 'react-router-dom'
import { useTitle } from "../../../Hook/useTitle"

export const Register = () => {

  useTitle("Register")

    const icon = <i className="bi bi-check text-green-400 text-2xl font-bold"></i>
  const cancel = <i className="bi bi-x text-[#FE6700] text-2xl font-bold"></i>

  return (
    <>
    <Header />
    <h2 className="text-xl mt-20 mb-4 text-center font-bold">Create <span className="text-[#4D1489]">Account</span></h2>
    <div className=' mx-auto flex flex-row items-center justify-center gap-4'>
      
      <div className="border-2 border-red-500 w-48 py-2 rounded-md">
        <h2 className="text-center text-xl font-bold mt-2">Owner</h2>

        <span className="flex justify-start items-center gap-2 ml-2 mb-2">
        {icon}
        <p className="font-semibold">All in starter</p>
        </span>
        <span className="flex justify-start items-center gap-2 ml-2 mb-2">
        {icon}
        <p className="font-semibold">24 hours support</p>
        </span>

        <span className="flex justify-start items-center gap-2 ml-2 mb-2">
        {icon}
        <p className="font-semibold">Add product</p>
        </span>
        
        <button className="px-4 py-2 rounded-sm bg-[#4D1489] text-[#fefefe] ml-10">
          <Link to="/owner/register">Owner</Link>
        </button>

      </div>
      {/* renter */}

      <div className="border-2 border-red-500 w-48 py-2 rounded-md">
        <h2 className="text-center text-xl font-bold mt-2">Renter</h2>

        <span className="flex justify-start items-center gap-2 ml-2 mb-2">
        {icon}
        <p className="font-semibold">All in starter</p>
        </span>
        <span className="flex justify-start items-center gap-2 ml-2 mb-2">
        {icon}
        <p className="font-semibold">24 hours support</p>
        </span>

        <span className="flex justify-start items-center gap-2 ml-2 mb-2">
        {cancel}
        <p className="font-semibold">Add product</p>
        </span>
        
        <button className="px-4 py-2 rounded-sm bg-[#4D1489] text-[#fefefe] ml-10">
          <Link to="/renter/register">Renter</Link>
        </button>

      </div>

    </div>
    <Footer />
    </>
  )
}
