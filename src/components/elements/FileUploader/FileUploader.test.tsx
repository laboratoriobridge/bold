import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { FileUploader } from './FileUploader'

it('should render initial state', () => {
    expect(render(withTheme(<FileUploader />))).toMatchSnapshot()
})

it('should render uploading state', () => {
    expect(render(withTheme(
        <FileUploader
            file={{
                progress: 40,
                selectedFile: { name: 'file_test.pdf', size: 4096 },
                uploading: true,
            }}
        />
    ))).toMatchSnapshot()
})

it('should render complete state', () => {
    expect(render(withTheme(
        <FileUploader
            file={{
                selectedFile: { name: 'file_test.pdf', size: 4096 },
            }}
        />
    ))).toMatchSnapshot()
})
