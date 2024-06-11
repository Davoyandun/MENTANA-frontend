/* eslint-disable quotes */
/* eslint-disable no-undef */
module.exports = {
	
	testEnvironment: 'node',
	testMatch: ["**/*.test.js"],
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	moduleFileExtensions: ['js', 'jsx'],
	
}
  