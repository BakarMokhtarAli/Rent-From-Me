import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyRented = () => {
  return (
    <section className="text-xl mt-[90px] text-center max-w-4xl mx-auto my-10 py-5 dark:text-slate-100 border dark:border-slate-700 rounded">
        <div className="my-5">
            <p className="bi bi-cart text-[#4D1489] text-7xl mb-5"></p>
            <p>Oops! Your order Renter looks empty!</p>
            <p>Add iTems to your cart from our store collection.</p>
        </div>
        <Link to="/renter/home" type="button" className="text-white bg-[#4D1489] hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none">Continue Renting <i className="ml-2 bi bi-cart"></i></Link>
    </section>
  )
}
