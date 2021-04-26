import React from 'react'
import { Button } from '../Button'
import { Tag } from '../Tag'
import { Box } from './Box'

export default {
  title: 'Components/Box',
}

export const Linhas = () => (
  <Box label='Linhas' icon='hamburguerMenu'>
    <Button kind='primary' size='small'>
      Linha1
    </Button>
  </Box>
)

export const Colunas = () => (
  <Box label='Colunas' icon='hamburguerMenu' rotation='90'>
    <Tag type='success'>Coluna1</Tag>
  </Box>
)
