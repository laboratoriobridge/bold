import React, { CSSProperties } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '../../styles'

export function ActionableToast({ message, type, onClose }) {
  const { classes } = useStyles(createStyles)
  return (
    <div className={classes.container} role='alert'>
      <div className={classes.toastMessage}>
        <p>{message}</p>
      </div>
      <button className='toast-close-btn' onClick={onClose}>
        <span className='icon'></span>
      </button>
    </div>
  )
}

ActionableToast.defaultProps = {
  type: 'success',
  message: 'Add a meaningful toast message here.',
}

ActionableToast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}

const createStyles = () => ({
  container: {
    borderRadius: 0.5,
    position: 'relative',
    marginTop: '1rem',
  } as CSSProperties,
  toastMessage: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'top',
  } as CSSProperties,
})
