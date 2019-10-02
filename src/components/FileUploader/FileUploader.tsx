import React, { CSSProperties } from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'

import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { format } from '../../util/byte'
import { HFlow } from '../HFlow'
import { Icon } from '../Icon/Icon'
import { Progress } from '../Progress/Progress'
import { Text } from '../Text'

export interface FileUploaderProps extends DropzoneOptions {
  file?: FileProps
  text?: string
}

export interface FileProps {
  error?: boolean
  progress?: number
  selectedFile?: File
  uploading?: boolean
}

export function FileUploader(props: FileUploaderProps) {
  const { file, text, disabled, ...rest } = props
  const { classes, css } = useStyles(createStyles)
  const { getRootProps, getInputProps, isDragActive, isDragAccept } = useDropzone(rest)

  return (
    <div
      className={css(
        classes.componentWrapper,
        isDragActive && classes.dragBackground,
        disabled && classes.pointerEventsNone
      )}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <div className={css(classes.buttonWrapper, disabled && classes.disabled)}>
        <div className={css(classes.dropzone, isDragActive && classes.dragActive)}>
          {isDragAccept}
          <HFlow justifyContent='center' alignItems='center' hSpacing={0.5}>
            <Icon fill={disabled ? 'disabled' : 'secondary'} icon='upload' />
            <Text color={disabled ? 'disabled' : 'secondary'} fontSize={0.875} fontWeight='bold'>
              {text}
            </Text>
          </HFlow>
        </div>
      </div>

      {file && <FileDetails file={file} />}
    </div>
  )
}

export interface FileDetailsProps {
  file: FileProps
}

export function FileDetails(props: FileDetailsProps) {
  const { file } = props
  const { css, classes } = useStyles(createStyles)

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
    <div className={css(classes.file, classes.fileDetailsContainer)}>
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
    <div className={classes.fileDetailsContainer}>
      {!file.error && !file.uploading && (
        <Icon icon='checkDefault' fill='primary' size={1} style={{ marginRight: 5 }} />
      )}
      <Text fontWeight='bold' style={{ marginRight: 10 }}>
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
    <Text color='secondary' style={classes.root} fontWeight='bold'>
      {extension}
    </Text>
  )
}

export const createStyles = (theme: Theme) => ({
  componentWrapper: {
    backgroundColor: theme.pallete.surface.main,
    transition: 'box-shadow .2s ease',

    '&:focus': {
      outline: 'none',
      boxShadow: focusBoxShadow(theme),
    },
  } as CSSProperties,
  buttonWrapper: {
    border: `1px solid` + theme.pallete.gray.c40,
    borderRadius: theme.radius.popper,
    cursor: 'pointer',
    padding: '0.25em',
  } as CSSProperties,
  dropzone: {
    borderRadius: theme.radius.popper,
    padding: '0.52em',
  } as CSSProperties,
  dragBackground: {
    backgroundColor: theme.pallete.surface.background,
  } as CSSProperties,
  dragActive: {
    border: `1px dashed` + theme.pallete.gray.c40,
  } as CSSProperties,
  pointerEventsNone: {
    pointerEvents: 'none',
  } as CSSProperties,
  disabled: {
    border: `1px solid` + theme.pallete.gray.c80,
  } as CSSProperties,

  file: {
    borderRadius: theme.radius.popper,
    borderBottom: '1px solid ' + theme.pallete.gray.c80,
    borderLeft: '1px solid ' + theme.pallete.gray.c80,
    borderRight: '1px solid ' + theme.pallete.gray.c80,
    padding: '1rem',
  },
  fileDetailsContainer: {
    alignItems: 'center',
    display: 'flex',
  },
  fileDetails: {
    flexGrow: 1,
    marginLeft: '1rem',
  },
})
