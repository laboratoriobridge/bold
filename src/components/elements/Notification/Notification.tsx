import * as React from 'react'

import { Theme, withStyles, WithStylesProps } from '../../../styles'
import { IconButton } from '../button/IconButton/IconButton'
import { Icon } from '../Icon/Icon'

export type NotificationType =
    | 'info'
    | 'success'
    | 'alert'
    | 'error'

export const createTypesStyles = (theme: Theme): { [key in NotificationType]: any } => {
    return {
        'info': {
            icon: 'informationCircle',
            style: {
                background: theme.color.blueBg,
                color: theme.color.blue,
                borderColor: theme.color.blue,
            },
        },
        'success': {
            icon: 'checkCircle',
            style: {
                background: theme.color.greenBg,
                color: theme.color.green,
                borderColor: theme.color.green,
            },
        },
        'alert': {
            icon: 'exclamationTriangle',
            style: {
                background: theme.color.orangeBg,
                color: theme.color.orange,
                borderColor: theme.color.orange,
            },
        },
        'error': {
            icon: 'ban',
            style: {
                background: theme.color.redBg,
                color: theme.color.red,
                borderColor: theme.color.red,
            },
        },
    }
}

export interface NotificationProps extends WithStylesProps {
    type: NotificationType,
    message: string,
    onCloseClick?: any
}

@withStyles
export class Notification extends React.PureComponent<NotificationProps> {
    render() {
        const { theme, css, styles, type, message, onCloseClick } = this.props
        const typeStyle = createTypesStyles(theme)
        const defaultStyles = {
            notification: {
                padding: '0.75rem 3rem 0.75rem 3rem',
                borderRadius: '2px',
                fontSize: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                borderStyle: 'solid',
                borderWidth: '1px',
            },
            icon: {
                marginRight: '0.5rem',
            },
            closeButton: {
                marginLeft: 'auto',
            },
        }

        return (
            <div>
                <div className={css(defaultStyles.notification, typeStyle[type].style, styles)}>
                    <Icon icon={typeStyle[type].icon} styles={defaultStyles.icon} />{message}
                    {onCloseClick && <span className={css(defaultStyles.closeButton)}>
                        <IconButton icon='times' onClick={onCloseClick} />
                    </span>}
                </div>
            </div>
        )
    }
}
