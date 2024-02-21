import React from 'react'

const Hero: React.FC = () => {
  return (
    <div className='bg-gradient flex justify-center items-center h-screen '>
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
        <div className='flex items-center justify-center w-full p-6'>
          <button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200 transition hover:scale-110'>
            <span>Book an Appointment</span>
            <div className='absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]'>
              <div className='relative h-full w-8 bg-white/20'></div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
