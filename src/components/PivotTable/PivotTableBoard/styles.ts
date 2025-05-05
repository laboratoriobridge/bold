import { css } from 'emotion'
import { Theme } from '../../../styles'
import { blue } from '../../../styles/colors'

export const pivotTableBoardCreateStyles = (theme: Theme) => ({
  tag: css`
    background-color: ${blue.c90};
    color: ${blue.c40};
    border: solid 1px ${blue.c40};
    margin-left: 0.5rem;
    margin-bottom: 0.25rem;
  `,
  tagsContainer: css`
    display: flex;
    flex-wrap: wrap;
  `,
  aggregatorsContainer: css`
    padding: 0.75rem;
    margin: 0.25rem;
    min-height: 7.18rem;
  `,
  filtersContainer: css`
    border: 1px solid ${theme.pallete.gray.c80};
    padding: 0.75rem 1.25rem;
  `,
})
