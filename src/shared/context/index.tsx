/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import React, { useState } from 'react'
import { createContext, useContext} from 'react'

const AppContext = createContext<any>(undefined)

export function AppWrapper({children}: {children: React.ReactNode}) {

	const [userState, setUserState] = useState({ 
		provider: null,
		userName: null,
		email: null,
		photoUrl: null,
		token: null
	})

	return <AppContext.Provider value={{userState, setUserState}}> 
		{children}
	</AppContext.Provider>
}

export const useAppContext = () => {
	return useContext(AppContext)
}