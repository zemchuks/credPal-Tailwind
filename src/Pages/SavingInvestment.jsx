import React from 'react'
import Navbar from '../components/Navbar'
import icon from '../assets/icon.png'
import { appplay, card, femalefull, goals, gplay, iphonedata, person, phone1, tosave, vault } from '../components/images'
import { SlArrowDown } from 'react-icons/sl'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const SavingInvestment = () => {
    return (
        <>

            <Navbar bgcolor='#fffffff' icon={icon} buttoncolor='bg-blue-700 text-white' textcolor='black' />
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center">
                    <div className="text-center pt-20 font-bold text-5xl leading-snug">Take control of your finances with <br /> CredPal savings.</div>
                    <div className="text-zinc-600 font-semibold pt-8 text-center leading-snug text-xl pb-24">Eliminate the challenges of saving and achieving your financial goals with ease using our app, <br /> which automates the process of setting aside money.</div>
                    <img src={person} alt="" className="" />
                </div>

                <div className="text-center pt-20 font-bold text-5xl leading-snug">Save more by using four strategies.</div>
                <div className="text-zinc-600 font-semibold pt-8 text-center leading-snug text-xl pb-24">Maximize your savings and reach your financial goals faster with CredPal! With CredPal, you have the opportunity to receive up to 18% returns on your <br /> savings, making your money grow faster and helping you achieve your financial goals sooner.</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
                    <div className="">
                        <div className="font-bold text-4xl pt-10 pb-7">Flex Savings</div>
                        <div className="text-xl">Take advantage of our flexible savings options and make the most of your money with no added stress. Our program allows you to withdraw your savings up to four times a year, completely free of charge. You can rest assured that your money is safe with us, while also earning up to 12% in interest annually. With this program, growing your wealth has never been easier. Effortlessly watch your savings increase and reach your financial goals with ease.</div>
                    </div>
                    <div className="mx-auto md:ml-auto">
                        <img src={femalefull} alt="" className="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
                    <div className="">
                        <div className="font-bold text-4xl pt-10 pb-7">Dollar Savings</div>
                        <div className="text-xl">Secure your financial future by saving your money and growing your wealth in dollars. With interest rates of up to 8% p.a., you'll be able to reach your financial goals more quickly. Don't let inflation erode your hard-earned savings, start saving today and take a step towards a brighter future.</div>
                    </div>
                    <div className="mx-auto md:ml-auto">
                        <img src={tosave} alt="" className="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
                    <div className="">
                        <div className="font-bold text-4xl pt-10 pb-7">Vaults</div>
                        <div className="text-xl">There are various options available to lock your funds, including high-yield savings accounts and fixed deposits. These options not only keep your money secure, but they also offer the potential for earning up to 10% per annum on your savings. This means your money will grow faster and you will be one step closer to reaching your financial goals.</div>
                    </div>
                    <div className="mx-auto md:ml-auto">
                        <img src={vault} alt="" className="" />
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20">
                    <div className="">
                        <div className="font-bold text-4xl pt-10 pb-7">Goals</div>
                        <div className="text-xl">Once you have set a financial goal, the next step is to start saving consistently towards it. This means setting aside a portion of your income every month and depositing it into a savings account or investment vehicle. Regular savings will help you build your nest egg and make steady progress towards your financial goal.</div>
                    </div>
                    <div className="mx-auto md:ml-auto">
                        <img src={goals} alt="" className="" />
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-40 mb-24 px-6">
                <div className="text-5xl font-bold text-center pb-10">FAQs</div>
                <div className=" w-full max-w-3xl mx-auto">
                    <div className="flex items-center justify-between py-10 border-b">
                        <div className="flex items-center gap-8">
                            <div className="text-slate-600 text-2xl font-semibold">01</div>
                            <div className="text-2xl">For how long can I invest?</div>
                        </div>
                        <div className=""> <SlArrowDown /> </div>
                    </div>
                    <div className="flex items-center justify-between py-10 border-b">
                        <div className="flex items-center gap-8">
                            <div className="text-slate-600 text-2xl font-semibold">02</div>
                            <div className="text-2xl">What happens if I withdraw before the maturity date?</div>
                        </div>
                        <div className=""> <SlArrowDown /> </div>
                    </div>
                    <div className="flex items-center justify-between py-10 border-b">
                        <div className="flex items-center gap-8">
                            <div className="text-slate-600 text-2xl font-semibold">03</div>
                            <div className="text-2xl">Is there a lock on my investment?</div>
                        </div>
                        <div className=""> <SlArrowDown /> </div>
                    </div>
                    <div className="flex items-center justify-between py-10 border-b">
                        <div className="flex items-center gap-8">
                            <div className="text-slate-600 text-2xl font-semibold">04</div>
                            <div className="text-2xl">Can I do a top-up on a running investment?</div>
                        </div>
                        <div className=""> <SlArrowDown /> </div>
                    </div>
                    <div className="flex items-center justify-between py-10 border-b">
                        <div className="flex items-center gap-8">
                            <div className="text-slate-600 text-2xl font-semibold">05</div>
                            <div className="text-2xl">How safe is my investment?</div>
                        </div>
                        <div className=""> <SlArrowDown /> </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue-600 py-20 mt-40">
                <div className="w-full max-w-3xl mx-auto">
                    <div className="text-center text-white font-semibold text-3xl">Start building your finances today</div>
                    <div className="text-white text-center text-xl pt-10 pb-20">Download our app to get started on your credit journey in Africa. Make the first move towards a better financial future today.</div>
                    <div className="bg-white w-fit mx-auto rounded-full py-3 px-16 text-blue-500 font-semibold"> <Link to=''>Sign up</Link> </div>
                </div>
            </div>

            <div className="mt-20 bg-slate-100 py-14">
                <div className="grid grid-cols-1 container mx-auto md:grid-cols-2">
                    <div className="flex flex-col justify-center w-11/12 md:w-3/4 mx-auto gap-8">
                        <div className="font-bold text-5xl text-slate-900">Join CredPal today</div>
                        <div className="text-xl pt-4 pb-9">Join the millions of happy customers using CredPal to <br /> access credit, make payments, invest, and more by downloading the CredPal app.</div>
                        <div className="flex items-center gap-3">
                            <img src={gplay} alt="" />
                            <img src={appplay} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex items-center ml-[10%] md:ml-0 relative gap-3">
                            <img src={iphonedata} alt="" className='mt-5 ml-2' />
                            <img src={card} alt="" className='mt-7' />
                            <img src={phone1} alt="" className='absolute top-9 bottom-0' />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}

export default SavingInvestment