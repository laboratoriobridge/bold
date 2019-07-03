import { Button, HFlow } from '../../../../lib'

function ButtonLoading() {
  const handleClick = () => {
    // Simulate a delayed function
    return new Promise(resolve => {
      setTimeout(() => resolve(), 2000)
    })
  }

  return (
    <HFlow alignItems='flex-end'>
      <Button loading>Always loading</Button>
      <Button onClick={handleClick} kind='primary'>
        Click me
      </Button>
    </HFlow>
  )
}

export default ButtonLoading
