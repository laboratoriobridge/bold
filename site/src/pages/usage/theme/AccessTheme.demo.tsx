import { useCss, useTheme } from 'bold-ui'
import React from 'react'

function CustomizeDemo() {
  const theme = useTheme()
  const { css } = useCss()

  return (
    <div className={css({ overflow: 'auto', height: '300px' })}>
      <pre>
        <code>{JSON.stringify(theme, null, 2)}</code>
      </pre>
    </div>
  )
}

export default CustomizeDemo
