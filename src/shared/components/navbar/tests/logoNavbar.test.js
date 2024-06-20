/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const React = require('react')
const { render } = require('@testing-library/react')
import LogoNavbar from '../logoNavbar'
// const LogoNavbar = require('../logoNavbar')

test('renders an Image tag', () => {
	const { getByRole } = render(<LogoNavbar />)
	const imgElement = getByRole('Image')
	expect(imgElement).toBeInTheDocument()
})