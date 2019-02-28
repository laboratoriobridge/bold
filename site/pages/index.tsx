import { Button, Tag, Tooltip } from 'bridge-react/lib'
import React from 'react'

export default () => {
  return (
    <div>
      Hellow! <Tag>Lalla</Tag>
      <Tooltip text='lalala'>
        <Button>Lallaal</Button>
      </Tooltip>
    </div>
  )
}
