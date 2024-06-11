import React from 'react'
import Navbar from '@/shared/components/navbar/navbar'
import Landing from '@/features/landing/pages/landing'

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="font-sans flex bg-whiteSmokeBase min-h-screen flex-col items-center justify-start lg:mt-[100px] mt-[80px] overflow-x-hidden">
				<Landing/>
			</main>
		</>
	)
}
