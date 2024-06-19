'use client'

import { Button } from '@/shared/components/ui/button'
import React from 'react'
import Link from 'next/link'



export default function LoginButton() {


	return (
		<div>
			<Link href="/login">
				<Button className="bg-chaarcoal300 hover:bg-chaarcoal700">
                Iniciar sesión
				</Button>
			</Link>
		</div>
	)}
