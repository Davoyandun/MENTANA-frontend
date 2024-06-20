'use client'
import React from 'react'
import { LandingContent } from './landing/components/LandingContent/LandingContent'

export default function Home() {
	return (
		<>
			<main className="font-sans flex bg-whiteSmokeBase min-h-screen flex-col items-center justify-start  overflow-x-hidden">
				<LandingContent/>
			</main>
		</>
	)
}