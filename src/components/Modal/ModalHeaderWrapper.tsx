/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Color } from 'csstype'
import { ReactNode } from 'react'
import { ExternalStyles, Theme, useTheme } from '../../styles'
import { ModalCloseButton } from './ModalCloseButton'

interface ModalHeaderWrapperProps {
  background?: Color
  style?: ExternalStyles
  hasCloseIcon?: boolean
  onClose?(): any
  hasHeader?: boolean
  children?: ReactNode
}

export const ModalHeaderWrapper = (props: ModalHeaderWrapperProps) => {
  const { background, style: externalStyles, hasCloseIcon, onClose, hasHeader, children } = props

  const theme = useTheme()
  const styles = createStyles(theme, background)

  return hasHeader ? (
    <div css={[styles.headerWrapper, externalStyles]}>
      {children}
      {hasCloseIcon && <ModalCloseButton onClose={onClose} />}
    </div>
  ) : (
    hasCloseIcon && <ModalCloseButton onClose={onClose} style={styles.buttonClose} />
  )
}

const createStyles = (theme: Theme, background?: Color) => ({
  headerWrapper: css`
    position: relative;
    display: flex;
    align-items: flex-start;
    width: 100%;
    height: fit-content;
    padding: 1.5rem 1rem 1.5rem 2rem;
    gap: 1rem;
    align-items: center;
    background-color: ${background || theme.pallete.surface.main};
    box-shadow: 0 1px 5px 0 ${theme.pallete.divider}, 0 2px 1px -1px ${theme.pallete.divider};
    z-index: 1;
  `,
  buttonClose: css`
    float: right;
    margin-top: 0.5rem;
    margin-right: 0.5rem;
  `,
})
