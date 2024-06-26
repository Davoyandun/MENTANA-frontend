/* eslint-disable react/react-in-jsx-scope */
'use client'
import { useRouter } from 'next/navigation'

export default function ComeBack() {
	const router = useRouter()

	const goBack = () => {
		router.back() 
	}

	return (
		<button className='flex items-center' onClick={goBack}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" color='#577C9E' viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 mr-1">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
			</svg>
			<p className='text-chaarcoal100 font-semibold text-lg underline'>
                Volver
			</p>
		</button>
	)
}
