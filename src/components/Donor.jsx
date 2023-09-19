import React from 'react'
import { useState } from 'react'
import allstates from './nigeria-state-and-lgas.json'
import allSchools from './universities.json'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import { Footer } from './Footer'


export const Donor = () => {
  const [firstname, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [contact, setContact] = useState('')
  const [address, setAddress] = useState('')
  const [checked, setChecked] = useState(false)
  const [selectedState, setSelectedState] = useState('')
  const [lgas, setLgas] = useState([])
  const [selectedLga, setSelectedLga] = useState('')
  const [institution, setInstitution] = useState('')
  const [bloodGroup, setBloodGroup] = useState('')
  const [genotype, setGenotype] = useState('')
  const [occupation, setOccupation] = useState('')
  const [followed, setFollowed] = useState('no')
  const [dob, setDob] = useState('')
  const [lastDonation, setLastDonation] = useState('')

  const  handleFirstName = (event) => {
    setFirstName(event.target.value)
  }
  const handleLastName = (event) => {
    setLastName(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleContact = (event) => {
    setContact(event.target.value)
  }
  const handleAddress = (event) => {
    setAddress(event.target.value)
  }
  const handleBloodGroup =(event) => {
    setBloodGroup(event.target.value)
  }
  const handleOccupation = (event) => {
    setOccupation(event.target.value)
  }
  const handleGenotype = (event) => {
    setGenotype(event.target.value)
  }
  const handleFollowed = (event) => {
    setFollowed(event.target.value)
  }

  const handleLgaChange = (event) => {
    setSelectedLga(event.target.value)
  }
  const handleInstitution = (event) => {
    setInstitution(event.target.value)
  }
  const handleDob = (event) => {
    setDob(event.target.value)
  }
  const handleLastDonation = (event) => {
    setLastDonation(event.target.value)
  }

  const handleStateChange = (event) => {
    setSelectedState(event.target.value)
    setLgas(allstates.find(alls => alls.state === event.target.value).lgas)
  }
  const changeVisibility = () => {
    setChecked(!checked)
  }

  const details = {
    firstname: firstname,
    lastName: lastName,
    email: email,
    contact: contact,
    address: address,
    state: selectedState,
    city: selectedLga,
    occupation: occupation,
    institution: institution,
    bloodGroup: bloodGroup,
    genotype: genotype,
    dob: dob,
    lastDonation: lastDonation,
    followed: followed
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(details);
  }
  return (
    <>
      <div className='bg-[#fff5f5] font-montserrat py-12 lg:py-20'>
        <div className='w-[89%] mx-auto bg-white py-10 px-4 lg:px-10 md:py-6 lg:py-10 rounded-2xl'>
            
            <div>
              <h1 className='text-[#0f0000] text-2xl lg:text-4xl font-semibold'>Become a Blood Donor</h1>
              <p className='text-sm lg:text-xl font-normal text-[#191919] mt-4'>Become a vital part of our lifesaving community, uniting hearts and sharing life through voluntary blood donations and medical outreach.</p>
            </div>

            <form onSubmit={handleSubmit} className='mt-10 md:grid grid-cols-2 gap-6'>
              <div className='col-span-1'>
                <p className='text-[#191919] mt-6 lg:mt-0'>First Name</p>
                <input className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="text" value={firstname} onChange={handleFirstName} name="firstname" placeholder='First Name' required />
              </div>

              <div className='col-span-1'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Last name</p>
                <input className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="text" value={lastName} onChange={handleLastName} name="lastname" placeholder='Last name' required/>
              </div>

              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Email Address</p>
                <input className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="email" value={email} onChange={handleEmail} name="" id="" placeholder='Email Address' required/>
              </div>

              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Contact</p>
                <input className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="number" value={contact} onChange={handleContact} name="" id="" placeholder='Phone Number' required />
              </div>

              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Address</p>
                <input className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="text" value={address} onChange={handleAddress} name="" id="" placeholder='Home Address' required/>
              </div>
              
              <div className='col-span-1'>
                <p className='text-[#191919] mt-6 lg:mt-0'>State</p>
                <select className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' placeholder='Select State' name="state" value={selectedState} onChange={handleStateChange} required>
                  <option value='' disabled >--select state--</option>
                  {
                    allstates.map((allstate)=>{
                      return <option value={allstate.state}>{allstate.state}</option>
                    })
                  }
                </select>
              </div>

              <div className='col-span-1'>
                <p className='text-[#191919] mt-6 lg:mt-0'>City</p>
                <select className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' name="" id="" value={selectedLga} onChange={handleLgaChange} required >
                  <option value="" disabled>--select city--</option>
                  {
                    lgas.map(lga => (
                      <option value={lga}>{lga}</option>
                    ))
                  }
                </select>
              </div>

              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Occupation</p>
                <select className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="text" value={occupation} onChange={handleOccupation} placeholder='Occupation' required>
                  <option value="null" disabled>--select Occupation--</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="student">Student</option>
                </select>
              </div>
              {
                occupation === "student" ? 
                <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Institution</p>
                <select className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="text" value={institution} onChange={handleInstitution} placeholder='Select Institution'>
                  <option value="" disabled>--select instittion</option>
                  {
                    allSchools.map(schools => (
                      <option value={schools}>{schools}</option>
                    ))
                  }
                </select>
              </div> : '' 
              }
            
            <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Blood Group</p>
                <select className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' value={bloodGroup} onChange={handleBloodGroup} placeholder='Select Blood Group' required>
                  <option value="" disabled>--select blood group--</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                  <option value="idk">I don't know</option>
                </select>
              </div>

              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Genotype</p>
                <select className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' name="genotype" value={genotype} onChange={handleGenotype} required>
                  <option value="" disabled>--select genotype--</option>
                  <option value="AA">AA</option>
                  <option value="AS">AS</option>
                  <option value="SS">SS</option>
                  <option value="AC">AC</option>
                  <option value="SC">SC</option>
                  <option value="idk">I don't know</option>
                </select>
              </div>

              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Date of Birth</p>
                <input type="date" name="dob" className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' value={dob} onChange={handleDob} required />
              </div>

              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>When was the last time you donated blood?</p>
                <select name="lastdonation" value={lastDonation} onChange={handleLastDonation} className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' required>
                  <option value="" disabled>--select--</option>
                  <option value="First time">First time Donor</option>
                  <option value="Less than three">Less than 3 months ago</option>
                  <option value="More than 3 months ago">More than 3 months ago</option>
                </select>
              </div>
              
              <div className='col-span-2'>
                <p className='text-[#191919] mt-6 lg:mt-0'>Have you followed our social media handle?</p>
                <select className='outline outline-[#e6e6e6] outline-1 rounded-lg p-4 mt-2 w-full' type="text" value={followed} onChange={handleFollowed} placeholder='' >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </select>
              </div>

              {
                followed === "yes" ? '' :
                <div className='text-[#191919] flex flex-col lg:flex-row gap-2 text-sm lg:text-base'>
                <div className='flex w-full mt-3 lg:mt-0'> <a href="https://www.facebook.com/profile.php?id=100094508710417&mibextid=avESrC" target='_blank' className='hover:text-[#fe3434]'><img src={facebook} alt="" className='inline-block mr-2' /><span>Follow on facebook</span></a></div>
                <div className='flex w-full'> <a href="https://instagram.com/onehealthngr?igshid=OGQ5ZDc2ODk2ZA" target='_blank' className='hover:text-[#fe3434]'><img src={instagram} alt="" className='inline-block mr-2' />Follow on Instagram</a></div>
                <div className='flex w-full'> <a href="https://x.com/onehealthngr?s=21&t=90iGkCUOVi3XBgT_S9Qcqw" target='_blank' className='hover:text-[#fe3434]'>
                  <svg className='inline-block w-5 h-5 mr-2' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path fill='#666666' d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
                  </svg>Follow on X</a>
                </div>
              </div> 
              }
              

              <div className='flex gap-2 mt-4 lg:mt-7 col-span-2'>
                <div><input type="checkbox" name="consent" id="" onClick={changeVisibility} className={` ${checked ? 'hidden' : 'block'} h-8 w-8 shrink-0 appearance-none border border-[#ff9d9d] rounded-lg bg-red checked:border-[#FE3434]`} />
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" onClick={changeVisibility} className={`${checked ? 'block' : 'hidden'}`}>
                      <path d="M12.0001 29.3334H20.0001C26.6667 29.3334 29.3334 26.6667 29.3334 20V12C29.3334 5.33335 26.6667 2.66669 20.0001 2.66669H12.0001C5.33341 2.66669 2.66675 5.33335 2.66675 12V20C2.66675 26.6667 5.33341 29.3334 12.0001 29.3334Z" stroke="#FE3434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M10.3333 16L14.1066 19.7734L21.6666 12.2267" stroke="#FE3434" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <div>
                  <span className='text-sm'>I agree and consent to the storage and handling of my data by One Health in accordance with the <a href="#" className='text-[#0155f8] font-medium'>privacy policy</a> </span>
                </div>
              </div>

              <div className='col-span-2'>
                <button type='submit' className='py-3 px-9 bg-[#fe3434] text-[#fdfdfd] mt-16 hover:shadow-[4px_4px_42px_0px_rgba(254,52,52,0.28)] active:bg-[#cdb0101] active:shadow-none rounded disabled:bg-[#fcc] disabled:hover:shadow-none' disabled={!checked}>Submit</button>
              </div>
            </form>
        </div>
      </div>
      <Footer />
    </>
  )
}