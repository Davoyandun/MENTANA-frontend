/* eslint-disable no-console */
'use client'
import React from'react'
import LoginWithGoogleButton from '@/shared/components/Buttons/loginWithGoogleButton'


export default function Login() {
	return(
		<div className="pt-20 md:pt-48 mt-4 flex flex-col items-center justify-center">
			<LoginWithGoogleButton/>
		</div>
	)
}
