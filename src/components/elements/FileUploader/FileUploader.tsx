import React from 'react'
import Dropzone from 'react-dropzone'

import { Theme, useStyles, WithStylesProps } from '../../../styles'
import { format } from '../../../util/byte'
import { HFlow } from '../Flow'
import { Icon } from '../Icon/Icon'
import { Progress } from '../Progress/Progress'
import { Text } from '../textual/Text/Text'

export interface FileUploaderProps {
  accept?: string
  file?: FileProps
  maxSize?: number
  text?: string
  onUpload?(selectedFile: any): void
}

export interface FileProps {
  error?: boolean
  progress?: number
  selectedFile?: File
  uploading?: boolean
}

export function FileUploader(props: FileUploaderProps) {
  const { accept, maxSize, onUpload, file, text } = props
  const { classes } = useStyles(createStyles)

  const uploadImage = (accepted: File[]) => {
    if (accepted && accepted.length > 0) {
      const selectedFile = accepted[0]
      onUpload && onUpload(selectedFile)
    }
  }

  return (
    <div className={classes.wrapper}>
      <Dropzone
        maxSize={maxSize}
        accept={accept}
        className={classes.dropzone}
        acceptClassName={classes.dropzoneAccept}
        onDrop={uploadImage}
        multiple={false}
      >
        <div className='accept-dashed-border'>
          <HFlow alignItems='center' hSpacing={0.5}>
            <Icon fill='secondary' icon='upload' />
            <Text color='secondary' size={0.875} weight='bold'>
              {text}
            </Text>
          </HFlow>
        </div>
      </Dropzone>
      {file && <FileDetails file={file} />}
    </div>
  )
}

export interface FileDetailsProps extends WithStylesProps {
  file: FileProps
}

export function FileDetails(props: FileDetailsProps) {
  const { file } = props
  const { classes } = useStyles(createStyles)

  const returnExtension = () => {
    const { type } = file.selectedFile
    const typeSplit = type.split('/')
    if (typeSplit.length > 1) {
      return typeSplit[1]
    } else if (!typeSplit[0]) {
      return null
    } else {
      return typeSplit[0]
    }
  }

  return (
    <div className={classes.fileDetailsContainer}>
      <FileExtension extension={returnExtension()} />
      <div className={classes.fileDetails}>
        <FileInfo file={file} />
        {file.uploading && <Progress value={file.progress} />}
      </div>
    </div>
  )
}

export interface FileInfoProps {
  file: FileProps
}

export function FileInfo(props: FileInfoProps) {
  const { file } = props
  const { classes } = useStyles(createStyles)

  return (
    <div className={classes.fileInfo}>
      {!file.error && !file.uploading && (
        <Icon icon='checkDefault' fill='primary' size={1} style={{ marginRight: 5 }} />
      )}
      <Text weight='bold' style={{ marginRight: 10 }}>
        {file.selectedFile.name}
      </Text>
      <Text>{format(file.selectedFile.size, 0)}</Text>
    </div>
  )
}

export interface FileExtensionProps {
  extension: string
}

export function FileExtension(props: FileExtensionProps) {
  const { extension } = props
  const { classes } = useStyles((theme: Theme) => ({
    root: {
      backgroundColor: theme.pallete.surface.background,
      border: `1px solid ${theme.pallete.divider}`,
      padding: '1rem',
    },
  }))

  return (
    <Text color='secondary' style={classes.root} weight='bold'>
      {extension}
    </Text>
  )
}

export const createStyles = (theme: Theme) => ({
  dropzone: {
    cursor: 'pointer',
    padding: '0.25rem',
    '& .accept-dashed-border': {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid transparent',
      borderStyle: 'dashed',
      paddingBottom: '0.5rem',
      paddingTop: '0.5rem',
    },
  },
  dropzoneAccept: {
    backgroundColor: theme.pallete.surface.background,
    '& .accept-dashed-border': {
      borderColor: theme.pallete.divider + '!important',
    },
  },
  file: {
    borderTop: '1px solid ' + theme.pallete.divider,
    padding: '1rem',
  },
  wrapper: {
    backgroundColor: theme.pallete.surface.main,
    borderRadius: theme.radius.paper,
    border: '1px solid ' + theme.pallete.divider,
  },
  fileDetailsContainer: {
    alignItems: 'center',
    borderTop: `1px solid ${theme.pallete.divider}`,
    display: 'flex',
    padding: '1rem',
  },
  fileDetails: {
    flexGrow: 1,
    marginLeft: '1rem',
  },
  fileInfo: {
    alignItems: 'center',
    display: 'flex',
  },
})
