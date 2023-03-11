import React, { useState } from "react"
import { Link } from "react-router-dom"
import flag from '../assets/flag.png'
import { SlArrowDown } from 'react-icons/sl'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { FaTimes } from "react-icons/fa"
import icon from "../assets/icon.png"

const Navbar = (props) => {

    const [views, setViews] = useState(false)
    return (
        <>
            {/* ---------------------- Hamburger dropdown menu --------------- */}
            {views && <div className={`bg-white h-screen w-full`}>
                <div className="w-fit ml-auto cursor-pointer text-red-600 text-xl p-3" onClick={() => setViews(!views)}> <FaTimes /> </div>

                <div className='flex flex-col gap-4 px-3'>
                    <Link to='/' className=''>
                        <img src={icon} className='' alt='' />
                    </Link>
                    <div className=""> <Link to='/savings_and_investment' className={`capitalize text-black font-semibold`}>products</Link> </div>
                    <div className=""> <Link to='/business' className={`capitalize text-black font-semibold`}>business</Link> </div>

                    <div className=""> <Link to='' className={`capitalize text-black font-semibold`}>faq</Link> </div>
                    <div className="flex items-center gap-2"> <img src={flag} className='w-7 h-7 rounded-full' alt="" /> <SlArrowDown className={`text-black text-xs`} /> </div>
                    <div className={`bg-blue-600 text-white w-fit text-sm rounded-full py-2.5 px-4 font-semibold`}>Download the Credpal app</div>
                </div>
            </div>}

                        {/* ********* Normal Nav menu ************ */}
            <div style={{ backgroundColor: `${props.bgcolor}` }}>
                <div className='flex py-6 px-3 mx-auto container items-center justify-between'>
                    <div className='flex items-center gap-7'>
                        <Link to='/' className=''>
                            <img src={props.icon} alt='' />
                        </Link>
                        <div className="flex gap-4 items-center justify-between">
                            <div className=""> <Link to='/savings_and_investment' className={`capitalize text-${props.textcolor} font-semibold`}>products</Link> </div>
                            <div className=""> <Link to='/business' className={`capitalize text-${props.textcolor} font-semibold`}>business</Link> </div>
                        </div>

                    </div>
                    <div className="">
                        {/* Hamburger menu icon */}
                        <div className="flex md:hidden">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                                onClick={() => setViews(!views)}
                            >
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon className={`h-8 w-8 text-${props.iconcolor}`} aria-hidden="true" />
                            </button>
                        </div>
                        <div className='hidden md:flex items-center md:gap-x-5'>
                            <div className=""> <Link to='' className={`capitalize text-${props.textcolor} font-semibold`}>faq</Link> </div>
                            <div className="flex items-center gap-2"> <img src={flag} className='w-7 h-7 rounded-full' alt="" /> <SlArrowDown className={`text-${props.textcolor} text-xs`} /> </div>
                            <div className={`${props.buttoncolor} text-sm rounded-full py-2.5 px-4 font-semibold`}>Download the Credpal app</div>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Navbar

