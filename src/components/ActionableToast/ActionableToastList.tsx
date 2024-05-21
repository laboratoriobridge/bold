import React, { CSSProperties, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '../../styles'
import { ActionableToast } from './ActionableToast'

export function ActionableToastList({ data, position, removeToast }) {
  const listRef = useRef(null)
  const { classes } = useStyles(createStyles)

  const handleScrolling = (el) => {
    const isTopPosition = ['top-left', 'top-right'].includes(position)
    if (isTopPosition) {
      el?.scrollTo(0, el.scrollHeight)
    } else {
      el?.scrollTo(0, 0)
    }
  }

  useEffect(() => {
    handleScrolling(listRef.current)
  }, [position, data, handleScrolling])

  const sortedData = position.includes('bottom') ? [...data].reverse() : [...data]

  return (
    sortedData.length > 0 && (
      <div className={classes.container} aria-live='assertive' ref={listRef}>
        {sortedData.map((toast) => (
          <ActionableToast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    )
  )
}

ActionableToastList.defaultProps = {
  position: 'top-right',
}

ActionableToastList.propTypes = {
  data: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
  removeToast: PropTypes.func.isRequired,
}

const createStyles = () => ({
  container: {
    position: 'fixed',
    padding: '0.5rem',
    width: '100%',
    maxWidth: '400px',
    maxHeight: '100vh',
    overflow: 'hidden auto',
    top: 0,
    right: 0,
  } as CSSProperties,
})
