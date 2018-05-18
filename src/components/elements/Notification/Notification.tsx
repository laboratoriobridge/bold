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
                background: theme.pallete.status.info.background,
                color: theme.pallete.status.info.main,
                borderColor: theme.pallete.status.info.main,
            },
        },
        'success': {
            icon: 'checkCircle',
            style: {
                background: theme.pallete.status.success.background,
                color: theme.pallete.status.success.main,
                borderColor: theme.pallete.status.success.main,
            },
        },
        'alert': {
            icon: 'exclamationTriangle',
            style: {
                background: theme.pallete.status.alert.background,
                color: theme.pallete.status.alert.main,
                borderColor: theme.pallete.status.alert.main,
            },
        },
        'error': {
            icon: 'ban',
            style: {
                background: theme.pallete.status.error.background,
                color: theme.pallete.status.error.main,
                borderColor: theme.pallete.status.error.main,
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
        const { theme, css, type, message, onCloseClick } = this.props
        const typeStyle = createTypesStyles(theme)
        const styles = {
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
                <div className={css(styles.notification, typeStyle[type].style)}>
                    <Icon icon={typeStyle[type].icon} styles={styles.icon} />{message}
                    {onCloseClick && <span className={css(styles.closeButton)}>
                        <IconButton icon='times' onClick={onCloseClick} />
                    </span>}
                </div>
            </div>
        )
    }
}
