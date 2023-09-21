import React, { CSSProperties, useEffect, useState } from 'react'

import { useLocale } from '../../i18n'
import { Theme, useStyles } from '../../styles'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { TextInput } from '../TextField'

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

  /**
   * Customize the maxLength prop of the paginator input.
   */
  maxLength?: number
}

export function Paginator(props: PaginatorProps) {
  const { page, total, onChange, maxLength } = props
  const locale = useLocale()

  const [inputValue, setInputValue] = useState<string>(`${page + 1}`)
  useEffect(() => {
    setInputValue(`${page + 1}`)
  }, [page])

  const { classes } = useStyles(createStyles)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.replace(/[^\d]/g, ''))
  }

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      applyInputValue()
    }
  }

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    applyInputValue()
  }

  const applyInputValue = () => {
    const inputNumber = parseInt(inputValue, 10)
    if (!isNaN(inputNumber) && inputNumber !== currentPage() && inputNumber >= 1 && inputNumber <= total) {
      onChange && onChange(inputNumber - 1)
    } else {
      setInputValue(`${page + 1}`)
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
        title={locale.paginator.previousPage}
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
        maxLength={maxLength ?? 4}
        title={locale.paginator.currentPage}
      />

      <Text>
        {locale.paginator.of} {total}
      </Text>

      <Button
        style={classes.rightButton}
        size='small'
        skin='ghost'
        disabled={isLastPage()}
        title={locale.paginator.nextPage}
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

export const createStyles = (theme: Theme) => ({
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
    width: Number(40 + 4 * 7), // 40? + inputValue.length * 7
    textAlign: 'center',
    margin: '0 0.5rem 0 0.25rem',
  } as CSSProperties,
  leftButton: {} as CSSProperties,
  rightButton: {
    marginLeft: '0.25rem',
  } as CSSProperties,
})
