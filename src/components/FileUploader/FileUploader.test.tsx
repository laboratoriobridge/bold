import { render } from '@testing-library/react'
import React from 'react'

import { FileUploader } from './FileUploader'

const testFile: File = new File([], 'teste.pdf', { type: 'application/pdf' })
const testFile2: File = new File([], 'teste.pdf', { type: '' })

it('should render correctly at initial state', () => {
  const { container } = render(<FileUploader />)
  expect(container).toMatchSnapshot()
})

it('should render correctly at uploading state', () => {
  const { container } = render(<FileUploader file={{ progress: 40, selectedFile: testFile, uploading: true }} />)
  expect(container).toMatchSnapshot()
})

it('should render correctly complete state', () => {
  const { container } = render(<FileUploader file={{ selectedFile: testFile }} />)
  expect(container).toMatchSnapshot()
})

it('should render correct without extension', () => {
  const { container } = render(<FileUploader file={{ selectedFile: testFile2 }} />)
  expect(container).toMatchSnapshot()
})
