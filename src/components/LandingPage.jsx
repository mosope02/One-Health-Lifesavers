import React, { useState } from 'react'
import rec1 from '../assets/rectangle-3.png'
import rec2 from'../assets/rectangle-2.png'
import rec3 from '../assets/rectangle-1.png';
import rec4 from '../assets/rectangle-4.png'
import blood from '../assets/blood.svg'
import user from '../assets/user.svg'
import giveblood from '../assets/give-blood.svg'
import moneybag from '../assets/money-bag-01.svg'
import volunteer from '../assets/healtcare.svg'
import face from '../assets/testimonial.png'
import { Carousel } from './Carousel';
import { Footer } from './Footer';
import Marquee from "react-fast-marquee";

export const LandingPage = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    {
      q: "Am I eligible to donate blood",
      a: "Donor must be at least 16 years old, weigh at least 50 kg and be in good health to be eligible for blood donation"
    },
    {
      q: "Is donating blood safe?",
      a: "Donating blood is generally safe, with strict screening, sterile equipment, and trained staff in place to ensure the safety of both donors and recipients."
    },
    {
      q: "How long does it take to donate blood?",
      a: "Typically it takes about 10 to 15 minutes for the actual blood collection process. However, the entire donation process, including registration, screening, blood donation, and a short rest period afterward, may take approximately 30 to 60 minutes in total."
    },
    {
      q: "How often can I donate blood?",
      a: "Every 3 months. This allows your body enough time to replenish the red blood cells and other components that are collected during the donation."
    },
    {
      q: "Do you pay donors for giving blood?",
      a: "No. We believe blood donation should be voluntary. Donors are not paid for giving blood."
    },
    {
      q: "What happens to my blood after donation?",
      a: "Your blood is tested, processed, and separated into components (such as red cells, plasma, and platelets). It is then stored safely and supplied to hospitals for patients who need it."
    },
    {
      q: "Why do recipient pay for blood if I donate for free?",
      a: (
        <>
          Recipients are typically charged to cover testing, processing, storage, and distribution costs, not the blood itself.{" "}
          <a className='text-red-400' href='https://dailytrust.com/should-we-donate-blood-for-free-if-recipients-have-to-pay-for-it/' target='_blank' rel='noreferrer'>
            Learn More
          </a>
        </>
  )
    },
    {
      q: "I’m unable to donate blood, are there ways I can support One Health mission?",
      a: "Yes. You can support our mission by volunteering your skills and services, such as event photography, videography, or by making a donation to fund any of our initiatives."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="font-montserrat">
        <div className='w-[87%] mx-auto mt-10'>
            <h2 className='text-[32px] lg:text-[56px] text-[#0f0000] font-bold text-center px-3 '>Uniting Hearts, <span className='text-[#fe3434]'>Sharing Life.</span></h2>
            <p className='lg:w-4/5 mx-auto mt-2 text-center text-sm lg:text-xl font-normal text-[#191919]'>Become a vital part of our lifesaving community, uniting hearts and sharing life through voluntary blood donations and medical outreach.</p>
            <div className='lg:flex justify-center'>
                <button className='mt-10 py-4 px-4 bg-[#FE3434] w-full lg:w-[150px] text-white rounded hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none'>Donate Funds</button>
                <button className='mt-2 lg:mt-10 py-4 px-4 bg-white w-full lg:w-[240px] text-[#fe3434] rounded hover:bg-[#fff5f5] active:bg-[#cdb0101] active:shadow-none '><a href="/donor">Become a Blood Donor</a></button>
            </div>      
        </div>


        <div className='hidden lg:block mt-20'>
          <div className='w-[87.692%] mx-auto grid grid-cols-3 gap-6'>
            <div className='overflow-hidden mt-6'> <img className='w-full h-[460px] object-cover rounded-2xl' src={rec1} alt="" /></div>
            <div className='overflow-hidden mb-0 mt-0'> <img className='w-full h-[460px] object-cover rounded-2xl' src={rec2} alt="" /> </div>
            <div className='overflow-hidden mt-6'> <img className='w-full h-[460px] object-cover rounded-2xl' src={rec3} alt="" /> </div>
          </div>
        </div>


        <div className='mt-8 w-[100%] mx-auto justify-between items-center lg:hidden'>
          <div className='lg:text-right lg:w-fit  w-[87.692%] lg:mx-0 mx-auto lg:mt-0 mt-10'><img className='' src={rec4} alt="Our mission.Blood collecting bags."/></div>
        </div>

      {/*Partners*/}
        <div>
          <p className='text-center mt-8 lg:mt-16 font-semibold lg:text-xl'>Our Partners</p>
        <Marquee play={false} className='marquee w-[90%] mx-auto mt-8 flex justify-between  ' gradient={false} speed={30}>
          <div className='mx-5 lg:ml-32 lg:mr-20'><img className='w-14 h-10 lg:w-28 lg:h-20' src="https://res.cloudinary.com/frizzy/image/upload/v1751231806/OHLS/Partners/lsbtc.png" alt="" /></div>
          <div className='mx-5 lg:mx-24'><img className='w-10 lg:w-16' src="https://res.cloudinary.com/frizzy/image/upload/v1751220011/OHLS/Partners/Lasuth.png" alt="" /></div>
          <div className='mx-5 lg:mx-24'><img className='w-8 h-6 lg:w-14 lg:h-14' src="https://res.cloudinary.com/frizzy/image/upload/v1751219772/OHLS/Partners/Haima.png" alt="" /></div>
          <div className='mx-5 lg:mx-24'><img className='w-8 lg:w-14' src="https://res.cloudinary.com/frizzy/image/upload/v1751231805/OHLS/Partners/kbklub.png" alt="" /></div>
          <div className='mx-5 lg:mx-24'><img className='w-8 lg:w-14' src="https://res.cloudinary.com/frizzy/image/upload/v1751231805/OHLS/Partners/lasumsa.png" alt="" /></div>
        </Marquee>
        </div>

        <div className='mt-12 lg:mt-40 mx-auto '>
          <h2 className='text-[#FE3434] text-center text-xs font-semibold lg:text-xl'>Our Impact</h2>
          <h3 className='text-[#191919] text-center text-2xl lg:text-[40px] font-semibold w-9/12 mx-auto mt-2 lg:mt-4'>Measuring Our Success, One Life at a Time</h3>
          <p className='text-[#333] text-center text-sm lg:text-xl lg:w-[70%] w-10/12 mx-auto mt-2 lg:mt-4'>See the powerful difference your support makes through our impact metrics.</p>

          <div className='mt-8 w-[92%] lg:w-[87.692%] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8'> {/* Metrics Section */ }
            <div className=' p-6 lg:p-8 bg-[#FFE6E6] rounded-lg flex flex-col items-center justify-center'>
              <div><img className='w-14' src={blood} alt="" /></div>
              <h2 className='mt-2 text-[#fe3434] font-extrabold text-4xl'>20+</h2>
              <p className='text-center lg:text-xl text-[#333]'>Medical outreaches and blood donation drive organised.</p>
            </div>

            <div className=' p-6 lg:p-8 bg-[#FFE6E6] rounded-lg flex flex-col items-center justify-center'>
              <div><img className='w-14' src={blood} alt="" /></div>
              <h2 className='mt-2 text-[#fe3434] font-extrabold text-4xl'>2k+</h2>
              <p className='text-center lg:text-xl text-[#333]'>Pints of blood donated through our medical outreach.</p>
            </div>

            <div className=' p-6 lg:p-8 bg-[#FFE6E6] rounded-lg flex flex-col items-center justify-center'>
              <div><img className='w-14' src={user} alt="" /></div>
              <h2 className='mt-2 text-[#fe3434] font-extrabold text-4xl'>100+</h2>
              <p className='text-center lg:text-xl text-[#333]'>Individuals benefitted from the blood donated.</p>
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

        <div className='mt-12 lg:mt-40'>
          <h2 className='text-[#FE3434] text-center text-xs font-semibold lg:text-xl'>Get Involved</h2>
          <h3 className='text-[#191919] text-center text-xl lg:text-[40px] font-semibold w-9/12 mx-auto mt-2 lg:mt-4'>Be Part of the Change</h3>
          <p className='text-[#333] text-center text-sm lg:text-xl lg:w-[70%] w-10/12 mx-auto mt-2 lg:mt-4'>Discover various ways to support our mission and make a lasting impact.</p>
        </div>

        <div className='mt-4 lg:mt-24 mx-auto'>
          <div className='lg:grid grid-cols-3 gap-7 lg:w-[87.692%] lg:mx-auto lg:text-left'>
              <div className='p-6 px-7 lg:p-2 mb-6'>
                <div className='w-fit lg:mx-0'><img src={giveblood} alt="" /></div>
                <h4 className='mt-4 lg:mt-6 font-semibold text-base lg:text-[32px] text-[#FE3434]'>Donate Blood</h4>
                <p className='text-sm text-[#333] mt-2 lg:mt-4 lg:text-base '>Your blood can save lives in emergencies, surgeries, and for patients with various medical conditions. Make an impact on someone's life today by donating your blood.</p>
              </div>

              <div className='py-6 px-7 mb-6 lg:p-1'>
                <div className='w-fit lg:mx-0'><img src={moneybag} alt="" /></div>
                <h4 className='mt-4 lg:mt-6 font-semibold text-base lg:text-[32px] text-[#FE3434]'>Donate Money</h4>
                <p className='text-sm text-[#333] mt-2 lg:mt-4 lg:text-base '>Your financial contributions are vital in organising outreach programs, blood drives, and educational campaigns. By donating, you enable us to extend our impact to people in need.</p>
              </div>

              <div className='p-6 px-7 mb-6 lg:p-1'>
                <div className='w-fit lg:mx-0'><img src={volunteer} alt="" /></div>
                <h4 className='mt-4 lg:mt-6 font-semibold text-base lg:text-[32px] text-[#FE3434]'>Become a Volunteer</h4>
                <p className='text-sm text-[#333] mt-2 lg:mt-4 lg:text-base '>As a volunteer, you can actively engage in organizing events, raising awareness, and helping us achieve our mission to find sustainable solutions to the blood shortage crisis in Nigeria.</p>
              </div>
          </div>
        </div>

        <div className='mt-24 w-[87.692%] mx-auto'>
          <h2 className='text-[#FE3434] text-center text-xs font-semibold lg:text-xl mb-2'>Event Highlights</h2>
          <h2 className='text-[#191919] text-center text-2xl lg:text-[40px] font-semibold w-9/12 mx-auto mt-2 lg:mt-4'>Captured Moments From Our Events</h2>
          <p className='text-[#333] text-center text-sm lg:text-xl lg:w-[70%] w-10/12 mx-auto mt-2 lg:mt-4'>Dive into the heartwarming moments that define our memorable gatherings.</p>
        </div>

        <Carousel />

        <div className='mt-12 lg:mt-40'>
          <h2 className='text-[#FE3434] text-center text-xs font-semibold lg:text-xl'>Testimonials</h2>
          <h3 className='text-[#191919] text-center text-xl lg:text-[40px] font-semibold w-9/12 mx-auto mt-2 lg:mt-4 px-2'>Voices of Impact: Life-Saving Stories</h3>
          <p className='text-[#333] text-center text-sm lg:text-xl lg:w-[70%] w-10/12 mx-auto mt-2 lg:mt-4'>Hear from those whose lives have been transformed by your blood donations.</p>

          <div className='lg:flex lg:w-[87.692%] gap-7 lg:mx-auto'>
            <div className='w-11/12 mx-auto mt-6 rounded-lg bg-[#FAFAFA] p-6 '>
                <p className='text-sm leading-[22px] lg:text-base text-[#333]'>Your blood can save lives in emergencies, surgeries, and for patients with various medical conditions. Make an impact on someone's life today by donating your blood Make an impact on someone's life today by donating your blood.</p>
                <div className='flex mt-6 lg:mt-8 gap-4 items-center'>
                  <div><img src={face} alt="" /></div>
                  <div className='text-[#191919]'>
                    <p className='text-sm mb-1 font-semibold'>Idris Ibrahim Idenyi</p>
                    <p className='text-xs'>Blood Donor</p>
                  </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto mt-6 rounded-lg bg-[#FAFAFA] p-6 '>
                <p className='text-sm leading-[22px] lg:text-base text-[#333]'>Your blood can save lives in emergencies, surgeries, and for patients with various medical conditions. Make an impact on someone's life today by donating your blood Make an impact on someone's life today by donating your blood.</p>
                <div className='flex mt-6 lg:mt-8 gap-4 items-center'>
                  <div><img src={face} alt="" /></div>
                  <div className='text-[#191919]'>
                    <p className='text-sm mb-1 font-semibold'>Idris Ibrahim Idenyi</p>
                    <p className='text-xs'>Blood Donor</p>
                  </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto mt-6 rounded-lg bg-[#FAFAFA] p-6 '>
                <p className='text-sm leading-[22px] lg:text-base text-[#333]'>Your blood can save lives in emergencies, surgeries, and for patients with various medical conditions. Make an impact on someone's life today by donating your blood Make an impact on someone's life today by donating your blood.</p>
                <div className='flex mt-6 lg:mt-8 gap-4 items-center'>
                  <div><img src={face} alt="" /></div>
                  <div className='text-[#191919]'>
                    <p className='text-sm mb-1 font-semibold'>Idris Ibrahim Idenyi</p>
                    <p className='text-xs'>Blood Donor</p>
                  </div>
                </div>
            </div>
          </div>
        </div>

        {/* FAQ DROPDOWN (placed just below Testimonials) */}
        <div className='mt-10 w-11/12 mx-auto lg:w-[87.692%] lg:mt-28'>
        <p className='text-2xl lg:text-4xl font-semibold'>Frequently Asked Questions</p>
        <p className='text-[#191919] text-sm lg:text-xl mt-2 lg:mt-4 mb-8 lg:mb-14'>Seeking answers? Explore our FAQs for concise explanations about our mission, donations, and eligibility.</p>
          <div className='flex flex-col lg:grid grid-cols-2 gap-4'>
            {faqs.map((item, index) => { const isOpen = openFaqIndex === index;
              return (
                <div key={item.q} className='bg-[#FFF1F1] rounded-2xl overflow-hidden'>
                  <button type="button" onClick={() => toggleFaq(index)}
                    className='w-full flex items-center justify-between gap-4 px-5 py-5 text-left'>

                    <div className='flex items-center gap-3'>
                      <div className='w-5 h-5 rounded-full bg-[#FE3434] flex items-center justify-center flex-shrink-0'>
                        <span className='text-white font-extraboldd text-sm leading-none'>?</span>
                      </div>
                      <p className='text-[#0f0000] font-semibold text-base'>
                        {item.q}
                      </p>
                    </div>

                    <svg className={`w-5 h-5 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 9L12 15L18 9" stroke="#0f0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>

                  {isOpen && (
                    <div className='px-5 pb-5'>
                      <div className='h-px bg-[#F6B5B5] mb-4' />
                      <p className='text-[#333] text-sm leading-[22px]'>
                        {item.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        {/* END FAQ DROPDOWN */}

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
