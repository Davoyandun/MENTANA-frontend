'use client'

import React, { useState } from 'react'
import LoginButton from '../Buttons/loginButton'
import RegisterButton from '../Buttons/registerButton'
import LogoNavbar from './logoNavbar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false)
	const pathname = usePathname()

	const toggleMenu = () => {
		setMenuOpen(!menuOpen)
	}



	return (
		<nav className={`fixed flex w-full top-0 z-50 bg-chaarcoal300 py-3 ${menuOpen ? 'h-screen py-4' : 'lg:h-[100px]'}`}>
			<div className={`container lg:px-0 flex flex-col lg:flex-row justify-between items-center ${menuOpen ? 'h-full' : ''}`}> 
				<div className="flex justify-between w-full lg:w-auto">
					<Link href='/'>
						<LogoNavbar/> 
					</Link>
					<div className="block lg:hidden self-center">
						<button onClick={toggleMenu} className="text-white focus:outline-none">
							{menuOpen ? (
								<svg className="w-10 h-[30px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
								</svg>
							)}
						</button>
					</div>
				</div>

				{menuOpen && <hr className="border-t border-white w-full mt-5 lg:hidden" />} 

				<ul className={`flex flex-col items-center lg:flex lg:flex-row lg:text-center lg:w-3/4 lg:text-xl lg:justify-center gap-4 lg:gap-[75px] space-x-0 lg:space-x-6 text-white mt-4 lg:mt-0 ${menuOpen ? 'flex-grow justify-center gap-6' : 'hidden'}`}> 
					<li className="lg:w-[10%]">
						<Link href="/agendar" className={`hover:font-bold ${ pathname === '/agendar' ? 'active-link' : ''}`}>
							Agendar
						</Link>
					</li>
					<li className="lg:w-[15%]">
						<Link href="/sobre-nosotros" className={`hover:font-bold ${pathname === '/sobre-nosotros' ? 'active-link' : ''}`}>
							Sobre nosotros
						</Link>
					</li>
					<li className="lg:w-[5%]">
						<Link href="/blog" className={`hover:font-bold ${pathname === '/blog' ? 'active-link' : ''}`}>
							Blog
						</Link>
					</li>
					<li
						className={`lg:w-[22%] hover:font-bold ${pathname === '/faq' ? 'font-bold active-link' : ''}`}>
						<Link href="/faq" >
							Preguntas frecuentes
						</Link>
					</li>
				</ul>

				{menuOpen && <hr className="border-t border-white w-full mt-2 lg:hidden" />} 

				<div className={`flex-row items-center lg:hidden mt-4 ${menuOpen ? 'flex' : 'hidden'} flex justify-end pb-4`}> 
					<LoginButton />
					<RegisterButton />
				</div>
				<div className="hidden lg:flex">
					<LoginButton />           
					<RegisterButton />
				</div>
			</div>
		</nav>
	)
}