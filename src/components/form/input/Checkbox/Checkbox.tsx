import { Interpolation } from 'emotion'
import * as React from 'react'

import { focusBoxShadow, withStyles, WithStylesProps } from '../../../../styles'
import { Input, InputController, InputProps } from '../Input/Input'

export interface CheckboxProps extends InputProps, WithStylesProps {
    label?: React.ReactNode
    style?: Interpolation
    indeterminate?: boolean
}

@withStyles
export class Checkbox extends React.Component<CheckboxProps, any> {
    private input: HTMLInputElement

    componentDidMount() {
        this.input.indeterminate = this.props.indeterminate
    }

    componentDidUpdate() {
        this.input.indeterminate = this.props.indeterminate
    }

    render() {
        const { css, label, theme, style, indeterminate, ...rest } = this.props

        const checkClasses = css({
            backgroundColor: theme.pallete.surface.main,
            border: '1px solid ' + theme.pallete.gray.c70,
            borderRadius: theme.radius.input,
            display: 'inline-block',
            height: 16,
            position: 'relative',
            transition: 'all .2s ease',
            verticalAlign: 'middle',
            width: 16,
        })

        const labelClasses = css({
            color: theme.pallete.gray.c30,
            marginLeft: '0.5rem',
        })

        const checkboxClass = css({
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
        })

        const checkboxDisabledClass = css({
            cursor: 'not-allowed',
        })

        const inputClass = css({
            opacity: 0,
            marginRight: -13,
            [`&:hover + .${checkClasses}`]: {
                borderColor: theme.pallete.gray.c40,
            },
            [`&:checked + .${checkClasses}`]: {
                backgroundColor: theme.pallete.primary.main,
                borderColor: theme.pallete.primary.main,
                ':after': {
                    content: '""',
                    borderRight: '2px solid ' + theme.pallete.surface.main,
                    borderBottom: '2px solid ' + theme.pallete.surface.main,
                    position: 'absolute',
                    width: 6,
                    height: 10,
                    top: 1,
                    left: 4,
                    opacity: 1,
                    transform: 'rotate(45deg) scale(1)',
                    transition: 'opacity .2s ease',
                },
            },
            [`&:indeterminate + .${checkClasses}`]: {
                backgroundColor: theme.pallete.surface.main,
                borderColor: theme.pallete.primary.main,
                ':after': {
                    content: '""',
                    borderBottom: '2px solid ' + theme.pallete.primary.main,
                    position: 'absolute',
                    top: -1,
                    left: 3,
                    width: 8,
                    height: 10,
                    opacity: 1,
                    transition: 'opacity .2s ease',
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
            <label
                className={css(
                    checkboxClass,
                    this.props.disabled && checkboxDisabledClass,
                    style
                )}
            >
                <Input
                    {...rest}
                    provideController={this.setController}
                    type='checkbox'
                    className={inputClass}
                />
                <span className={checkClasses} />
                {this.props.label && <span className={labelClasses}>{this.props.label}</span>}
            </label>
        )
    }

    private setController = (controller: InputController) => {
        this.input = controller && controller.getInput()
    }
}
