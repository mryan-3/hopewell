import React from 'react'
import { Stethoscope } from 'lucide-react'

const Services: React.FC = () => {
  return (
    <div className=' w-full h-full bg-gradient p-8'>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='flex items-center justify-center font-montserrat font-bold text-[40px] py-4 text-center'>
          {' '}
          Comprehensive Gynecological Care
        </h1>
        <p className='font-open-sans font-semibold text-[16px] p-2'>
          Empowering your health and well-being at every stage.
        </p>
      </div>
      <div>
        <div className='flex flex-col md:grid grid-rows-2 grid-cols-3 p-2'>
          <div className='border-accent border-4 p-2 mx-2 my-4 flex flex-col justify-evenly items-center'>
            <Stethoscope />
            <h2 className='font-montserrat font-semibold text-12px p-4 '>
              Preventive Care
            </h2>
            <p className='font-open-sans font-medium text-10px leading-6 text-center p-4'>
              We offer comprehensive preventive care services, including annual
              exams, Pap smears, STI screenings, breast cancer screenings, and
              bone density scans.{' '}
            </p>
          </div>
          <div className='border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <Stethoscope />
            <h2 className='font-montserrat font-semibold text-12px p-4'>
              Preventive Care
            </h2>
            <p className='font-open-sans font-medium text-10px leading-6 text-center p-4'>
              We offer comprehensive preventive care services, including annual
              exams, Pap smears, STI screenings, breast cancer screenings, and
              bone density scans.{' '}
            </p>
          </div>
          <div className='border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <Stethoscope />
            <h2 className='font-montserrat font-semibold text-12px p-4 '>
              Preventive Care
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              We offer comprehensive preventive care services, including annual
              exams, Pap smears, STI screenings, breast cancer screenings, and
              bone density scans.{' '}
            </p>
          </div>
          <div className='row-start-2 border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <Stethoscope />
            <h2 className='font-montserrat font-semibold text-12px p-4 '>
              Preventive Care
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              We offer comprehensive preventive care services, including annual
              exams, Pap smears, STI screenings, breast cancer screenings, and
              bone density scans.{' '}
            </p>
          </div>
          <div className='row-start-2 border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <Stethoscope />
            <h2 className='font-montserrat font-semibold text-12px p-4 '>
              Preventive Care
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              We offer comprehensive preventive care services, including annual
              exams, Pap smears, STI screenings, breast cancer screenings, and
              bone density scans.{' '}
            </p>
          </div>
          <div className='row-start-2 border-accent border-4 p-2 mx-2 my-4 flex flex-col justify-evenly items-center'>
            <Stethoscope />
            <h2 className='font-montserrat font-semibold text-12px p-4 '>
              Preventive Care
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              We offer comprehensive preventive care services, including annual
              exams, Pap smears, STI screenings, breast cancer screenings, and
              bone density scans.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
