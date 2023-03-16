// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  collectCoverage: true,
  coverageDirectory: '../../reports/jest/web',
  coverageReporters: ['lcov'],
  testEnvironment: 'jest-environment-jsdom',
  modulePathIgnorePatterns: ['cypress'],
  testRegex: '(/__tests__/.*|(\\\\.|/)(test))\\\\.[jt]sx?$',
  moduleNameMapper: {
    '~/*': '<rootDir>src/$1',
  },
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
