import { fireEvent, getByText, render } from '@testing-library/react'
import React from 'react'

import { Popper, PopperController, PopperProps } from './Popper'

const createComponent = (props: Partial<PopperProps> = {}) => {
  return (
    // tslint:disable jsx-no-lambda
    <Popper
      placement='left'
      offset={0.25}
      closeOnOutsideClick={true}
      renderTarget={(ctrl: PopperController) => <span />}
      {...props}
    >
      {(ctrl: PopperController) => <div>Test</div>}
    </Popper>
  )
}

describe('render', () => {
  it('should render correctly', () => {
    const { container } = render(createComponent())
    expect(container).toMatchSnapshot()
  })
})

describe('behavior', () => {
  it('#show should make children visible', () => {
    const props = {
      renderTarget: (ctrl: PopperController) => <span onClick={() => ctrl.show()} />,
    }
    const { container } = render(createComponent(props))
    expect(document.body.querySelector('[data-visible=false]')).toBeTruthy()
    fireEvent.click(container.querySelector('span'))
    expect(document.body.querySelector('[data-visible=true]')).toBeTruthy()
  })
  it('#hide should make children invisible', () => {
    const props = {
      renderTarget: (ctrl: PopperController) => <span onClick={() => ctrl.hide()} />,
      initialVisible: true,
    }
    const { container } = render(createComponent(props))
    expect(container.querySelector('[data-visible=true]')).toBeTruthy()
    fireEvent.click(container.querySelector('span'))
    expect(container.querySelector('[data-visible=false]')).toBeTruthy()
  })
  it('#toggle should toggle children visibility', () => {
    const props = {
      renderTarget: (ctrl: PopperController) => <span onClick={() => ctrl.toggle()} />,
    }
    const { container } = render(createComponent(props))
    expect(container.querySelector('[data-visible=false]')).toBeTruthy()
    fireEvent.click(container.querySelector('span'))
    expect(container.querySelector('[data-visible=true]')).toBeTruthy()
    fireEvent.click(container.querySelector('span'))
    expect(container.querySelector('[data-visible=false]')).toBeTruthy()
  })
  it('#should hide children on outside click if prop #closeOnOutsideClick is true', () => {
    const props = {
      closeOnOutsideClick: true,
      initialVisible: true,
    }
    const { container } = render(createComponent(props))
    expect(container.querySelector('[data-visible=true]')).toBeTruthy()
    fireEvent.mouseDown(document.body)
    expect(container.querySelector('[data-visible=false]')).toBeTruthy()
  })
  it('#should hide children on Escape press', () => {
    const props = {
      initialVisible: true,
    }
    const { container } = render(createComponent(props))
    expect(container.querySelector('[data-visible=true]')).toBeTruthy()
    fireEvent.keyDown(getByText(container, 'Test'), { key: 'Escape' })
    expect(container.querySelector('[data-visible=false]')).toBeTruthy()
  })
})
