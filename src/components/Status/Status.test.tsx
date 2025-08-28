import { render } from '@testing-library/react'
import React from 'react'
import { Status } from './Status'

it('should render correctly with type info', () => {
  const { container } = render(<Status type='info' text='Information.' />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-2 {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(min-content,max-content);
      grid-gap: 0.5rem;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      color: #0069D0;
    }

    .emotion-0 {
      fill: currentColor;
      font-size: 1rem;
    }

    .emotion-1 {
      font-family: "IBM Plex Sans",sans-serif;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #24252E;
      color: inherit;
    }

    <div>
      <div
        class="emotion-2"
      >
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
        <span
          class="emotion-1"
        >
          Information.
        </span>
      </div>
    </div>
  `)
})

it('should render correctly with type success', () => {
  const { container } = render(<Status type='success' text='Success message.' />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      fill: currentColor;
      font-size: 1rem;
    }

    .emotion-1 {
      font-family: "IBM Plex Sans",sans-serif;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #24252E;
      color: inherit;
    }

    .emotion-2 {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(min-content,max-content);
      grid-gap: 0.5rem;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      color: #217B00;
    }

    <div>
      <div
        class="emotion-2"
      >
        <svg
          aria-hidden="true"
          class="emotion-0"
          height="1em"
          role="img"
          viewBox="0 0 24 24"
          width="1em"
        >
          <path
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.522-4.477 10-10 10S2 17.522 2 12zm2 0a8 8 0 1016 0 8 8 0 00-16 0zm11.294-3.707a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0l-3.001-3.001a1 1 0 011.414-1.414l2.294 2.294 5.293-5.293z"
          />
        </svg>
        <span
          class="emotion-1"
        >
          Success message.
        </span>
      </div>
    </div>
  `)
})

it('should render correctly with type warning', () => {
  const { container } = render(<Status type='warning' text='Alert message.' />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      fill: currentColor;
      font-size: 1rem;
    }

    .emotion-1 {
      font-family: "IBM Plex Sans",sans-serif;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #24252E;
      color: inherit;
    }

    .emotion-2 {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(min-content,max-content);
      grid-gap: 0.5rem;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      color: #AD5000;
    }

    <div>
      <div
        class="emotion-2"
      >
        <svg
          aria-hidden="true"
          class="emotion-0"
          height="1em"
          role="img"
          viewBox="0 0 24 24"
          width="1em"
        >
          <path
            d="M12.922 2.622c-.426-.83-1.418-.83-1.844 0l-8.91 17.354c-.454.88.067 2.024.921 2.024h17.822c.854 0 1.375-1.144.922-2.024l-8.91-17.354h-.001zm-.915 2.88L19.5 20H4.502l7.505-14.498zM10.5 17.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM11 14c0 .666.334 1 1 1 .667 0 1-.334 1-1v-4c0-.667-.333-1-1-1-.666 0-1 .333-1 1v4z"
          />
        </svg>
        <span
          class="emotion-1"
        >
          Alert message.
        </span>
      </div>
    </div>
  `)
})

it('should render correctly with type danger', () => {
  const { container } = render(<Status type='danger' text='Error message.' />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      fill: currentColor;
      font-size: 1rem;
    }

    .emotion-1 {
      font-family: "IBM Plex Sans",sans-serif;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #24252E;
      color: inherit;
    }

    .emotion-2 {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(min-content,max-content);
      grid-gap: 0.5rem;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      color: #D01E29;
    }

    <div>
      <div
        class="emotion-2"
      >
        <svg
          aria-hidden="true"
          class="emotion-0"
          height="1em"
          role="img"
          viewBox="0 0 24 24"
          width="1em"
        >
          <path
            d="M20 12a7.948 7.948 0 01-1.688 4.897L7.103 5.688A7.954 7.954 0 0112 4c4.411 0 8 3.589 8 8zM4 12c0-1.846.634-3.542 1.688-4.897l11.209 11.209A7.954 7.954 0 0112 20c-4.411 0-8-3.589-8-8zm-2 0c0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2 2 6.486 2 12z"
          />
        </svg>
        <span
          class="emotion-1"
        >
          Error message.
        </span>
      </div>
    </div>
  `)
})

it('should accept "style" prop', () => {
  const { container } = render(<Status type='info' text='Information.' style={{ background: 'red' }} />)
  expect(container).toMatchInlineSnapshot(`
    .emotion-0 {
      fill: currentColor;
      font-size: 1rem;
    }

    .emotion-1 {
      font-family: "IBM Plex Sans",sans-serif;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #24252E;
      color: inherit;
    }

    .emotion-2 {
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: minmax(min-content,max-content);
      grid-gap: 0.5rem;
      -webkit-align-items: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: start;
      -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
      justify-content: flex-start;
      color: #0069D0;
      background: red;
    }

    <div>
      <div
        class="emotion-2"
      >
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
        <span
          class="emotion-1"
        >
          Information.
        </span>
      </div>
    </div>
  `)
})
