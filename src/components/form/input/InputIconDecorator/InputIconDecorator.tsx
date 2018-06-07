import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { Button, ButtonProps } from '../../../elements/button/Button/Button'
import { Icons } from '../../../elements/Icon/generated/Icons'
import { Icon } from '../../../elements/Icon/Icon'

export interface InputIconDecoratorProps extends WithStylesProps, Pick<ButtonProps, 'onClick'> {
    icon: Icons
    position?: 'left' | 'right'
}

@withStyles
export class InputIconDecorator extends React.PureComponent<InputIconDecoratorProps> {

    static defaultProps: Partial<InputIconDecoratorProps> = {
        position: 'right',
    }

    render() {
        const { css, theme, children, icon, position, onClick } = this.props
        const styles = {
            wrapper: {
                position: 'relative',
            },
            left: {
                'input': {
                    paddingLeft: '3rem',
                },
            },
            right: {
                'input': {
                    paddingRight: '3rem',
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
            iconLeft: {
                left: 1,
            },
            iconRight: {
                right: 1,
            },
            icon: {
                borderRadius: 'inherit',
                '&:focus': {
                    boxShadow: 'none',
                },
            },
        }

        const wrapperClasses = [
            styles.wrapper,
            position === 'left' && styles.left,
            position === 'right' && styles.right,
        ]
        const iconBoxClasses = [
            styles.iconWrapper,
            position === 'left' && styles.iconLeft,
            position === 'right' && styles.iconRight,
        ]

        return (
            <p className={css(wrapperClasses)}>
                {children}

                <span className={css(iconBoxClasses)}>
                    {onClick ?
                        <Button
                            size='small'
                            skin='ghost'
                            icon={icon}
                            tabIndex={-1}
                            styles={styles.icon}
                            onClick={this.props.onClick}
                        /> :
                        <Icon
                            icon={icon}
                            styles={styles.icon}
                        />
                    }
                </span>
            </p>
        )
    }
}
