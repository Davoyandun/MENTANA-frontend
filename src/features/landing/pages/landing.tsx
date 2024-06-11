/* eslint-disable react/react-in-jsx-scope */
'use client'
import React from 'react'
import Banner from '@/features/landing/components/Banner/banner'
import StepToUse from '@/features/landing/components/StepToUse/stepToUse'
import Benefits from '@/features/landing/components/Benefits/Benefits'

export default function Landing() {
	return (
		<div>
			<div className="bannerWrapper flex flex-row md:mt-24 mt-4  justify-center mb-28 md:mb-0">
				<Banner />
			</div>
			<div className="w-full min-h-screen">
				<StepToUse />
			</div>
			<div className="w-full min-h-screen">
				<Benefits />
			</div>
		</div>
	)
}
