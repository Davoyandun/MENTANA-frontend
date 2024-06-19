/* eslint-disable react/react-in-jsx-scope */
'use client'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/shared/components/ui/accordion'
import { faqs } from './Array'

export default function FaqContent() {
	return (
		<div className="bg-white self-center rounded-xl w-full flex flex-col justify-center py-12 border-t-8 border-teaRose500">
			<p className='w-[90%] self-center h-16 md:h-24 text-[22px] text-center md:text-start md:text-3xl font-bold text-chaarcoal300'>
        Preguntas Frecuentes
			</p>
			<div className='w-full flex justify-center'>
				<Accordion type="single" collapsible className='w-[92%] md:w-[90%] gap-4 md:gap-5 flex flex-col'>
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index + 1}`} className='pb-[10px] md:pb-0'>
							<AccordionTrigger className='h-24 md:h-[70px]'>
								<p className='text-lg md:text-2xl text-chaarcoal300 font-bold md:text-start'>
									{faq.question}
								</p>
							</AccordionTrigger>
							<AccordionContent>
								<p className='text-lg md:text-xl pt-4 text-center md:text-start md:pt-0 text-slateGrayBase font-bold'>
									{faq.answer}
								</p>
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</div>
	)
}
