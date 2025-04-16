/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import { Color } from 'csstype'
import { ExternalStyles } from '../../styles'
import { Omit } from '../../util'

export interface ModalHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  background?: Color
  styles?: {
    wrapper?: ExternalStyles
    container?: ExternalStyles
  }
}

export const ModalHeader = (props: ModalHeaderProps) => {
  const { styles: externalStyles, children, ...rest } = props

  return (
    <div css={[externalStyles?.container, styles.header]} {...rest}>
      {children}
    </div>
  )
}

const styles = {
  header: css`
    flex: 1;
    min-width: 0;
    word-break: break-word;
    white-space: normal;
    overflow: hidden;
  `,
}
