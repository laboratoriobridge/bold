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
                backgroundColor: '#fff',
                border: '1px solid #C8CCD4',
                borderRadius: 100,
                display: 'inline-block',
                height: 14,
                position: 'relative',
                transition: 'all .2s ease',
                verticalAlign: 'middle',
                width: 14,
                ':after': {
                    backgroundColor: '#fff',
                    border: '2px solid white',
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
                color: '#4d4d4d',
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
                    borderColor: '#808080',
                },
                [`&:checked + .${checkClasses}`]: {
                    backgroundColor: '#1e98ff',
                    borderColor: '#1e98ff',
                    ':after': {
                        opacity: 1
                    }
                },
                [`&:focus + .${checkClasses}`]: {
                    borderColor: '#1e98ff',
                },
                [`&:disabled + .${checkClasses}`]: {
                    backgroundColor: '#f2f2f7',
                    borderColor: '#e6e6e6',
                },
                [`&:disabled + .${checkClasses} + .${labelClasses}`]: {
                    color: '#b3b3b3',
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
