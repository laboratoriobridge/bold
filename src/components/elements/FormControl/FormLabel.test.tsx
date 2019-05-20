import React from 'react'
import { render } from 'react-testing-library'

import { LocaleContext } from '../../../locale'
import ptBr from '../../../locale/locales/pt-BR'

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
