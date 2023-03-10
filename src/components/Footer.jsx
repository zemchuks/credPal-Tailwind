import React from 'react'
import { Link } from 'react-router-dom'
import gplay from '../assets/gplay.png'
import appplay from '../assets/appplay.png'
import icon from '../assets/icon.png'

const Footer = () => {
    return (
        <div className="py-16 px-8">
            <div className="grid grid-cols-1 pb-14 container mx-auto md:grid-cols-2">
                <div className="w-3/5 pt-5">
                    <img src={icon} alt="" className="" />
                    <div className="mt-8 leading-loose">CredPal is a revolutionary credit solution geared towards providing seamless credit access for businesses and individuals across developing economies.</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4">
                    <div className="flex flex-col">
                        <div className="font-bold capitalize pt-4 pb-7">products</div>
                        <Link className='py-1.5'>CredPal Personal</Link>
                        <Link className='py-1.5'>CredPal Business</Link>
                        <Link className='py-1.5'>CredPal Lifestyle</Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold capitalize pt-4 pb-7">legal</div>
                        <Link className='py-1.5'>Customer Terms of use</Link>
                        <Link className='py-1.5'>Merchant Terms of service</Link>
                        <Link className='py-1.5'>Privacy Notice</Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold capitalize pt-4 pb-7">support</div>
                        <Link className='py-1.5'>FAQs</Link>
                        <Link className='py-1.5'>Blog</Link>
                    </div>
                    <div className="flex flex-col">
                        <div className="font-bold capitalize pt-4 pb-7">Get the app</div>
                        <img src={gplay} alt="" className='w-28 mb-2' />
                        <img src={appplay} alt="" className='w-28' />
                    </div>
                </div>
            </div>
            <div className="border-t border-b mx-auto container py-14 text-lg">CredPal financial services are offered by BishopGate Microfinance Bank, fully licensed and regulated by the Central bank of Nigeria. CredPal offers innovative financial solutions including payment, savings and credit services. Our credit solution allows businesses and individuals to buy anything and pay for it in instalments across online and offline Merchants by providing them with instant access to credit at the point of checkout.</div>
            <div className="py-14 container mx-auto">
                <div className="flex items-center justify-end gap-6 font-semibold">We use cookies for better service. <Link to='' className='text-blue-600'>Accept</Link> </div>
            </div>
        </div>
    )
}

export default Footer