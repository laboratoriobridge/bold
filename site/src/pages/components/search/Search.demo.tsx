import { TextField } from 'bold-ui'
import React from 'react'

function SearchEx() {
  return (
    <TextField
      name='iconized'
      id='iconized'
      placeholder='Search for anything. Ex: Hercílio Luz'
      icon='zoomOutline'
      required
    />
  )
}

export default SearchEx
