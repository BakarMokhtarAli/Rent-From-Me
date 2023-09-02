import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import * as Yup from 'yup'
import { Form, ErrorMessage, Formik } from 'formik'
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom'
import { Header } from './Header';
import { Footer } from './Footer';
import Cookies from 'js-cookie';
export const Contact = () => {
  const [sent, setSent] = useState(false);
  const token = Cookies.get("token")
  const form = useRef();
  // sending email

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!token){
       navigate("/owner/login")
    }else{
        emailjs.sendForm('service_ggismw7', 'template_csleart', form.current, 'JqxwnroRewv8Ylwal')
              .then((result) => {
                  console.log(result.text);
                  setSent(true)
                  setTimeout(()=>{
                    navigate("/owner/home")
                  },2000)
                  
              }, (error) => {
                  console.log(error.text);
              });
    }
  }
  const navigate = useNavigate()
 


  return (
    <>
    <Header />
      
      {sent && (
        <div className="p-4 max-w-xs m-auto mt-[74px] bg-red-400 rounded-lg shadow-md">
          <span className="font-bold textlg">Thanks for your contacting!</span> we contact you ASAP!.
        </div>
      )}
      <div className='flex mt-[74px] flex-col lg:flex-row  justify-evenly items-center space-x-2 p-2 space-y-3  md:w-[80%] w-[97%] mx-auto'>
          <form onSubmit={handleSubmit} ref={form} className="w-full p-5 shadow-lg rounded-sm grid grid-cols-1 md:grid-cols-1  gap-3">
            <div>
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="text" id="name"
                name='name'
                placeholder='Name'
                required />
              
            </div>
            <div>
              <input className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:outline-blue-500 block w-full p-2.5"
                type="email" id="email"
                name='email'
                placeholder='Email'
                required />
              
            </div>
            <div>
              <textarea className="shadow-sm bg-gray-50 border pl-2  border-gray-300 text-gray-900 text-lg h-40 focus:outline-blue-500 block w-full p-2.5"
                type="text" id="title"
                name='message'
                placeholder='Message'
                required />
              
            </div>
            <div>
            <button type='submit' className='  w-full mb-4  outline-none  bg-red-500 text-center font-normal text-gray-100 px-4 py-3 rounded text-xl '>Submit </button>
               
            
            </div>
          
          
           
          
          </form>
      </div>
      <Footer />
    </>
  )
}
