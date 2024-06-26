/* eslint-disable no-console */
'use client'
import React from 'react'
import CardBlog from '../landing/components/Blog/cardBlog'
import { useBlogContext } from '@/shared/hooks/useBlogContext'

export default function BlogPage() {
	const {blogs, error, loading} = useBlogContext()

	function formatDate(timestamp: string) {
		const date = new Date(timestamp)
		const day = String(date.getDate()).padStart(2, '0')
		const month = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()
	
		return `${day}/${month}/${year}`
	}
 
	return (
		<div className="bg-gradient-to-b from-whiteSmokeBase to-chaarcoalLight h-full w-full flex items-center justify-center lg:pb-56 pb-28 pt-20">
			{loading || error ? (<p>Fetch Error</p>) : (
				<div className="bg-white w-[95%] lg:mb-5 justify-evenly gap-12 rounded-xl flex flex-col pb-10 border-t-8 lg:border-t-0 lg:border-l-8 border-teaRose500">
					<div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 justify-center p-10'>
						{blogs.map((blog) => (
							<CardBlog 
								key={blog.id}
								title={blog.title}
								image_url={blog.image_url}
								description={blog.description}
								creationDate={formatDate(blog.createdAt)}
								author={blog.author}
								id={blog.id}
							/>                    
						))}
					</div>
				</div>
			)}
		</div>
	)
}
