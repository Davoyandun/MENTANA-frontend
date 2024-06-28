'use client'

import { Button } from '@/shared/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ReserveButton() {
	const router = useRouter();

	const handleButtonClick = () => {
		router.push('/agendar');
	};

	return (
		<div className="pt-5 flex justify-center lg:justify-start">
			<Button 
				className="bg-teaRose500 w-full hover:bg-teaRose700"
				onClick={handleButtonClick}>
				Agendar cita
			</Button>
		</div>
	);
}
