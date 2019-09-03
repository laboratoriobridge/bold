import { Interpolation } from 'emotion'

import * as palletes from './colors'

export { DefaultGlobalCss, GlobalCss } from './global/GlobalCss'
export * from './hooks'
export * from './theme'
export * from './utils'

export const colors = palletes

export type ExternalStyles = Interpolation
