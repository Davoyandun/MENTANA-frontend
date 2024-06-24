'use client'

import React from 'react' 
import AboutUsCardMobile from './aboutUsCardMobile'
import PsychologicalClinicIcon from '../../../../../public/Icons/AboutUs/psychologicalClinicIcon'
import NeuropsychologyIcon from '../../../../../public/Icons/AboutUs/neuropsychologyIcon'
import LanguageIcon from '../../../../../public/Icons/AboutUs/languageIcon'
import EducationalPsychologyIcon from '../../../../../public/Icons/AboutUs/educationalPsychologyIcon'

export default function AboutUsMobile() {
	return (
		<div className='container flex flex-col gap-10 px-4'>
			
			<AboutUsCardMobile 
				image={PsychologicalClinicIcon()}
				title='Psicología Clínica'
				description='Trabajamos contigo para superar problemas emocionales y psicológicos que afectan tu vida diaria. Nuestro objetivo es ayudarte a encontrar el equilibrio y el bienestar que mereces.'
			/>

			<AboutUsCardMobile 
				image={NeuropsychologyIcon()}
				title='Neuropsicología'
				description='Evaluamos y tratamos problemas cognitivos y de comportamiento relacionados con el funcionamiento del cerebro. Te ayudamos a mejorar tu memoria, atención y otras habilidades cognitivas.'
			/>

			<AboutUsCardMobile
				image={LanguageIcon()}
				title='Terapia de Lenguaje'
				description='Ofrecemos apoyo a personas con dificultades en la comunicación, ya sea en el habla, la comprensión o la expresión. Nuestro objetivo es mejorar tus habilidades de comunicación para una vida más plena.				'
			/>

			<AboutUsCardMobile 
				image={EducationalPsychologyIcon()}
				title='Psicología Educativa'
				description='Apoyamos a niños y adolescentes en su desarrollo académico y emocional. Trabajamos con dificultades de aprendizaje, problemas de conducta y estrategias para mejorar el rendimiento escolar.				'
			/>

		</div>

	)
}
