import { FileUploader } from '../../../../lib'

function UploadCompletedDemo() {
  return (
    <FileUploader
      text='Click or drop files here to upload'
      file={{
        progress: 100,
        selectedFile: { name: ' file_test.pdf', size: 15, type: 'PDF', lastModified: 12, slice: () => null },
        uploading: false,
      }}
    />
  )
}

export default UploadCompletedDemo
