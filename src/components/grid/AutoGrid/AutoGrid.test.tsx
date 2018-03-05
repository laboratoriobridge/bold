import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { Cell } from '../Cell/Cell'

import { AutoGrid } from './AutoGrid'

describe('AutoGrid', () => {
    it('deve renderizar corretamente', () => {
        expect(render(withTheme(
            <AutoGrid cellSize={4}>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <Cell size={12}><span>4</span></Cell>
                <span>5</span>
                <span>6</span>
            </AutoGrid>
        ))).toMatchSnapshot()
    })
    it('deve aceitar as GridProps', () => {
        expect(render(withTheme(
            <AutoGrid alignItems='flex-end' justifyContent='space-evenly' direction='row-reverse' wrap={true}>
                <span>1</span>
            </AutoGrid>
        ))).toMatchSnapshot()
    })
})
