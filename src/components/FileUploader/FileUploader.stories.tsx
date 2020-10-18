import { action } from '@storybook/addon-actions'
import React from 'react'

import { FileUploader } from './FileUploader'

export default {
  title: 'Components/FileUploader',
}

export const Initial = () => (
  <FileUploader
    text='Click or drop file here'
    onDrop={action('onDrop')}
    onDropAccepted={action('onDropAccepted')}
    onDropRejected={action('onDropRejected')}
    onFileDialogCancel={action('onFileDialogCancel')}
    onDragOver={action('onDragOver')}
    onDragEnter={action('onDragEnter')}
    onDragLeave={action('onDragLeave')}
  />
)

export const Uploading = () => (
  <FileUploader
    text='Click or drop file here'
    file={{
      progress: 40,
      selectedFile: new File([], 'file_test.pdf', { type: 'text/pdf' }),
      uploading: true,
    }}
    onDrop={action('onDrop')}
    onDropAccepted={action('onDropAccepted')}
    onDropRejected={action('onDropRejected')}
    onFileDialogCancel={action('onFileDialogCancel')}
    onDragOver={action('onDragOver')}
    onDragEnter={action('onDragEnter')}
    onDragLeave={action('onDragLeave')}
  />
)

export const Completed = () => (
  <FileUploader
    text='Click or drop file here'
    file={{
      selectedFile: new File([], 'file_test.pdf', { type: 'text/pdf' }),
    }}
    onDrop={action('onDrop')}
    onDropAccepted={action('onDropAccepted')}
    onDropRejected={action('onDropRejected')}
    onFileDialogCancel={action('onFileDialogCancel')}
    onDragOver={action('onDragOver')}
    onDragEnter={action('onDragEnter')}
    onDragLeave={action('onDragLeave')}
  />
)
