'use client'

import React from 'react' 
import AboutUsDesktop from './aboutUsDesktop'
import AboutUsMobile from './aboutUsMobile'

export default function AboutUs() {
	return (
		<div className="bg-gradient-to-b from-chaarcoalLight to-whiteSmokeBase w-full flex items-center justify-center lg:pb-56 pb-28">
			<div className="bg-white w-[90%] pb-14 justify-evenly gap-12 rounded-xl flex flex-col border-t-8 lg:border-t-0 lg:border-l-8 border-teaRose500 py-3 lg:pt-0">
				<div className='flex flex-col w-full items-center'>
					<p className="font-bold text-2xl text-center lg:text-start lg:text-3xl md:ml-11 h-1/4 pt-4 text-chaarcoalBase md:mt-5 lg:mt-12 md:self-start">
                       Conócenos más
					</p>
					<p className='flex text-slateGrayBase font-semibold text-xl mt-3  text-center lg:text-start md:ml-11 h-1/4 pt-2 w-[90%] lg:w-full lg:ml-[85px] lg:mr-0'>
						En nuestra plataforma, ofrecemos un enfoque integral para tu bienestar mental y emocional. Nuestro equipo de profesionales está especializado en diversas áreas de la psicología para atender tus necesidades específicas.
					</p>
				</div>
				<div className='hidden lg:flex'>
					<AboutUsDesktop/>
				</div>
				<div className='flex lg:hidden'>
					<AboutUsMobile/>
				</div>
	
			</div>
		</div>
	)
}
