import React from 'react'

import {
	Avatar,
	AvatarFallback,
	AvatarImage,
} from '@/shared/components/ui/avatar'
  
export function AvatarUI() {
	return (
		<div className='flex space-x-2 items-center'>
			<Avatar size='sm'>
				<AvatarImage src="https://media.licdn.com/dms/image/C4D03AQFLeR-emhqGgw/profile-displayphoto-shrink_200_200/0/1637973285292?e=1723075200&v=beta&t=k04pNK03Ors4LddD5NSGdi2LiOhzi_xjGlx4D2zaIRo" alt="@mentana" />
				<AvatarFallback>MN</AvatarFallback>
			</Avatar>
			<Avatar size='lg'>
				<AvatarImage src="https://media.licdn.com/dms/image/C4D03AQFLeR-emhqGgw/profile-displayphoto-shrink_200_200/0/1637973285292?e=1723075200&v=beta&t=k04pNK03Ors4LddD5NSGdi2LiOhzi_xjGlx4D2zaIRo" alt="@mentana" />
				<AvatarFallback>MN</AvatarFallback>
			</Avatar>
		</div>
	)
}
  