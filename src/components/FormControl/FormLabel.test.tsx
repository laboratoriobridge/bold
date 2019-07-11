import { render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

import { FormLabel } from './'

it('should render correctly', () => {
  expect(render(<FormLabel label='Label' />).container).toMatchSnapshot()
  expect(render(<FormLabel label='Label' htmlFor='test' required />).container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  expect(render(<FormLabel label='Label' style={{ color: 'blue' }} />).container).toMatchSnapshot()
})

it('should allow message customization via locale context', () => {
  const { container } = render(
    <LocaleContext.Provider value={ptBr}>
      <FormLabel label='Label' required />)
    </LocaleContext.Provider>
  )
  expect(container.querySelector('span').getAttribute('title')).toEqual(ptBr.formControl.required)
})
