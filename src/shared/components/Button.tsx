import React from 'react'
import { Button } from '@/shared/components/ui/button'

export function ButtonUI() {
	return (
		<div className='flex space-x-2 items-center justify-center'>
			<Button variant={'destructive'} size={'lg'}>Button</Button>
			<Button variant={'ghost'}>Button</Button>
			<Button variant={'link'}>Button</Button>
			<Button variant={'outline'}>Button</Button>
			<Button variant={'secondary'}>Button</Button>
			<Button size={'sm'} variant={'default'}>Button</Button>
		</div>
	)
}
