import { render } from '@testing-library/react'
import React from 'react'

import { HeadingSection } from './HeadingSection'

it('should render correctly', () => {
  expect(
    render(
      <HeadingSection level={1} title='Heading section title 1'>
        Content section 1
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <HeadingSection level={2} title='Heading section title 2'>
        Content section 2
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <HeadingSection level={3} title='Heading section title 3'>
        Content section 3
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <HeadingSection level={4} title='Heading section title 4'>
        Content section 4
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <HeadingSection level={5} title='Heading section title 5'>
        Content section 5
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
  expect(
    render(
      <HeadingSection level={6} title='Heading section title 6'>
        Content section 6
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
})

it('should accept color prop', () => {
  expect(
    render(
      <HeadingSection level={1} title='Heading section title 1' color='primary'>
        Content section 1
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
})

it('should accept style prop', () => {
  expect(
    render(
      <HeadingSection level={1} title='Heading section title 1' style={{ color: 'red' }}>
        Content section 1
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
})

it('should accept vSpace prop', () => {
  expect(
    render(
      <HeadingSection title={'Some title'} level={1} vSpace={10}>
        Content section 1
      </HeadingSection>
    ).container
  ).toMatchSnapshot()
})
