import { createEvent, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { LocaleContext } from '../../../i18n'
import enUS from '../../../i18n/locales/en-US'
import { KeyMapping } from './types/KeyMapping'
import { FilterDraggable, FilterDraggableProps } from './FilterDraggable'

type Pet = {
  name: string
}

const origin = 'keys_avaible'

const petKeyMapping = new Map<keyof Pet, KeyMapping>([['name', { keyName: 'Name' }]])

const keyState: Array<keyof Pet> = ['name']
const key: keyof Pet = keyState[0]
const keys = new Map<keyof Pet, string[]>([['name', ['Bebel', 'Foguete', 'Scooby-Doo']]])

const createFilterComponent = (props: Partial<FilterDraggableProps<Pet>> = {}) => (
  <LocaleContext.Provider value={enUS}>
    <FilterDraggable<Pet>
      key={key}
      name={key}
      type={'test'}
      onDragEnd={() => {}}
      onKeyNav={() => {}}
      value={petKeyMapping.get(key).keyName}
      origin={origin}
      selectedItems={new Set<string>()}
      filterItems={keys.get(key)}
      onFilterUpdate={() => {}}
      {...props}
    />
  </LocaleContext.Provider>
)

export function DropableDiv(props: any) {
  const [, drag] = useDrop({
    accept: props.type,
    drop() {
      return { result: 'drop' }
    },
    collect: (monitor) => ({
      canDrop: !!monitor.canDrop(),
      isOver: monitor.isOver(),
    }),
  })

  return (
    <div ref={drag} className='dropable'>
      {props.children}
    </div>
  )
}

describe('FilterDraggable', () => {
  describe('render', () => {
    it('should render correctly with no values of selectedItems', () => {
      const { container } = render(createFilterComponent())
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with all values of selectedItems', () => {
      const { container } = render(createFilterComponent({ selectedItems: new Set<string>(keys.get(key)) }))
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with some values of selectedItems', () => {
      const { container } = render(
        createFilterComponent({ selectedItems: new Set<string>(['Bebel']) })
      )
      expect(container).toMatchSnapshot()
    })
  })

  it('should throw an error when the prop filterItems is empty', () => {
    expect(() => {
      render(createFilterComponent({ filterItems: [] }))
    }).toThrowError()
  })

  it('should throw an error when the prop selectedItems contains an item that does not belong to the filterItems', () => {
    expect(() => {
      render(createFilterComponent({ selectedItems: new Set<string>('Mel') }))
    }).toThrowError()
  })

  it('should show the drop down menu when the user clicks on component', () => {
    const { getByRole, getAllByRole, getByText } = render(createFilterComponent())

    const button = getByRole('button')

    fireEvent.click(button)

    expect(button.getAttribute('aria-expanded')).toBeTruthy()

    expect(getAllByRole('menuitem')).toHaveLength(5) // Search + All items + Bebel + Foguete + Scooby-Doo

    expect(getByText('All items')).toBeDefined()
    expect(getByText('Bebel')).toBeDefined()
    expect(getByText('Foguete')).toBeDefined()
    expect(getByText('Scooby-Doo')).toBeDefined()
  })

  it('should close the dropdown menu when the user clicks on the component when it is open', () => {
    const { getByRole, getAllByRole } = render(createFilterComponent())

    const button = getByRole('button')

    fireEvent.click(button) // open

    expect(getAllByRole('checkbox')).toHaveLength(4) // options + all items

    fireEvent.click(button) // close

    expect(() => {
      getAllByRole('checkbox')
    }).toThrowError()
  })

  describe('handleKeyDown', () => {
    it('should call the onKeyNav with direction as up when the user press the ArrowUp key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowUp', code: 'ArrowUp' })
      expect(keyNav).toBeCalledWith('up', origin, 'name')
    })

    it('should call the onKeyNav with direction as down when the user press the ArrowDown key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowDown', code: 'ArrowDown' })
      expect(keyNav).toBeCalledWith('down', origin, 'name')
    })

    it('should call the onKeyNav with direction as left when the user press the ArrowLeft key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowLeft', code: 'ArrowLeft' })
      expect(keyNav).toBeCalledWith('left', origin, 'name')
    })

    it('should call the onKeyNav with direction as right when the user press the ArrowRight key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowRight', code: 'ArrowRight' })
      expect(keyNav).toBeCalledWith('right', origin, 'name')
    })

    it('should call the onKeyNav with null when the user press a non-arrow key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'Enter', code: 'Enter' })
      expect(keyNav).toBeCalledWith(null, origin, 'name')
    })
  })

  describe('handleFilterUpdate', () => {
    describe('handleSelectAll', () => {
      it('should pass a empty set when the user uncheck "all items" checkbox', () => {
        const onFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(
          createFilterComponent({ onFilterUpdate: onFilterUpdate, selectedItems: new Set<string>(keys.get(key)) })
        )

        const button = getByRole('button')

        fireEvent.click(button)

        const allItemsCheckbox = getAllByRole('checkbox')[0]

        fireEvent.click(allItemsCheckbox)

        expect(onFilterUpdate).toBeCalledWith('name', new Set<string>(new Set<string>()))
      })

      it('should pass all values in a set when the user check "all items" checkbox', () => {
        const onFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(createFilterComponent({ onFilterUpdate: onFilterUpdate }))

        const button = getByRole('button')

        fireEvent.click(button)

        const allItemsCheckbox = getAllByRole('checkbox')[0]

        fireEvent.click(allItemsCheckbox)

        expect(onFilterUpdate).toBeCalledWith(
          'name',
          new Set<string>(['Bebel', 'Foguete', 'Scooby-Doo'])
        )
      })
    })

    describe('handleSelect', () => {
      it('should return a set with "Bebel" when the user check its checkbox', () => {
        const onFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(createFilterComponent({ onFilterUpdate: onFilterUpdate }))

        const button = getByRole('button')

        fireEvent.click(button)

        const checkbox = getAllByRole('checkbox')[1]

        fireEvent.click(checkbox)

        expect(onFilterUpdate).toBeCalledWith(
          'name',
          new Set<string>(['Bebel'])
        )
      })

      it('should return an empty set when the user uncheck "Bebel" checkbox', () => {
        const onFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(
          createFilterComponent({
            onFilterUpdate: onFilterUpdate,
            selectedItems: new Set<string>(['Bebel']),
          })
        )

        const button = getByRole('button')

        fireEvent.click(button)

        const checkbox = getAllByRole('checkbox')[1]

        fireEvent.click(checkbox)

        expect(onFilterUpdate).toBeCalledWith('name', new Set<string>())
      })

      it('should return all options when the user check the "Foguete" checkbox', () => {
        const onFilterUpdate = jest.fn()

        const { getByRole, getAllByRole } = render(
          createFilterComponent({
            onFilterUpdate: onFilterUpdate,
            selectedItems: new Set<string>(['Bebel', 'Scooby-Doo']),
          })
        )

        const button = getByRole('button')

        fireEvent.click(button)

        const checkbox = getAllByRole('checkbox')[2]

        fireEvent.click(checkbox)

        expect(onFilterUpdate).toBeCalledWith('name', new Set<string>(keys.get(key)))
      })
    })
  })

  describe('handleSearch', () => {
    it('should show only Scooby-Doo checkbox when the user types "Sco" ', () => {
      const { getByRole, getByPlaceholderText, getAllByRole } = render(createFilterComponent())

      const button = getByRole('button')

      fireEvent.click(button)

      const input = getByPlaceholderText('Search')

      fireEvent.change(input, { target: { value: 'Sco' } })

      expect(getByRole('checkbox').title).toEqual('Scooby-Doo')

      expect(getAllByRole('checkbox')).toHaveLength(1)
    })

    it('should show an empty list when the user types "Mel" ', () => {
      const { getByRole, getByPlaceholderText, getAllByRole } = render(createFilterComponent())

      const button = getByRole('button')

      fireEvent.click(button)

      const input = getByPlaceholderText('Search')

      fireEvent.change(input, { target: { value: 'Mel' } })

      expect(() => {
        getAllByRole('checkbox')
      }).toThrowError()
    })
  })

  describe('events', () => {
    it('should prevent and not propagate the mouse down event when the user make this event on checkbox', () => {
      const { getByRole, getAllByRole } = render(createFilterComponent())

      const button = getByRole('button')

      fireEvent.click(button)

      const checkbox = getAllByRole('checkbox')[1]

      const mouseDownEvent = createEvent.mouseDown(checkbox)

      const spy = spyOn(mouseDownEvent, 'stopPropagation')

      fireEvent(checkbox, mouseDownEvent)

      expect(mouseDownEvent.defaultPrevented).toBeTruthy()

      expect(spy).toBeCalled()
    })

    it('should not propagate the blur event when the user remove the focus on drop down area', () => {
      const { getByRole } = render(createFilterComponent())

      const button = getByRole('button')

      fireEvent.click(button)

      const dropDownArea = getByRole('menu').firstChild

      fireEvent.focus(dropDownArea)

      const blurEvent = createEvent.blur(dropDownArea)

      const spy = spyOn(blurEvent, 'stopPropagation')

      fireEvent(dropDownArea, blurEvent)

      expect(spy).toBeCalled()
    })
  })

  it('should not show invalid values on drop down menu', () => {
    const { getByRole, getAllByRole } = render(
      createFilterComponent({ filterItems: new Array<string>(undefined, '', null) })
    )

    const button = getByRole('button')

    fireEvent.click(button)

    expect(getAllByRole('checkbox')).toHaveLength(1) // only the 'All items' checkbox
  })

  describe('Drag and drop', () => {
    it('should call onDragEnd when the drag event ends', () => {
      const onDragEnd = jest.fn()
      const { container } = render(
        <DndProvider backend={HTML5Backend}>
          <DropableDiv type={'test'}>{createFilterComponent({ onDragEnd: onDragEnd })}</DropableDiv>
          <DropableDiv type={'test'} />
        </DndProvider>
      )

      const dragabble = container.querySelectorAll('div[class*=dropable]')[0].firstChild

      const secondDiv = container.querySelectorAll('div[class*=dropable]')[1]

      fireEvent.dragStart(dragabble)
      fireEvent.dragEnter(secondDiv)
      fireEvent.dragOver(secondDiv)
      fireEvent.drop(secondDiv)
      fireEvent.dragEnd(dragabble)

      expect(onDragEnd).toHaveBeenCalled()
    })
  })
})
