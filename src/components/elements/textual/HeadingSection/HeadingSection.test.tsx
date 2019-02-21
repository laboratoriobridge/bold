import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'

import { HeadingSection } from './HeadingSection'

it('should render correctly', () => {
    expect(render(withTheme(
        <HeadingSection level={1} title='Heading section title 1'>Content section 1</HeadingSection>
    ))).toMatchSnapshot()
    expect(render(withTheme(
        <HeadingSection level={2} title='Heading section title 2'>Content section 2</HeadingSection>
    ))).toMatchSnapshot()
    expect(render(withTheme(
        <HeadingSection level={3} title='Heading section title 3'>Content section 3</HeadingSection>
    ))).toMatchSnapshot()
    expect(render(withTheme(
        <HeadingSection level={4} title='Heading section title 4'>Content section 4</HeadingSection>
    ))).toMatchSnapshot()
    expect(render(withTheme(
        <HeadingSection level={5} title='Heading section title 5'>Content section 5</HeadingSection>
    ))).toMatchSnapshot()
    expect(render(withTheme(
        <HeadingSection level={6} title='Heading section title 6'>Content section 6</HeadingSection>
    ))).toMatchSnapshot()
})

it('should accept color prop', () => {
    expect(render(withTheme(
        <HeadingSection level={1} title='Heading section title 1' color='primary'>
            Content section 1
        </HeadingSection>
    ))).toMatchSnapshot()
})

it('should accept style prop', () => {
    expect(render(withTheme(
        <HeadingSection level={1} title='Heading section title 1' style={{ color: 'red' }}>
            Content section 1
        </HeadingSection>
    ))).toMatchSnapshot()
})
