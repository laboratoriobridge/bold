import React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../styles'
import { Button, ButtonProps } from '../../../elements/Button'
import { Icons } from '../../../elements/Icon/generated/Icons'
import { Icon } from '../../../elements/Icon/Icon'

export interface InputWrapperProps extends WithStylesProps {
    icon?: Icons
    iconPosition?: 'left' | 'right'
    iconDisabled?: boolean
    clearVisible?: boolean
    onIconClick?: ButtonProps['onClick']
    onClear?(e: React.MouseEvent<HTMLButtonElement>): any
}

@withStyles
export class InputWrapper extends React.PureComponent<InputWrapperProps> {

    static defaultProps: Partial<InputWrapperProps> = {
        iconPosition: 'right',
        iconDisabled: false,
        clearVisible: false,
        onClear: () => null,
    }

    render() {
        const {
            css, theme, children, icon, iconPosition, iconDisabled, onIconClick, clearVisible, onClear,
        } = this.props

        const paddingRight = iconPosition === 'right' ? (false
            || clearVisible && icon && '4.5rem'
            || clearVisible && '2rem'
            || icon && '3rem'
        ) : clearVisible && '2rem'

        const styles: Styles = {
            wrapper: {
                position: 'relative',
                'input': {
                    paddingLeft: iconPosition === 'left' && '3rem',
                    paddingRight,
                },
            },
            clearButton: {
                position: 'absolute',
                right: icon && iconPosition === 'right' ? '2.5rem' : 1,
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                height: '100%',
                display: 'inline-flex',
                justifyContent: 'center',
                alignItems: 'center',
                outline: 0,
                color: theme.pallete.text.secondary,
                padding: '1px 6px',
                '&:hover': {
                    color: theme.pallete.status.danger.main,
                },
            },
            iconWrapper: {
                position: 'absolute',
                backgroundColor: theme.pallete.surface.background,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.25rem',
                width: '2.5rem',
                top: 1,
                bottom: 1,
            },
            iconLeft: { left: 1 },
            iconRight: { right: 1 },
            icon: {
                borderRadius: 'inherit',
                '&:focus': {
                    boxShadow: 'none',
                },
            },
        }

        const iconBoxClasses = [
            styles.iconWrapper,
            iconPosition === 'left' && styles.iconLeft,
            iconPosition === 'right' && styles.iconRight,
        ]

        return (
            <div className={css(styles.wrapper)}>
                {children}

                {clearVisible &&
                    <span
                        role='button'
                        title='Limpar'
                        tabIndex={-1}
                        onClick={onClear}
                        className={css(styles.clearButton)}
                    >
                        <Icon size={1.5} icon='timesDefault' />
                    </span>
                }

                {icon &&
                    <span className={css(iconBoxClasses)}>
                        {onIconClick ?
                            <Button
                                size='small'
                                skin='ghost'
                                tabIndex={-1}
                                onClick={onIconClick}
                                style={styles.icon}
                                disabled={iconDisabled}
                            >
                                <Icon icon={icon} />
                            </Button>
                            :
                            <Icon
                                icon={icon}
                                style={styles.icon}
                            />
                        }
                    </span>
                }
            </div>
        )
    }
}
