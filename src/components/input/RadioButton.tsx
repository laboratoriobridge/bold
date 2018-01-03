import * as React from 'react'
import { PublicInputProps, Input } from './Input'
import withStyles, { WithStylesProps, css } from '../../decorators/withStyles'

export interface RadioButtonProps extends PublicInputProps, WithStylesProps {
    label: string
}

@withStyles
export class RadioButton extends React.Component<RadioButtonProps, any> {

    render() {
        const checkStyles = this.props.createStyles(theme => ({
            check: {
                backgroundColor: theme.white,
                border: '1px solid ' + theme.gray30,
                borderRadius: 100,
                display: 'inline-block',
                height: 14,
                position: 'relative',
                transition: 'all .2s ease',
                verticalAlign: 'middle',
                width: 14,
                ':after': {
                    backgroundColor: theme.white,
                    border: '2px solid ' + theme.white,
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
                }
            },
            label: {
                color: theme.gray70,
                fontSize: 12,
                marginLeft: 10,
                verticalAlign: 'middle'
            }
        }))

        const checkClasses = css(checkStyles.check)
        const labelClasses = css(checkStyles.label)

        const styles = this.props.createStyles(theme => ({
            radio: {
                cursor: 'pointer',
            },
            input: {
                display: 'none',
                [`&:hover + .${checkClasses}`]: {
                    borderColor: theme.gray50,
                },
                [`&:checked + .${checkClasses}`]: {
                    backgroundColor: theme.primary,
                    borderColor: theme.primary,
                    ':after': {
                        opacity: 1
                    }
                },
                [`&:focus + .${checkClasses}`]: {
                    borderColor: theme.primary,
                },
                [`&:disabled + .${checkClasses}`]: {
                    backgroundColor: '#f2f2f7',
                    borderColor: theme.gray10,
                },
                [`&:disabled + .${checkClasses} + .${labelClasses}`]: {
                    color: theme.gray30,
                }
            }
        }))

        const { label, ...rest } = this.props

        return (
            <label className={css(styles.radio)}>
                <Input {...rest} type='radio' className={css(styles.input)} />
                <span className={checkClasses} />
                <span className={labelClasses}>{label}</span>
            </label>
        )
    }

}
