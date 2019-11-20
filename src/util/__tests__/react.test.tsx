import { render } from '@testing-library/react'
import React, { createRef } from 'react'

import { composeHandlers, composeRefs } from '../react'

describe('composeRefs', () => {
  it('should compose multiple refs for the same element', () => {
    const ref1 = createRef<HTMLParagraphElement>()
    const ref2 = createRef<HTMLParagraphElement>()
    const ref3 = jest.fn()

    render(<p ref={composeRefs(ref1, ref2, ref3)}>Test</p>)
    expect(ref1.current.nodeName).toEqual('P')
    expect(ref2.current.nodeName).toEqual('P')
    expect(ref3).toHaveBeenCalledWith(ref1.current)

    expect(ref1).toEqual(ref2)
    expect(ref1).not.toBe(ref2)
  })
})

describe('composeHadlers', () => {
  it('should return a new function that calls every parameter in order', () => {
    const fn1 = jest.fn(() => -100)
    const fn2 = jest.fn(() => 99)
    const composed = composeHandlers(fn1, fn2, fn2)
    composed(1, 2, 3)
    expect(fn1).toHaveBeenCalledWith(1, 2, 3)
    expect(fn1).toHaveBeenCalledTimes(1)
    expect(fn2).toHaveBeenCalledWith(1, 2, 3)
    expect(fn2).toHaveBeenCalledTimes(2)
  })
  it('should gracefully treat null handlers', () => {
    const fn1 = jest.fn(() => -100)
    const composed = composeHandlers(fn1, null)
    composed()
    expect(fn1).toHaveBeenCalled()
  })
})
