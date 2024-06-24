import Image from 'next/image'
import InstagramIcon from '../../../../public/Icons/Footer/InstagramIcon'
import FacebookIcon from '../../../../public/Icons/Footer/facebookIcon'
import LinkedinIcon from '../../../../public/Icons/Footer/linkedinIcon'
import Link from 'next/link'

/* eslint-disable react/react-in-jsx-scope */
export default function Footer () {
	return (
		<div className="lg:h-44 bg-chaarcoal300">
			<div className='h-4/6 flex flex-col justify-center'>
				<div className='h-24 flex flex-col items-center justify-center'>
					<div className='flex flex-row h-10 w-28 md:h-10 md:w-25 justify-center'>
						<Link href=''>
							<Image 
								className='h-10'
								height={45} 
								width={45} 
								src={InstagramIcon()}
								alt='Instagram'
								objectFit='contain'>
							</Image>
						</Link>
						<Link href=''>
							<Image 
								className='h-10'

								height={15} 
								width={45} 
								src={FacebookIcon()}
								alt='Facebook'
								objectFit='contain'>
							</Image>
						</Link>
						<Link href=''>
							<Image 
								className='h-10'
								height={45} 
								width={50} 
								src={LinkedinIcon()}
								alt='Linkedin'
								objectFit='contain'>
							</Image>	
						</Link>
										
					</div>
					<p className='text-white font-medium text-base md:text-lg'>mentanaInfo@gmail.com</p>
                    
				</div>
				<div className='hidden w-full md:flex justify-center'>
					<hr className='w-1/2 bg-white h-[0.125rem]'/>
				</div>
			</div>
			<div className='hidden h-2/6 md:flex justify-center items-center'>
				<p className='text-white font-medium text-base md:text-lg text-center'>© 2024 Mentana - Todos los derechos reservados</p>
			</div>
			<div className='h-2/6 flex md:hidden flex-col justify-center items-center pb-2'>
				<p className='text-white font-medium text-base md:text-lg text-center'>© 2024 Mentana</p>
				<p className='text-white font-medium text-base md:text-lg text-center'>Todos los derechos reservados</p>
			</div>
	
		</div>
	)
}

