import * as React from 'react'
import { render } from 'react-testing-library'

import { getNextSibling, getPreviousSibling } from '../react'

describe('getNextSibling', () => {
    it('should return the first sibling of the element that matches the predicate', () => {
        const { container } = render(
            <ul>
                <li id='item-1'>Item 1</li>
                <li id='item-2'>Item 2</li>
                <li id='item-3'>Item 3</li>
            </ul>
        )

        const item1 = container.querySelectorAll('li')[0]
        const item2 = container.querySelectorAll('li')[1]
        const item3 = container.querySelectorAll('li')[2]

        expect(getNextSibling(item1, (sib) => sib.getAttribute('id') === 'item-2')).toEqual(item2)
        expect(getNextSibling(item1, (sib) => sib.getAttribute('id') === 'item-3')).toEqual(item3)
    })
    it('should return null if none elements matches the predicate', () => {
        const { container } = render(
            <ul>
                <li id='item-1'>Item 1</li>
                <li id='item-2'>Item 2</li>
                <li id='item-3'>Item 3</li>
            </ul>
        )
        const item1 = container.querySelectorAll('li')[0]

        expect(getNextSibling(item1, (sib) => sib.getAttribute('id') === 'item-12312')).toEqual(null)
    })
})

describe('getPreviousSibling', () => {
    it('should return the first sibling of the element that matches the predicate', () => {
        const { container } = render(
            <ul>
                <li id='item-1'>Item 1</li>
                <li id='item-2'>Item 2</li>
                <li id='item-3'>Item 3</li>
            </ul>
        )

        const item1 = container.querySelectorAll('li')[0]
        const item2 = container.querySelectorAll('li')[1]
        const item3 = container.querySelectorAll('li')[2]

        expect(getPreviousSibling(item3, (sib) => sib.getAttribute('id') === 'item-2')).toEqual(item2)
        expect(getPreviousSibling(item3, (sib) => sib.getAttribute('id') === 'item-1')).toEqual(item1)
    })
    it('should return null if none elements matches the predicate', () => {
        const { container } = render(
            <ul>
                <li id='item-1'>Item 1</li>
                <li id='item-2'>Item 2</li>
                <li id='item-3'>Item 3</li>
            </ul>
        )
        const item3 = container.querySelectorAll('li')[2]

        expect(getPreviousSibling(item3, (sib) => sib.getAttribute('id') === 'item-12312')).toEqual(null)
    })
})
