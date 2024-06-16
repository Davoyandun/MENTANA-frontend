/* eslint-disable react/react-in-jsx-scope */
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion'

export default function FaqContent() {
	return (
		<div className="bg-white self-center rounded-xl w-full flex flex-col justify-center py-12 border-t-8 border-teaRose500">
			<p className='w-[90%] self-center h-16 md:h-24 text-[22px] text-center md:text-start md:text-3xl font-bold text-chaarcoal300'>
                Preguntas Frecuentes
			</p>
			<div className='w-full flex justify-center'>
				<Accordion type="single" collapsible className='w-[92%] md:w-[90%] gap-4 md:gap-5 flex flex-col'>
					<AccordionItem value="item-1" className='pb-[10px] md:pb-0'>
						<AccordionTrigger className='h-24 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Con cuánta frecuencia tendré que hacer terapia?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                Tu psicólogo online te recomendará la frecuencia ideal para tus sesiones (generalmente una vez por semana). Sin embargo, la decisión final es tuya. Es importante que, si te comprometes a asistir de manera periodica, lo cumplas para asegurar el éxito de tu proceso terapéutico.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-2">
						<AccordionTrigger className='h-24 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Cuánto tiempo tendré que estar en terapia?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                El tiempo necesario para la terapia varía según cada persona y sus necesidades específicas.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-3">
						<AccordionTrigger className='h-32 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Podré tener contacto con mi psicóloga fuera de las sesiones de terapia?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                Sí, puedes contactar on el profesional que te atienda mediante un chat  dentro de la plataforma para discutir asuntos relacionados con la terapia, como la entrega de ejercicios. Sin embargo, no se ofrecerá asistencia ni terapia fuera de las sesiones programadas.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-4">
						<AccordionTrigger className='h-32 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Alguien más sabrá lo que le cuente a mi psicóloga en terapia?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                No, la confidencialidad está garantizada.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-5">
						<AccordionTrigger className='h-32 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                Una vez que he reservado mi sesión, ¿puedo modificar el día y la hora o cancelar la sesión?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                Sí, puedes cambiar la fecha o cancelar la sesión con al menos 24 horas de antelación. Si avisas con menos de 24 horas, no aceptaremos cambios. Además, las profesionales esperarán un máximo de 15 minutos desde la hora de inicio de la sesión. Si no te presentas en ese tiempo, la sesión se considerará anulada sin derecho a reembolso. Las cancelaciones no tienen reembolso, así que debes estar segur@ de tu compromiso por asistir. 
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-6">
						<AccordionTrigger className='h-32 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Qué necesito para mis sesiones de terapia online?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                Solo necesitas una conexión a internet estable, un dispositivo con cámara y micrófono (como un ordenador, tablet o smartphone), y un lugar tranquilo donde puedas hablar cómodamente.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-7">
						<AccordionTrigger className='h-24 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Cómo me preparo para mi primera sesión?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                En tu primera sesión, será útil que pienses en los temas que te gustaría abordar. También puedes anotar cualquier pregunta o preocupación que tengas. Esto ayudará a que tu psicólog@ entienda mejor tus necesidades desde el principio.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-8">
						<AccordionTrigger className='h-32 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Qué pasa si tengo una emergencia psicológica fuera del horario de las sesiones?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                Si tienes una emergencia psicológica, es importante buscar ayuda inmediata en un centro de salud, llamando a un número de emergencia o contactando a un servicio de crisis local. Nuestra plataforma no está diseñada para manejar emergencias fuera del horario de las sesiones programadas.
							</p>
						</AccordionContent>
					</AccordionItem>

					<AccordionItem value="item-9">
						<AccordionTrigger className='h-24 md:h-[70px]'>
							<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
                                ¿Qué métodos de pago aceptan?
							</p>
						</AccordionTrigger>
						<AccordionContent>
							<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
                                Aceptamos varios métodos de pago, incluyendo tarjetas de crédito y débito, y pagos electrónicos. Todos los pagos se realizan a través de una plataforma segura para garantizar tu privacidad y seguridad.   
							</p>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
			
		</div>
			
	)
}
