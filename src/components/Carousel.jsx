import React, {useState} from 'react'
import img1 from '../assets/frame-31.png'
import img2 from '../assets/frame-33.png'
import img3 from '../assets/frame-31.png'
import img4 from '../assets/frame-30.png'
import img5 from '../assets/frame-31.png'
import arrowleft from '../assets/arrow-left.svg'
import arrowright from '../assets/arrow-right.svg'

const images = [img1, img2, img3, img4, img5]

export const Carousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0)
    
    const showImages =() => {
        const lastIndex = currentIndex + (window.innerWidth >= 768 ? 2 : 1);
        return images.slice(currentIndex, lastIndex + 1).map((image, index)=>(
            <div className='w-[163px]  md:w-[31%] max-h-40 md:max-h-[400px] rounded'>
                <img src={image} className='max-h-40 md:max-h-[400px] h-[160px] md:h-auto' key={index} alt="" />
            </div>
        ))
    }

    const prevImage = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
      }

      const nextImage = () => {
        setCurrentIndex((prevIndex) => Math.min(images.length - (window.innerWidth >= 768 ? 3 : 2), prevIndex + 1));
      }

  return (
    <div className='w-[87.692%] mx-auto mt-16'>
        <div className='flex justify-between mx-auto'>
             {showImages()}
        </div>

        <div className='flex mt-6 md:mt-10 gap-6 mx-auto w-fit'>
            <div className='border border-solid border-[#fe3434] flex justify-center items-center rounded-[128px] cursor-pointer'><button onClick={prevImage} disabled={currentIndex === 0}><img src={arrowleft} className='px-5 py-2' alt='previous'/></button></div>
            <div className='border border-solid border-[#fe3434] flex justify-center items-center rounded-[128px] cursor-pointer'><button onClick={nextImage} disabled={currentIndex === images.length - (window.innerWidth >= 768 ? 3 : 2) }><img src={arrowright} className='px-5 py-2' alt='next' /></button></div>
        </div>
    </div>
  )
}
