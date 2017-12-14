import * as React from 'react'
import { RenderFunction, Renderable } from '@storybook/react'

export const withText = (text: string) => (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
    return (
        <div>
            {story()}
        </div>
    )
}
