'use client'
import { useContext } from 'react'
import { BlogContext } from '../context/blog'

export const useBlogContext = () => {
	const context = useContext(BlogContext)

	if(!context) throw new Error('useBlogContext must be used within a provider')

	return context
}