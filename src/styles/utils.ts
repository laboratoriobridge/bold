import { ColorScale } from './colors'

export const hexToRGB = (hex: string, alpha?: number) => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  } else {
    return `rgb(${r}, ${g}, ${b})`
  }
}

export const invertColorScale = (scale: ColorScale): ColorScale => {
  return {
    c10: scale.c100,
    c20: scale.c90,
    c30: scale.c80,
    c40: scale.c70,
    c50: scale.c60,
    c60: scale.c50,
    c70: scale.c40,
    c80: scale.c30,
    c90: scale.c20,
    c100: scale.c10,
  }
}
