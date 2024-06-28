/* eslint-disable no-console */
'use client'
import React, { useEffect, useState } from'react'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/config/firebase-config'
import { useRouter } from 'next/navigation' 
import { useAppContext } from '@/shared/context'

type LoginButtonProps = {
	redirectTo?: string;
}

export default function useLoginButton({ redirectTo = '/' }: LoginButtonProps) {
	const router = useRouter()
	const {userState, setUserState} = useAppContext()
	const [tokenState, setTokenState] = useState('')

	useEffect(() => {
		const tokenInLocalStorage = localStorage.getItem('token')
		if (tokenInLocalStorage || userState.token) {
			router.push(redirectTo) 
		}
	}, [tokenState, userState.token])


	const loginWithGoogleHandler = () => {
		signInWithPopup(auth, new GoogleAuthProvider())
			.then((result) => {
				result.user.getIdToken().then((token) => {
					localStorage.setItem('token', token)
					setTokenState(token)
					setUserState({
						provider: result.providerId,
						userName: result.user.displayName,
						email: result.user.email,
						photoUrl: result.user.photoURL,
						token: token
					})
				})
			})
			.catch((error) => {
				console.log('error', error)
			})
	}

	

	return ({
        tokenState,
		loginWithGoogleLabel: 'Continuar con Google',
		loginWithGoogleHandler,
    })
}
