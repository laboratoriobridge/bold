import { Renderable, RenderFunction } from '@storybook/react'
import * as React from 'react'

export const withText = (text: string) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (
            <div>
                {story()}
            </div>
        )
    }
