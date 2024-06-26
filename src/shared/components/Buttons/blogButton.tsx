'use client'

import { Button } from '@/shared/components/ui/button'
import Link from 'next/link'
import React from 'react'

interface BlogButtonProps {
	id: string;
  }

export default function BlogButton({id}: BlogButtonProps ) {
   
	return (
		<div>
			<Button className="bg-teaRose500 w-full lg:w-1/2 hover:bg-teaRose700">
				<Link className='font-semibold text-base' href={`blog/${id}`}>
                    Leer más
				</Link>
			</Button>
		</div>
	)}
