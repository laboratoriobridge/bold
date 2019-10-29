import { LocaleContext, Paginator } from 'bold-ui'
import ptBr from 'bold-ui/i18n/locales/pt-BR'
import React from 'react'

function LocaleProviderDemo() {
  // Using Paginator as example since it uses strings from locale context internally
  return (
    <LocaleContext.Provider value={ptBr}>
      <Paginator page={5} total={10} />
    </LocaleContext.Provider>
  )
}

export default LocaleProviderDemo
