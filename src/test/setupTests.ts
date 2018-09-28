import * as emotion from 'emotion'
import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'jest-emotion'

configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(createSerializer(emotion))

// Polyfill for test context
// @ts-ignore
// tslint:disable-next-line
global.Intl = require('intl')
