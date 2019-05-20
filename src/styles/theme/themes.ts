import { invertColorScale } from '../utils'

import { defaultConfig } from './createPallete'
import { createTheme } from './createTheme'

export const lightTheme = createTheme()

export const darkTheme = createTheme({
  pallete: {
    primaryScale: invertColorScale(defaultConfig.primaryScale),
    grayScale: invertColorScale(defaultConfig.grayScale),
    alertScale: invertColorScale(defaultConfig.alertScale),
    dangerScale: invertColorScale(defaultConfig.dangerScale),
    infoScale: invertColorScale(defaultConfig.infoScale),
    successScale: invertColorScale(defaultConfig.successScale),
    highlightScale: invertColorScale(defaultConfig.highlightScale),
  },
})
