
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../shared/styles/globals.css'
import '../config/firebase-config'
import { AppWrapper } from '@/shared/context'
import Navbar from '@/shared/components/navbar/navbar'
import Footer from '@/shared/components/Footer/footer'




const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'MENTANA',
	description: 'Generated by create next app',
}


export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	
	return (
		<AppWrapper>
			<html lang="en">
			
				<body className={inter.className}>
					<Navbar/>
					{children}
					<Footer/>
				</body>
			
			</html>
		</AppWrapper>

	)
}
