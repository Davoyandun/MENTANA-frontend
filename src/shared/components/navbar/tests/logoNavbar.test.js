/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */

const React = require('react')
const { render } = require('@testing-library/react')
import LogoNavbar from '../logoNavbar'
// const LogoNavbar = require('../logoNavbar')

test('renders an img tag', () => {
	const { getByRole } = render(<LogoNavbar />)
	const imgElement = getByRole('img')
	expect(imgElement).toBeInTheDocument()
})