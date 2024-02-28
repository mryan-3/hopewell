import React from 'react'
import { Stethoscope, Microscope, Heart, ShieldPlus, ActivitySquare, PhoneCall} from 'lucide-react'

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
            <h2 className='font-montserrat font-semibold text-center text-12px p-4 '>
              Preventive Care
            </h2>
            <p className='font-open-sans font-medium text-10px leading-6 text-center p-4'>
              We offer comprehensive preventive care services, including annual
              exams, Pap smears, STI screenings, breast cancer screenings, and
              bone density scans.{' '}
            </p>
          </div>
          <div className='border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <Heart />
            <h2 className='font-montserrat font-semibold text-center text-12px p-4'>
              Women's Health Management{' '}
            </h2>
            <p className='font-open-sans font-medium text-10px leading-6 text-center p-4'>
              We understand the unique challenges and concerns women face
              throughout their lives. We offer a wide range of services to
              support your overall health and well-being.
            </p>
          </div>
          <div className='border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <ActivitySquare />
            <h2 className='font-montserrat font-semibold text-center text-12px p-4 '>
              Gynecological Conditions
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              We diagnose and treat a variety of common conditions, such as
              endometriosis, polycystic ovary syndrome (PCOS), uterine fibroids,
              pelvic pain, and vaginitis. We utilize advanced diagnostic tools
              whenever possible to ensure optimal outcomes.
            </p>
          </div>
          <div className='row-start-2 border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <Microscope />
            <h2 className='font-montserrat font-semibold text-12px text-center p-4 '>
              Surgical Services
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              We offer a range of surgical procedures, including laparoscopic
              surgery, hysterectomy, and other gynecological procedures tailored
              to your specific needs. We prioritize patient safety and comfort
              throughout the entire surgical process.
            </p>
          </div>
          <div className='row-start-2 border-accent border-4 p-2 my-4 mx-2 flex flex-col justify-evenly items-center'>
            <ShieldPlus/>
            <h2 className='font-montserrat font-semibold text-center text-12px p-4 '>
              Wellness and Intimacy
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              e recognize that a woman's well-being extends beyond her physical
              health. We offer resources and support to help you navigate the
              various aspects of well-being.
            </p>
          </div>
          <div className='row-start-2 border-accent border-4 p-2 mx-2 my-4 flex flex-col justify-evenly items-center'>
            <PhoneCall />
            <h2 className='font-montserrat font-semibold text-12px text-center p-4 '>
              Telehealth Services
            </h2>
            <p className='font-open-sans font-medium text-10px text-center leading-6 p-4'>
              We understand that access to healthcare can be a challenge for
              some patients. We offer convenient telehealth consultations for
              Initial consultations, follow-up appointments and post-operative
              support.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
