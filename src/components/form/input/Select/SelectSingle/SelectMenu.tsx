import { Interpolation } from 'emotion'
import React from 'react'

import { withStyles, WithStylesProps } from '../../../../../styles'
import { Omit } from '../../../../../util'
import { Spinner } from '../../../../elements'

export interface SelectMenuProps extends WithStylesProps,
    Omit<React.HTMLAttributes<HTMLUListElement>, 'style'> {
    style?: Interpolation
}

@withStyles
export class SelectMenu extends React.Component<SelectMenuProps> {
    render() {
        const { css, theme, style, ...rest } = this.props
        const styles: Interpolation = {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            border: `1px solid ${theme.pallete.divider}`,
            borderRadius: theme.radius.popper,
            backgroundColor: theme.pallete.surface.main,
            boxShadow: theme.shadows.outer['40'],
            maxHeight: '20rem',
            overflowY: 'auto',
            overflowX: 'hidden',
            position: 'absolute',
            width: '100%',
            zIndex: theme.zIndex.dropdown,
        }

        return (
            <ul className={css(styles, style)} {...rest} />
        )
    }
}

export interface SelectMenuItemProps extends WithStylesProps,
    Omit<React.LiHTMLAttributes<HTMLLIElement>, 'style'> {
    style?: Interpolation
    selected?: boolean
    highlighted?: boolean
}

@withStyles
export class SelectMenuItem extends React.Component<SelectMenuItemProps> {
    render() {
        const { css, theme, style, selected, highlighted, ...rest } = this.props
        const styles: Interpolation = {
            borderBottom: `1px solid ${theme.pallete.divider}`,
            cursor: 'pointer',
            padding: '0.325rem 0.5rem',
            transition: '.1s ease',
            background: highlighted && theme.pallete.surface.background,

            '&:last-of-type': {
                borderBottom: 'none',
            },

            '&:hover': {
                background: theme.pallete.surface.background,
            },
        }

        return (
            <li className={css(styles, style)} {...rest} />
        )
    }
}

export const SelectHelperMenuItem = withStyles((props: SelectMenuItemProps & WithStylesProps) => (
    <SelectMenuItem
        style={{
            background: props.theme.pallete.surface.background,
        }}
        {...props}
    />
))

export const SelectLoadingItem = withStyles((props: SelectMenuItemProps & WithStylesProps) => (
    <SelectHelperMenuItem {...props}>
        Carregando...
        <Spinner style={{ color: props.theme.pallete.primary.main, float: 'right' }} />
    </SelectHelperMenuItem>
))

export const SelectEmptyItem = (props: SelectMenuItemProps) => (
    <SelectHelperMenuItem {...props}>
        Nenhum item encontrado
    </SelectHelperMenuItem>
)
