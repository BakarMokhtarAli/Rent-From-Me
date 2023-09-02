import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { DropDownLoggedIn } from './DropDwon/DropDownLoggedIn';
import logo from "../../assets/logo.png"

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  
  const isInActive = "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0";
  
  const isNotActive = "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
  
  return (
  
<nav className="bg-[#FEFEFE] fixed mb-[74px] top-0 left-0 right-0 shadow w-full border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href="/" className="flex items-center">
      <img src={logo} className="h-8 mr-3" alt="Rent Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap :text-white">Rent From Me</span>
  </Link>
  <div className="flex items-center md:order-2 relative">
      {
        !open ? (
          <button onClick={()=>setOpen(!open)} data-collapse-toggle="navbar-user" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-user" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
        ) : <button onClick={()=>setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 :text-gray-400 :hover:bg-gray-700 :focus:ring-gray-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M18 6l-12 12"></path>
        <path d="M6 6l12 12"></path>
    </svg>
        </button>
      }
      <Link to="/register" className="py-2 px-4 ml-2 rounded-md text-center max-md:hidden bg-[#4D1489] text-white">Get Started</Link>
  </div>
  <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1`} id="navbar-user">
    <ul className={ !open ? `max-md:hidden md:flex md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ` : `flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white`}>
      <li>
        <NavLink to="/" className= {({ isActive }) =>
    isActive ? isInActive : isNotActive
  } >Home</NavLink>
      </li>
      <li>
        <NavLink to="/about" className= {({ isActive }) =>
    isActive ? isInActive : isNotActive
  } >About</NavLink>
      </li>
      <li>
        <NavLink to="/contact" className= {({ isActive }) =>
    isActive ? isInActive : isNotActive
  } >Contacts</NavLink>
      </li>
      <li>
        <Link to="/register" className="py-2 max-md:block md:hidden px-4 rounded-md text-center bg-[#4D1489] text-white">Get Started</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>


  )
}