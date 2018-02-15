import * as emotion from 'emotion'
import { configure } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import { createSerializer } from 'jest-emotion'
import * as moment from 'moment'

configure({ adapter: new Adapter() })

expect.addSnapshotSerializer(createSerializer(emotion))

moment.locale('pt-BR')
