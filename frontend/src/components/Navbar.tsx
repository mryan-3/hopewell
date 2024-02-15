import React, { useState } from 'react'
import { links } from '../components/links.json'
import {Menu, X} from 'lucide-react'

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
        <div className='bg-primary font-merriweather border-b-accent flex justify-end w-full h-[70px]'>
            <div className='mr-10  '>
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
            <div className='md:hidden'>
            <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
            </div>
        </div>
    )
}

export default Navbar
