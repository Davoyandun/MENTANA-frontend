
'use client';

import React, { useState } from "react";
import LoginButton from "../Buttons/loginButton";
import RegisterButton from "../Buttons/registerButton";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`fixed flex w-full top-0 z-50 bg-chaarcoalBase p-4 ${menuOpen ? 'h-screen px-4' : 'lg:h-[100px]'}`}>
            <div className={`container mx-auto flex flex-col lg:flex-row justify-between items-center ${menuOpen ? 'h-full' : ''}`}> 
                <div className="flex justify-between w-full lg:w-auto">
                    <div className="text-white text-2xl">Mi Logo</div>
                    <div className="block lg:hidden">
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

                <ul className={`flex flex-col items-center lg:flex lg:flex-row lg:w-1/2 lg:justify-center gap-2 space-x-0 lg:space-x-6 text-white mt-4 lg:mt-0 ${menuOpen ? 'flex-grow justify-center gap-6' : 'hidden'}`}> 
                    <li><a href="#" className="hover:text-gray-400">Agendar</a></li>
                    <li><a href="#" className="hover:text-gray-400">Sobre nosotros</a></li>
                    <li><a href="#" className="hover:text-gray-400">Blog</a></li>
                    <li><a href="#" className="hover:text-gray-400">Preguntas frecuentes</a></li>
                </ul>

                {menuOpen && <hr className="border-t border-white w-full mt-2 lg:hidden" />} 

                <div className={`flex-row items-center lg:hidden mt-4 ${menuOpen ? 'flex' : 'hidden'} flex justify-end pb-4`}> 
                    <LoginButton />
                    <RegisterButton />
                </div>
                <div className="hidden lg:flex gap-4">
                    <LoginButton />
                    <RegisterButton />
                </div>
            </div>
        </nav>
    );
}
