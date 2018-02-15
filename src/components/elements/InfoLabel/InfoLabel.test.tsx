import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { InfoLabel } from './InfoLabel'

it('deve renderizar corretamente', () => {
    expect(render(withTheme(
        <InfoLabel title='Test'>Content</InfoLabel>
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <InfoLabel title='Test' titleStyles={{ color: 'red' }}>Content</InfoLabel>
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <InfoLabel title='Test' childStyles={{ color: 'blue' }}>Content</InfoLabel>
    ))).toMatchSnapshot()
})

it('deve aceitar a prop placeholder', () => {
    expect(render(withTheme(
        <InfoLabel title='Test' placeholder='Nenhum valor informado' />
    ))).toMatchSnapshot()
})
