import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Text } from './Text'

describe('Text', () => {
    it('should render correctly', () => {
        expect(render(withTheme(<Text>Test 1</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text tag='p'>Test with p tag</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text weight='bold'>Test weight</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text size={2}>Test size</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text color='primary'>Test color</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text fontStyle='italic'>Test italic</Text>))).toMatchSnapshot()
    })
    it('should accept style prop', () => {
        expect(render(withTheme(<Text weight='bold' style={{ color: 'red' }}>This is red</Text>))).toMatchSnapshot()
    })
})
