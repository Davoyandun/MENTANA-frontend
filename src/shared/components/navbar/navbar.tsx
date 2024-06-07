
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
        <nav className={`fixed flex w-full top-0 z-50 bg-chaarcoal300 py-3 ${menuOpen ? 'h-screen py-4' : 'lg:h-[100px]'}`}>
            <div className={`container lg:px-0 flex flex-col lg:flex-row justify-between items-center ${menuOpen ? 'h-full' : ''}`}> 
                <div className="flex justify-between w-full lg:w-auto">
                    <div >
                        <img className="h-[55px] lg:h-[75px]" src="data:image/png;base64,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"></img>
                    </div>
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
                    <li className="lg:w-[10%]"><a href="#" className="hover:font-bold">Agendar</a></li>
                    <li className="lg:w-[15%]"><a href="#" className="hover:font-bold">Sobre nosotros</a></li>
                    <li className="lg:w-[5%]"><a href="#" className="hover:font-bold">Blog</a></li>
                    <li className="lg:w-[22%]"><a href="#" className="hover:font-bold">Preguntas frecuentes</a></li>
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
    );
}
