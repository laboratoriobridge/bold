import { useStyles } from '../styles'

import { useTransition } from './useTransition'

export const useFadeTransition = (enter: boolean, duration: number = 200) => {
  const state = useTransition(enter)
  const { classes, css } = useStyles(() => ({
    default: {
      transition: `opacity ${duration}ms ease-in-out`,
      opacity: 0,
    },
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 1 },
    exited: { opacity: 0 },
  }))

  return css(classes.default, classes[state])
}
