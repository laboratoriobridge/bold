import * as React from 'react'

import { focusBoxShadow, withStyles, WithStylesProps } from '../../../../styles'
import { Input, PublicInputProps } from '../Input/Input'

export interface RadioButtonProps extends PublicInputProps, WithStylesProps {
    label: React.ReactNode
}

@withStyles
export class RadioButton extends React.Component<RadioButtonProps, any> {

    render() {
        const { label, css, theme, ...rest } = this.props

        const checkClasses = css({
            backgroundColor: theme.pallete.surface.main,
            border: '1px solid ' + theme.pallete.gray.c70,
            borderRadius: 100,
            display: 'inline-block',
            height: 16,
            position: 'relative',
            transition: 'all .2s ease',
            backfaceVisibility: 'hidden', // fixes box-shadow transition bug
            verticalAlign: 'middle',
            width: 16,
            ':after': {
                backgroundColor: theme.pallete.surface.main,
                border: '3px solid ' + theme.pallete.surface.main,
                borderRadius: 100,
                content: '""',
                display: 'block',
                height: 2,
                marginLeft: 4,
                marginTop: 4,
                opacity: 0,
                textAlign: 'center',
                transition: 'all .2s ease',
                width: 2,
            },
        })

        const labelClasses = css({
            color: theme.pallete.gray.c30,
            fontSize: 12,
            marginLeft: '0.5rem',
        })

        const radioClasses = css({
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
        })

        const inputClasses = css({
            opacity: 0,
            marginRight: -18,
            [`&:hover + .${checkClasses}`]: {
                borderColor: theme.pallete.gray.c40,
            },
            [`&:checked + .${checkClasses}`]: {
                backgroundColor: theme.pallete.primary.main,
                borderColor: theme.pallete.primary.main,
                ':after': {
                    opacity: 1,
                },
            },
            [`&:focus + .${checkClasses}`]: {
                boxShadow: focusBoxShadow(theme),
            },
            [`&:disabled + .${checkClasses}`]: {
                backgroundColor: theme.pallete.surface.background,
                borderColor: theme.pallete.gray.c90,
            },
            [`&:disabled + .${checkClasses} + .${labelClasses}`]: {
                color: theme.pallete.gray.c70,
            },
        })

        return (
            <label className={radioClasses}>
                <Input {...rest} type='radio' className={inputClasses} />
                <span className={checkClasses} />
                <span className={labelClasses}>{label}</span>
            </label>
        )
    }

}
