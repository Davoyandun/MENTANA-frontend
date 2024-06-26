/* eslint-disable react/react-in-jsx-scope */

import Image from 'next/image'

interface AboutUsCardProps {
    image: JSX.Element | string; 
    title: string;
    description: string;
  }
  

export default function AboutUsCardMobile({ image, title, description }: AboutUsCardProps) {
	return (
		<div className="cuadrado">
			<div className='flex flex-col gap-2'>
				<div className='self-center'>
					{typeof image === 'string' ? (
						<Image src={image} alt={title} className='h-[45px] w-[45px] self-center' width={45} height={45}/>
					) : (
						image
					)}
				</div>
				<p className="text-chaarcoal700 font-bold text-xl self-center mt-2">
					{title}
				</p>
			</div>
			<p className='text-slateGrayBase font-semibold text-lg mt-[10px] text-center'>
				{description}
			</p>
		</div>
	)
}
