import Image from 'next/image'

/* eslint-disable react/react-in-jsx-scope */
export default function Footer () {
	return (
		<div className="lg:h-44 bg-chaarcoal300">
			<div className='h-4/6 flex flex-col justify-center'>
				<div className='h-24 flex flex-col items-center justify-center'>
					<div className='flex flex-row h-8 w-8 md:h-10 md:w-10 justify-center'>
						<Image 
							height={45} 
							width={45} 
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAACNUlEQVR4nO2ZzU4bMRDHQ2/AGcJHry2quDcCnoGPS5GoApzLA1TQO+IZEAiuCRJwhOdAtNCX6CEkkBM/NGIqWdYmsR2vQ8T+pWi10cz4t854duyUSoUKFSoBs8ACsAp8C/isqv9srtMJTAEHwF/i6l7jTsWE/QD8AprkqwdgT8brF3gcuCStLmTcUOARoM5gdBk045oSg9SuL/Ak0Bgw9IPX4tTVnLdutPz9AP51sNn3gY5d1rL0xRhvJ9MC7lyBPxImKYk1oAosAp/0KveyoFuW/YQx5nqXuDMu0BVP2GfgsFf+AdPAkeEnDzgBzAO3XeJ/dYFe9gB+AjY6xBnr8H0VaHuMsewCveYxw98t3xXg2kiFlt6vZIC7ai0m9KHhMwqc9bCvi53hc5waumnmsAPwf9UNn5mMxZkrdM1KCUJyFLeHjQa9adhLzvroyvDdSgm9YNi7/MSmmoav1PFk0J/Vdowwjar/XErooZzpzUg5vZ0SeiirR0t6CcPHdYdTs3b0Seu06Mh6I/YCr1lvxFPHcaJCi6oZzda1sXOX65Xd9Djmshe0T5fXtsEdurytPLo8334abX66Nuu85vBJQGynflqCh6il1UBmckl3LkuaCmfAY2Dc3jsXBZejqreg307ACXfjLtofxnOPsjO0gsth4CD10wv4DZzlXQSfnmrrKQFS6rxTjfed8V3NsTzVkJSQ8foCtuDLsprlqCoy7B+NOxkNtstpUaXP/1wqZqdYqNB71gu7XYNwbTyDSwAAAABJRU5ErkJggg=="
							alt='Instagram'
							objectFit='contain'>
						</Image>
						<Image 
							height={15} 
							width={45} 
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAYAAAA6GuKaAAAACXBIWXMAAAsTAAALEwEAmpwYAAABY0lEQVR4nO2YPUsDQRBAT/wD+jMsTGJiaWERsLAQtMgHKKlSW1uopWBnI2JvJVpZWcRWSIxW2ltLmtj65OCK5cieuzmT2YN5MN3uzGOZ2z0mihRFCR9gAagAbaA7w2gD5f8QXgfemC9DoJZH+BsZxkB1mpZ4RZYXX+k1wqDsI90kDBo+0p0ZCIyAS2Af2ALqwB7QAp4sezqS0rfAUka9emjSPWDxj3qbIUn/ACsO9YKSfnastxOS9IUl/zJwAlwB18BnSNJHlvwPjvtFpA8t+b+KKD1S6RwnHV9vN8CZERvRBIBTY8058C7VHn3nAimAbSnpnnOBFMBBEaWPpaQ/ckjfSUmTfFCPRuxa8t8ba/oZ+fSedkUfl0z0GZ8A+u9R8PZoBiLd8JGuBCJd8p3lDYWlB87CRuJaMr2UkB7H80Rv6SR5NZ5ezll6MLVwqkgpmbn5TvdXM26nbipaXj2sKEokyi94BEtcuIW7zgAAAABJRU5ErkJggg==" 
							alt='Facebook'
							objectFit='contain'>
						</Image>
						<Image 
							height={45} 
							width={50} 
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABVklEQVR4nO2ZUUoDMRBA8297hao3sD8q1r92PaCK1auoh9mqF7AIUlh4MhBBQ9xmY5vO0nmwXxkm8zqz2zbrnGEYhmqAI+ABeAUatk/j97qXvf9b/BWwZHcsgSq3+OMdF//NO3CYIyBjo4V5joDMoRYWOQIlbthUmhwBVbgNC9TAFDgAZtLivglMg9iqbwKDIHbYN4FZ3ztQ+6IH/tu6d/dAcZwJ/OYi6NZkzdoncA2c+kevXGfADbCidAfa4v9YG7fscwK8qRZI2Gu8rhOqBQTgVq2A/J4HnoEP4AkYRWLONQtI8T95jMQMNQuE873axJ4lBTrliNFerQk464AQnR0boQguQspaao7U+Fa6JktZUyMATILYy8S11BxbFyiO28eDrRf0UOcIyPm8Fu5yX2xoOV4fdRbwEpVPsMviq6zigz8jc3/2U+oV00LGJvuTNwzDcKX4Au0VUB6HEcEJAAAAAElFTkSuQmCC"
							alt='Linkedin'
							objectFit='contain'>
						</Image>					
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

