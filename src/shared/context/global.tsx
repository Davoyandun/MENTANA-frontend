import React from 'react'
import { BlogProvider } from './blog'
import { AppWrapper } from '.'

interface IGlobalProviderProps {
    children: React.ReactNode
}
 
const GlobalProvider = ({ children }: IGlobalProviderProps) => {
	return (
		<AppWrapper>
			<BlogProvider>
				{children}
			</BlogProvider>
		</AppWrapper>
	)
}
 

export default GlobalProvider