import { action } from '@storybook/addon-actions'
import React from 'react'
import { Draggable } from './Draggable'
import { ItemTypes } from './types/ItemTypes'

export default {
  title: 'Components/Draggable',
}

export type Municipio = {
  uf: string
  nome: string
}

export type KeyMapping = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
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
    filterState={new Set<string>()}
    handleFilterUpdate={action('handleFilterUpdate')}
    onDragEnd={action('onDragEnd')}
    onKeyNav={action('onKeyNav')}
  />
)
