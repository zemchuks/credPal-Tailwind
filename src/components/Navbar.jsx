import React from "react"
import { Link } from "react-router-dom"
import flag from '../assets/flag.png'
import { SlArrowDown } from 'react-icons/sl'

const Navbar = (props) => {
    return (
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
                <div className='flex items-center gap-5'>
                    <div className=""> <Link to='' className={`capitalize text-${props.textcolor} font-semibold`}>faq</Link> </div>
                    <div className="flex items-center gap-2"> <img src={flag} className='w-7 h-7 rounded-full' alt="" /> <SlArrowDown className={`text-${props.textcolor} text-xs`} /> </div>
                    <div className={`${props.buttoncolor} text-sm rounded-full py-2.5 px-4 font-semibold`}>Download the Credpal app</div>
                </div>
            </div>
        </div>

        
    )
}

export default Navbar

