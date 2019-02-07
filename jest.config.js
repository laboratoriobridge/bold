module.exports = {
    testEnvironment: 'jsdom',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/test/setupTests.ts'],
    transform: {
        '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
        '.(ts|tsx)': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleDirectories: [
        'node_modules',
        '<rootDir>/src',
    ],
    moduleNameMapper: {
        '\\.(svg|woff2|ttf)$': '<rootDir>/src/test/__mocks__/fileMock.ts',
        '\\.(css)$': '<rootDir>/src/test/__mocks__/styleMock.ts',
    },
    coverageDirectory: './coverage/',
    collectCoverage: true,
    snapshotSerializers: [
        '<rootDir>/node_modules/enzyme-to-json/serializer',
    ],
}
