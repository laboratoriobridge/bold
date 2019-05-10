import { DropdownButton } from '../../../../lib'

function DropMenuDemo() {
  return (
    <DropdownButton
      size='small'
      skin='outline'
      kind='primary'
      items={[
        { content: 'Edit', onClick: console.log },
        { content: 'Donwload', onClick: console.log },
        {
          content: 'Print',
          onClick: console.log,
          disabled: true,
        },
        { content: 'Delete', onClick: console.log, type: 'danger' },
      ]}
    >
      Options
    </DropdownButton>
  )
}

export default DropMenuDemo
