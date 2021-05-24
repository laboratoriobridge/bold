import { createEvent, fireEvent, render } from '@testing-library/react'
import React from 'react'
import { DndProvider, useDrop } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Draggable, DraggableProps } from './Draggable'
import { ItemTypes } from './types/ItemTypes'

type Pet = {
  nome: string
}

type KeyMapping = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

const petKeyMapping = new Map<keyof Pet, KeyMapping>([['nome', { keyName: 'Nome' }]])

const keyState: Array<keyof Pet> = ['nome']
const key: keyof Pet = keyState[0]
const keys = new Map<keyof Pet, string[]>([['nome', ['Bebel', 'Foguete', 'Scooby-Doo']]])

const createFilterComponent = (props: Partial<DraggableProps<Pet>> = {}) => (
  <Draggable<Pet>
    key={key}
    type={ItemTypes.FILTER}
    name={key}
    onDragEnd={() => {}}
    onKeyNav={() => {}}
    value={petKeyMapping.get(key).keyName}
    origin='campos_disponiveis'
    filterState={new Set<string>()}
    filterValues={keys.get(key)}
    handleFilterUpdate={() => {}}
    {...props}
  />
)

function DropableDiv(props: any) {
  const [, drag] = useDrop({
    accept: ItemTypes.FILTER,
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
    it('should render correctly with no values of filterState', () => {
      const { container } = render(createFilterComponent())
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with all values of filterState', () => {
      const { container } = render(createFilterComponent({ filterState: new Set<string>(keys.get(key)) }))
      expect(container).toMatchSnapshot()
    })

    it('should render correctly with some values of filterState', () => {
      const { container } = render(
        createFilterComponent({ filterState: new Set<string>(['Bebel']) })
      )
      expect(container).toMatchSnapshot()
    })
  })

  it('should show the drop down menu when the user clicks on component', () => {
    const { getByRole, getAllByRole, getByText } = render(createFilterComponent())

    const button = getByRole('button')

    fireEvent.click(button)

    expect(button.getAttribute('aria-expanded')).toBeTruthy()

    expect(getAllByRole('menuitem')).toHaveLength(5) // Pesquisa + Todos os itens + Bebel + Foguete + Scooby-Doo

    expect(getByText('Todos os itens')).toBeDefined()
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
      expect(keyNav).toBeCalledWith('up', 'campos_disponiveis', 'nome')
    })

    it('should call the onKeyNav with direction as down when the user press the ArrowDown key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowDown', code: 'ArrowDown' })
      expect(keyNav).toBeCalledWith('down', 'campos_disponiveis', 'nome')
    })

    it('should call the onKeyNav with direction as left when the user press the ArrowLeft key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowLeft', code: 'ArrowLeft' })
      expect(keyNav).toBeCalledWith('left', 'campos_disponiveis', 'nome')
    })

    it('should call the onKeyNav with direction as right when the user press the ArrowRight key', () => {
      const keyNav = jest.fn()
      const { getByRole } = render(createFilterComponent({ onKeyNav: keyNav }))

      fireEvent.keyDown(getByRole('button'), { key: 'ArrowRight', code: 'ArrowRight' })
      expect(keyNav).toBeCalledWith('right', 'campos_disponiveis', 'nome')
    })
  })

  describe('handleFilterUpdate', () => {
    describe('handleSelectAll', () => {
      it('should pass a empty set when the user uncheck "all itens" checkbox', () => {
        const handleFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(
          createFilterComponent({ handleFilterUpdate: handleFilterUpdate, filterState: new Set<string>(keys.get(key)) })
        )

        const button = getByRole('button')

        fireEvent.click(button)

        const allItemsCheckbox = getAllByRole('checkbox')[0]

        fireEvent.click(allItemsCheckbox)

        expect(handleFilterUpdate).toBeCalledWith('nome', new Set<string>(new Set<string>()))
      })

      it('should pass all values in a set when the user check "all items" checkbox', () => {
        const handleFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(createFilterComponent({ handleFilterUpdate: handleFilterUpdate }))

        const button = getByRole('button')

        fireEvent.click(button)

        const allItemsCheckbox = getAllByRole('checkbox')[0]

        fireEvent.click(allItemsCheckbox)

        expect(handleFilterUpdate).toBeCalledWith(
          'nome',
          new Set<string>(['Bebel', 'Foguete', 'Scooby-Doo'])
        )
      })
    })

    describe('handleSelect', () => {
      it('should return a set with "Bebel" when the user check its checkbox', () => {
        const handleFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(createFilterComponent({ handleFilterUpdate: handleFilterUpdate }))

        const button = getByRole('button')

        fireEvent.click(button)

        const checkbox = getAllByRole('checkbox')[1]

        fireEvent.click(checkbox)

        expect(handleFilterUpdate).toBeCalledWith(
          'nome',
          new Set<string>(['Bebel'])
        )
      })

      it('should return an empty set when the user uncheck "Bebel" checkbox', () => {
        const handleFilterUpdate = jest.fn()
        const { getByRole, getAllByRole } = render(
          createFilterComponent({
            handleFilterUpdate: handleFilterUpdate,
            filterState: new Set<string>(['Bebel']),
          })
        )

        const button = getByRole('button')

        fireEvent.click(button)

        const checkbox = getAllByRole('checkbox')[1]

        fireEvent.click(checkbox)

        expect(handleFilterUpdate).toBeCalledWith('nome', new Set<string>())
      })

      it('should return all options when the user check the "Foguete" checkbox', () => {
        const handleFilterUpdate = jest.fn()

        const { getByRole, getAllByRole } = render(
          createFilterComponent({
            handleFilterUpdate: handleFilterUpdate,
            filterState: new Set<string>(['Bebel', 'Scooby-Doo']),
          })
        )

        const button = getByRole('button')

        fireEvent.click(button)

        const checkbox = getAllByRole('checkbox')[2]

        fireEvent.click(checkbox)

        expect(handleFilterUpdate).toBeCalledWith('nome', new Set<string>(keys.get(key)))
      })
    })
  })

  describe('handleSearch', () => {
    it('should show only Scooby-Doo checkbox when the user types "Sco" ', () => {
      const { getByRole, getByPlaceholderText, getByTitle } = render(
        createFilterComponent({ filterValues: new Array<string>('Bebel', 'Foguete', 'Scooby-Doo', 'Cacau', 'Cristal') })
      )

      const button = getByRole('button')

      fireEvent.click(button)

      const input = getByPlaceholderText('Pesquisa')

      fireEvent.change(input, { target: { value: 'Sco' } })

      expect(getByTitle('Scooby-Doo')).toBeDefined()

      expect(() => {
        getByTitle('Bebel')
        getByTitle('Foguete')
        getByTitle('Cacau')
        getByTitle('Cristal')
      }).toThrowError()
    })

    it('should show an empty list when the user types "Mel" ', () => {
      const { getByRole, getByPlaceholderText, getAllByRole } = render(createFilterComponent())

      const button = getByRole('button')

      fireEvent.click(button)

      const input = getByPlaceholderText('Pesquisa')

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
      const { getByRole, getByTitle } = render(createFilterComponent())

      const button = getByRole('button')

      fireEvent.click(button)

      const dropDownArea = getByTitle('dropDownArea')

      fireEvent.focus(dropDownArea)

      const blurEvent = createEvent.blur(dropDownArea)

      const spy = spyOn(blurEvent, 'stopPropagation')

      fireEvent(dropDownArea, blurEvent)

      expect(spy).toBeCalled()
    })
  })

  it('should not show invalid values on drop down menu', () => {
    const { getByRole, getAllByRole } = render(
      createFilterComponent({ filterValues: new Array<string>(undefined, '', null) })
    )

    const button = getByRole('button')

    fireEvent.click(button)

    expect(getAllByRole('checkbox')).toHaveLength(1) // only the 'Todos os itens' checkbox
  })

  describe('Drag and drop', () => {
    it('should call onDragEnd when the drag event ends', () => {
      const onDragEnd = jest.fn()
      const { container } = render(
        <DndProvider backend={HTML5Backend}>
          <DropableDiv>{createFilterComponent({ onDragEnd: onDragEnd })}</DropableDiv>
          <DropableDiv />
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
