import * as React from 'react'

import { focusBoxShadow, Theme, withStyles, WithStylesProps } from '../../../../styles'
import { BaseButton, BaseButtonProps } from '../../button/BaseButton'
import { Icons } from '../../Icon/generated/Icons'
import { Icon } from '../../Icon/Icon'

export interface IconButtonProps extends BaseButtonProps, WithStylesProps {
    icon: Icons
    loading?: boolean
}

export interface IconButtonState {
    loading: boolean
}

export const createStyles = (theme: Theme) => ({
    button: {
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: theme.baseRadius + 2,
        color: theme.color.gray40,
        cursor: 'pointer',
        display: 'inline-flex',
        padding: 0,
        position: 'relative',
        userSelect: 'none',
        transition: 'all .2s',
        transform: 'translate3d(0,0,0)',
        'span': {
            display: 'inline-flex',
            transition: 'color .2s',
        },
        ':disabled': {
            opacity: 0.5,
        },
        ':focus': {
            outline: 'none',
            boxShadow: focusBoxShadow(theme, 'primary', 'single'),
        },
        ':hover': {

        },
    },
    loading: {
        pointerEvents: 'none',
        'span': {
            visibility: 'hidden',
        },
        ':after': {
            animation: `${theme.animation.spinAround} 500ms infinite linear`,
            border: '3px solid currentColor',
            borderRadius: '50%',
            borderRightColor: 'transparent',
            borderTopColor: 'transparent',
            content: '""',
            display: 'block',
            fontSize: '0.875rem',
            height: '1.5em',
            width: '1.5em',
            position: 'absolute',
            left: 'calc(50% - (1.5em / 2))',
            top: 'calc(50% - (1.5em / 2))',

        },
    },
})

@withStyles
export class IconButton extends React.Component<IconButtonProps, IconButtonState> {

    constructor(props, context?) {
        super(props, context)

        this.state = {
            loading: false,
        }
    }

    render() {
        const {
            css,
            icon,
            loading,
            theme,
            ...rest,
        } = this.props

        const styles = createStyles(theme)

        const classes = css(
            styles.button,
            (this.state.loading || loading) && styles.loading
        )

        return (
            <BaseButton
                {...rest}
                className={classes}
                onLoadingChange={this.onLoadingChange}
            >
                <span>
                    <Icon icon={icon} />
                </span>
            </BaseButton>
        )
    }

    private onLoadingChange = (loading: boolean) => {
        this.setState({ loading })
    }

}
