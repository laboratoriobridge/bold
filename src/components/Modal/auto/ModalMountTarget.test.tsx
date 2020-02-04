import { act, render } from '@testing-library/react'
import React from 'react'

import { ModalMountTarget } from './ModalMountTarget'
import { ModalStore } from './ModalStore'

describe('when mounted', () => {
  it('should subscribe to the modal store', () => {
    const store = new ModalStore()
    const subscribeSpy = jest.spyOn(store, 'subscribe')
    render(<ModalMountTarget store={store} />)
    expect(store['listeners']).toHaveLength(1)
    expect(subscribeSpy).toHaveBeenCalled()
  })
})

describe('when unmounted', () => {
  it('should unsubscribe to the modal store', () => {
    const store = new ModalStore()
    const { unmount } = render(<ModalMountTarget store={store} />)
    unmount()
    expect(store['listeners']).toHaveLength(0)
  })
})

describe('render', () => {
  it('should render all components from state', () => {
    const store = new ModalStore()

    const { container } = render(<ModalMountTarget store={store} />)
    expect(container).toMatchSnapshot()

    act(() => store.notify({ items: [{ key: '1', component: <div>First</div> }] }))

    expect(container).toMatchSnapshot()
  })
})
