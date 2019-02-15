import * as React from 'react'
import { Manager, Popper, Reference } from 'react-popper'

import { useTheme } from '../../../styles'
import { composeRefs } from '../../../util/react'
import { randomStr } from '../../../util/string'
import { Omit } from '../../../util/types'
import { Button, ButtonProps } from '../Button'
import { Portal } from '../Portal'
import { Tooltip } from '../Tooltip'
import { FadeTransition } from '../Transition/FadeTransition'

import { DropdownItem, DropdownItemProps } from './DropdownItem'
import { DropdownMenu } from './DropdownMenu'

export type DropdownItemConfig = Omit<DropdownButtonItemProps, 'onAfterClick'>

export interface DropdownButtonProps extends ButtonProps {
    items: DropdownItemConfig[]
}

export const DropdownButton = (props: DropdownButtonProps) => {
    const { items, ...rest } = props
    const theme = useTheme()

    const meuIdRef = React.useRef<string>(null)
    React.useEffect(() => {
        meuIdRef.current = `menu-${randomStr()}`
    }, [])

    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const menuRef = React.useRef<HTMLUListElement>(null)

    const [isOpen, setOpen] = React.useState<boolean>(false)

    const handleBlur = () => {
        window.setTimeout(() => {
            const currentFocus = menuRef.current.ownerDocument.activeElement
            if (!menuRef.current.contains(currentFocus)) {
                setOpen(false)
            }
        })
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        event.preventDefault()
        if (event.key === 'Escape' || event.key === 'Tab') {
            setOpen(false)
        }
    }

    const handleButtonClick = () => setOpen(true)

    const handleAfterClick = () => setOpen(false)

    React.useEffect(() => {
        // Skip on first render
        if (!buttonRef.current) { return }

        if (isOpen) {
            // When opened, focus the first menu item
            const firstItem = menuRef.current.firstElementChild as HTMLLIElement
            firstItem.focus()
        } else {
            // When closed, focus the button
            buttonRef.current.focus()
        }
    }, [isOpen])

    return (
        <Manager>
            <Reference>
                {(refProps) =>
                    <Button
                        innerRef={composeRefs(refProps.ref, buttonRef)}
                        onClick={handleButtonClick}
                        aria-haspopup='true'
                        aria-expanded={isOpen ? true : undefined}
                        aria-controls={isOpen ? meuIdRef.current : undefined}
                        {...rest}
                    />
                }
            </Reference>
            <FadeTransition in={isOpen}>
                {({ className }) => (
                    isOpen && (
                        <Portal>
                            <Popper>
                                {(popper) => (
                                    <div
                                        ref={popper.ref}
                                        className={className}
                                        style={{ ...popper.style, zIndex: theme.zIndex.dropdown }}
                                    >
                                        <DropdownMenu
                                            id={meuIdRef.current}
                                            innerRef={menuRef}
                                            onBlur={handleBlur}
                                            onKeyDown={handleKeyDown}
                                        >
                                            {items.map((item, idx) => {
                                                return (
                                                    <DropdownButtonItem
                                                        key={idx}
                                                        onAfterClick={handleAfterClick}
                                                        {...item}
                                                    />
                                                )
                                            })}
                                        </DropdownMenu>
                                    </div>
                                )}
                            </Popper>
                        </Portal>
                    )
                )}
            </FadeTransition>
        </Manager>
    )
}

export interface DropdownButtonItemProps extends DropdownItemProps {
    content: React.ReactNode
    tooltip?: string
    autoClose?: boolean
    onAfterClick?(): void
}

export const DropdownButtonItem = (props: DropdownButtonItemProps) => {
    const { content, onAfterClick, autoClose, onClick, tooltip, ...other } = props

    const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
        if (autoClose) {
            onAfterClick()
        }

        onClick && onClick(e)
    }

    return (
        <Tooltip text={tooltip}>
            <DropdownItem {...other} onClick={handleClick}>
                {content}
            </DropdownItem>
        </Tooltip>
    )
}

DropdownButtonItem.defaultProps = {
    content: '',
    autoClose: true,
} as Partial<DropdownButtonItemProps>
