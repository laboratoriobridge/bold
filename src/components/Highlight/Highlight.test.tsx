import { render } from '@testing-library/react'
import React from 'react'

import { Highlight } from './Highlight'

it('should surround matches with <mark /> component', () => {
  expect(
    render(<Highlight words={['blue car', 'car']} text='The blue car, the blue scarf!' />).container.innerHTML
  ).toEqual('<span>The <mark>blue car</mark>, the blue s<mark>car</mark>f!</span>')
})

it('should ignore empty search words', () => {
  expect(render(<Highlight words={[]} text='The blue car, the blue scarf!' />).container.innerHTML).toEqual(
    '<span>The blue car, the blue scarf!</span>'
  )
})

it('should ignore falsy search words', () => {
  expect(
    render(<Highlight words={['', null, undefined, '  ']} text='The blue car, the blue scarf!' />).container.innerHTML
  ).toEqual('<span>The blue car, the blue scarf!</span>')
})
