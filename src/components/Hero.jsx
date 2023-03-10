import React from 'react'
import frame from '../assets/phone-frame.png'
import price1 from '../assets/price1.png'
import price2 from '../assets/price2.png'
import price3 from '../assets/price3.png'
import screen from '../assets/screen.png'

const Hero = () => {
  return (
    <div style={{ backgroundColor: '#006DF7' }}>
      <div className="grid grid-cols-1 py-5 md:py-14 md:grid-cols-2 container mx-auto">
        <div className="pt-5 md:pt-10 px-6">
          <div className="text-5xl lg:text-[5rem] font-semibold text-white pt-10">One App, all your </div>
          <div className="text-5xl pt-4 lg:text-[5rem] font-semibold text-white">Financial Needs</div>
          <div className="text-white py-10 md:py-5 text-[1.05rem] md:text-[1.4rem]">Manage your finances on the move with one single, user friendly app that <br /> allows you to make payments, save money, invest, and access credit. </div>
        </div>
        <div className="relative">
          <div className="flex items-center flex-1 justify-center">
            <div className="">
              <img src={price1} alt="" className="absolute z-10 -top-5 right-10 md:right-24" />
              <img src={price2} alt="" className="absolute z-10 top-56 left-10 md:left-20" />
              <img src={price3} alt="" className="absolute z-10 bottom-12 right-10 md:right-20" />
              <img src={frame} alt="" className="absolute -top-8 left-0 right-0 mx-auto" />
              <img src={screen} alt="" className="rounded-[2rem] mt-3 h-[520px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero