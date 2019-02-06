import { Interpolation } from 'emotion'
import * as React from 'react'
import { Manager, Popper, PopperProps, Reference } from 'react-popper'

import { useTheme } from '../../../styles'
import { Omit } from '../../../util'
import { randomStr } from '../../../util/string'
import { Portal } from '../Portal'
import { RootRef } from '../RootRef'
import { FadeTransition } from '../Transition/FadeTransition'

import { TooltipPopper } from './TooltipPopper'

export interface TooltipProps extends Omit<PopperProps, 'children'> {
    text: string
    style?: Interpolation
    offset?: number
    target?: Element
    children: React.ReactElement<any>
}

export interface TooltipState {
    visible: boolean
}

export const Tooltip = (props: TooltipProps) => {
    const { text, children, offset, style: externalStyle, target, ...rest } = props
    const child = React.Children.only(children)

    const theme = useTheme()

    const tooltipIdRef = React.useRef<string>(null)
    React.useEffect(() => {
        tooltipIdRef.current = `tooltip-${randomStr()}`
    }, [])

    const [visible, setVisible] = React.useState<boolean>(false)
    const handleMouseEnter = (e) => {
        setVisible(true)
        child.props.onMouseEnter && child.props.onMouseEnter(e)
    }
    const handleMouseLeave = (e) => {
        setVisible(false)
        child.props.onMouseLeave && child.props.onMouseLeave(e)
    }
    const handleFocus = (e) => {
        setVisible(true)
        child.props.onFocus && child.props.onFocus(e)
    }
    const handleBlur = (e) => {
        setVisible(false)
        child.props.onBlur && child.props.onBlur(e)
    }

    return (
        <Manager>
            <Reference>
                {({ ref }) => (
                    <RootRef rootRef={ref}>
                        {React.cloneElement(child, {
                            'aria-describedby': visible ? tooltipIdRef.current : undefined,
                            onMouseEnter: handleMouseEnter,
                            onMouseLeave: handleMouseLeave,
                            onFocus: handleFocus,
                            onBlur: handleBlur,
                        })}
                    </RootRef>
                )}
            </Reference>
            {text &&
                <FadeTransition in={visible}>
                    {({ className }) => (
                        visible && (
                            <Portal target={target}>
                                <Popper
                                    modifiers={{
                                        offset: { offset: `0, ${theme.typography.sizes.html * offset}` },
                                    }}
                                    {...rest}
                                >
                                    {({ ref, style, placement }) => (
                                        <div
                                            id={tooltipIdRef.current}
                                            ref={ref}
                                            className={className}
                                            role='tooltip'
                                            style={{
                                                ...style,
                                                zIndex: theme.zIndex.tooltip,
                                            }}
                                            data-placement={placement}
                                        >
                                            <TooltipPopper text={text} style={externalStyle} />
                                        </div>
                                    )}
                                </Popper>
                            </Portal>
                        )
                    )}
                </FadeTransition>
            }
        </Manager>
    )
}

Tooltip.defaultProps = {
    placement: 'top',
    offset: 0.25,
} as Partial<TooltipProps>
