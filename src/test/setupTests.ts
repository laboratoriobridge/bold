import * as emotion from 'emotion'
import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { createMatchers, createSerializer } from 'jest-emotion'
import { cleanup } from 'react-testing-library'

import { createTheme } from '../styles/theme/createTheme'

configure({ adapter: new Adapter() })

expect.extend(createMatchers(emotion))

expect.addSnapshotSerializer(createSerializer(emotion))

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
