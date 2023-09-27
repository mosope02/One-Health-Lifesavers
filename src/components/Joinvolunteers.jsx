import React from 'react'
import qr from '../assets/QR.jpg'
import { Footer } from './Footer'

export const Joinvolunteers = () => {
  return (
    <>
        <div className='bg-[#fff5f5] font-montserrat py-12 lg:py-20'>
            <div className='w-[89%] mx-auto bg-white py-10 px-4 lg:px-10 md:py-6 lg:py-10 rounded-2xl'>
                <h1 className='text-3xl lg:text-4xl font-bold text-[#0f0000]'>Welcome!</h1>
                <p className='text-sm lg:text-base mt-3'>Welcome to the One Health NGR. </p> 
                <p className='text-sm lg:text-base'> Join our community of <b>Change Makers</b> on Whatsapp to stay up to date with the latest details and Information.</p>
                <div className='text-center mt-8'>
                    <div className='flex justify-center'><img className='inline-block w-36 lg:w-48' src={qr} alt="" /></div>
                    <a href="https://chat.whatsapp.com/EwkufbZeJmI5hM8V4AzQAh" target='_blank' rel='noreferrer'><button className='py-3 px-9 bg-[#fe3434] text-[#fdfdfd] mt-12 hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none rounded'>Join our Whatsapp Community</button></a>
                </div>

            </div>
        </div>
        <Footer />
    </>
  )
}