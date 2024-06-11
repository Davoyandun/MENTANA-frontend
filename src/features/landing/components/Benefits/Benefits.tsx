'use client'
import React from 'react'

export default function Benefits() {    
	return (
        
		<div className="bg-gradient-to-b from-chaarcoalLight  to-whiteSmokeBase  min-h-screen w-full flex items-center justify-center pb-60">
			<div className="bg-white w-[90%] lg:h-[400px] justify-evenly gap-12 rounded-xl flex flex-col border-t-8 lg:border-t-0 lg:border-l- border-solid border-teaRose500 lg:mb-[30rem] mb-96py-3 lg:py-0">
				<p className="font-bold text-xl text-center lg:text-start lg:text-3xl md:ml-11 h-1/4 pt-4 text-chaarcoalBase md:mt-5 lg:mt-12 md:self-start">
          ¿Porqué es importante la terapia?
				</p>
				<div className="flex flex-col lg:flex-row w-full pb-14">
					<div className="flex flex-col items-center text-start lg:w-1/2">
						<div className="w-11/12 lg:w-3/5">
							<p className="text-chaarcoal700 font-bold text-lg lg:text-[22px] mt-3 items-center text-center lg:text-start">
                Beneficios de la terapia:
							</p>
							<div className="text-center lg:text-start">
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Mejora la salud mental y emocional.
								</p>
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Desarrolla habilidades de afrontamiento.
								</p>
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Fortalece las relaciones interpersonales.
								</p>
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Aumenta la autoestima y la confianza.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col items-center text-start lg:w-1/2 pt-5 lg:pt-0">
						<div className="w-11/12 lg:w-3/5">
							<p className="text-chaarcoal700 font-bold text-lg lg:text-[22px] mt-3 text-center lg:text-start">
                Ventajas de la terapia online:
							</p>
							<div className="text-center lg:text-start">
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Accesibilidad desde cualquier lugar.
								</p>
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Comodidad y privacidad.
								</p>
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Flexibilidad de horarios.
								</p>
								<p className="text-slateGrayBase font-semibold text-lg mt-3 lg:w-full">
                  ● Costos más asequibles.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
