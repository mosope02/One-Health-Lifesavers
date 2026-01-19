import React, {useState} from 'react'

export const FAQ = () => {
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
    <>
     <div className='mt-10 w-11/12 mx-auto lg:w-[87.692%] lg:mt-28'>
        <p className='text-2xl lg:text-4xl font-semibold'>Frequently Asked Questions</p>
        <p className='text-[#191919] text-sm lg:text-xl mt-2 lg:mt-4 mb-8 lg:mb-14'>Seeking answers? Explore our FAQs for concise explanations about our mission, donations, and eligibility.</p>
          <div className='flex flex-col gap-4 lg:gap-8'>
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

                  <div
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-64 opacity-100 pb-5" : "max-h-0 opacity-0 pb-0"
                    }`}
                  >
                    <div className='h-px bg-[#F6B5B5] mb-4 lg:mb-6' />
                    <p className='text-[#333] text-sm leading-[22px]'>
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
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
        </>
  )
}
