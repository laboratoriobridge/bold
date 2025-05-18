/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Color } from 'csstype'
import { Theme, useTheme } from '../../styles'
import { Heading } from '../Heading'
import { ModalCloseButton } from './ModalCloseButton'

export type ModalTitleType = string | JSX.Element

export interface ModalHeaderProps {
  title: ModalTitleType
  backgroundColor?: Color
  hasCloseIcon?: boolean
  onClose: () => void
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { title, backgroundColor, hasCloseIcon, onClose } = props

  const theme = useTheme()
  const styles = createStyles(theme, backgroundColor)

  return (
    <div css={styles.header}>
      {typeof title === 'string' ? <Heading level={1}>{title}</Heading> : title}
      {hasCloseIcon && <ModalCloseButton onClose={onClose} />}
    </div>
  )
}

const createStyles = (theme: Theme, backgroundColor: Color) => ({
  header: css`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    padding: 1.5rem 1rem 1.5rem 2rem;
    gap: 1rem;
    align-items: center;
    background-color: ${backgroundColor || theme.pallete.surface.background};
    box-shadow: 0 1px 5px 0 ${theme.pallete.divider}, 0 2px 1px -1px ${theme.pallete.divider};
    z-index: 1;
  `,
})
