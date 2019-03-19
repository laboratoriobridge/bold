import React, { CSSProperties, useEffect, useState } from 'react'

import { Theme, useStyles } from '../../../styles'
import { TextInput } from '../../form/input/TextInput/TextInput'
import { Button } from '../Button'
import { Icon } from '../Icon'

export interface PaginatorProps {
  /**
   * Current page. 0-indexed.
   */
  page: number

  /**
   * Total number of pages.
   */
  total: number

  /**
   * Called when the current page is changed.
   */
  onChange?(page: number): void
}

export const Paginator = (props: PaginatorProps) => {
  const { page, total, onChange } = props

  const [inputValue, setInputValue] = useState<number>(0)
  useEffect(() => {
    setInputValue(page + 1)
  }, [page])

  const { classes } = useStyles(createStyles, inputValue)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(parseInt(e.target.value, 10))

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      applyInputValue()
    }
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    applyInputValue()
  }

  const applyInputValue = () => {
    if (inputValue !== currentPage()) {
      if (inputValue >= 1 && inputValue <= total) {
        onChange && onChange(inputValue - 1)
      } else {
        setInputValue(page + 1)
      }
    }
  }

  const currentPage = () => page + 1
  const isLastPage = () => currentPage() >= total
  const isFirstPage = () => currentPage() <= 1

  const go = (newPage: number) => onChange && onChange(newPage - 1)
  const previous = () => go(currentPage() - 1)
  const next = () => go(currentPage() + 1)

  return (
    <div className={classes.paginator}>
      <Button
        style={classes.leftButton}
        size='small'
        skin='ghost'
        disabled={isFirstPage()}
        title='Página anterior'
        onClick={!isFirstPage() ? previous : undefined}
      >
        <Icon icon='angleLeft' />
      </Button>

      <TextInput
        style={classes.input}
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        onKeyDown={handleInputKeyPress}
        clearable={false}
      />

      <span>de {total}</span>

      <Button
        style={classes.rightButton}
        size='small'
        skin='ghost'
        disabled={isLastPage()}
        title='Próxima página'
        onClick={!isLastPage() ? next : undefined}
      >
        <Icon icon='angleRight' />
      </Button>
    </div>
  )
}

Paginator.defaultProps = {
  onChange: (page: number) => null,
} as Partial<PaginatorProps>

export const createStyles = (theme: Theme, inputValue: number) => ({
  paginator: {
    display: 'inline-flex',
    alignItems: 'center',
    margin: 0,
  } as CSSProperties,
  disabled: {
    color: theme.pallete.text.disabled,
    cursor: 'not-allowed',
    '&:hover': {
      background: 'transparent',
    },
  } as CSSProperties,
  input: {
    width: 40 + (inputValue && inputValue.toString().length * 7),
    textAlign: 'center',
    margin: '0 0.5rem 0 0.25rem',
  } as CSSProperties,
  leftButton: {} as CSSProperties,
  rightButton: {
    marginLeft: '0.25rem',
  } as CSSProperties,
})
