import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Grid } from './Grid'

describe('Grid', () => {
    it('deve renderizar corretamente', () => {
        expect(render(withTheme(<Grid>Content</Grid>))).toMatchSnapshot()
        expect(render(withTheme(<Grid wrap>Content</Grid>))).toMatchSnapshot()
        expect(render(withTheme(<Grid justifyContent='space-between'>Content</Grid>))).toMatchSnapshot()
        expect(render(withTheme(<Grid alignItems='center'>Content</Grid>))).toMatchSnapshot()
        expect(render(withTheme(<Grid direction='column'>Content</Grid>))).toMatchSnapshot()
    })
})
