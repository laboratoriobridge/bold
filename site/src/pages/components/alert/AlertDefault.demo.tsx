import { Alert, VFlow } from 'bold-ui'
import React from 'react'

function AlertDefault() {
  return (
    <VFlow>
      <Alert type='info' onCloseClick={console.log}>
        Information message
      </Alert>
      <Alert type='success' onCloseClick={console.log}>
        Success message
      </Alert>
      <Alert type='warning' onCloseClick={console.log}>
        Alert message
      </Alert>
      <Alert type='danger' onCloseClick={console.log}>
        Error message
      </Alert>
    </VFlow>
  )
}

export default AlertDefault
