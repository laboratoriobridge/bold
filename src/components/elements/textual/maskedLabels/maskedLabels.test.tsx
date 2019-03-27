import React from 'react'
import { render } from 'react-testing-library'

import { Cep, Cpf, Telefone } from './maskedLabels'

describe('Telefone', () => {
  it('deve formatar um telefone corretamente', () => {
    expect(render(<Telefone value='47997773734' />).container.innerHTML).toEqual('(47) 99777-3734')
    expect(render(<Telefone value='4799777373' />).container.innerHTML).toEqual('(47) 9977-7373')
    expect(render(<Telefone value='123' />).container.innerHTML).toEqual('(12) 3')
    expect(
      render(
        <span>
          <Telefone value='' />
        </span>
      ).container.innerText
    ).toBeFalsy()
    expect(
      render(
        <span>
          <Telefone value={null} />
        </span>
      ).container.innerText
    ).toBeFalsy()
  })
})

describe('Cpf', () => {
  it('deve formatar um CPF corretamente', () => {
    expect(render(<Cpf value='08552654938' />).container.innerHTML).toEqual('085.526.549-38')
  })
})

describe('Cep', () => {
  it('deve formatar um CEP corretamente', () => {
    expect(render(<Cep value='88040420' />).container.innerHTML).toEqual('88040-420')
  })
})
