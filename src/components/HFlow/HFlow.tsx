import React from 'react'

import { ExternalStyles } from '../../styles'
import { Omit } from '../../util'
import { Flow } from '../Flow'
import { AlignItems, JustifyContent } from '../Grid'

export interface HFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  hSpacing?: number
  alignItems?: AlignItems
  justifyContent?: JustifyContent
  style?: ExternalStyles
}

export function HFlow(props: HFlowProps) {
  const { hSpacing, ...rest } = props

  return <Flow direction='horizontal' gap={hSpacing} {...rest} />
}
