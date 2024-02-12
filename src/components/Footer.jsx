import React from 'react'
import navlogo from '../assets/navlogo.png'
import mail from '../assets/sms.png'
import facebook from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import  { Link } from 'react-router-dom'

export const Footer = () => {
  return (
      <>
        <div className='w-11/12 lg:w-full mx-auto font-montserrat lg:flex justify-between lg:px-24'>
          <div className='w-11/12 lg:w-[24%]'>
            <div><img className='w-12 h-12' src={navlogo} alt="" /></div>
            <div><p className=' text-sm lg:text-base font-normal text-[#666]'>One Health Lifesavers is dedicated to fostering voluntary blood donations, and addressing Nigeria's blood shortage through a robust donor network and impactful medical outreach initiatives.</p></div>
          </div>

          <div className='mt-8 lg:w-[15%]'>
            <h3 className=' font-semibold text-base text-[#0F0000]'>Company</h3>
            <ul className=' mt-5  text-sm lg:text-base font-normal text-[#666] flex flex-col gap-4'>
            <li><Link to='/' className='hover:text-[#FE3434]'>Home</Link></li>
              <li><p to='about' className='hover:text-[#FE3434]'>About Us</p></li>
              <li><Link to='/donor' className='hover:text-[#FE3434]'>Become a Blood Donor</Link></li>
              <li><Link to='/volunteer' className='hover:text-[#FE3434]'>Become a Volunteer</Link></li>
              <li><p to='events' className='hover:text-[#FE3434]'>Events</p></li>
              <li><p to='faqs' className='hover:text-[#FE3434]'>FAQs</p></li>
            </ul>
          </div>

          <div className='mt-8 lg:w-[22%]'>
            <h3 className=' font-semibold text-base text-[#0F0000]'>Contact Us</h3>
            <ul className=' mt-5  text-sm lg:text-base font-normal text-[#666] flex flex-col gap-4'>
              <li><span><img src={mail} alt="" className='mr-2 lg:mr-1 w-6 h-6 inline-block' /></span> <span><a href="mailto:onehealthlifesavers@gmail.com" target='_blank' rel='noreferrer' className='hover:text-[#FE3434]'>Onehealthlifesavers@gmail.com</a></span></li>
              <li><span><img src={facebook} alt="" className='mr-2 w-6 h-6 inline-block'/></span> <a href="https://www.facebook.com/profile.php?id=100094508710417&mibextid=LQQJ4d" target='_blank' rel='noreferrer' className='hover:text-[#FE3434]'>One Health Lifesavers</a></li>
              <li><span><img src={insta} alt="" className='mr-2 w-6 h-6 inline-block' /></span> <a href="https://instagram.com/onehealthls?igshid=OGQ5ZDc2ODk2ZA==" target='_blank' rel='noreferrer' className='hover:text-[#FE3434]'>One Health Lifesavers</a></li>
              <li><span><svg className='inline-block w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path fill='#666666' d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg></span> <a href="https://x.com/onehealthlfs?s=11&t=90iGkCUOVi3XBgT_S9Qcqw" target='_blank' rel='noreferrer' className='hover:text-[#FE3434]'>One Health Lifesavers</a></li>
            </ul>
          </div>

          <div className='mt-8 lg:w-[27%]'>
            <h3 className='font-semibold  text-base'>Subscribe to our Newsletter</h3>
            <p className='text-[#999] text-sm lg:text-base font-normal mt-4 lg:w-full'>Subscribe to our newsletter to stay updated on our events.</p>
            <form className='mt-6'>
              <input type="email" name="email" className='w-full max-w-[342px] border border-solid border-[#D9DBE9] outline-none px-4 py-3 text-sm' placeholder='Enter your email' />
              <button type="submit" className='mt-6 py-3 px-6 bg-[#FE3434]  text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none disabled:bg-[#fcc] disabled:hover:shadow-none' disabled>Subscribe</button>
            </form>
          </div>
        </div>

        <div className='h-[1px] bg-[#f2f2f2] w-full mt-10' ></div>
        <p className='mt-10 font-normal text-[#666] text-center text-sm font-montserrat mb-10'>Copyright © 2024 One Health Lifesavers</p>
      </>
  )
}
