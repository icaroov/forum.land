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
    '!src/pages/**/*.tsx',
    '!src/constants/**/*.ts',
    '!src/config/**/*.ts',
    '!src/styles/**/*.ts',
    '!src/lib/firebase/clientApp.ts',
    '!src/config/test/**/*.ts(x)?',
    '!src/atoms/**/*.ts(x)?'
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
}

module.exports = createJestConfig(customJestConfig)
