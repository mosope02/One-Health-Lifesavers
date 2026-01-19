import React from 'react'
import rec2 from'../assets/rectangle-2.png'
import rec3 from '../assets/rectangle-1.png';
import rec4 from '../assets/rectangle-4.png'
import { Footer } from './Footer';


export const Aboutus = () => {
  return (
    <div>

      <div className="w-[87%] mx-auto mt-14 lg:mt-28">

        <h2 className="text-[32px] lg:text-[56px] font-semibold text-[#0f0000] leading-tight lg:w-[80%]"> Addressing Nigeria's blood shortage through a robust donor network.</h2>

        {/* Hero image (full width on desktop, rounded) */}
        <div className="mt-6 overflow-hidden rounded-2xl">
          <img src={rec3} alt="Blood donation and transfusion support" className="w-full h-[220px] lg:h-[600px]  rounded-2xl"/>
        </div>

        {/* Our Mission: text left, image right on desktop; stacked on mobile */}
        <div className="mt-12 lg:mt-20 lg:flex lg:gap-12 lg:items-center">
          <div className='lg:w-6/12'>
            <p className="text-[#FE3434] text-sm lg:text-xl font-medium">Our Mission</p>
            <h3 className="mt-2 lg:mt-4 text-2xl lg:text-[40px] font-semibold text-[#191919] leading-snug lg:leading-tight"> Educate. Donate. Transforming Lives Together.</h3>
            <p className="mt-3 lg:mt-5 text-sm lg:text-xl text-[#333] leading-[22px] lg:leading-relaxed lg:w-[90%]">Our mission is to create a platform that encourages and facilitates voluntary blood donations in Nigeria, and to educate the public about the importance of blood donations and blood-related diseases. We are committed toproviding a sustainable solution to the blood shortage crisis in the country by building a network of blood donors and organizing medical outreaches to screen and educate individuals on the importance of blood donation. </p>

            {/* <button className="mt-6 lg:mt-8 py-3 px-6 bg-[#FE3434] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:shadow-none">Donate Funds</button> */}
          </div>

          <div className="mt-8 lg:mt-0 flex lg:justify-end">
            <div className="w-full  overflow-hidden rounded-2xl">
              <img src={rec2} alt="Clinician supporting a donor" className="w-full h-[240px] lg:h-[568px] lg:w-full object-cover rounded-2xl"/>
            </div>
          </div>
        </div>


        <div className="mt-12 lg:mt-32 lg:flex lg:gap-12 justify-between lg:items-center">

          <div className="mt-8 lg:mt-0 lg:order-1 lg:w-6/12">
            <p className="text-[#FE3434] text-xs lg:text-xl font-semibold">Our Vision</p>
            <h3 className="mt-2 lg:mt-4 text-2xl lg:text-[40px] font-semibold text-[#191919] leading-snug lg:leading-tight">Fulfilling Futures: Connecting Hearts, Saving Lives.</h3>
            <p className="mt-3 lg:mt-5 text-sm lg:text-xl text-[#333] leading-[22px] lg:leading-relaxed lg:w-full"> Our vision is to build the largest network of voluntary blood donors in Nigeria and promote a culture of regular blood donation across Nigeria with the aim of ensuring that every patient in need of blood transfusion can access safe and adequate blood.
              <br />
              <br />
              We aim to raise awareness about the benefits of voluntary blood donation while carrying out several medical outreaches to screen individuals for prevalent diseases in their communities.
              <br />
              <br />
              We envision a future where blood shortages are a thing of the past, and where every Nigerian has access to life-saving blood transfusions when needed.
            </p>

            {/* <button className="mt-6 lg:mt-8 py-3 px-6 bg-[#FE3434] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:shadow-none">Donate Funds</button> */}
          </div>

          <div className="order-0 lg:order-none mt-8 lg:mt-10">
            <div className="w-full overflow-hidden rounded-2xl">
              <img src={rec4} alt="Blood bags prepared for transfusion" className="w-full h-[240px] lg:h-[568px] lg:w-[568px] object-cover rounded-2xl"/>
            </div>
          </div>
        </div>


        <div className='mt-12 lg:mt-40'>
          <h2 className='text-[#FE3434] text-center text-xs font-semibold lg:text-xl'>WHAT WE DO</h2>
          <h3 className='text-[#191919] text-center text-xl lg:text-[40px] font-semibold w-9/12 mx-auto mt-2 lg:mt-4'>How We Are Making A Difference</h3>
          <p className='text-[#333] text-center text-sm lg:text-xl lg:w-[70%] w-10/12 mx-auto mt-2 lg:mt-4'>Our mission is to create a platform that encourages and facilitates voluntary blood donations in Nigeria, and to educate the public about the importance of blood donations and prevalent diseases.</p>
        </div>

        <div className='mt-10 lg:mt-16 flex flex-col gap-5 lg:grid grid-cols-2 lg:gap-6 lg:w-[88%] lg:mx-auto '>
          <div className='bg-[#FFE6E6] rounded-lg p-6 text-left lg:text-left lg:order-1 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-bold lg:text-2xl lg:font-semibold'>Education</h3>
            <p className='text-sm leading-[22px] text-[#333] mt-2 lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>We offer educational initiatives that inform individuals about the significance of blood donation, blood-related conditions, and the transformative impact their donated blood can have on those in need.</p>
          </div>

          <div className='bg-[#FFE6E6] rounded-lg p-6 text-left lg:text-left lg:order-3 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-bold lg:text-2xl lg:font-semibold'>Blood Donation Drive</h3>
            <p className='text-sm leading-[22px] text-[#333] mt-2 lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>We arrange blood donation drives that bring together individuals from diverse backgrounds and social statuses, offering everyone the opportunity to contribute by donating blood.</p>
          </div>

          <div className='bg-[#FFE6E6] rounded-lg p-6 text-left lg:text-left lg:order-2 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-bold lg:text-2xl lg:font-semibold'>Medical Outreach</h3>
            <p className='text-sm leading-[22px] text-[#333] mt-2 lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>We conduct outreach programs aimed at disease screening and assisting individuals in accessing necessary healthcare. We are committed to helping those who can’t help themselves.</p>
          </div>

          <div className='bg-[#FFE6E6] rounded-lg p-6 text-left lg:text-left lg:order-4 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-bold lg:text-2xl lg:font-semibold'>Restock Blood Bank</h3>
            <p className='text-sm leading-[22px] text-[#333] mt-2 lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>Donated blood will be directed to the Lagos State Transfusion Service, ensuring the replenishment of blood banks.</p>
          </div>
        </div>
      </div>

      <div className='bg-[#FFE6E6] mt-12 py-12 md:py-16 lg:py-[74px]'>
          <div className='w-[87.692%] md:w-[72%] mx-auto font-montserrat'>
            <h3 className='text-[#191919] text-center text-2xl font-semibold md:text-3xl lg:text-5xl'>"Empower Change: Donate Blood, Donate Funds, Impact Lives."</h3>
            <div className='lg:flex justify-center'>
                <button className='mt-10 py-4 px-4 bg-[#FE3434] w-full lg:w-[150px] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none'>Donate Now</button>
                <button className='mt-4 lg:mt-10 py-4 px-4 w-full lg:w-[240px] text-[#fe3434] font-medium rounded hover:bg-[#fff5f5] active:bg-[#cdb0101] active:shadow-none '><a href="/donor">Become a Blood Donor</a></button>
            </div>
          </div>
        </div>

      <Footer />
    </div>
  )
}
