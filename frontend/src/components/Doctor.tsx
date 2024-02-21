import React from 'react'
import DoctorImage from '../assets/doctor.jpeg'

const Doctor: React.FC = () => {
  return (
    <div className='w-full h-full bg-gradient p-8'>
      <hr />
      <div className='flex justify-center items-center'>
        <h1 className='font-montserrat font-bold text-[40px] py-4'>
          {' '}
          Our Doctor
        </h1>
      </div>

      <hr className='p-2'/>
      <div className='flex flex-col lg:flex-row '>
        <div className='flex flex-col w-full  p-4 '>
          <img
            src={DoctorImage}
            className='max-w-[100%] h-auto align-middle rounded-lg border-accent border-4'
          />
        </div>
        <div className='flex flex-col px-2 '>
          <h1 className='font-montserrat font-bold text-[20px] p-2 text-center'>
            Dr Amara Kapoor
          </h1>
          <p className='font-open-sans text-[16px] font-medium p-2 text-center'>
            Dr. Amara Kapoor is a board-certified gynecologist dedicated to
            offering comprehensive and compassionate care for women throughout
            all stages of life. With extensive experience and a commitment to
            patient-centered care, Dr. Kapoor strives to build lasting
            relationships with her patients and empower them to achieve optimal
            health.
          </p>
          <h2 className='font-montserrat font-bold text-[20px] p-2 text-center'>
            Education & Qualification
          </h2>
          <p className='font-open-sans text-[16px] font-medium p-2'>
              <li className='py-1'>
                Harvard Medical School, Boston, MA (2017)
              </li>
              <li className='py-1'>
                Residency in Obstetrics & Gynecology, Johns Hopkins Hospital,
                Baltimore, MD (2022)
              </li>
              <li className='py-1'>
                Board-certified in Obstetrics & Gynecology by the American Board
                of Obstetrics and Gynecology (ABOG)
              </li>
              <li className='py-1'>
                Fellowship in Minimally Invasive Gynecological Surgery, Mayo
                Clinic, Rochester, MN (2023)
              </li>
          </p>
          <h2 className='font-montserrat font-bold text-[20px] p-2 text-center'>
            Areas of Expertise
          </h2>
          <p className='font-open-sans text-[16px] font-medium p-2'>
              <li className='py-1'>Minimally invasive gynecological surgery</li>
              <li className='py-1'>Comprehensive women's health care</li>
              <li className='py-1'>Prenatal care and delivery</li>
              <li className='py-1'>Family planning and contraception</li>
              <li className='py-1'>
                Management of common gynecological conditions (e.g.,
                endometriosis, PCOS, menstrual disorders)
              </li>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Doctor
