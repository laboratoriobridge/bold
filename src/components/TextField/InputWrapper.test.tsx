import { render } from '@testing-library/react'
import React from 'react'

import { Input } from '../Input'

import { InputWrapper } from './InputWrapper'

it('should render correctly', () => {
  const { container } = render(
    <InputWrapper clearVisible={true}>
      <Input />
    </InputWrapper>
  )
  expect(container).toMatchSnapshot()
})

it('should render correctly with button', () => {
  const { container } = render(
    <InputWrapper icon='zoomOutline' clearVisible={true} onIconClick={jest.fn()}>
      <Input />
    </InputWrapper>
  )
  expect(container).toMatchSnapshot()
})

it('should render correctly with left position', () => {
  const { container } = render(
    <InputWrapper icon='zoomOutline' clearVisible={true} iconPosition='left'>
      <Input />
    </InputWrapper>
  )
  expect(container).toMatchSnapshot()
})

it('should render correctly without clear icon', () => {
  const { container } = render(
    <InputWrapper icon='zoomOutline' clearVisible={false}>
      <Input />
    </InputWrapper>
  )
  expect(container).toMatchSnapshot()
})

it('should render correctly without clear icon AND left position', () => {
  const { container } = render(
    <InputWrapper icon='zoomOutline' clearVisible={false} iconPosition='left'>
      <Input />
    </InputWrapper>
  )
  expect(container).toMatchSnapshot()
})
