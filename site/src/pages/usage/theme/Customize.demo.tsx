import { Button, darkTheme, HFlow, ThemeProvider } from 'bold-ui'
import React from 'react'

function CustomizeDemo() {
  return (
    <ThemeProvider theme={darkTheme}>
      <HFlow>
        <Button kind='primary'>Hello</Button>
        <Button>Dark theme!</Button>
      </HFlow>
    </ThemeProvider>
  )
}

export default CustomizeDemo
