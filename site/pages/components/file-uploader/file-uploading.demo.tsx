import { FileUploader } from '../../../../lib'

function FileUploadingDemo() {
  return (
    <FileUploader
      text='Click or drop files here to upload'
      file={{
        progress: 70,
        selectedFile: { name: ' file_test.pdf', size: 15, type: 'PDF', lastModified: 12, slice: () => null },
        uploading: true,
      }}
    />
  )
}

export default FileUploadingDemo
