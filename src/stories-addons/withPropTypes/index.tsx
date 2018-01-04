import * as React from 'react'
import { RenderFunction, Renderable } from '@storybook/react'
import Story from './components/Story'

/**
 *  deve ser o primeiro decorator
 * @param story
 * @param context
 */
export const withPropTypes = (info?: string) => (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
    return (
        <Story
            context={context}
            info={info}
            maxPropsIntoLine={3}
            maxPropObjectKeys={3}
            maxPropArrayLength={3}
            maxPropStringLength={50}
        >
            {story()}
        </Story>
    )
}
