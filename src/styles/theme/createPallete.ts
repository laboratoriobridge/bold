import { Color } from 'csstype'

import { merge } from '../../util'
import { blue, ColorScale, gray, green, orange, red, yellow } from '../colors'

export interface StatusColorMap extends ColorScale {
  main: Color
  background: Color
  onColor: Color
}

export interface Pallete {
  text: { main: Color; secondary: Color; disabled: Color }
  surface: { main: Color; background: Color }
  divider: Color
  primary: ColorScale & { main: Color }
  status: {
    danger: StatusColorMap
    success: StatusColorMap
    info: StatusColorMap
    alert: StatusColorMap
  }
  highlight: Color
  gray: ColorScale
}

export interface PalleteConfig {
  grayScale?: ColorScale
  primaryScale?: ColorScale
  successScale?: ColorScale
  dangerScale?: ColorScale
  alertScale?: ColorScale
  infoScale?: ColorScale
  highlightScale?: ColorScale
}

export const defaultConfig: PalleteConfig = {
  grayScale: gray,
  primaryScale: blue,
  successScale: green,
  dangerScale: red,
  alertScale: orange,
  infoScale: blue,
  highlightScale: yellow,
}

export const createPallete = (userConfig?: PalleteConfig): Pallete => {
  const config = merge({}, defaultConfig, userConfig)

  return {
    gray: config.grayScale,
    divider: config.grayScale.c80,
    highlight: config.highlightScale.c80,
    primary: {
      ...config.primaryScale,
      main: config.primaryScale.c40,
    },
    text: {
      main: config.grayScale.c10,
      secondary: config.grayScale.c40,
      disabled: config.grayScale.c70,
    },
    surface: {
      main: config.grayScale.c100,
      background: config.grayScale.c90,
    },
    status: {
      danger: {
        ...config.dangerScale,
        main: config.dangerScale.c40,
        background: config.dangerScale.c90,
        onColor: config.dangerScale.c100,
      },
      success: {
        ...config.successScale,
        main: config.successScale.c40,
        background: config.successScale.c90,
        onColor: config.successScale.c100,
      },
      info: {
        ...config.infoScale,
        main: config.infoScale.c40,
        background: config.infoScale.c90,
        onColor: config.infoScale.c100,
      },
      alert: {
        ...config.alertScale,
        main: config.alertScale.c40,
        background: config.alertScale.c90,
        onColor: config.alertScale.c100,
      },
    },
  }
}

export type TextColor =
  | 'inherit'
  | 'normal'
  | 'secondary'
  | 'disabled'
  | 'primary'
  | 'danger'
  | 'success'
  | 'info'
  | 'alert'

export const textColorMap: { [key in TextColor]: (pallete: Pallete) => Color } = {
  inherit: pallete => 'inherit',
  normal: pallete => pallete.text.main,
  primary: pallete => pallete.primary.main,
  danger: pallete => pallete.status.danger.main,
  success: pallete => pallete.status.success.main,
  info: pallete => pallete.status.info.main,
  alert: pallete => pallete.status.alert.main,
  secondary: pallete => pallete.text.secondary,
  disabled: pallete => pallete.text.disabled,
}
