import React from 'react'
import { render } from 'react-testing-library'

import { Flow } from './Flow'

describe('Flow', () => {
  it('should wrap each child on an element with horizontal spacing', () => {
    const { container } = render(
      <Flow>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Flow>
    )
    expect(container).toMatchSnapshot()
  })
  it('should accept vSpacing prop', () => {
    const { container } = render(
      <Flow vSpacing={2.5}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Flow>
    )
    expect(container).toMatchSnapshot()
  })
  it('should accept hSpacing prop', () => {
    const { container } = render(
      <Flow hSpacing={0.5}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
      </Flow>
    )
    expect(container).toMatchSnapshot()
  })
  it('should accept direction prop', () => {
    const { container } = render(
      <Flow direction='vertical'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flow>
    )
    expect(container).toMatchSnapshot()
  })
  it('should accept justifyContent prop', () => {
    const { container } = render(
      <Flow justifyContent='flex-end'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flow>
    )
    expect(container).toMatchSnapshot()
  })
  it('should accept alignItems prop', () => {
    const { container } = render(
      <Flow alignItems='center'>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Flow>
    )
    expect(container).toMatchSnapshot()
  })
  it('should not wrap empty elements', () => {
    const { container } = render(
      <Flow>
        <div>1</div>
        {false && <div>2</div>}
        <div>3</div>
      </Flow>
    )
    expect(container.querySelectorAll('body > div > div > div').length).toEqual(2)
  })
  it('should accept the style prop', () => {
    const { container } = render(
      <Flow style={{ color: 'red' }}>
        <div>1</div>
        <div>2</div>
      </Flow>
    )
    expect(container).toMatchSnapshot()
  })
})
