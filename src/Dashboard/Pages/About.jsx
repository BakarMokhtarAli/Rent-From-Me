import { Link } from "react-router-dom"
import { HiInformationCircle, HiLightBulb } from 'react-icons/hi';
import { SiSimplenote } from 'react-icons/si';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Header, Footer } from "../Components";
import { useTitle } from "../../Hook/useTitle";
import bakar from "../../assets/bakar.jpg"

export const About = () => {
    useTitle("About")
    return (
        <>
           <Header />

            <div className='p-5 text-[#000] mt-14'>
                <div className='flex flex-col lg:flex-row justify-start lg:ml-20 shadow-inner'>
                    <img className='lg:w-[35%] h-[72] rounded-md object-cover' src={bakar} alt='profiles' />
                    <div className='lg:w-[50%] leading-8 lg:ml-10 tracking-widest space-y-3 mt-10'>
                        <span className='text-3xl'>I Am a person Who Developed Rent <span className="text-red-500">FromMe</span></span>
                        <p className='text-2xl'>Guided Us COE Founder Gabi School</p>
                        <p> Tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!
                            Rent From Me: like AirBnB, but for high-end electronics. Are you tired of paying ridiculous fees for camera and other equipment rentals? Bypass the middleman and rent from a real person!.</p>
                        <span className='flex flex-row justify-start space-x-3 '>
                            <BsFacebook className='cursor-pointer duration-500  text-lg ease-in text-[#000]  inline' size={22} />
                            <BsInstagram className='ml-4 cursor-pointer duration-500  text-lg  ease-in text-[#000]  inline ' size={22} />
                            <BsTwitter className='ml-4 cursor-pointer duration-500  text-lg  ease-in text-[#000]  inline' size={22} />
                        </span>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

