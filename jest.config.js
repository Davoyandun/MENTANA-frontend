/* eslint-disable no-undef */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
	},
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}
  