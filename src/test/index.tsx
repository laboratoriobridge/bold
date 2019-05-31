import React from 'react'
import { Form } from 'react-final-form'

/**
 * Wraps the component with react-final-form's <Form />
 *
 * @param node Component to be wrapped.
 */
export const withForm = (node: React.ReactNode) => {
  const onSubmit = () => undefined
  const render = () => node
  return <Form render={render} onSubmit={onSubmit} />
}
