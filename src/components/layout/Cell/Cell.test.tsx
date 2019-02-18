import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { Cell } from './Cell'

describe('Cell', () => {
    it('deve renderizar corretamente', () => {
        expect(render(withTheme(<Cell>Content</Cell>))).toMatchSnapshot()
        expect(render(withTheme(<Cell size={6}>Content</Cell>))).toMatchSnapshot()
        expect(render(withTheme(<Cell alignSelf='center'>Content</Cell>))).toMatchSnapshot()
    })
})
