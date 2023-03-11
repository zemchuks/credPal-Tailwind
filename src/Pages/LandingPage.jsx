import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import icon from "../assets/Vector.svg"
import Hero from '../components/Hero'
import { background, frame2, credit, interest, bankcard, moneytimer, steering, box, tag1, tag2, tag3, tag4, gplay, appplay, frame3, img1, img2, img3, bgscreen } from '../components/images'
import { FaArrowDown, FaArrowLeft, FaArrowRight, FaCheck, FaCog, FaPlus, FaStar, FaTimes } from 'react-icons/fa'
import { SlArrowLeft, SlArrowRight, SlCreditCard } from 'react-icons/sl'

const LandingPage = () => {
    return (
        <div className="">

            <Navbar bgcolor='#006DF7' icon={icon} buttoncolor='bg-white text-black' iconcolor='white' textcolor='white' />
            <>
                <div className="">
                    <Hero />
                </div>
                <div className="flex items-center gap-7 my-10 justify-center flex-col">
                    <div className="text-4xl text-center md:text-5xl mt-32 font-bold">Our customers love us</div>
                    <div className="text-slate-500 text-2xl">Read what they have to say</div>
                </div>
                <div className="grid grid-cols-1 gap-7 md:grid-cols-3 mx-auto container mt-24 mb-5">
                    {/* ----------------------- */}
                    <div className="rounded-lg p-7 bg-slate-100">
                        <div className="flex items-center py-4 gap-2">
                            <img src={img1} alt="" className="w-12 h-12" />
                            <div className="font-bold text-xl">Marley Press</div>
                        </div>
                        <div className="mt-4 text-[1.3rem] font-light">"I love this app! It's so easy to use and has helped me save money for my future goals. The auto-save feature makes it a breeze to save regularly, and the investment options are great too. Highly recommend!"</div>
                        <div className="flex items-center gap-4 py-5">
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                        </div>
                    </div>
                    {/* ------------- */}
                    {/* ----------------------- */}
                    <div className="rounded-lg p-7 bg-slate-100">
                        <div className="flex items-center py-4 gap-2">
                            <img src={img2} alt="" className="w-12 h-12" />
                            <div className="font-bold text-xl">Ryan Curtis</div>
                        </div>
                        <div className="mt-4 text-[1.3rem] font-light">This app has been a game-changer for me. I used to struggle with managing my finances, but with this app, I can easily track my spending, set budgets, and save for the things that matter most.</div>
                        <div className="flex items-center gap-4 py-5">
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                        </div>
                    </div>
                    {/* ------------- */}
                    {/* ----------------------- */}
                    <div className="rounded-lg p-7 bg-slate-100">
                        <div className="flex items-center py-4 gap-2">
                            <img src={img3} alt="" className="w-12 h-12" />
                            <div className="font-bold text-xl">James Aminoff</div>
                        </div>
                        <div className="mt-4 text-[1.3rem] font-light">"I never thought investing could be so simple and accessible, but this app has changed my mind. I can invest easily track my portfolio's performance. Highly recommend for anyone looking to start investing."</div>
                        <div className="flex items-center gap-4 py-5">
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                            <FaStar className='text-blue-600 text-lg' />
                        </div>
                    </div>
                    {/* ------------- */}
                </div>
                <div className="flex items-center mb-20 gap-6 justify-end container mx-auto px-6">
                    <div className="bg-black p-3 text-white rounded-md"> <SlArrowLeft /> </div>
                    <div className="bg-black p-3 text-white rounded-md"> <SlArrowRight /> </div>
                </div>

                <div className="container mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 px-6">
                    <div className="flex flex-col gap-8">
                        <div className="font-bold text-5xl text-slate-900">Payment</div>
                        <div className="text-xl">Experience secure, dependable and effortless payments with CredPal. Whether
                            you're paying for goods, a subscription, or anything else, CredPal is streamlined to make the payment
                            process fast and straightforward.</div>
                        <button className='bg-blue-600 text-white py-4 w-3/5 rounded-md mb-20 md:mb-0 mx-auto'>Download App</button>
                    </div>
                    <div>
                        <div className="bg-slate-100 w-fit mx-auto rounded-lg">
                            <img src={frame2} alt="" className="" />
                            <div className="mt-14 pb-3 px-4">
                                <div className="font-bold text-3xl">NGN 54,800</div>
                                <div className="text-slate-500 text-xs font-semibold mt-2">Please enter your card details</div>
                                <div className="bg-white mt-6 rounded-lg py-2 px-4 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <SlCreditCard className='text-slate-400' />
                                        <div className="text-slate-400">Card number</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="text-slate-400">MM/YY</div>
                                        <div className="text-slate-400">CVV</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 888888888888888888888888888888888888888888888 */}

                <div className="container mt-40 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 px-6">
                    <div className="flex flex-col gap-8">
                        <div className="font-bold text-5xl text-slate-900">Savings</div>
                        <div className="text-xl">Simplify your savings journey by setting a budget.
                            Get started on saving with ease by setting goals, monitoring your progress, and enabling automatic transfers with your
                            bank account. It couldn't be any easier!</div>
                        <button className='bg-blue-600 text-white py-4 w-2/5 rounded-3xl mb-20 md:mb-0 mx-auto'>Download App</button>
                    </div>
                    <div>
                        <div className="bg-slate-100 relative w-10/12 md:w-3/5 mx-auto mx-auto rounded-lg">
                            <div className="">
                                {/* <img src={savings} alt="" className="" /> */}
                                <div className="bg-savings w-full h-60 bg-center rounded-tr-lg rounded-tl-lg bg-cover">
                                    <div className="py-6 pl-3"><FaArrowLeft className='text-white' /></div>
                                    <div className="text-white mb-4 font-semibold pl-3">Savings</div>
                                    <div className="text-white font-bold text-4xl pl-3 mb-4">N105,050</div>
                                    <div className="grid grid-cols-4 gap-3 pl-3">
                                        <div className="bg-sky-100 py-2.5 px-4 rounded-lg flex items-center gap-2">
                                            <FaPlus className='text-blue-600' />
                                            <div className="bg-slate-300/80 h-[0.4rem] w-full"></div>
                                        </div>
                                        <div className="bg-sky-100 py-2.5 px-4 rounded-lg flex items-center gap-2">
                                            <FaArrowDown className='text-blue-600' />
                                            <div className="bg-slate-300/80 h-[0.4rem] w-full"></div>
                                        </div>
                                        <div className="bg-sky-100 py-2.5 px-4 w-fit rounded-lg flex items-center gap-2">
                                            <FaTimes className='text-blue-600' />
                                            <FaCog className='text-blue-600' />
                                        </div>
                                    </div>
                                </div>
                                <img src={interest} alt="" className="absolute z-10 top-52 -left-32" />
                            </div>
                            <div className="mt-20 pb-8 px-4">
                                <div className="bg-sky-100/50 rounded-lg p-4">
                                    <div className="text-right text-slate-500 py-2 pb-5">N105K/150K</div>
                                    <div className="mt-5 bg-slate-200 rounded-lg w-full h-1 relative">
                                        <div className="bg-blue-600 h-1 absolute top-0 left-0 w-[60%]"></div>
                                    </div>
                                    <div className="bg-slate-200 mt-6 h-2 w-[40%]"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ********************************************************************** */}

                <div className="container mt-40 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 px-6">
                    <div className="flex flex-col gap-8">
                        <div className="font-bold text-5xl text-slate-900">Virtual Cards</div>
                        <div className="text-xl">Create a virtual credit or cash card, make secure online purchases,
                            keep track of your spending, and have complete visibility into where your funds are going. With advanced security features,
                            you have the ability to set spending limits and exert control over your spending.</div>
                        <button className='bg-blue-600 text-white py-4 w-2/5 rounded-3xl mb-20 md:mb-0 mx-auto'>Download App</button>
                    </div>
                    <div>
                        <div className="bg-slate-100 w-fit mx-auto left-15 rounded-lg">
                            <div className="relative">
                                <img src={bankcard} alt="" className="" />
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container mt-40 mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 px-6">
                    <div className="flex flex-col gap-8">
                        <div className="font-bold text-5xl text-slate-900">Credit Builder</div>
                        <div className="text-xl">Fund your virtual card and make payments everywhere. Use your CredPal virtual card to make purchases both online and in-person with ease, and benefit from our reward-rich programs.</div>
                        <button className='bg-blue-600 text-white py-4 w-2/5 rounded-3xl mb-20 md:mb-0 mx-auto'>Download App</button>
                    </div>
                    <div className='relative'>
                        <div className="bg-slate-100 w-fit mx-auto left-15 rounded-lg">
                            <div className="relative">
                                <img src={credit} alt="" className="" />
                            </div>
                        </div>
                        <img src={moneytimer} alt="" className="absolute -bottom-16 right-36" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 mb-4 mt-48 gap-7">
                    <div className="bg-zinc-100 px-4 w-full pt-16 pb-10">
                        <div className="w-fit relative">
                            <img src={steering} alt="" className="" />
                            <div className="absolute top-0 w-5 h-5 -right-2 bg-orange-400 flex items-center justify-center text-xs rounded-full text-white"> <FaCheck /> </div>
                        </div>
                        <div className="font-semibold text-3xl mt-24">Move with <br /> CredPal</div>
                        <div className="text-slate-500 text-[1.3rem] py-8">CredPal users can pay for rides or food orders on Bolt, with the option to pay now or pay later, depending on the payment options available.</div>
                        <div className="flex items-center gap-4">
                            <div className="font-semibold">Learn More</div>
                            <div className="rounded-full text-white p-1 text-xs bg-orange-400"> <FaArrowRight /> </div>
                        </div>
                    </div>
                    <div className="bg-zinc-100 px-4 w-full pt-16 pb-10">
                        <div className="w-fit relative">
                            <img src={box} alt="" className="" />
                            <div className="absolute top-2 w-5 h-5 -right-2 bg-purple-400 flex items-center justify-center text-xs rounded-full text-white"> <FaCheck /> </div>
                        </div>
                        <div className="font-semibold text-3xl mt-24">Travel with <br /> CredPal</div>
                        <div className="text-slate-500 text-[1.3rem] py-8">CredPal users can pay for bills and services with the option to pay now or pay later, depending on the payment options available.</div>
                        <div className="flex items-center gap-4">
                            <div className="font-semibold">Learn More</div>
                            <div className="rounded-full text-white p-1 text-xs bg-purple-400"> <FaArrowRight /> </div>
                        </div>
                    </div>
                    <div className="bg-zinc-100 px-4 w-full pt-16 pb-10">
                        <div className="w-fit relative flex">
                            <img src={tag2} alt="" className="" />
                            <img src={tag1} alt="" className="-ml-4" />
                        </div>
                        <div className="font-semibold text-3xl mt-24">Pay with <br /> CredPal</div>
                        <div className="text-slate-500 text-[1.3rem] py-8">CredPal users can pay for fight with the option to pay now or pay later, depending on the payment options available.</div>
                        <div className="flex items-center gap-4">
                            <div className="font-semibold">Learn More</div>
                            <div className="rounded-full text-white p-1 text-xs bg-blue-400"> <FaArrowRight /> </div>
                        </div>
                    </div>
                    <div className="bg-zinc-100 px-4 w-full pt-16 pb-10">
                        <div className="w-fit relative flex">
                            <img src={tag3} alt="" className="" />
                            <img src={tag4} alt="" className="-ml-4" />
                        </div>
                        <div className="font-semibold text-3xl mt-24">Shop with <br /> CredPal</div>
                        <div className="text-slate-500 text-[1.3rem] py-8">The CredPal marketplace offers a wide range of products from various merchants, and users can choose to pay for their purchases in instalments.</div>
                        <div className="flex items-center gap-4">
                            <div className="font-semibold">Learn More</div>
                            <div className="rounded-full text-white p-1 text-xs bg-indigo-400"> <FaArrowRight /> </div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-600 py-20 mt-40">
                    <div className="w-full max-w-3xl mx-auto">
                        <div className="text-center text-white font-semibold text-3xl">Start building your credit score today</div>
                        <div className="text-white text-center text-xl pt-10 pb-20">Download our app to get started on your credit journey in Africa. Make the first move towards a better financial future today.</div>
                        <div className="bg-white w-fit mx-auto rounded-full py-3 px-16 text-blue-500 font-semibold"> <Link to=''>Sign up</Link> </div>
                    </div>
                </div>

                <div className="mt-40 bg-slate-100">
                    <div className="grid grid-cols-1 container mx-auto md:grid-cols-2">
                        <div className="flex flex-col justify-center w-3/4 mx-auto gap-8 pt-32 md:pt-0">
                            <div className="font-bold text-5xl text-slate-900">Join CredPal today</div>
                            <div className="text-xl pt-4 pb-9">Join the millions of happy customers using CredPal to <br /> access credit, make payments, invest, and more by downloading the CredPal app.</div>
                            <div className="flex items-center gap-3 pb-20 md:pb-0">
                                <img src={gplay} alt="" />
                                <img src={appplay} alt="" />
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center relative flex-col gap-3">
                                <img src={frame3} alt="" />
                                <img src={bgscreen} alt="" />
                                <img src={background} alt="" className='absolute bottom-0' />
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </>
        </div>
    )
}

export default LandingPage