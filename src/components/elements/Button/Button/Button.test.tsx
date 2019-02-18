import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'
import { Icon } from '../../Icon'

import { Button } from './Button'

describe('Button', () => {
    it('should render correctly with label', () => {
        const wrapper = render(withTheme(<Button>Button</Button>))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly with icon', () => {
        const wrapper = render(withTheme(<Button><Icon icon='adjust' /></Button>))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render the default skin', () => {
        expect(render(withTheme(<Button skin='default' kind='normal'>Button</Button>))).toMatchSnapshot()
        expect(render(withTheme(<Button skin='default' kind='primary'>Button</Button>))).toMatchSnapshot()
        expect(render(withTheme(<Button skin='default' kind='danger'>Button</Button>))).toMatchSnapshot()
    })

    it('should render the ghost skin', () => {
        expect(render(withTheme(<Button skin='ghost' kind='normal'>Button</Button>))).toMatchSnapshot()
        expect(render(withTheme(<Button skin='ghost' kind='primary'>Button</Button>))).toMatchSnapshot()
        expect(render(withTheme(<Button skin='ghost' kind='danger'>Button</Button>))).toMatchSnapshot()
    })

    it('should render the outline skin', () => {
        expect(render(withTheme(<Button skin='outline' kind='normal'>Button</Button>))).toMatchSnapshot()
        expect(render(withTheme(<Button skin='outline' kind='primary'>Button</Button>))).toMatchSnapshot()
        expect(render(withTheme(<Button skin='outline' kind='danger'>Button</Button>))).toMatchSnapshot()
    })

    it('should have a "loading" animation when onClick return is a Promise', () => {
        const delayedFunction = () => {
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 10)
            })
        }

        const wrapper = mount(withTheme(<Button onClick={delayedFunction}>Button</Button>))
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()

        wrapper.simulate('click')
        expect(wrapper.find('button').prop('data-loading')).toEqual(true)
    })

    it('should NOT have animation when onClick return is not a Promise', () => {
        const func = () => undefined
        const wrapper = mount(withTheme(<Button onClick={func}>Button</Button>))
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()

        wrapper.simulate('click')
        expect(wrapper.find('button').prop('data-loading')).toBeUndefined()
    })

    it('should accept the loading prop', () => {
        const wrapper = render(withTheme(<Button loading={true}>Button</Button>))
        expect(wrapper).toMatchSnapshot()
    })
})
