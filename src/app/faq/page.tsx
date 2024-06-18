/* eslint-disable react/react-in-jsx-scope */

import FaqContent from './components/faqContent'
import ComeBack from '@/shared/components/ComeBack/comeBack'


export default function Faq() {
	return (
		<div className='bg-gradient-to-b from-whiteSmokeBase to-chaarcoalLight min-h-screen flex flex-col justify-center'>
			<div className='pt-36 md:pt-52 pb-40 w-[90%] md:w-[95%] flex flex-col self-center items-center'>
				<div className='relative bottom-6 md:bottom-8 self-start'>
					<ComeBack/>					
				</div>
				
				<FaqContent/>
			</div>
		</div>
			
	)
}
