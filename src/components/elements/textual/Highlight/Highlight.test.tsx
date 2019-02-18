import { mount } from 'enzyme'
import React from 'react'

import { Highlight } from './Highlight'

it('should surround matches with <mark /> component', () => {
    expect(mount(<Highlight words={['blue car', 'car']} text='The blue car, the blue scarf!' />).html())
        .toEqual('<span>The <mark>blue car</mark>, the blue s<mark>car</mark>f!</span>')
})

it('should ignore empty search words', () => {
    expect(mount(<Highlight words={[]} text='The blue car, the blue scarf!' />).html())
        .toEqual('<span>The blue car, the blue scarf!</span>')
})

it('should ignore falsy search words', () => {
    expect(mount(<Highlight words={['', null, undefined, '  ']} text='The blue car, the blue scarf!' />).html())
        .toEqual('<span>The blue car, the blue scarf!</span>')
})
