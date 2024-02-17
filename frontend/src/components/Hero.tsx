import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className='bg-gradient flex justify-center items-center h-screen mb-12 '>
    <div className='p-2 '>
          <h2 className='font-montserrat font-semibold text-[28px] text-center md:text-[36px] p-4'>
            Your Journey to Well-being Starts Here: Compassionate Gynecology at
            <hr />
            <span className='text-[20px] italic p-4 font-bold'>
              {' '}
              Hopewell General Hospital
            </span>
            <hr />
          </h2>
          <p className='font-open-sans text-[16px] font-semibold text-center p-4'>
            Offering Comprehensive Gynecological Care, From Routine Checkups to
            Advanced Procedures.
          </p>
          <hr />
          <button>Book</button>
        </div>
    </div>
  )
}

export default Hero
