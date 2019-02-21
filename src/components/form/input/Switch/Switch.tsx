import React from 'react'

import { focusBoxShadow, withStyles, WithStylesProps } from '../../../../styles'
import { Input, InputProps } from '../Input/Input'

export interface SwitchProps extends InputProps, WithStylesProps {
    label?: string
}

@withStyles
export class Switch extends React.PureComponent<SwitchProps> {

    render() {
        const { css, theme, ...rest } = this.props
        const classes = {
            switch: css({
                outline: 0,
                background: theme.pallete.surface.background,
                borderRadius: '0.75rem',
                padding: 'calc(0.25rem - 1px) 0.25rem', // calc to discount border size
                display: 'inline-block',
                width: '3rem',
                lineHeight: 0,
                border: `1px solid ${theme.pallete.gray.c70}`,
                transition: 'all .2s',
            }),
            knob: css({
                background: theme.pallete.surface.main,
                borderRadius: '50%',
                display: 'inline-block',
                width: '1rem',
                height: '1rem',
                transition: 'all .2s',
                boxShadow: theme.shadows.outer['20'],
            }),
            text: css({
                marginLeft: '0.5rem',
            }),
        }
        const labelClasses = css({
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
            [`&:hover .${classes.switch}`]: {
                cursor: 'pointer',
                borderColor: theme.pallete.gray.c40,
            },
        })
        const inputClasses = css({
            opacity: 0,
            position: 'absolute',
            zIndex: -1,
            [`&:checked + .${classes.switch}`]: {
                background: theme.pallete.primary.main,
                borderColor: theme.pallete.primary.main,
                '&:hover': {
                    borderColor: theme.pallete.primary.main,
                },
            },
            [`&:checked + .${classes.switch} > .${classes.knob}`]: {
                transform: 'translateX(calc(1.5rem - 1px))', // discount border size
            },
            [`&:focus + .${classes.switch}`]: {
                boxShadow: focusBoxShadow(theme),
            },
            [`&:disabled + .${classes.switch}`]: {
                opacity: 0.4,
                cursor: 'not-allowed',
            },
        })

        return (
            <label className={labelClasses}>
                <Input {...rest} type='checkbox' className={inputClasses} />

                <div className={classes.switch}>
                    <span className={classes.knob} />
                </div>

                {this.props.label &&
                    <span className={classes.text}>{this.props.label}</span>}
            </label>
        )
    }
}
