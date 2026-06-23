import React from 'react'

import { ExternalStyles } from '../../styles'
import { Omit } from '../../util'
import { Flow } from '../Flow'

export interface VFlowProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  vSpacing?: number
  style?: ExternalStyles
}

export function VFlow(props: VFlowProps) {
  const { vSpacing, ...rest } = props

  return <Flow direction='vertical' gap={vSpacing} justifyItems='stretch' {...rest} />
}
