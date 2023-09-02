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
            <Link to="/signin" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-[#4D1489] rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Sign In
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link> 
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex">
            <img className="" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup" />
        </div>                
    </div>
</section>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-y-3 gap-4 md:w-[92%] xl:w-[89%] xl:gap-3 mx-auto'>

  
        <div className='p-8 bg-[#4D1489] text-white rounded-sm shadow hover:shadow-2xl cursor-pointer border w-[90%] mx-auto' data-aos="fade-up">
          <BiMoneyWithdraw className=' mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Money Back Gurantee</h1>
          <p className='text-xs text-center tracking-normal mt-2'>Easy 30-day return policy</p>
        </div>
        <div className='p-8 rounded-sm bg-[#4D1489] text-white shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto' data-aos="fade-up">
          <MdDeliveryDining className='mx-auto' size={25} />
          <h1 className='text-1xl text-center  mt-5'>free Delivery</h1>
          <p className='text-xs text-center tracking-normal mt-2'>When you spend $50 or more</p>
        </div>
        <div className='p-8 bg-[#4D1489] text-white rounded-sm shadow cursor-pointer hover:shadow-2xl border w-[90%] mx-auto ' data-aos="fade-up">
          <BiSupport className='mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Always support</h1>
          <p className='text-xs text-center tracking-normal mt-2'>Need help? contact us anytime</p>
        </div>
        <div className='p-8 bg-[#4D1489] text-white rounded-sm shadow hover:shadow-2xl cursor-pointer border w-[90%] mx-auto ' data-aos="fade-up">
          <MdSecurity className='mx-auto' size={25} />
          <h1 className='text-1xl text-center mt-5'>Security Payment</h1>
          <p className=' text-xs text-center tracking-normal mt-2'>Evc,Sad,Mastercard</p>
        </div>
        </div>
</>
  )
}
