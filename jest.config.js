module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  coverageDirectory: './jestOutput',
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme'],
  verbose: true,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/jestOutput/',
    '.babelrc',
    '.eslintrc.js',
    '.gitignore',
    '.nvmrc',
    'jest.config.js',
    'package.json',
    'package-lock.json',
    'README.md',
    'STYLE-GUIDE.md',
    'webpack.config.js'
  ]
};
