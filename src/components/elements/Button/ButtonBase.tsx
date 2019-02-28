import React from 'react'

import { isPromise } from '../../../util'

export type OnClickWithReturn = (event: React.SyntheticEvent<any>) => any

export interface ButtonBaseProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerRef?: React.Ref<HTMLButtonElement>
  onClick?: React.ButtonHTMLAttributes<HTMLButtonElement>['onClick'] | OnClickWithReturn
  render?(props: ButtonBaseRenderProps): React.ReactNode
  onLoadingChange?(loading: boolean): void
}

export interface ButtonBaseRenderProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  innerRef?: React.Ref<HTMLButtonElement>
}

export const ButtonBase = (props: ButtonBaseProps) => {
  const { onClick, render, onLoadingChange, ...rest } = props

  const startLoading = () => {
    onLoadingChange && onLoadingChange(true)
  }

  const stopLoading = () => {
    setTimeout(() => {
      onLoadingChange && onLoadingChange(false)
    })
  }

  const handleClick = (event: React.MouseEvent<any>) => {
    if (onClick) {
      const promise = onClick(event)
      if (isPromise(promise)) {
        startLoading()
        promise
          .then(() => stopLoading())
          .catch(error => {
            this.stopLoading()
            throw new Error(error)
          })
      }
    }
  }

  return <>{render({ ...rest, onClick: handleClick })}</>
}

ButtonBase.defaultProps = {
  render: ({ innerRef, ...rest }: ButtonBaseRenderProps) => {
    return <button ref={innerRef} {...rest} />
  },
} as ButtonBaseProps
