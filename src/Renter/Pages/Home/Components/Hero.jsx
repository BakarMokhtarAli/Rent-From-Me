import React from 'react'
import { MdSecurity, MdDeliveryDining } from "react-icons/md"
import { BiSupport, BiMoneyWithdraw } from "react-icons/bi"
import { Link } from 'react-router-dom'
export const Hero = () => {
  return (
    <>
    <section className="bg-gradient-to-r from-[#FE6700] to-[#FEFEFE] dark:bg-gray-900 mt-[74px]">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Find The Perfect Device</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Rent-From-Me offers a wide range of electronic Devices for rent</p>
            <Link to="/renter/items" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-[#4D1489] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Rented Items
                <i className="bi bi-box-arrow-in-right ml-2 text-2xl text-center"></i>
            </Link> 
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img className="" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                
    </div>
</section>
</>
  )
}
