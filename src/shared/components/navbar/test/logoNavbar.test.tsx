import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import LogoNavbar from '../logoNavbar'


test('renders an img tag', () => {
	const { getByRole } = render(<LogoNavbar />)
	const imgElement = getByRole('img')
	expect(imgElement).toBeInTheDocument()
})
