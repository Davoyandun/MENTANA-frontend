import React from 'react'
import ReserveButton from '../../../shared/components/Buttons/reserveButton'

export default function Banner() {
	return (
		<>
			<div className="flex flex-col w-[90%] h-full pt-5 lg:pt-0 lg:flex-row bg-white lg:h-[500px] lg:w-11/12 rounded-xl">
				<div className="lg:w-2/4 h-full flex flex-col justify-center lg:pl-20 self-center">
					<div>
						<p className="text-3xl text-center lg:text-start lg:text-5xl  font-bold text-chaarcoalBase">
              Mejora tu salud mental con Mentana
						</p>
						<div className="lg:hidden h-full flex items-center">
							<img src="Images/bannerImg.jpeg" alt="" />
						</div>
						<p className="text-slateGray700 pt-4 text-center lg:text-start">
              Encuentra el apoyo que necesitas para tu bienestar emocional.
						</p>
					</div>
					<div className="mb-6 lg:mb-0">
						<ReserveButton />
					</div>
				</div>
				<div className="hidden lg:flex w-2/4 h-full items-center">
					<img src="Images/bannerImg.jpeg" alt="" />
				</div>
			</div>
		</>
	)
}
