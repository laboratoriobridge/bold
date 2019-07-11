import { LocaleContext, Paginator } from '../../../../lib'
import ptBr from '../../../../lib/i18n/locales/pt-BR'

function LocaleProviderDemo() {
  // Using Paginator as example since it uses strings from locale context internally
  return (
    <LocaleContext.Provider value={ptBr}>
      <Paginator page={5} total={10} />
    </LocaleContext.Provider>
  )
}

export default LocaleProviderDemo
