module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.{js,jsx}', '!**/node_modules/**', '!**/vendor/**'],
  coverageDirectory: './jestOutput',
  setupTestFrameworkScriptFile: './node_modules/jest-enzyme/lib/index.js',
  unmockedModulePathPatterns: ['react', 'enzyme', 'jest-enzyme'],
  verbose: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/spec/',
    '/jestOutput/',
    '/database/',
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
