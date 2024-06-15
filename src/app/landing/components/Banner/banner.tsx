import React from 'react'
import ReserveButton from '../../../../shared/components/Buttons/reserveButton'

export default function Banner() {
	return (
		<>
			<div className="flex flex-col w-[90%] h-full pt-2 lg:pt-0 lg:flex-row bg-white lg:h-[500px] lg:w-11/12 rounded-xl gap-5">
				<div className="w-[90%] lg:w-2/4 h-full flex flex-col justify-center lg:pl-12 self-center items-center lg:items-start">
					<div className='w-90% lg:w-full flex flex-col items-center lg:items-start gap-3 lg:gap-0'>
						<p className="text-xl text-center lg:text-start lg:text-5xl  font-bold text-chaarcoalBase">
						Crecimiento y Bienestar: Psicología Online para Ti
						</p>
						<div className="lg:hidden w-[90%] flex h-full items-center self-center">
							<img className='rounded-xl' src="Images/banner.jpeg" alt="" />
						</div>
						<p className="text-slateGray700 w-[95%]  lg:pt-4 text-center lg:text-start">
						Agenda una cita de forma fácil y segura. Supera las dificultades emocionales y mejora tu calidad de vida con nuestro apoyo profesional a través de sesiones online. Estamos aquí para ayudarte a sentirte mejor.
						</p>
					</div>
					<div className="mb-4 lg:mb-0">
						<ReserveButton />
					</div>
				</div>
				<div className="hidden lg:flex w-[45%] h-[300px] items-center self-center">
					<img className='rounded-2xl' src="Images/banner.jpeg" alt="" />
				</div>
			</div>
		</>
	)
}