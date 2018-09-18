import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { Spacing } from '../Spacing/Spacing'

import { Flow } from './Flow'

describe('Flow', () => {
    it('should wrap each child on an element with horizontal spacing', () => {
        const wrapper = render(withTheme(
            <Flow>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept vSpacing prop', () => {
        const wrapper = render(withTheme(
            <Flow vSpacing={2.5}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept hSpacing prop', () => {
        const wrapper = render(withTheme(
            <Flow hSpacing={0.5}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept direction prop', () => {
        const wrapper = render(withTheme(
            <Flow direction='vertical'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept justifyContent prop', () => {
        const wrapper = render(withTheme(
            <Flow justifyContent='flex-end'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept alignItems prop', () => {
        const wrapper = render(withTheme(
            <Flow alignItems='center'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
    it('should not wrap empty elements', () => {
        expect(mount(withTheme(
            <Flow>
                <div>1</div>
                {false && <div>2</div>}
                <div>3</div>
            </Flow>
        )).find(Spacing).length).toEqual(2)
    })
    it('should accept the style prop', () => {
        const wrapper = render(withTheme(
            <Flow style={{ padding: '10rem' }}>
                <div>1</div>
                <div>2</div>
            </Flow>
        ))
        expect(wrapper).toMatchSnapshot()
    })
})
