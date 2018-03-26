import * as React from 'react'

import { withStyles, WithStylesProps } from '../../../../styles'
import { IconButton, IconButtonProps } from '../../../elements/button/IconButton/IconButton'
import { Icons } from '../../../elements/Icon/generated/Icons'
import { Icon } from '../../../elements/Icon/Icon'

export interface InputIconDecoratorProps extends WithStylesProps, Pick<IconButtonProps, 'onClick'> {
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
                    paddingLeft: '2.5rem',
                },
            },
            right: {
                'input': {
                    paddingRight: '2.5rem',
                },
            },
            iconWrapper: {
                position: 'absolute',
                backgroundColor: theme.color.background,
                display: 'flex',
                alignItems: 'center',
                padding: '0.25rem',
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
                        <IconButton
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
