import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Flow } from './Flow'

describe('Flow', () => {
    it('deve envelopar cada filho em um elemento que crie espaçamento horizontal', () => {
        const wrapper = render(withTheme(
            <Flow>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('deve suportar o parâmetro vSpacing', () => {
        const wrapper = render(withTheme(
            <Flow vSpacing={2.5}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('deve suportar o parâmetro hSpacing', () => {
        const wrapper = render(withTheme(
            <Flow hSpacing={0.5}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('deve suportar o parâmetro direction', () => {
        const wrapper = render(withTheme(
            <Flow direction='vertical'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
})
