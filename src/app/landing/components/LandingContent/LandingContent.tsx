'use client'
import React from 'react'
import AboutUs from '../AboutUs/aboutUs'
import Banner from '../Banner/banner'
import Blog from '../Blog/Blog'
import StepToUse from '../StepToUse/stepToUse'

export function LandingContent() {
	return (
		<div className="w-full">
			<div className="bannerWrapper bg-whiteSmokeBase  flex flex-row  md:pt-28 mt-4 justify-center">
				<Banner />
			</div>
			<div className="flex flex-col ">
				<div className="w-full h-full">
					<StepToUse />
				</div>
				<div className="w-full h-full">
					<AboutUs />
				</div>
				<div className="w-full h-full">
					<Blog />
				</div>
			</div>
		</div>
	)
}
