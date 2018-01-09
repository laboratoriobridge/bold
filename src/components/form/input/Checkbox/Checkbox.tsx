import * as React from 'react'
import { WrappedFieldInputProps } from 'redux-form'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Input } from '../Input/Input'

export interface CheckboxProps extends Partial<WrappedFieldInputProps>, WithStylesProps {
    checked?: boolean
    disabled?: boolean
    label: React.ReactNode
}

@withStyles
export class Checkbox extends React.Component<CheckboxProps, any> {

    render() {
        const checkStyles = this.props.createStyles(theme => ({
            check: {
                backgroundColor: theme.color.white,
                border: '1px solid ' + theme.color.gray30,
                borderRadius: 2,
                display: 'inline-block',
                height: 14,
                position: 'relative',
                transition: 'all .2s ease',
                verticalAlign: 'middle',
                width: 14,
                ':after': {
                    borderRight: '2px solid ' + theme.color.white,
                    borderBottom: '2px solid ' + theme.color.white,
                    content: '""',
                    height: 8,
                    left: 4,
                    opacity: 0,
                    position: 'absolute',
                    top: 1,
                    transition: 'all .2s ease',
                    transform: 'rotate(45deg) scale(1)',
                    width: 4,
                },
            },
            label: {
                color: theme.color.gray70,
                fontSize: 12,
                marginLeft: 10,
                verticalAlign: 'middle',
            },
        }))

        const { createStyles, label, css, ...rest } = this.props

        const checkClasses = css(checkStyles.check)
        const labelClasses = css(checkStyles.label)

        const styles = createStyles(theme => ({
            checkbox: {
                cursor: 'pointer',
            },
            checkboxDisabled: {
                cursor: 'not-allowed',
            },
            input: {
                display: 'none',
                [`&:hover + .${checkClasses}`]: {
                    borderColor: theme.color.gray40,
                },
                [`&:checked + .${checkClasses}`]: {
                    backgroundColor: theme.color.primary,
                    borderColor: theme.color.primary,
                    ':after': {
                        opacity: 1,
                    },
                },
                [`&:focus + .${checkClasses}`]: {
                    borderColor: theme.color.primary,
                },
                [`&:disabled + .${checkClasses}`]: {
                    backgroundColor: '#f2f2f7',
                    borderColor: theme.color.gray10,
                },
                [`&:disabled + .${checkClasses} + .${labelClasses}`]: {
                    color: theme.color.gray30,
                },
            },
        }))

        return (
            <label className={css(styles.checkbox, this.props.disabled && styles.checkboxDisabled)} >
                <Input {...rest} type='checkbox' className={css(styles.input)} />
                <span className={checkClasses} />
                <span className={labelClasses}>{this.props.label}</span>
            </label>
        )
    }

}
