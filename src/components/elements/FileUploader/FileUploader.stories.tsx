import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../stories-addons'

import { FileUploader } from './FileUploader'

storiesOf('Components/FileUploader', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
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
                selectedFile: { name: 'file_test.pdf', size: 4096 },
                uploading: true,
            }}
        />
    ))
    .add('completed', () => (
        <FileUploader
            text='Click or drop file here'
            file={{
                selectedFile: { name: 'file_test.pdf', size: 4096 },
            }}
        />
    ))
