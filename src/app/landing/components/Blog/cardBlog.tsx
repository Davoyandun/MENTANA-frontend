'use react' 

import BlogButton from '@/shared/components/Buttons/blogButton'
import Image from 'next/image'
import React from 'react'

interface CardProps {
  image: JSX.Element | string; // Para que acepte tantp imagenes como svg
  title: string;
  description: string;
  creationDate: string | number ;
  author: string;
}

export default function CardBlog({ image, title, description, creationDate, author }: CardProps) {
	return (
		<div className="flex flex-col items-center text-center lg:items-start lg:text-start lg:w-[30%]">
			<p className="text-chaarcoal300 font-bold w-[90%] lg:w-full mb-3 h-[60px] text-[22px] lg:text-2xl mt-3">{title}</p>
			<div className='w-full flex justify-center'>
				{typeof image === 'string' ? (
					<Image className='w-[90%] lg:w-full h-[300px] object-cover' height={300} width={300} src={image} alt={title} />
				) : (
					image
				)}
			</div>
			<p className="text-slateGrayBase font-semibold text-base mt-3 w-[90%] lg:w-full">{description}</p>
			<div className='flex flex-row w-[90%] lg:w-full items-center mt-5'>
				<div className='w-[30%] lg:w-1/2 text-start'>
					<BlogButton/>
				</div>
				<div className='flex flex-col w-[70%] lg:w-1/2 self-end items-end'>
					<p className='flex mb-1 w-1/2 text-slateGrayBase justify-end font-semibold text-base italic'>{creationDate}</p>
					<p className='flex mt-0 w-1/2 justify-end text-slateGrayBase font-semibold text-base italic'>{author}</p>
				</div>
			</div>
			
			
            
		</div>
	)
} 
