import { mount } from 'enzyme'
import * as React from 'react'

import { ModalMountTarget } from './ModalMountTarget'
import { ModalStore } from './ModalStore'

// tslint:disable no-string-literal

describe('when mounted', () => {
    it('should subscribe to the modal store', () => {
        const store = new ModalStore()
        const subscribeSpy = jest.spyOn(store, 'subscribe')
        mount(<ModalMountTarget store={store} />)
        expect(store['listeners']).toHaveLength(1)
        expect(subscribeSpy).toHaveBeenCalled()
    })
    it(`subscription should change component state`, () => {
        const store = new ModalStore()
        const wrapper = mount(<ModalMountTarget store={store} />)
        expect(wrapper.state()).toEqual({ items: [] })
        store.notify({ items: [{ key: '1', component: null }] })
        expect(wrapper.state()).toEqual({ items: [{ key: '1', component: null }] })
    })
})

describe('when unmounted', () => {
    it('should unsubscribe to the modal store', () => {
        const store = new ModalStore()
        const wrapper = mount(<ModalMountTarget store={store} />)
        wrapper.unmount()
        expect(store['listeners']).toHaveLength(0)
    })
})

describe('render', () => {
    it('should render all components from state', () => {
        const wrapper = mount(<ModalMountTarget />)
        wrapper.setState({
            items: [
                { component: <span>1</span>, key: '1' },
                { component: <span>2</span>, key: '2' },
            ],
        })
        expect(wrapper.render()).toMatchSnapshot()
    })
})
