import { mount } from 'enzyme'
import * as React from 'react'
import { StaticRouter } from 'react-router'

import { ModalAutoMountingTarget } from './ModalAutoMountingTarget'

describe('when mounted', () => {
    it('should set the static append', () => {
        expect(ModalAutoMountingTarget.append).toBeNull()
        const wrapper = mount(<ModalAutoMountingTarget />)
        const instance = wrapper.instance() as ModalAutoMountingTarget
        expect(ModalAutoMountingTarget.append).toEqual(instance.append)
        wrapper.unmount()
    })
    it(`should throw an error if multiple ${ModalAutoMountingTarget.name} are mounted`, () => {
        const wrapper = mount(<ModalAutoMountingTarget />)
        const instance = wrapper.instance() as ModalAutoMountingTarget
        expect(() => instance.componentDidMount()).toThrowErrorMatchingSnapshot()
        wrapper.unmount()
    })
})

describe('when unmounted', () => {
    it('should unset the static append', () => {
        const wrapper = mount(<ModalAutoMountingTarget />)
        wrapper.unmount()
        expect(ModalAutoMountingTarget.append).toBeNull()
    })
})

describe('append', () => {
    it('should include an item to the state', () => {
        const wrapper = mount(<ModalAutoMountingTarget />)
        const instance = wrapper.instance() as ModalAutoMountingTarget

        expect(instance.state.components).toHaveLength(0)
        const key = instance.append((props) => <span>1</span>)
        expect(instance.state.components).toHaveLength(1)
        expect(instance.state.components[0]).toEqual({
            component: <span>1</span>, key,
        })

        wrapper.unmount()
    })
    it('should provide a render prop', () => {
        const wrapper = mount(<ModalAutoMountingTarget />)
        const instance = wrapper.instance() as ModalAutoMountingTarget
        const renderFunction = jest.fn()
        instance.append(renderFunction)
        expect(renderFunction).toHaveBeenCalledWith({
            dispose: expect.any(Function),
        })
        wrapper.unmount()
    })
})

describe('render', () => {
    it('should render all components from state', () => {
        const wrapper = mount(<ModalAutoMountingTarget />)
        wrapper.setState({
            components: [
                { component: <span>1</span>, key: '1' },
                { component: <span>2</span>, key: '2' },
            ],
        })
        expect(wrapper.render()).toMatchSnapshot()
        wrapper.unmount()
    })
})

describe('dispose', () => {
    it('should return a new function that removes a component from state by its key', () => {
        const wrapper = mount(<ModalAutoMountingTarget />)
        const instance = wrapper.instance() as ModalAutoMountingTarget
        wrapper.setState({
            components: [
                { component: <span>1</span>, key: '1' },
                { component: <span>2</span>, key: '2' },
            ],
        })
        instance.dispose('2')()
        expect(instance.state.components).toHaveLength(1)
        expect(instance.state.components[0].key).toEqual('1')
        wrapper.unmount()
    })
})
