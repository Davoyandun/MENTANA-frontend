/* eslint-disable no-console */
'use client'

import { Button } from '@/shared/components/ui/button'
import React, { useEffect, useState } from 'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/config/firebase-config'
import { useRouter } from 'next/navigation' 
import { useAppContext } from '@/shared/context'




export default function LoginWithGoogleButton() {
	const router = useRouter()
	const {userState, setUserState} = useAppContext()
	const [tokenState, setTokenState] = useState('')

	useEffect(() => {
		const tokenInLocalStorage = localStorage.getItem('token')
		if (tokenInLocalStorage || userState.token) {
			router.push('/') 
		}
	}, [tokenState, userState.token])
    
	const loginWithGoogleHandler = () => {
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((result) => {
				result.user.getIdToken(true).then((token) => {
					localStorage.setItem('token', token)
					setTokenState(token)
					setUserState({
						provider: result.providerId,
						userName: result.user.displayName,
						email: result.user.email,
						photoUrl: result.user.photoURL,
						token: token,
						refreshToken: result.user.refreshToken
					})
				})
			})
			.catch((error) => {
				console.log('error', error)
			})
	}

	return (
		<div>
		
			<Button onClick={loginWithGoogleHandler} className="bg-chaarcoal300 hover:bg-chaarcoal700">
                Iniciar sesión con Google
			</Button>

		</div>
	)}
