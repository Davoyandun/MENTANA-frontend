'use client'

import React from 'react'
import CardStepToStep from './cardStepToStep'
import StepsForTablet from './stepsForTablet'
import CalendarIcon from '../../../../../public/Icons/StepToUse/CalendarIcon'
import FormIcon from '../../../../../public/Icons/StepToUse/formIcon'
import PaymentIcon from '../../../../../public/Icons/StepToUse/paymentIcon'
import VideoIcon from './videoIcon'

export default function StepToUse() {
	return (
		<div className="bg-gradient-to-b from-whiteSmokeBase to-chaarcoalLight pt-7 md:pt-36  w-full flex items-center justify-center lg:pb-56 pb-28">
			<div className="bg-white w-[90%] lg:h-[400px] justify-evenly gap-12 rounded-xl flex flex-col border-l-8 border-solid border-teaRose500 py-3 lg:py-0 mt-16 lg:mt-0">
				<p className="font-bold text-2xl lg:text-3xl md:ml-11 h-1/4 pt-4 text-chaarcoalBase md:mt-5 lg:mt-12 self-center md:self-start">
					Cómo funciona
				</p>
				<div className="flex md:hidden lg:flex flex-col md:flex-row h-2/5 md:justify-evenly mb-14 gap-8 md:gap-0">
					<CardStepToStep
						image={CalendarIcon()}
						title="Escoge tu fecha y hora"
						description="Selecciona el día y la hora que mejor te convenga para tu cita."
					/>
					<CardStepToStep
						image={FormIcon()}
						title="Llena el formulario"
						description="Completa un breve formulario con el motivo de tu consulta."
					/>
					<CardStepToStep
						image={PaymentIcon()}
						title="Realiza el pago"
						description="Finaliza el proceso de agendamiento realizando el pago de manera segura."
					/>
					<CardStepToStep
						image={VideoIcon()}
						title="Atención personalizada"
						description="Recibirás un email recordatorio con el enlace para tu sesión online y seguimiento del profesional."
					/>
				</div>
				<StepsForTablet />
			</div>
		</div>




	)
}


