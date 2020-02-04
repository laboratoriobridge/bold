import { cleanup } from '@testing-library/react'
import { createSerializer, matchers } from 'jest-emotion'

import { createTheme } from '../styles/theme/createTheme'

expect.extend(matchers)

expect.addSnapshotSerializer(createSerializer())

// Polyfill for test context
// @ts-ignore
global.Intl = require('intl')

afterEach(cleanup)

jest.mock('../styles/hooks/useTheme', () => {
  return {
    useTheme: () => createTheme(),
  }
})
