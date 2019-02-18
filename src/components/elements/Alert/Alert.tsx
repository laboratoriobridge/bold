import { Interpolation } from 'emotion'
import * as React from 'react'

import { Styles, Theme, withStyles, WithStylesProps } from '../../../styles'
import { Omit } from '../../../util/types'
import { Button } from '../Button'
import { Icons } from '../Icon'
import { Icon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip'

export type AlertType = 'info' | 'success' | 'warning' | 'danger'

export const createTypesStyles = (theme: Theme): {
    [key in AlertType]: {
        icon: Icons,
        style: Interpolation
    }
} => {
    return {
        'info': {
            icon: 'infoCircleOutline',
            style: {
                background: theme.pallete.status.info.background,
                color: theme.pallete.status.info.main,
                borderColor: theme.pallete.status.info.main,
            },
        },
        'success': {
            icon: 'checkCircleOutline',
            style: {
                background: theme.pallete.status.success.background,
                color: theme.pallete.status.success.main,
                borderColor: theme.pallete.status.success.main,
            },
        },
        'warning': {
            icon: 'exclamationTriangleOutline',
            style: {
                background: theme.pallete.status.alert.background,
                color: theme.pallete.status.alert.main,
                borderColor: theme.pallete.status.alert.main,
            },
        },
        'danger': {
            icon: 'banOutline',
            style: {
                background: theme.pallete.status.danger.background,
                color: theme.pallete.status.danger.main,
                borderColor: theme.pallete.status.danger.main,
            },
        },
    }
}

export interface AlertProps extends WithStylesProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'css'> {
    type: AlertType
    onCloseClick?: any
    inline?: boolean
    styles?: {
        wrapper?: Interpolation
        container?: Interpolation
    }
}

@withStyles
export class Alert extends React.PureComponent<AlertProps> {

    render() {
        const { theme, css, styles, type, children, onCloseClick, inline, ...rest } = this.props

        const typeStyle = createTypesStyles(theme)[type]
        const defaultStyles: Styles = {
            wrapper: {
                padding: inline ? '0 0.5rem' : '0 1rem',
                minHeight: inline ? '2rem' : '2.5rem',
                borderRadius: '2px',
                borderStyle: 'solid',
                borderWidth: '1px',
                display: inline ? 'inline-flex' : 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            container: {
                display: 'flex',
                alignItems: 'center',
                flex: 1,
            },
            icon: {
                marginRight: '0.5rem',
            },
            content: {
                flex: 1,
            },
            closeButtonWrapper: {
                marginLeft: 'auto',
                paddingLeft: '1rem',
                display: 'inline-flex',
                alignItems: 'center',
            },
            closeButton: {
                padding: inline && 0,
            },
        }

        return (
            <div
                className={css(defaultStyles.wrapper, typeStyle.style, styles && styles.wrapper)}
                role='alert'
                {...rest}
            >
                <div className={css(defaultStyles.container, styles && styles.container)}>
                    <Icon icon={typeStyle.icon} style={defaultStyles.icon} size={inline ? 1 : undefined} />

                    <div className={css(defaultStyles.content)}>
                        {children}
                    </div>

                    {onCloseClick && <span className={css(defaultStyles.closeButtonWrapper)}>
                        <Tooltip text='Fechar'>
                            <Button
                                aria-label='Fechar alerta'
                                size='small'
                                skin='ghost'
                                style={defaultStyles.closeButton}
                                onClick={onCloseClick}
                            >
                                <Icon icon='timesDefault' />
                            </Button>
                        </Tooltip>
                    </span>}
                </div>
            </div>
        )
    }
}
