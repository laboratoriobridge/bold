import { createSerializer, matchers } from 'jest-emotion'
import { cleanup } from 'react-testing-library'

import { createTheme } from '../styles/theme/createTheme'

expect.extend(matchers)

expect.addSnapshotSerializer(createSerializer())

// Polyfill for test context
// @ts-ignore
// tslint:disable-next-line
global.Intl = require('intl')

afterEach(cleanup)

jest.mock('../styles/hooks/useTheme', () => {
  return {
    useTheme: () => createTheme(),
  }
})
