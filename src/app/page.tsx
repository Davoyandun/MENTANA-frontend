import React from 'react'
import Navbar from '@/shared/components/navbar/navbar'
import Banner from '@/shared/components/landing/banner'

export default function Home() {
	return (
		<>
		<Navbar/>

		<main className="flex bg-whiteSmokeBase min-h-screen mt-8 lg:mt-0 flex-col items-center justify-center">
			<Banner/>
		</main>
		</>
	)
}
