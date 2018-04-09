import { withInfo } from '@storybook/addon-info'
import { Renderable, RenderFunction } from '@storybook/react'

/**
 *  deve ser o primeiro decorator
 * @param story
 * @param context
 */
export const withPropTypes = (info?: string) =>
    (story: RenderFunction, context: { kind: string, story: string }): Renderable => {
        return (withInfo(info && `<div>${info}</div>`)(story) as any)(context)
    }
