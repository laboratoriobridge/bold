import { Cell, FormControl, Grid, TextArea } from '../../../../lib'

function TextAreaDemo() {
  return (
    <Grid>
      <Cell size={6}>
        <FormControl label='Post body' required>
          <TextArea name='empty' placeholder='Enter the body of your post' required />
        </FormControl>
      </Cell>
      <Cell size={6}>
        <FormControl label='Comment'>
          <TextArea name='disabled' disabled />
        </FormControl>
      </Cell>
    </Grid>
  )
}

export default TextAreaDemo
