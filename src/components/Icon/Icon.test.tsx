import { render } from '@testing-library/react'
import React from 'react'

import { Icon } from './Icon'

const customIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <line x1='0' y1='0' x2='200' y2='200' />
  </svg>
)

describe('Icon', () => {
  it('should render correctly', () => {
    const { container } = render(<Icon icon='penOutline' />)
    expect(container).toMatchSnapshot()
  })

  it('should accept size prop', () => {
    expect(render(<Icon icon='bellOutline' size={3} />).container).toMatchSnapshot()
  })

  it('should accept style prop', () => {
    expect(render(<Icon icon='bellOutline' style={{ strokeWidth: 5 }} />).container).toMatchSnapshot()
  })

  it('should accept fill prop', () => {
    expect(render(<Icon icon='bellOutline' fill='danger' />).container).toMatchSnapshot()
  })

  it('should accept stroke prop', () => {
    expect(render(<Icon icon='bellOutline' stroke='alert' />).container).toMatchSnapshot()
  })

  it('should accept custom icon', () => {
    expect(render(<Icon icon={customIcon} />).container).toMatchInlineSnapshot(`
      .emotion-0 {
        fill: currentColor;
        font-size: 1.5rem;
      }

      <div>
        <svg
          aria-hidden="true"
          class="emotion-0"
          height="1em"
          role="img"
          width="1em"
        >
          <line
            x1="0"
            x2="200"
            y1="0"
            y2="200"
          />
        </svg>
      </div>
    `)
  })
})
