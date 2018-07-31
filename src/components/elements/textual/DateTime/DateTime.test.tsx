import { mount, render } from 'enzyme'
import * as moment from 'moment'
import * as React from 'react'

import { DateTime } from './DateTime'

it('should accept string as value, automatically formating as date OR datetime', () => {
    expect(render(<DateTime value='1974-02-27' />).text()).toEqual('27/02/1974')
    expect(render(<DateTime value='2004-02-09T11:57:23.046' />).text()).toEqual('09/02/2004 11:57')
})

it('should accept Date as value', () => {
    expect(render(<DateTime value={new Date(2000, 10, 1)} />).text()).toEqual('01/11/2000 00:00')
})

it('should accept moment as value', () => {
    expect(render(<DateTime value={moment('1993-09-18')} />).text()).toEqual('18/09/1993 00:00')
    expect(render(<DateTime value={moment('2018-02-09T23:57:23.046')} />).text()).toEqual('09/02/2018 23:57')
})

it('should accept number (timestamp) as value', () => {
    expect(render(<DateTime value={1533060604544} />).text()).toEqual('31/07/2018 15:10')
})

it('should accept a render prop receiving the parsed moment as parameter', () => {
    // tslint:disable-next-line:jsx-no-lambda
    expect(render(<DateTime value='2010-09-01' render={mom => mom.quarter()} />).text()).toEqual('3')
})

it('should accept the "mode" prop', () => {
    expect(render(<DateTime value={moment('2018-02-09T23:57:23.046')} mode='date' />).text())
        .toEqual('09/02/2018')
    expect(render(<DateTime value={moment('2018-02-09T23:57:23.046')} mode='time' />).text())
        .toEqual('23:57')
    expect(render(<DateTime value={moment('2018-02-09T23:57:23.046')} mode='dateTime' />).text())
        .toEqual('09/02/2018 23:57')
})

it('should have the complete date/time as title', () => {
    const wrapper = mount(<DateTime value={moment('2018-02-09T14:57:23.046')} />)
    expect(wrapper.find('span').props().title)
        .toEqual('9 de fevereiro de 2018 às 14:57')
})

it('should treat null values', () => {
    expect(render(<DateTime value={null} />).text()).toEqual('')
    expect(render(<DateTime value={''} />).text()).toEqual('')
})
