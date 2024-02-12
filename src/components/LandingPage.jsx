import React from 'react'
import rec1 from '../assets/rectangle-3.png'
import rec2 from'../assets/rectangle-2.png'
import rec3 from '../assets/rectangle-1.png';
import rec4 from '../assets/rectangle-4.png'
import handblood from '../assets/svgrepo-com-1.svg'
import handmoney from '../assets/money-svgrepo-com-1.svg'
import volunteer from '../assets/donate.svg'
import { Carousel } from './Carousel';
import { Footer } from './Footer';

export const LandingPage = () => {
  return (
    <div className="font-montserrat">
        <div className='w-[87%] mx-auto mt-10'>
            <h2 className='text-[32px] lg:text-[56px] text-[#0f0000] font-bold text-center px-3 '>Uniting Hearts, <span className='text-[#fe3434]'>Sharing Life</span>: Join Our Lifesaving Community.</h2>
            <p className='lg:w-4/5 mx-auto mt-2 text-center text-sm lg:text-xl font-normal text-[#191919]'>Become a vital part of our lifesaving community, uniting hearts and sharing life through voluntary blood donations and medical outreach.</p>
            <div className='lg:flex justify-center'>
                <button className='mt-10 py-4 px-4 bg-[#FE3434] w-full lg:w-[150px] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none'>Donate Now</button>
                <button className='mt-4 lg:mt-10 py-4 px-4 bg-white w-full lg:w-[240px] text-[#fe3434] rounded hover:bg-[#fff5f5] active:bg-[#cdb0101] active:shadow-none '><a href="/donor">Become a Blood Donor</a></button>
            </div>      
        </div>

        <div className='lg:grid grid-cols-3 mt-20 hidden'>
            <div><img className='col-span-1 w-full h-[460px]' src={rec1} alt="" /></div>
            <div><img className='col-span-1 w-full h-[460px]' src={rec2} alt="" /></div>
            <div><img className='col-span-1 w-full h-[460px]' src={rec3} alt="" /></div>
        </div>

        <div className='mt-20 lg:flex w-[90%] mx-auto justify-between items-center'>
          <div className='lg:w-[50%]'>
            <h2 className='text-2xl lg:text-[40px] lg:w-full font-semibold text-center lg:text-left text-[#191919] mb-2'>Our Mission</h2>
            <p className='text-[#333333] font-montserrat text-sm lg:text-xl lg:w-[94.8%] w-[87.7%] mx-auto lg:mx-0 text-center lg:text-left'>Our mission is to create a platform that encourages and facilitates voluntary blood donations in Nigeria, and to educate the public about the importance of blood donations and blood-related diseases. We are committed to providing a sustainable solution to the blood shortage crisis in the country by building a network of blood donors and organizing medical outreaches to screen and educate individuals on the importance of blood donation.</p>
            <div className='text-center lg:text-left'><button className='mt-6 py-4 px-4 bg-[#FE3434] w-[150px] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none'>Donate Now</button></div>
          </div>

          <div className='lg:text-right lg:w-fit  w-[87.692%] lg:mx-0 mx-auto lg:mt-0 mt-10'><img className='' src={rec4} alt="Our mission.Blood collecting bags."/></div>
        </div>

        <div className='mt-12 lg:mt-40'>
          <h2 className='text-[#FE3434] text-center text-xs font-semibold lg:text-xl'>WHAT WE DO</h2>
          <h3 className='text-[#191919] text-center text-xl lg:text-[40px] font-semibold w-9/12 mx-auto mt-2 lg:mt-4'>How We Are Making A Difference</h3>
          <p className='text-[#333] text-center text-sm lg:text-xl lg:w-[70%] w-10/12 mx-auto mt-2 lg:mt-4'>Our mission is to create a platform that encourages and facilitates voluntary blood donations in Nigeria, and to educate the public about the importance of blood donations and prevalent diseases.</p>
        </div>

        <div className='mt-10 lg:mt-16 flex flex-col gap-5 lg:grid grid-cols-2 lg:gap-6 lg:w-[88%] lg:mx-auto '>
          <div className='bg-[#fff5f5] rounded-lg text-center lg:text-left lg:order-1 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-semibold lg:text-2xl lg:font-semibold'>Education</h3>
            <p className='text-sm text-[#333] mt-4 w-[80%] lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>We offer educational initiatives that inform individuals about the significance of blood donation, blood-related conditions, and the transformative impact their donated blood can have on those in need.</p>
          </div>

          <div className='bg-[#fff5f5] rounded-lg text-center lg:text-left lg:order-3 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-semibold lg:text-2xl lg:font-semibold'>Blood Donation Drive</h3>
            <p className='text-sm text-[#333] mt-4 w-[80%] lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>We arrange blood donation drives that bring together individuals from diverse backgrounds and social statuses, offering everyone the opportunity to contribute by donating blood.</p>
          </div>

          <div className='bg-[#fff5f5] rounded-lg text-center lg:text-left lg:order-2 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-semibold lg:text-2xl lg:font-semibold'>Medical Outreach</h3>
            <p className='text-sm text-[#333] mt-4 w-[80%] lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>We conduct outreach programs aimed at disease screening and assisting individuals in accessing necessary healthcare. We are committed to helping those who can’t help themselves.</p>
          </div>

          <div className='bg-[#fff5f5] rounded-lg text-center lg:text-left lg:order-4 w-[88%] lg:w-full mx-auto lg:px-6 py-8'>
            <h3 className='text-base text-[#191919] font-semibold lg:text-2xl lg:font-semibold'>Restock Blood Bank</h3>
            <p className='text-sm text-[#333] mt-4 w-[80%] lg:w-11/12 mx-auto lg:mx-0 lg:text-xl'>Donated blood will be directed to the Lagos State Transfusion Service, ensuring the replenishment of blood banks.</p>
          </div>
        </div>


        <div className='mt-24 lg:mt-40 text-center'>
          <h2 className='text-[#0f0000] text-2xl lg:text-[40px] font-semibold'>Blood Donation Process</h2>
          <div className='mt-2 lg:mt-10 lg:grid grid-cols-3 lg:text-left lg:w-[89%] lg:mx-auto'>
            <div className='w-[90%] mx-auto mt-10'>
              <span className='text-base text-[#191919] font-semibold lg:text-[32px]'>01.</span>
              <h3 className='text-base text-[#191919] font-semibold mt-1 lg:mt-2 lg:text-[32px]'>Registration</h3>
              <p className='text-sm text-[#333] mt-1 lg:text-xl lg:mt-2'>Kindly complete the online donor registration form, including essential contact information, along with your blood group, genotype, and blood donation history. </p>
            </div>

            <div className='w-[90%] mx-auto mt-10'>
              <span className='text-base text-[#191919] font-semibold lg:text-[32px]'>02.</span>
              <h3 className='text-base text-[#191919] font-semibold mt-1 lg:mt-2 lg:text-[32px]'>Screening</h3>
              <p className='text-sm text-[#333] mt-1 lg:text-xl lg:mt-2'>A tiny blood droplet from your finger will be tested to assess the iron levels (hemoglobin) in your blood. Should you be ineligible to donate, we will provide an explanation and may recommend rescheduling. </p>
            </div>

            <div className='w-[90%] mx-auto mt-10'>
              <span className='text-base text-[#191919] font-semibold lg:text-[32px]'>03.</span>
              <h3 className='text-base text-[#191919] font-semibold mt-1 lg:mt-2 lg:text-[32px]'>Donation</h3>
              <p className='text-sm text-[#333] mt-1 lg:text-xl lg:mt-2'>Once you've successfully cleared the screening test, you will be guided to a donor bed for the donation process. This procedure typically lasts between 6 to 10 minutes. </p>
            </div>
          </div>
        </div>

        <div className='mt-24 lg:mt-40 w-[87.692%] mx-auto'>
          <h2 className='text-[#191919] lg:text-[#0F0000] lg:text-[40px] text-2xl font-semibold text-center mb-10 lg:mb-16'>How You Can Make A Difference</h2>
          <div className='lg:grid grid-cols-3 gap-7 text-center lg:text-left'>
              <div className='bg-[#fff5f5] rounded-lg p-6 mb-6'>
                <div className='mx-auto w-fit lg:mx-0'><img src={handblood} alt="" /></div>
                <h4 className='mt-4 lg:mt-6 font-semibold text-base lg:text-[32px] text-[#191919]'>Donate Blood</h4>
                <p className='text-sm text-[#333] mt-2 lg:mt-4 lg:text-xl'>Your blood can save lives in emergencies, surgeries, and patients with various medical conditions. Discover the simple steps to become a blood donor and make a impact on someone's life.</p>
              </div>

              <div className='bg-[#fff5f5] rounded-lg p-6 mb-6'>
                <div className='mx-auto w-fit lg:mx-0'><img src={handmoney} alt="" /></div>
                <h4 className='mt-4 lg:mt-6 font-semibold text-base lg:text-[32px] text-[#191919]'>Donate Money</h4>
                <p className='text-sm text-[#333] mt-2 lg:mt-4 lg:text-xl'>Your financial contributions play a crucial role in organizing outreach programs, blood drives, and educational campaigns. By donating, you provide resources to expand our reach.</p>
              </div>

              <div className='bg-[#fff5f5] rounded-lg p-6 mb-6'>
                <div className='mx-auto w-fit lg:mx-0'><img src={volunteer} alt="" /></div>
                <h4 className='mt-4 lg:mt-6 font-semibold text-base lg:text-[32px] text-[#191919]'>Volunteer</h4>
                <p className='text-sm text-[#333] mt-2 lg:mt-4 lg:text-xl'>As a volunteer, you can actively participate in organizing events, spreading awareness, and helping us achieve our mission of a sustainable solution to the blood shortage crisis in Nigeria.</p>
              </div>
          </div>
        </div>

        <div className='mt-24 w-[87.692%] mx-auto'>
          <h2 className='text-[#191919] text-center text-2xl font-semibold'>Captured Moments From Our Events</h2>
          <p className='mt-2 text-[#333] text-sm font-normal text-center'>Dive into the heartwarming moments that define our memorable gatherings.</p>
        </div>

        <Carousel />

        <div className='bg-[#fff5f5] mt-12 py-12 md:py-16 lg:py-[74px]'>
          <div className='w-[87.692%] md:w-[72%] mx-auto font-montserrat'>
            <h3 className='text-[#191919] text-center text-2xl font-semibold md:text-3xl lg:text-5xl'>"Empower Change: Donate Blood, Donate Funds, Impact Lives."</h3>
            <div className='lg:flex justify-center'>
                <button className='mt-10 py-4 px-4 bg-[#FE3434] w-full lg:w-[150px] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none'>Donate Now</button>
                <button className='mt-4 lg:mt-10 py-4 px-4 w-full lg:w-[240px] text-[#fe3434] rounded hover:bg-[#fff5f5] active:bg-[#cdb0101] active:shadow-none '><a href="/donor">Become a Blood Donor</a></button>
            </div>
          </div>
        </div>

        <Footer />

    </div>
  )
}