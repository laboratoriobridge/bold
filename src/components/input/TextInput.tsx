import * as React from 'react'
import { Input, PublicInputProps } from './Input'
import withStyles, { WithStylesProps } from '../../decorators/withStyles'
import { css } from '../../decorators/withStyles/createStyles'

export interface TextInputProps extends PublicInputProps, WithStylesProps {

}

@withStyles
export class TextInput extends React.Component<TextInputProps> {
    public input: Input

    focus() {
        this.input.focus()
    }

    blur() {
        this.input.blur()
    }

    render() {
        const styles = this.props.createStyles(theme => ({
            input: {
                backgroundColor: theme.white,
                border: 'solid 1px ' + theme.gray3,
                borderRadius: 2,
                fontSize: 12,
                padding: '8px 17px',
                ':hover': {
                    borderColor: theme.gray4
                },
                ':focus': {
                    borderColor: theme.primary,
                    outline: 'none'
                },
                ':active': {
                    borderColor: theme.primary,
                    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)'
                }
            }
        }))

        return (
            <Input ref={input => this.input = input} {...this.props} className={css(styles.input)} type='text' />
        )
    }

}
