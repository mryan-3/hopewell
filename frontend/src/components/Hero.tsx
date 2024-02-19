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
        <button className='group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium'>
          <div className='inline-flex h-12 translate-x-0 items-center justify-center bg-accent px-6 text-neutral-950 transition group-hover:-translate-x-[150%]'>
            Book An Appointment
          </div>
          <div className='absolute inline-flex h-12 w-full translate-x-[100%] items-center justify-center bg-accent px-6 text-black transition duration-300 group-hover:translate-x-0'>
            Book An Appointment
          </div>
        </button>{' '}
        </div>
      </div>
    </div>
  )
}

export default Hero
