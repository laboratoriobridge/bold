import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, TextColor, withStyles, WithStylesProps } from '../../../styles'
import { getTextColor, Theme } from '../../../styles/theme/createTheme'
import { Omit } from '../../../util/types'

import { IconMap, Icons } from './generated/Icons'

export type IconColor = TextColor | 'none'

export interface IconProps extends WithStylesProps, Omit<React.SVGAttributes<SVGElement>, 'style'> {
    icon: Icons
    fill?: IconColor
    stroke?: IconColor
    size?: number
    style?: Interpolation
}

export const getIconColor = (theme: Theme, color: IconColor) => {
    return !color || color === 'none' ? color : getTextColor(theme, color)
}

@withStyles
export class Icon extends React.PureComponent<IconProps> {

    static defaultProps: Partial<IconProps> = {
        size: 1.5,
    }

    render() {
        const { style, css, theme, icon, fill, stroke, size, ...rest } = this.props
        const SelectedIcon = IconMap[icon]

        const styles: Styles = {
            icon: {
                fill: fill ? getIconColor(theme, fill) : 'currentColor',
                stroke: stroke && getIconColor(theme, stroke),
                fontSize: size && size + 'rem',
            },
        }

        return (
            <SelectedIcon
                role='img'
                aria-hidden='true'
                className={css(styles.icon, style)}
                {...rest}
            />
        )
    }

}
