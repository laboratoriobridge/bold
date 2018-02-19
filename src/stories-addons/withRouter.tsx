import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'
import { MemoryRouter } from 'react-router-dom'

export const withRouter = () =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <MemoryRouter initialEntries={['/', '/test']} initialIndex={0}>
                {story()}
            </MemoryRouter>
        )
    }
