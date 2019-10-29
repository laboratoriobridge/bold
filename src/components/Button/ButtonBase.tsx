import React from 'react'

import { isPromise } from '../../util'

export type OnClickWithReturn = (event: React.SyntheticEvent<any>) => any

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerRef?: React.Ref<HTMLButtonElement>
  component?: React.ElementType
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'] | OnClickWithReturn
  onLoadingChange?(loading: boolean): void
}

export function ButtonBase(props: ButtonBaseProps) {
  const { component: Component, innerRef, onClick, onLoadingChange, ...rest } = props

  const startLoading = () => {
    onLoadingChange && onLoadingChange(true)
  }

  const stopLoading = () => {
    onLoadingChange && onLoadingChange(false)
  }

  const handleClick = (event: React.MouseEvent<any>) => {
    if (onClick) {
      const promise = onClick(event)
      if (isPromise(promise)) {
        startLoading()
        promise.finally(() => stopLoading())
      }
    }
  }

  return (
    <Component ref={innerRef} onClick={handleClick} type={Component === 'button' ? 'button' : undefined} {...rest} />
  )
}

ButtonBase.defaultProps = {
  component: 'button',
} as ButtonBaseProps
