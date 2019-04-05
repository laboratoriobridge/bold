import React from 'react'

import { Flow, FlowProps } from './Flow'

export interface HFlowProps extends FlowProps {}

export function HFlow(props: HFlowProps) {
  return <Flow direction='horizontal' vSpacing={0} hSpacing={1} {...props} />
}
