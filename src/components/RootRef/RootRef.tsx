import React from 'react'
import { findDOMNode } from 'react-dom'

import { setRef } from '../../util/react'

export interface RootRefProps<T extends Element = Element> {
  rootRef: React.Ref<T>
  children: React.ReactElement<any>
}

/**
 * Helper component to allow attaching a ref to a
 * wrapped element to access the underlying DOM element.
 *
 * From Material's UI RootRef component
 */
export class RootRef<T extends Element = Element> extends React.Component<RootRefProps<T>> {
  private ref: any

  componentDidMount() {
    this.ref = findDOMNode(this)
    setRef(this.props.rootRef, this.ref)
  }

  componentDidUpdate(prevProps) {
    const ref = findDOMNode(this)

    if (prevProps.rootRef !== this.props.rootRef || this.ref !== ref) {
      if (prevProps.rootRef !== this.props.rootRef) {
        setRef(prevProps.rootRef, null)
      }

      this.ref = ref
      setRef(this.props.rootRef, this.ref)
    }
  }

  componentWillUnmount() {
    this.ref = null
    setRef(this.props.rootRef, null)
  }

  render() {
    return this.props.children
  }
}