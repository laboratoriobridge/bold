import { storiesOf } from '@storybook/react'
import React from 'react'

import { FileUploader } from './FileUploader'

storiesOf('Components/FileUploader', module)
    .add('initial', () => (
        <FileUploader
            text='Click or drop file here'
        />
    ))
    .add('uploading', () => (
        <FileUploader
            text='Click or drop file here'
            file={{
                progress: 40,
                selectedFile: new File([], 'file_test.pdf', { type: 'text/pdf' }),
                uploading: true,
            }}
        />
    ))
    .add('completed', () => (
        <FileUploader
            text='Click or drop file here'
            file={{
                selectedFile: new File([], 'file_test.pdf', { type: 'text/pdf' }),
            }}
        />
    ))
