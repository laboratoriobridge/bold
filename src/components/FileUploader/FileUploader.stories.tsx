import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { FileUploader } from './FileUploader'

storiesOf('Components|FileUploader', module)
  .add('initial', () => (
    <FileUploader
      text='Click or drop file here'
      onDrop={action('onDrop')}
      onDropAccepted={action('onDropAccepted')}
      onDropRejected={action('onDropRejected')}
      onFileDialogCancel={action('onFileDialogCancel')}
      onDragOver={action('onDragOver')}
      onDragEnter={action('onDragEnter')}
      onDragLeave={action('onDragLeave')}
      disabled
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
      onDrop={action('onDrop')}
      onDropAccepted={action('onDropAccepted')}
      onDropRejected={action('onDropRejected')}
      onFileDialogCancel={action('onFileDialogCancel')}
      onDragOver={action('onDragOver')}
      onDragEnter={action('onDragEnter')}
      onDragLeave={action('onDragLeave')}
    />
  ))
  .add('completed', () => (
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
  ))
