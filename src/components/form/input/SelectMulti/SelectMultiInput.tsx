import * as React from 'react'

import { Styles, withStyles, WithStylesProps } from '../../../../styles'
import { Input, InputProps } from '../Input/Input'
import { createStyles, TextInputProps } from '../TextInput/TextInput'

import { SelectMultiItem } from './SelectMultiItem'

export interface SelectMultiInputProps<T> extends InputProps, WithStylesProps {
    items: T[]
    status?: TextInputProps['status']
    renderItem(item: T): React.ReactNode
    onRemoveItem(item: T): void
}

@withStyles
export class SelectMultiInput<T> extends React.Component<SelectMultiInputProps<T>> {
    private inputRef = React.createRef<HTMLInputElement>()

    render() {
        const { css, theme, items, renderItem, onRemoveItem, status, ...rest } = this.props
        const textInputStyles = createStyles(theme)
        const styles: Styles = {
            wrapper: {
                ...textInputStyles.input,
                cursor: 'text',

                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',

                padding: items.length > 0 ? 'calc(0.25rem - 1px) 0.25rem' : 'calc(0.5rem - 1px) 0.5rem',
                '&:focus-within': textInputStyles.input[':not(:disabled):focus'],
            },
            error: {
                ...textInputStyles.error,
                '&:focus-within': textInputStyles.error[':not(:disabled):focus'],
            },
            item: {
                marginRight: '0.25rem',
            },
            input: {
                padding: 0,
                flex: 1,
                border: 0,
                outline: 0,
            },
        }

        return (
            <div className={css(styles.wrapper, status === 'error' && styles.error)} onClick={this.handleWrapperClick}>
                {items.map((item, key) => (
                    <SelectMultiItem
                        key={key}
                        onRemove={this.handleRemove(item)}
                        style={styles.item}
                    >
                        {renderItem(item)}
                    </SelectMultiItem>
                ))}
                <Input
                    type='text'
                    inputRef={this.inputRef}
                    className={css(styles.input)}
                    {...rest}
                />
            </div>
        )
    }

    handleRemove = (item: T) => () => this.props.onRemoveItem(item)
    handleWrapperClick = () => this.inputRef.current.focus()
}
