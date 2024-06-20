/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image'

interface AboutUsCardProps {
    image: JSX.Element | string; 
    title: string;
    description: string;
  }
  

export default function AboutUsCardDesktop({ image, title, description }: AboutUsCardProps) {
	return (
		<div className="cuadrado w-1/2">
			<div className="flex flex-row gap-2">
				<div>
					{typeof image === 'string' ? (
						<Image src={image} alt={title} />
					) : (
						image
					)}
				</div>
				<p className="text-chaarcoal700 font-bold text-xl self-center mt-2">
					{title}
				</p>
			</div>
			<p className='text-slateGrayBase font-semibold text-lg mt-[10px] ml-2'>
				{description}
			</p>
		</div>
	)
}
