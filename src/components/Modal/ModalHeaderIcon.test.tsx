import { render, screen } from '@testing-library/react'
import React from 'react'
import { ModalHeaderIcon } from './ModalHeaderIcon'

describe('ModalHeaderIcon', () => {
  it('should render correctly', () => {
    const { container } = render(<ModalHeaderIcon icon='infoCircleOutline' />)

    expect(container).toMatchInlineSnapshot(`
      .emotion-0 {
        fill: #24252E;
        font-size: 3rem;
      }

      <div>
        <svg
          aria-hidden="true"
          class="emotion-0"
          height="1em"
          role="img"
          viewBox="0 0 24 24"
          width="1em"
        >
          <path
            d="M22 12c0-5.522-4.477-10-10-10S2 6.478 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10zm-2 0a8 8 0 11-16.001 0A8 8 0 0120 12zm-6.5-4.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zM11 17.125c-.002.583.33.875.998.875.668 0 1.002-.292 1.002-.875v-5.25c0-.583-.335-.875-1.004-.875s-1.001.292-.996.875v5.25z"
          />
        </svg>
      </div>
    `)
  })

  it('should render the icon when "icon" is a string (IconImage)', () => {
    render(<ModalHeaderIcon icon='infoCircleOutline' />)
    expect(document.querySelector('svg')).toBeInTheDocument()
  })

  it('should render the icon when "icon" is a SVG (HeaderIconObject)', () => {
    const FakeSvg = (props: React.SVGProps<SVGSVGElement>) => (
      <svg data-testid='fake-svg' {...props}>
        <title>Fake SVG</title>
      </svg>
    )

    render(<ModalHeaderIcon icon={FakeSvg} />)

    const svg = screen.getByTestId('fake-svg')
    expect(svg).toBeInTheDocument()
  })
})
