import React, { useState } from 'react'
import { links } from '../components/links.json'
import { Menu, X } from 'lucide-react'

type Link = {
  label: string
  href: string
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className='bg-primary font-merriweather border-b-accent flex flex-wrap justify-between md:justify-end w-full '>
      <div className=' p-4 md:hidden'>
        <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
      </div>
      <div className='mr-6 hidden md:flex'>
        <ul className='hidden md:flex '>
          {links.map((link: Link) => {
            return (
              <li key={link.href} className='p-4'>
                <a href={link.href}>{link.label}</a>
              </li>
            )
          })}
        </ul>
      </div>
      {isOpen && (
        <div className='mr-6'>
          <ul className='flex flex-col basis-3/4 '>
            {links.map((link: Link) => {
              return (
                <li key={link.href} className='p-4'>
                  <a href={link.href}>{link.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Navbar
