import React from 'react'
import { FaUser } from 'react-icons/fa'
import { phone1, gplay, appplay, card, iphonedata } from '../components/images'
import Navbar from '../components/Navbar'
import icon from "../assets/Vector.svg"
import { GoPlug } from "react-icons/go";
import { ImFlag } from "react-icons/im";
import { HiOutlineFolder } from "react-icons/hi";
import { Cards, Logos } from '../components/Businesscards';
import Footer from '../components/Footer';

const BusinessPage = () => {
    return (
        <>
            <Navbar bgcolor='#000' icon={icon} buttoncolor='bg-white text-black' iconcolor='white' textcolor='white' />
            <div className="bggroup h-[20rem] md:h-[45rem] lg:h-[60rem] bg-contain">
                <div className="text-slate-200/70 text-sm md:text-xl lg:text-3xl pt-10 md:pt-32 lg:pt-32 text-center px-6">Join several fast-growing businesses and watch your sales increase by over 32%</div>
            </div>
            <div className="bg-slate-50 pb-32">
                <div className="container mx-auto mb-20 pt-40 px-6">
                    <div className="w-full max-w-[90%] md:max-w-[60%]">
                        <div className="text-zinc-600 font-semibold">THE CREDPAL ADVANTAGE</div>
                        <div className="font-bold text-5xl md:text-6xl py-10">Increase conversion for <br /> your business</div>
                        <div className="text-zinc-600 font-extralight text-xl md:text-2xl">Expand your payment options to include CredPal Pay. This way, your customers no longer abandon cart. You get full payment at the point of sale, while customers pay us later. It's a win-win for all.</div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 mt-28 gap-14">
                        <div className="">
                            <div className="text-green-600 text-3xl"> <FaUser /> </div>
                            <div className="border-b py-10 font-bold text-6xl text-zinc-800">70k+</div>
                            <div className="font-semibold pt-8 pb-5">Active Shoppers</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="text-blue-600 text-3xl"> <GoPlug /> </div>
                            <div className="border-b py-10 font-bold text-6xl text-zinc-800">32%+</div>
                            <div className="font-semibold pt-8 pb-5">Increased Sales</div>
                            <div className="font-light">With CredPal Pay customers transacting daily from their favourite merchants, you're sure to get a significant boost in revenue.</div>
                        </div>
                        <div className="">
                            <div className="text-red-600 text-3xl"> <ImFlag /> </div>
                            <div className="border-b py-10 font-bold text-6xl text-zinc-800">100%</div>
                            <div className="font-semibold pt-8 pb-5">Full Payments</div>
                            <div className="font-light">Whether it's online or offline shopping, you're guaranteed full payment on all CredPal buy now pay later purchases.</div>
                        </div>
                        <div className="">
                            <div className="text-blue-600 text-3xl"> <HiOutlineFolder /> </div>
                            <div className="border-b py-10 font-bold text-6xl text-zinc-800">1M+</div>
                            <div className="font-semibold pt-8 pb-5">Business Crredit</div>
                            <div className="font-light">As a CredPal merchant, you are qualified for a business credit up to 1 million Naira to increase the cash flow of your business.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-40">
                <div className="w-full max-w-3xl mx-auto mb-32">
                    <div className="text-center font-semibold text-6xl">CredPal Trending Merchants</div>
                    <div className="text-center text-xl pt-10 pb-20 font-light">We have the very best merchants across all categories you can <br /> think of for complete shopping experience.</div>
                    <div className="grid grid-cols-3 md:grid-cols-5 px-6">
                        <div className="text-center text-sm md:text-lg py-3 bg-blue-600 font-semibold rounded-full text-white">All Category</div>
                        <div className="text-center text-sm md:text-lg py-3 text-zinc-600 font-semibold">Electronics</div>
                        <div className="text-center text-sm md:text-lg py-3 text-zinc-600 font-semibold">Health</div>
                        <div className="text-center text-sm md:text-lg py-3 text-zinc-600 font-semibold">Beauty</div>
                        <div className="text-center text-sm md:text-lg py-3 text-zinc-600 font-semibold">Travels</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                    {Cards.map((item, i) => (
                        <div className="pb-10" key={i}>
                            <img src={item.img} alt="" />
                            <div className="text-zinc-700 text-lg text-center pt-10 pb-4 font-semibold">{item.name}</div>
                            <div className="font-light text-center">{item.sub}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="container mx-auto border-b py-10"></div>
            <div className="container mx-auto mt-40 px-6">
                <div className="font-bold text-4xl py-5">Easy front-end checkout integration</div>
                <div className="font-light pb-6">Use a few lines of javascript code or one of our ecommerce platform plugins.</div>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-5">
                    {Logos.map((item, i) => (
                        <div className="pb-10" key={i}>
                            <img src={item.img} alt="" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-slate-50 pb-32 px-6">
                <div className="mt-40 container mx-auto mb-20 pt-40">
                    <div className="w-full w-11/12 md:max-w-[60%]">
                        <div className="text-zinc-600 font-semibold text-capitalize">OUR BENEFITS</div>
                        <div className="font-bold text-4xl md:text-6xl py-10">More benefits with <br /> CredPal Pay </div>
                        <div className="text-zinc-600 font-extralight text-2xl">We have even more in stock for you apart from what <br /> we have told you..</div>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 mt-28 gap-14">
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">01.</div>
                            <div className="font-semibold pt-8 pb-5">Quick onboarding</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">02.</div>
                            <div className="font-semibold pt-8 pb-5">Business exposure</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">03.</div>
                            <div className="font-semibold pt-8 pb-5">Real-time dashboard</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">04.</div>
                            <div className="font-semibold pt-8 pb-5">Fraud detection</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">05.</div>
                            <div className="font-semibold pt-8 pb-5">Increased sales</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">06.</div>
                            <div className="font-semibold pt-8 pb-5">1 million Naira business credit</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">07.</div>
                            <div className="font-semibold pt-8 pb-5">Payment cards for employees</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                        <div className="">
                            <div className="border-b py-10 font-bold text-4xl text-zinc-800">08.</div>
                            <div className="font-semibold pt-8 pb-5">Seamless processing</div>
                            <div className="font-light">Expand your reach with CredPal Pay to active shoppers looking for the best deals and new products to buy from you.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto border-b py-20"></div>

            <div className="bg-white py-20 pb-32 px-6">
                <div className="container mx-auto text-zinc-600">
                    <div className="w-full md:w-auto">
                        <div className="text-light text-[1rem] md:text-[1.3rem] font-semibold justify-center">
                            CredPal financial services are offered by BishopGate Microfinance Bank, fully licensed and regulated by the Central bank of Nigeria. CredPal <br /> offers innovative financial solutions including investments and credit services. Our credit solution allows businesses and individuals to buy <br /> anything and pay for it in installments across online and offline Merchants by providing them with instant access to credit at the point of <br /> checkout.
                        </div>


                        <div className="py-10">
                            <div className="w-full max-w-[60%] text-zinc-600 text-2xl font-bold">Merchants Onboarding</div>
                            <div className="text-light text[1rem] md:text-[1.3rem] font-semiboldjustify-center">
                                Once a Merchant partners with CredPal to accept and use our services, CredPal will
                                onboard the Merchant on its platform by having the <br /> Merchant register or by registering the
                                Merchant on a dedicated platform. CredPal may list the Merchant’s business on the CredPal mobile <br />
                                application and/or website (“Marketplace”), such that CredPal’s users or the Merchant’s patrons
                                are able to pay for goods and services using <br /> credit advanced by CredPal.
                            </div>
                        </div>



                        <div className="py-10">
                            <div className="w-full max-w-[60%] text-zinc-600 text-2xl font-bold">Equality with Merchant Sales Channels</div>
                            <div className="text-light text[1rem] md:text-[1.3rem] font-semiboldjustify-center">
                                The Merchant will ensure that there is equality between the offerings
                                (e.g. listing price and other terms including but not limited to discounts, <br />
                                minimum price, warranties, return and refund policies, after-sales service, etc.,
                                regarding the sale of the same Merchant's products and services) <br /> by the Merchant on other
                                e-commerce platform and offerings on Marketplace.
                            </div>
                        </div>
                    </div>
                    <div className="py-10">
                        <div className="w-full max-w-[60%] text-zinc-600 text-2xl font-bold">Merchant's Use of the Marketplace</div>
                        <div className="text-light text[1rem] md:text-[1.3rem] font-semiboldjustify-center">
                            The Merchant shall maintain the security of Merchant log-in credentials to the Marketplace. The Merchant is
                            responsible for any expense, loss, or <br /> liability caused by the loss or  breach of those credentials.<br />
                            The Merchant shall not use the Marketplace to abuse the Services or in a manner that would be detrimental to the function of the
                            Marketplace <br /> or to other Merchant's use of the Marketplace.

                        </div>
                    </div>

                    <div className="py-10">
                        <div className="w-full max-w-[60%] text-zinc-600 text-2xl font-bold">Independent Service Provider</div>
                        <div className="text-light text[1rem] md:text-[1.3rem] font-semiboldjustify-center">
                            OCredPal is providing the Services on an independent service provider basis. CredPal
                            does not endorse, have control or assume the liability for the products or services
                            that are paid for with the Services.
                        </div>
                    </div>
                </div>

            </div>


            <div className="container mx-auto border-t py-20"></div>

            <div className="mt-20 bg-slate-100 py-14">
                <div className="grid grid-cols-1 container mx-auto md:grid-cols-2">
                    <div className="flex flex-col justify-center w-11/12 md:w-3/4 mx-auto gap-8">
                        <div className="font-bold text-5xl text-slate-900">Join CredPal today</div>
                        <div className="text-xl pt-4 pb-9">Join the millions of happy customers using CredPal to <br /> access credit, make payments, invest, and more by downloading the CredPal app.</div>
                        <div className="flex mb-10 mx-auto items-center gap-3">
                            <img src={gplay} alt="" />
                            <img src={appplay} alt="" />
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col md:flex-row items-center ml-[10%] md:ml-0 relative gap-3">
                            <img src={iphonedata} alt="" className='mt-5 ml-2' />
                            <img src={card} alt="" className='mt-7' />
                            <img src={phone1} alt="" className='absolute top-2 md:top-9 bottom-0' />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    )
}

export default BusinessPage