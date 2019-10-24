import { FileUploader, FileUploaderProps } from 'bold-ui'
import React, { useState } from 'react'

function FileUploaderDemo() {
  const [file, setFile] = useState<FileUploaderProps['file']>()

  const handleFileAccept = (files: File[]) => {
    setFile({
      selectedFile: files[0],
      uploading: true,
      progress: 0,
    })

    // Simulate a file upload to show 'progress' attribute in action
    const timeoutId = setInterval(() => {
      setFile(state => {
        if (state && state.progress >= 100) {
          clearInterval(timeoutId)
          return { ...state, uploading: false, progress: 100 }
        } else {
          return { ...state, progress: state.progress + Math.random() * 10 }
        }
      })
    }, 100)
  }

  return <FileUploader text='Click or drop files here to upload' file={file} onDropAccepted={handleFileAccept} />
}

export default FileUploaderDemo
