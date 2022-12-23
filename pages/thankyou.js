import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/header/Header'
import thankyouStyle from '../styles/ThankyouPage.module.css'
 

export default function thankyou() {
    
  return (
    <>
    <Header/>
    <div className={thankyouStyle.thankyou__page1}>
    <main className="flex justify-center align-middle items-center flex-col">
    <article className='flex justify-center flex-col w-full md:w-7/12 px-4 py-3 pb-2 rounded-md'>
        <h className='text-center'>Thank You!</h>
        <p className='text-center text-base'>
            Thank you for booking with Expert. Your booking is now being matched to one of our Experts.  
        </p>
        <div className='bg-[#fff] rounded-lg border w-full flex justify-center flex-col items-center'>
          <header className='text-center text-base h-1 flex justify-center w-full rounded-sm font-medium' >Laser Hair Removal-Women's Medium Area (Select one of the areas)</header>
        </div>
        <section>
            <div className='p-3'>
                <div className='flex flex-col mb-5'>
                    <p className = "color-red-500 text-base" >Booking Confirmation Number</p>
                    <p className='color-black-400 font-normal text-base'>122357</p>
                </div>
                <div>
                    <p className = "color-red-500 text-base" >Booking Date & Time</p>
                    <div className='flex space-x-20'>
                    <p className='color-black-400 font-normal text-base'>2022-12-22</p>
                    <p className='color-black-400 font-normal text-base'>09:00</p>
                    </div>
                </div>
             </div>
             </section>
        </article>
        <button class="bg-[#D9BD3E] text-white rounded-lg cursor-pointer py-2 px-4 mb-2 items-center">See your Bookings</button>
        </main>
        </div>
        <Footer/>
        </>
  )
}
