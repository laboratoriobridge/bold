import { Renderable, RenderFunction } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

export const withRouter = (initialEntries = ['/', '/test'], initialIndex = 1) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <MemoryRouter initialEntries={initialEntries} initialIndex={initialIndex}>
                {story()}
            </MemoryRouter>
        )
    }
