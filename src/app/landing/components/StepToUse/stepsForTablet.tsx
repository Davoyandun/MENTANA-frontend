import CardStepToStep from './cardStepToStep'
import React from 'react'

export default function StepsForTablet() {
	return(

		<div className="hidden md:flex lg:hidden md:flex-row h-2/5 md:justify-evenly md:gap-0 pb-7">
			<div className="flex flex-col items-center gap-7">
				<CardStepToStep
					image={<svg xmlns="http://www.w3.org/2000/svg" color="#EE818C" fill='none' viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-10">
						<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
					</svg>
					}
					title="Agendar cita"
					description="Reserva tu cita con un terapeuta especializado."
				/>
				<CardStepToStep
					image={<svg xmlns="http://www.w3.org/2000/svg" color="#EE818C" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-[38px]">
						<path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
					</svg>
					}
					title="Seguimiento"
					description="Recibe el segumiento de tu terapeuta."
				/>
			</div>
			<div className="flex flex-col items-center gap-7">
				<CardStepToStep
					image={<svg xmlns="http://www.w3.org/2000/svg" color="#EE818C" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-10">
						<path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
					</svg>
					}
					title="Terapia online"
					description="Asiste a tu sesión de terapia de forma virtual."
				/>
				<CardStepToStep
					image={<svg xmlns="http://www.w3.org/2000/svg" color="#EE818C" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-[38px]">
						<path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 0 1 9 9v.375M10.125 2.25A3.375 3.375 0 0 1 13.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 0 1 3.375 3.375M9 15l2.25 2.25L15 12" />
					</svg>
					}
					title="Tareas personalizadas"
					description="Completa tu terapia con ejercicios y tareas."
				/>
			</div>
           
		</div>
	)
   
}

