import { action } from '@storybook/addon-actions'
import React from 'react'
import { Draggable, KeyMapping } from './Draggable'
import { ItemTypes } from './types/ItemTypes'

export default {
  title: 'Components/Draggable',
}

type Municipio = {
  uf: string
  nome: string
}

const municipioKeyMapping = new Map<keyof Municipio, KeyMapping>([
  ['uf', { keyName: 'UF' }],
  ['nome', { keyName: 'Nome' }],
])

const keyState: Array<keyof Municipio> = ['uf', 'nome']
const key: keyof Municipio = keyState[0]
const keys = new Map<keyof Municipio, string[]>([
  ['uf', ['Santa Catarina', 'Rio Grande do Sul']],
  ['nome', ['São José', 'Florianópolis', 'Alegrete']],
])

export const Default = () => (
  <Draggable<Municipio>
    key={key as string}
    type={ItemTypes.DEFAULT}
    name={key}
    value={municipioKeyMapping.get(key).keyName || (key as string)}
    formatter={municipioKeyMapping.get(key).formatter}
    origin='campos_disponiveis'
    onDragEnd={action('onDragEnd')}
    onKeyNav={action('onKeyNav')}
  />
)

export const Filter = () => (
  <Draggable<Municipio>
    key={key as string}
    type={ItemTypes.FILTER}
    name={key}
    value={municipioKeyMapping.get(key).keyName || (key as string)}
    formatter={municipioKeyMapping.get(key).formatter}
    origin='campos_disponiveis'
    filterValues={keys.get(key)}
    filterState={new Set<string>(['Santa Catarina'])}
    handleFilterUpdate={action('handleFilterUpdate')}
    onDragEnd={action('onDragEnd')}
    onKeyNav={action('onKeyNav')}
  />
)
