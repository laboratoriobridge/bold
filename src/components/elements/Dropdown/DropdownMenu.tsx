import React from 'react'

import { Theme, useStyles } from '../../../styles'
import { composeRefs, getNextSibling, getPreviousSibling } from '../../../util/react'

export interface DropdownMenuProps extends React.HTMLAttributes<HTMLUListElement> {
    innerRef?: React.RefObject<HTMLUListElement>
    children: React.ReactNode
}

export const DropdownMenu = (props: DropdownMenuProps) => {
    const { innerRef, onKeyDown, children, ...rest } = props
    const { classes } = useStyles(styles)

    const listRef = React.useRef<HTMLUListElement>(null)

    const [currentTabIndex, setCurrentTabIndex] = React.useState<number>(0)

    const focusElement = (element: Element) => (element as any).focus()

    const handleKeyDown = (event: React.KeyboardEvent<HTMLUListElement>) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault()

            const currentFocus = listRef.current.ownerDocument.activeElement

            if (event.key === 'ArrowDown') {
                const targetFocus = getNextSibling(currentFocus, (sib) => sib.getAttribute('role') === 'menuitem')
                if (targetFocus) {
                    focusElement(targetFocus)
                }
            }

            if (event.key === 'ArrowUp') {
                const targetFocus = getPreviousSibling(currentFocus, (sib) => sib.getAttribute('role') === 'menuitem')
                if (targetFocus) {
                    focusElement(targetFocus)
                }
            }
        }

        onKeyDown && onKeyDown(event)
    }

    const handleItemFocus = (event: React.FocusEvent<HTMLLIElement>) => {
        const list = listRef.current
        for (let i = 0; i < list.children.length; i += 1) {
            if (list.children[i] === event.currentTarget) {
                setCurrentTabIndex(i)
                break
            }
        }
    }

    return (
        <ul
            ref={composeRefs(listRef, innerRef)}
            className={classes.root}
            role='menu'
            onKeyDown={handleKeyDown}
            {...rest}
        >
            {React.Children.map(children, (child, index) => {
                if (!React.isValidElement(child)) {
                    return child
                }

                return React.cloneElement(child as any, {
                    tabIndex: index === currentTabIndex ? 0 : -1,
                    onFocus: handleItemFocus,
                })
            })}
        </ul>
    )
}

export const styles = (theme: Theme) => ({
    root: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
        border: `1px solid ${theme.pallete.divider}`,
        borderRadius: theme.radius.popper,
        display: 'inline-block',
        width: 'auto',
        minWidth: '150px',
        background: theme.pallete.surface.main,
    } as React.CSSProperties,
})
