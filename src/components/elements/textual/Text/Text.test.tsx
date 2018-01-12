import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Text } from './Text'

describe('Text', () => {
    it('deve renderizar corretamente', () => {
        expect(render(withTheme(<Text>Test 1</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text tag='p'>Test with p tag</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text weight='bold'>Test weight</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text size={2}>Test size</Text>))).toMatchSnapshot()
        expect(render(withTheme(<Text color='primary'>Test color</Text>))).toMatchSnapshot()
    })
})
