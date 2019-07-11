import { Button, colors, createTheme, HFlow, Tag, ThemeProvider } from '../../../../lib'

const myTheme = createTheme({
  pallete: {
    primaryScale: colors.pink,
  },
})

function CustomTheme() {
  return (
    <ThemeProvider theme={myTheme}>
      <HFlow>
        <Button kind='primary'>My custom theme!</Button>
      </HFlow>
    </ThemeProvider>
  )
}

export default CustomTheme
