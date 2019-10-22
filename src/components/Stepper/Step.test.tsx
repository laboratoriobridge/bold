import { render } from '@testing-library/react'
import React from 'react'

import { Step } from './Step'

it('should render correctly when status is incompleted', () => {
  const { container } = render(<Step status='incompleted'>Incompleted step</Step>)
  expect(container).toMatchSnapshot()
})

it('should render correctly when status is completed', () => {
  const { container } = render(<Step status='completed'>Completed step</Step>)
  expect(container).toMatchSnapshot()
})

it('should render correctly when status is active', () => {
  const { container } = render(<Step status='active'>Active step</Step>)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<Step style={{ color: 'red' }}>Step red</Step>)
  expect(container).toMatchSnapshot()
})

it('should allow override of components', () => {
  const RootOverride = props => <span id='root' {...props} />
  const ConnectorOverride = props => <span id='connector' {...props} />
  const IconOverride = props => <span id='icon' {...props} />
  const IconContainerOverride = props => <span id='icon-container' {...props} />
  const LabelOverride = props => <span id='label' {...props} />

  const { container } = render(
    <Step
      overrides={{
        Root: RootOverride,
        Connector: ConnectorOverride,
        Icon: IconOverride,
        IconContainer: IconContainerOverride,
        Label: LabelOverride,
      }}
    >
      Step with overrides
    </Step>
  )
  expect(container).toMatchSnapshot()
})

it('should not render Connector when "hasConnector" props is false', () => {
  const Connector = props => <span id='connector' />

  const { rerender, container } = render(
    <Step overrides={{ Connector }} hasConnector={false}>
      Step with no connector
    </Step>
  )
  expect(container.querySelector('#connector')).toBeFalsy()

  rerender(
    <Step overrides={{ Connector }} hasConnector>
      Step with no connector
    </Step>
  )
  expect(container.querySelector('#connector')).toBeTruthy()
})
