/* eslint-disable @typescript-eslint/no-var-requires */
const nextJest = require('next/jest')
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('./tsconfig.json')

const createJestConfig = nextJest({
  dir: './'
})

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.next/',
    'src/lib/firebase/clientApp.ts'
  ],
  collectCoverage: false,
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: './report',
        filename: 'index.html',
        openReport: false
      }
    ]
  ],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!./pages/**/*.tsx',
    '!src/lib/theme.tsx',
    '!src/lib/apolloClient.tsx'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
}

module.exports = createJestConfig(customJestConfig)
