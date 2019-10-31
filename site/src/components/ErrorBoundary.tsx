import { Heading, Text, VFlow } from 'bold-ui'
import React from 'react'

export class ErrorBoundary extends React.Component<any, any> {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <VFlow>
          <Heading level={1}>Something went wrong</Heading>
          <Text component='p'>We could not build this page.</Text>
        </VFlow>
      )
    }

    return this.props.children
  }
}
