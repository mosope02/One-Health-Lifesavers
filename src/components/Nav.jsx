import React from 'react'
import navlogo from '../assets/navlogo.png'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)
    const Line = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
    const activeLink = 'text-[#FE3434] font-montserrat'

    const closeAfterClick = () => {
      setIsOpen(false)
    }
  return (
    <>
       <div className='px-6 md:px-24 lg:h-20 flex items-center justify-between font-montserrat sticky top-0 bg-white z-50'>

          <div>
            <div><img src={navlogo} alt="" className='w-16 h-16'  /></div>
          </div>

          <div className='hidden lg:flex justify-between w-6/12 text-sm font-normal '>
            <div className='p-2'><span to='about' className={({ isActive }) => (isActive ? activeLink : "text-[#333333] hover:text-[#FE3434]")} href="#dud">About Us</span></div>
            <div className='p-2'><NavLink to={' ' || 'donor'} className={({ isActive }) => (isActive ? activeLink : "text-[#333333] hover:text-[#FE3434]")} href="#dud">Become a Donor</NavLink></div>
            <div className='p-2'><NavLink to='volunteer' className={({ isActive }) => (isActive ? activeLink : "text-[#333333] hover:text-[#FE3434]")} href="#dud">Become a Volunteer</NavLink></div>
            <div className='p-2'><span to='events' className={({ isActive }) => (isActive ? activeLink : "text-[#333333] hover:text-[#FE3434]")} href="#dud">Events</span></div>
            <div className='p-2'><span to='faqs' className={({ isActive }) => (isActive ? activeLink : "text-[#333333] hover:text-[#FE3434]")} href="#dud">FAQs</span></div>
          </div>

          <div className='hidden lg:block'>
            <div><button className='py-4 px-4 bg-[#FE3434] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none disabled:bg-[#fcc] disabled:hover:shadow-none' disabled>Donate Now</button></div>
          </div>

          <div className='block lg:hidden'>
                <button className="flex flex-col h-12 w-12 bg-[#fff5f5] p-2 rounded justify-center items-center group" onClick={() => setIsOpen(!isOpen)}>
                    <div className={`${Line} ${isOpen ? "rotate-[50deg] translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}/>
                    <div className={`${Line} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
                    <div className={`${Line} ${isOpen ? "-rotate-[50deg] -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`}/> 
                </button>
          </div>
        </div>

        <div className={`text-center lg:hidden ${isOpen ? 'block': 'hidden'} fixed w-full h-[100vh] bg-white z-50 `}>
            <ul className='flex flex-col gap-12'>
              <li className='mt-11'><span onClick={closeAfterClick} to='about' className={({ isActive }) => (isActive ? activeLink : "text-[#333333]")} href="#dud">About Us</span></li>
              <li><NavLink onClick={closeAfterClick} to='donor' className={({ isActive }) => (isActive ? activeLink : "text-[#333333]")} href="#dud">Become a Blood Donor</NavLink></li>
              <li><NavLink onClick={closeAfterClick} to='volunteer' className={({ isActive }) => (isActive ? activeLink : "text-[#333333]")} href="#dud">Become a Volunteer</NavLink></li>
              <li><span onClick={closeAfterClick} to='events' className={({ isActive }) => (isActive ? activeLink : "text-[#333333]")} href="#dud">Events</span></li>
              <li><span onClick={closeAfterClick} to='faqs' className={({ isActive }) => (isActive ? activeLink : "text-[#333333]")} href="#dud">FAQs</span></li>
              <li><button className='py-4 px-4 bg-[#FE3434] w-4/5 text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none disabled:bg-[#fcc] disabled:hover:shadow-none' disabled>Donate Now</button></li>
            </ul>
         </div>
    </>
   
  )
}