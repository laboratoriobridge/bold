import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { FileExtension, FileUploader } from './FileUploader'

const testFile: File = new File([], 'teste.pdf', { type: 'application/pdf' })
const testFile2: File = new File([], 'teste.pdf', { type: '' })

it('should render initial state', () => {
    expect(render(withTheme(<FileUploader />))).toMatchSnapshot()
})

it('should render uploading state', () => {
    expect(render(withTheme(
        <FileUploader
            file={{
                progress: 40,
                selectedFile: testFile,
                uploading: true,
            }}
        />
    ))).toMatchSnapshot()
})

it('should render complete state', () => {
    expect(render(withTheme(
        <FileUploader
            file={{
                selectedFile: testFile,
            }}
        />
    ))).toMatchSnapshot()
})

it('should render correct extension', () => {
    expect(mount(withTheme(
        <FileUploader
            file={{
                selectedFile: testFile,
            }}
        />
    )).find(FileExtension).props().extension
    ).toBe('pdf')
})

it('should render correct extension', () => {
    expect(mount(withTheme(
        <FileUploader
            file={{
                selectedFile: testFile2,
            }}
        />
    )).find(FileExtension).props().extension
    ).toBe(null)
})
