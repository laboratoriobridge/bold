import { css as emotionCss } from 'emotion'
import * as React from 'react'

import { focusBoxShadow, withStyles, WithStylesProps } from '../../../../styles'
import { Input, PublicInputProps } from '../Input/Input'

export interface CheckboxProps extends PublicInputProps, WithStylesProps {
    label?: React.ReactNode
}

@withStyles
export class Checkbox extends React.Component<CheckboxProps, any> {

    render() {
        const { css, label, theme, ...rest } = this.props

        const checkClasses = emotionCss({
            backgroundColor: theme.color.white,
            border: '1px solid ' + theme.color.gray70,
            borderRadius: theme.baseRadius,
            display: 'inline-block',
            height: 16,
            position: 'relative',
            transition: 'all .2s ease',
            backfaceVisibility: 'hidden', // fixes box-shadow transition bug
            verticalAlign: 'middle',
            width: 16,
            ':after': {
                borderRight: '2px solid ' + theme.color.white,
                borderBottom: '2px solid ' + theme.color.white,
                content: '""',
                height: 10,
                left: 4,
                opacity: 0,
                position: 'absolute',
                top: 1,
                transition: 'all .2s ease',
                transform: 'rotate(45deg) scale(1)',
                width: 6,
            },
        })

        const labelClasses = emotionCss({
            color: theme.color.gray30,
            fontSize: 12,
            marginLeft: '0.5rem',
        })

        const checkboxClass = emotionCss({
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
        })

        const checkboxDisabledClass = emotionCss({
            cursor: 'not-allowed',
        })

        const inputClass = emotionCss({
            opacity: 0,
            marginRight: -13,
            [`&:hover + .${checkClasses}`]: {
                borderColor: theme.color.gray60,
            },
            [`&:checked + .${checkClasses}`]: {
                backgroundColor: theme.color.primary,
                borderColor: theme.color.primary,
                ':after': {
                    opacity: 1,
                },
            },
            [`&:focus + .${checkClasses}`]: {
                boxShadow: focusBoxShadow(theme),
            },
            [`&:disabled + .${checkClasses}`]: {
                backgroundColor: theme.color.background,
                borderColor: theme.color.gray90,
            },
            [`&:disabled + .${checkClasses} + .${labelClasses}`]: {
                color: theme.color.gray70,
            },
        })

        return (
            <label className={css(checkboxClass, this.props.disabled && checkboxDisabledClass)} >
                <Input {...rest} type='checkbox' className={inputClass} />
                <span className={checkClasses} />
                {this.props.label && <span className={labelClasses}>{this.props.label}</span>}
            </label>
        )
    }

}
