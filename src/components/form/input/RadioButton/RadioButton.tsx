import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Input, PublicInputProps } from '../Input/Input'

export interface RadioButtonProps extends PublicInputProps, WithStylesProps {
    label: string
}

@withStyles
export class RadioButton extends React.Component<RadioButtonProps, any> {

    render() {
        const { label, createStyles, css, ...rest } = this.props

        const checkStyles = createStyles(theme => ({
            check: {
                backgroundColor: theme.color.white,
                border: '1px solid ' + theme.color.gray30,
                borderRadius: 100,
                display: 'inline-block',
                height: 16,
                position: 'relative',
                transition: 'all .2s ease',
                verticalAlign: 'middle',
                width: 16,
                ':after': {
                    backgroundColor: theme.color.white,
                    border: '3px solid ' + theme.color.white,
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
            },
            label: {
                color: theme.color.gray70,
                fontSize: 12,
                marginLeft: 10,
                verticalAlign: 'middle',
            },
        }))

        const checkClasses = css(checkStyles.check)
        const labelClasses = css(checkStyles.label)

        const styles = createStyles(theme => ({
            radio: {
                cursor: 'pointer',
            },
            input: {
                display: 'none',
                [`&:hover + .${checkClasses}`]: {
                    borderColor: theme.color.gray50,
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
            <label className={css(styles.radio)}>
                <Input {...rest} type='radio' className={css(styles.input)} />
                <span className={checkClasses} />
                <span className={labelClasses}>{label}</span>
            </label>
        )
    }

}
