import React from 'react'
import thankyouStyle from '../styles/thankyouPage.module.css'
 

export default function thankyou() {
    
  return (
    <div>
    <main className="w-full flex flex-col items-center rounded-lg ">
    <article className='w-1/2  bg-gray-light p-3'>
        <header className='px-5 border-1'>
            <h4 className='text-center'>Body Contouring</h4>
        </header>
        <section>
            <div>
                <label>Booking confirmation Number</label>
                <span>122357</span>
            </div>
            <div>
                <label>Booking Date & Time</label>
                <span>122357</span>
                <span>9:00 AM</span>
            </div>
        </section>
         
        </article>
        <button>See your Bookings</button>
        </main>
        </div>
  )
}
