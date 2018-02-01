import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Paginator } from './Paginator'

it('deve renderizar corretamente', () => {
    expect(render(withTheme(<Paginator page={5} total={10} />))).toMatchSnapshot()
})

it('deve conter os números corretos de acordo com a configuração', () => {
    expect(render(withTheme(<Paginator page={4} total={10} />)).text()).toEqual('«<…2345678…>»')
    expect(render(withTheme(<Paginator page={0} total={10} />)).text()).toEqual('1234…>»')
    expect(render(withTheme(<Paginator page={9} total={10} />)).text()).toEqual('«<…78910')
    expect(render(withTheme(<Paginator page={4} total={10} range={1} />)).text()).toEqual('«<…456…>»')
    expect(render(withTheme(<Paginator page={4} total={10} range={10} />)).text()).toEqual('<12345678910>')
})

// TODO: teste de onChange
