import { render } from '@testing-library/react'
import React from 'react'

import { Flow } from './Flow'

it('should render correctly', () => {
  const { container } = render(
    <Flow direction='horizontal'>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </Flow>
  )
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(min-content,max-content);
      gap: 1rem;
      justify-items: start;
    }

    <div>
      <div
        class="emotion-0"
      >
        <span>
          1
        </span>
        <span>
          2
        </span>
        <span>
          3
        </span>
      </div>
    </div>
  `)
})

it('should render children', () => {
  const { getByText } = render(
    <Flow direction='horizontal'>
      <div>Child 1</div>
      <div>Child 2</div>
    </Flow>
  )

  expect(getByText('Child 1')).toBeInTheDocument()
  expect(getByText('Child 2')).toBeInTheDocument()
})

it('should apply horizontal direction', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' data-testid='flow-horizontal'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-horizontal')
  const styles = getComputedStyle(flow)

  expect(styles.display).toBe('grid')
  expect(styles.gridAutoFlow).toBe('column')
})

it('should apply vertical direction', () => {
  const { getByTestId } = render(
    <Flow direction='vertical' data-testid='flow-vertical'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-vertical')
  const styles = getComputedStyle(flow)

  expect(styles.display).toBe('grid')
  expect(styles.gridAutoFlow).toBe('row')
})

it('should apply default gap of 1rem', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' data-testid='flow-with-default-gap'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-with-default-gap')
  const styles = getComputedStyle(flow)

  expect(styles.gap).toBe('1rem')
})

it('should apply custom gap', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' gap={2} data-testid='flow-with-custom-gap'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-with-custom-gap')
  const styles = getComputedStyle(flow)

  expect(styles.gap).toBe('2rem')
})

it('should handle zero gap', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' gap={0} data-testid='flow-with-zero-gap'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-with-zero-gap')
  const styles = getComputedStyle(flow)

  expect(styles.gap).toBe('0rem')
})

it('should apply alignItems', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' alignItems='center' data-testid='flow-with-custom-align-items'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-with-custom-align-items')
  const styles = getComputedStyle(flow)

  expect(styles.alignItems).toBe('center')
})

it('should apply justifyContent', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' justifyContent='space-between' data-testid='flow-with-custom-justify-content'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-with-custom-justify-content')
  const styles = getComputedStyle(flow)

  expect(styles.justifyContent).toBe('space-between')
})

it('should apply justifyItems start by default', () => {
  const { getByTestId } = render(
    <Flow direction='vertical' data-testid='flow-with-default-justify-items'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-with-default-justify-items')
  const styles = getComputedStyle(flow)

  expect(styles.justifyItems).toBe('start')
})

it('should apply custom justifyItems', () => {
  const { getByTestId } = render(
    <Flow direction='vertical' justifyItems='center' data-testid='flow-with-custom-justify-items'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-with-custom-justify-items')
  const styles = getComputedStyle(flow)

  expect(styles.justifyItems).toBe('center')
})

it('should apply gridAutoColumns for horizontal direction', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' data-testid='flow-horizontal'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-horizontal')
  const styles = getComputedStyle(flow)

  expect(styles.gridAutoColumns).toBe('minmax(min-content,max-content)')
})

it('should apply gridAutoRows for vertical direction', () => {
  const { getByTestId } = render(
    <Flow direction='vertical' data-testid='flow-vertical'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-vertical')
  const styles = getComputedStyle(flow)

  expect(styles.gridAutoRows).toBe('minmax(min-content,max-content)')
})

it('should forward HTML attributes', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' data-testid='flow-container' role='group'>
      <div>Child</div>
    </Flow>
  )

  const flow = getByTestId('flow-container')

  expect(flow).toHaveAttribute('role', 'group')
})

it('should accept "style" prop', () => {
  const { getByTestId } = render(
    <Flow direction='horizontal' data-testid='flow-with-background' style={{ background: 'red' }}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </Flow>
  )

  const flow = getByTestId('flow-with-background')

  expect(getComputedStyle(flow).background).toBe('red')
})

it('should forward ref to the underlying element', () => {
  const ref = React.createRef<HTMLDivElement>()

  render(
    <Flow direction='vertical' ref={ref}>
      <span>1</span>
      <span>2</span>
      <span>3</span>
    </Flow>
  )

  expect(ref.current).toBeInstanceOf(HTMLDivElement)
})

it('should allow ref access to DOM methods', () => {
  const ref = React.createRef<HTMLDivElement>()

  render(
    <Flow direction='vertical' ref={ref}>
      Content
    </Flow>
  )

  expect(ref.current).toBeInstanceOf(HTMLDivElement)

  expect(ref.current?.tagName).toBe('DIV')
  expect(ref.current?.textContent).toBe('Content')
})
