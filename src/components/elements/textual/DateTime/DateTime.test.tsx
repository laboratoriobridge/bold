import { mount, render } from 'enzyme'
import * as moment from 'moment'
import * as React from 'react'

import { DateTime } from './DateTime'

it('should accept string as value, automatically formatting to default LLL format if none is given', () => {
    expect(render(<DateTime value='2016-08-19T19:08:16' />).text())
        .toEqual(moment('2016-08-19T19:08:16').format('LLL'))
})

it('should accept string as value and a string format', () => {
    expect(render(<DateTime value='2016-08-19T19:08:16' format={'DD/MM/YYYY HH:mm:ss'} />).text())
        .toEqual(moment('2016-08-19T19:08:16').format('DD/MM/YYYY HH:mm:ss'))

    expect(render(<DateTime value='2016-08-19T19:08:16' format={'DD/MM/YYYY HH:mm:ss'} />).text())
        .toEqual('19/08/2016 19:08:16')
})

it('should accept Date as value, automatically formatting to default LLL format if none is given', () => {
    expect(render(<DateTime value={new Date(1471575600000)} />).text())
        .toEqual(moment(new Date(1471575600000)).format('LLL'))
})

it('should accept Date as value, and a string format', () => {
    expect(render(<DateTime value={new Date(1471575600000)} format={'YYYY/MM/DD'} />).text())
        .toEqual(moment(new Date(1471575600000)).format('YYYY/MM/DD'))

    expect(render(<DateTime value={new Date(1471575600000)} format={'YYYY/MM/DD'} />).text())
        .toEqual('2016/08/19')
})

it('should accept moment as value, automatically formatting to default LLL format if none is given', () => {
    expect(render(<DateTime value={moment('2016-08-16')} />).text())
        .toEqual(moment('2016-08-16').format('LLL'))
})

it('should accept moment as value, and a string format', () => {
    expect(render(<DateTime value={moment('2016-08-16')} format={'d/M/YY'} />).text())
        .toEqual(moment('2016-08-16').format('d/M/YY'))

    expect(render(<DateTime value={moment('2016-08-16')} format={'D/M/YY'} />).text())
        .toEqual('16/8/16')
})

it('should accept number (timestamp) as value, automatically formatting to default LLL format if none is given', () => {
    expect(render(<DateTime value={1471575600000} />).text())
        .toEqual(moment(1471575600000).format('LLL'))
})

it('should accept number (timestamp) as value, and a string format', () => {
    expect(render(<DateTime value={1471575600000} format={'YYYY/MM/DD HH:mm:ss'} />).text())
        .toEqual(moment(1471575600000).format('YYYY/MM/DD HH:mm:ss'))

    expect(render(<DateTime value={1471633696000} format={'YYYY/MM/DD HH:mm:ss'} />).text())
        .toEqual('2016/08/19 19:08:16')
})

it('should treat null values', () => {
    expect(render(<DateTime value={null} />).text()).toEqual('')
    expect(render(<DateTime value={''} />).text()).toEqual('')
})
