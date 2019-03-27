import { createMemoryHistory, MemoryHistory } from 'history'
import React from 'react'
import { Form } from 'react-final-form'
import { Router } from 'react-router'

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

/**
 * Wraps the component with react-router's <Router />.
 *
 * @param node Component to be wrapped.
 * @param history History to be used by the router. Uses history's `createMemoryHistory` as default
 */
export const withRouter = (node: React.ReactNode, history: MemoryHistory = createMemoryHistory()) => {
  return <Router history={history}>{node}</Router>
}
