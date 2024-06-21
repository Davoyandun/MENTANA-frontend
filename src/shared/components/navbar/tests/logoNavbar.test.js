/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

import React from 'react'
import { render } from '@testing-library/react'
import LogoNavbar from '../logoNavbar'

test('renders an Image tag', () => {
	const { getByRole } = render(<LogoNavbar />)
	const imgElement = getByRole('Image')
	expect(imgElement).toBeInTheDocument()
})