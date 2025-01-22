import React from 'react'
import { render } from '@testing-library/react'
import { colors } from '../../styles'
import { ReferenceAreaTick, ReferenceAreaTickProps } from './ReferenceAreaTick'
import { ReferenceAreaWithPercents } from './model'

const defaultReferenceAreaTickProps: Partial<ReferenceAreaTickProps> = {
  x: 10,
  y: 20,
  payload: { value: 1, coordinate: 0, isShow: true, offset: 0, tickCoord: 0 },
  height: 100,
}

const defaultReferenceAreaWithPercents: ReferenceAreaWithPercents<string> = {
  label: { name: 'title' },
  area: [],
  color: colors.blue.c10,
  tick: {},
  stroke: {},
  areaPercents: [{ x: 'x', percent: 10 }],
}

describe('ReferenceAreaTick', () => {
  it('should renders correctly with the default props', () => {
    const { container } = render(
      <ReferenceAreaTick
        refTicks={new Map([[1, defaultReferenceAreaWithPercents]])}
        {...defaultReferenceAreaTickProps}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should renders correctly when label alignment is central', () => {
    const { container } = render(
      <ReferenceAreaTick
        refTicks={
          new Map([
            [
              1,
              {
                ...defaultReferenceAreaWithPercents,
                label: { name: 'name', description: 'description', alignment: 'central' },
              },
            ],
          ])
        }
        {...defaultReferenceAreaTickProps}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should renders correctly when label alignment is central and name or description has more than one line', () => {
    const { container } = render(
      <ReferenceAreaTick
        refTicks={
          new Map([
            [
              1,
              {
                ...defaultReferenceAreaWithPercents,
                label: { name: 'firstLine secondLine', description: 'fisrtLine secondLine', alignment: 'central' },
              },
            ],
          ])
        }
        {...defaultReferenceAreaTickProps}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should renders correctly when set label color', () => {
    const { container } = render(
      <ReferenceAreaTick
        refTicks={
          new Map([[1, { ...defaultReferenceAreaWithPercents, label: { name: 'name', color: colors.red.c10 } }]])
        }
        {...defaultReferenceAreaTickProps}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should renders correctly when tick kind is horizontal', () => {
    const { container } = render(
      <ReferenceAreaTick
        refTicks={new Map([[1, { ...defaultReferenceAreaWithPercents, tick: { kind: 'horizontal' } }]])}
        {...defaultReferenceAreaTickProps}
      />
    )

    expect(container).toMatchSnapshot()
  })
})
