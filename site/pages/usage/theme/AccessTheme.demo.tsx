import { useCss, useTheme } from '../../../../lib'

function CustomizeDemo() {
  const theme = useTheme()
  const { css } = useCss()

  return (
    <div className={css({ overflow: 'auto', height: '300px' })}>
      <pre>
        <code>{JSON.stringify(theme, null, 2)}</code>
      </pre>
    </div>
  )
}

export default CustomizeDemo
