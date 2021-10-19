import { Theme } from '../../../styles'

export const draggableCreateStyles = (theme: Theme) => ({
  button: {
    border: `solid 1px ${theme.pallete.gray.c60}`,
    color: theme.pallete.gray.c10,
    borderRadius: '2px',
    boxShadow: theme.shadows.outer[10],
    paddingLeft: '0px',
    fontSize: '13px',
  },

  dndBox: {
    display: 'inline-block',
    margin: '0.25rem 0.25rem',
  },

  dndBoxDragging: {
    boxShadow: theme.shadows.outer[10],
  },

  dropdownItem: {
    width: '100%',
    cursor: 'pointer',
    borderTop: `1px solid ${theme.pallete.gray.c80}`,
    padding: '0.25rem',
  },

  dropdownArea: {
    maxHeight: '12rem',
    overflow: 'auto',
  },

  dropdown: {
    padding: '0rem',
  },

  search: {
    padding: '0.5rem',
  },

  noOutline: {
    outlineColor: theme.pallete.surface.main,
  },
})
