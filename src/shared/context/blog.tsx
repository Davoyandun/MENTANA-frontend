'use client'
import React from 'react'
import { createContext, useEffect, useState} from 'react'
import { getBlogs } from '@/service/api/Blog'
import { IBlog } from '../interfaces/blog'

interface IBlogState {
    blogs: IBlog[],
    loading: boolean,
    error: string,
}

interface IBlogProviderProps {
	children: React.ReactNode
}

const BlogContext = createContext<IBlogState>({
	blogs: [],
	loading: false,
	error: '',
})

const BlogProvider = ({children}: IBlogProviderProps) => {
	const [blogs, setBlogs] = useState<IBlog[]>([])
	const [loading, setLoading] = useState<IBlogState['loading']>(false)
	const [error, setError] = useState<IBlogState['error']>('')

	const fetchBlog = async () => {
		setLoading(true)

		try {
			const data = await getBlogs()
			setBlogs(data)
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		} catch (error: any) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchBlog()
	}, [])

	const contextValue: IBlogState = {
		blogs,
		loading,
		error,
	}

	return (
		<BlogContext.Provider value={contextValue}>
			{children}
		</BlogContext.Provider>
	)
}

export {BlogContext, BlogProvider}