import React from 'react'
import Dropzone, * as DropzoneAll from 'react-dropzone'

import { Styles, Theme, withStyles, WithStylesProps } from '../../../styles'
import { format } from '../../../util/byte'
import { HFlow } from '../../layout/Flow/HFlow'
import { Icon } from '../Icon/Icon'
import { ProgressIndicator } from '../ProgressIndicator/ProgressIndicator'
import { Text } from '../textual/Text/Text'

export interface FileUploaderProps extends WithStylesProps {
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

const DropzoneCmp: any = Dropzone || DropzoneAll

@withStyles
export class FileUploader extends React.Component<FileUploaderProps> {

    uploadImage = (file) => {
        if (file && file.length > 0) {
            const selectedFile = file[0]

            this.props.onUpload && this.props.onUpload(selectedFile)
        }
    }

    render() {
        const {
            accept,
            css,
            maxSize,
            theme,
        } = this.props

        const styles: Styles = {
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
        }

        return (
            <div className={css(styles.wrapper)}>
                <DropzoneCmp
                    maxSize={maxSize}
                    accept={accept}
                    className={css(styles.dropzone)}
                    acceptClassName={css(styles.dropzoneAccept)}
                    onDrop={this.uploadImage}
                    multiple={false}
                >
                    <div className='accept-dashed-border'>
                        <HFlow alignItems='center' hSpacing={0.5}>
                            <Icon fill='secondary' icon='upload' />
                            <Text color='secondary' size={0.875} weight='bold'>{this.props.text}</Text>
                        </HFlow>
                    </div>
                </DropzoneCmp>
                {this.props.file &&
                    <FileDetails
                        file={this.props.file}
                        theme={theme}
                    />
                }
            </div>
        )
    }

}

interface FileDetailsProps extends WithStylesProps {
    file: FileProps
    theme: Theme
}

@withStyles
export class FileDetails extends React.Component<FileDetailsProps> {

    render() {
        const { css } = this.props
        const styles: Styles = {
            info: {
                flexGrow: 1,
                marginLeft: '1rem',
            },
            wrapper: {
                alignItems: 'center',
                borderTop: '1px solid ' + this.props.theme.pallete.divider,
                display: 'flex',
                padding: '1rem',
            },
        }
        return (
            <div className={css(styles.wrapper)}>
                <FileExtension extension={this.returnExtension()} theme={this.props.theme} />
                <div className={css(styles.info)}>
                    <FileInfo file={this.props.file} theme={this.props.theme} />
                    {this.props.file.uploading &&
                        <ProgressIndicator value={this.props.file.progress} />
                    }
                </div>
            </div>
        )
    }

    private returnExtension = () => {
        const { type } = this.props.file.selectedFile
        const typeSplit = type.split('/')
        if (typeSplit.length > 1) {
            return typeSplit[1]
        } else if (!typeSplit[0]) {
            return null
        } else {
            return typeSplit[0]
        }
    }

}

interface FileInfoProps extends WithStylesProps {
    file: FileProps
    theme: Theme
}

@withStyles
class FileInfo extends React.PureComponent<FileInfoProps> {

    render() {
        const { css } = this.props
        const styles = {
            wrapper: {
                alignItems: 'center',
                display: 'flex',
            },
        }

        return (
            <div className={css(styles.wrapper)}>
                {!this.props.file.error && !this.props.file.uploading &&
                    <Icon icon='checkDefault' fill='primary' size={1} style={{ marginRight: 5 }} />
                }
                <Text weight='bold' style={{ marginRight: 10 }}>
                    {this.props.file.selectedFile.name}
                </Text>
                <Text>{format(this.props.file.selectedFile.size, 0)}</Text>
            </div>
        )
    }

}

interface FileExtensionProps {
    extension: string
    theme: Theme
}

export class FileExtension extends React.PureComponent<FileExtensionProps> {

    render() {
        const styles = {
            backgroundColor: this.props.theme.pallete.surface.background,
            border: '1px solid ' + this.props.theme.pallete.divider,
            padding: '1rem',
        }

        return (
            <Text color='secondary' style={styles} weight='bold'>{this.props.extension}</Text>
        )
    }

}