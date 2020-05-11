import { useMemo } from 'react'
import { Theme } from '../theme/createTheme'
import { useCss } from './useCss'

export type StyleFactory<Classes extends string> = (
  theme: Theme,
  ...args: any[]
) => { readonly [key in Classes]: React.CSSProperties }

export type ClassNames<Classes extends string> = { readonly [key in Classes]: string }

const emptyStylesFactory: StyleFactory<any> = () => ({})

export const useStyles = <Classes extends string>(
  factory: StyleFactory<Classes> = emptyStylesFactory,
  ...args: any[]
) => {
  const { css, theme } = useCss()

  return useMemo(() => {
    const map = factory(theme, ...args)

    const classes = Object.keys(map).reduce(
      (all, className) => ({
        ...all,
        [className]: css(map[className]),
      }),
      {} as ClassNames<Classes>
    )

    return { classes, css, theme }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...args, css, factory, theme])
}
