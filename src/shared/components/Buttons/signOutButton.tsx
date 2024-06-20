'use client'

import { Button } from '@/shared/components/ui/button'
import React from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../../config/firebase-config'
import { useAppContext } from '@/shared/context'



export default function SignOutButton() {
	const {setUserState} = useAppContext()

	const signOutHandler = async() => {
		localStorage.removeItem('token')
		signOut(auth)
		setUserState({
			provider: null,
			userName: null,
			email: null,
			photoUrl: null,
			token: null
		})
	}

	return (
		<div>	
			<Button onClick={signOutHandler} className="bg-chaarcoal300 hover:bg-chaarcoal700">
                Sign Out
			</Button>
		</div>
	)}
