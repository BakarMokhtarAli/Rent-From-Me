import React from 'react'
import { Link } from 'react-router-dom'

export const PageNotFound = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
        <i className="bi bi-info-circle text-9xl text-[#4D1489]"></i>
        <div className="text-2xl flex flex-row justify-center items-center gap-2 max-md:flex-col">
            <p>
            <span className="font-bold text-[#4D1489] text-9xl">4</span>
            <span className="text-9xl font-bold text-[#4D1489]">0</span>
            <span className="text-9xl font-bold text-[#4D1489]">4</span>
            </p>
            <p className="">Oops! Page Not Found</p>
        </div>
        <Link to={'/'} className="px-6 mt-3 py-2 rounded-md bg-[#4D1489] text-white">
            Back
        </Link>
        </div>
    </div>
  )
}
