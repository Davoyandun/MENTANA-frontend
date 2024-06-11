/* eslint-disable no-undef */
module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.(js|jsx)$': 'ts-jest',
	},
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
}