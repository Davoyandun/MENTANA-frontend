/* eslint-disable react/react-in-jsx-scope */
import Banner from '@/features/landing/components/Banner/banner'
import StepToUse from '@/features/landing/components/StepToUse/stepToUse'
import Blog from '@/features/landing/components/Blog/Blog'
import AboutUs from '@/features/landing/components/AboutUs/aboutUs'

export default function Landing() {
	return (
		<div>
			<div className="bannerWrapper flex flex-row md:mt-24 mt-4 justify-center mb-28 md:mb-0">
				<Banner />
			</div>
			<div className='flex flex-col md:mt-28 lg:mt-40'>
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
