import React from 'react'

import { Flow, FlowProps } from './Flow'

export interface VFlowProps extends FlowProps {}

export function VFlow(props: VFlowProps) {
  return <Flow direction='vertical' vSpacing={1} hSpacing={0} {...props} />
}
