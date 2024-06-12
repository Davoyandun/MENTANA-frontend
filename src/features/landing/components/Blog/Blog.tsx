/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
'use client'

import CardBlog from './cardBlog'

export default function Blog() {    
	return (      
		<div className="bg-gradient-to-b from-whiteSmokeBase to-chaarcoalLight h-full w-full flex items-center justify-center lg:pb-56 pb-28">
			<div className="bg-white w-[95%] lg:mb-5 justify-evenly gap-12 rounded-xl flex flex-col  pb-10">
				<p className="font-bold text-xl text-center mt-6  lg:text-start md:text-3xl md:ml-7 lg:pb-10 text-chaarcoalBase md:mt-5 lg:mt-12 md:self-start">
                    Últimas entradas del Blog
				</p>
				<div className='flex flex-col lg:flex-row w-full gap-10 lg:gap-5 justify-center'>
					<CardBlog 
						title='Cómo manejar la ansiedad en tiempos de estrés' 
						image={'Images/ansiedad.jpeg'} 
						description='Descubre estrategias efectivas para lidiar con la ansiedad durante momentos dificiles.' 
						creationDate={'11/06/24'} 
						author='Dr. Mentana'
					/>
					<hr className='hidden lg:flex self-center border-[1px] h-[400px] border-whiteSmoke500'/>
					<CardBlog 
						title='Cómo manejar la comunicación en pareja' 
						image={'Images/comunPareja.jpeg'} 
						description='Aprende técnicas para fortalecer la conexión y entendimiento con tu pareja.' 
						creationDate={'11/06/24'} 
						author='Dr. Mentana'
					/>
					<hr className='hidden lg:flex self-center border-[1px] h-[400px] border-whiteSmoke500'/>

					<CardBlog 
						title='Cómo practicar la mindfulness en la vida diaria' 
						image={'Images/mindfulness.jpeg'} 
						description='Descubre técnicas sencillas para incorporar la atención plena en tu rutina.' 
						creationDate={'11/06/24'} 
						author='Dr. Mentana'
					/>
				</div>
			</div>
		</div>
	)
}
