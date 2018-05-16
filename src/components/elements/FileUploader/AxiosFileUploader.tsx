import axios, { AxiosRequestConfig, CancelTokenSource } from 'axios'
import React from 'react'

import { Omit } from '../../../util/types'

import { FileProps, FileUploader, FileUploaderProps } from './FileUploader'

export type UploadRequestType = (data: FormData, requestConfig: AxiosRequestConfig) => Promise<any>

export interface AxiosFileUploaderProps extends Omit<FileUploaderProps, 'file'> {
    uploadRequest: UploadRequestType
}

class AxiosFileUploader extends React.Component<AxiosFileUploaderProps, FileProps> {

    private cancelTokenSource: CancelTokenSource

    render() {
        return (
            <FileUploader
                file={this.state}
                onUpload={this.onUpload}
            />
        )
    }

    private onUpload = (selectedFile) => {
        const data = new FormData()
        data.append('file', selectedFile)

        this.cancelTokenSource = axios.CancelToken.source()

        this.setState({ selectedFile, uploading: true })

        const config: AxiosRequestConfig = {
            cancelToken: this.cancelTokenSource.token,
            onUploadProgress: (progressEvent: ProgressEvent) => {
                this.setState({ progress: Math.round((progressEvent.loaded * 100) / progressEvent.total) })
            },
        }

        this.props.uploadRequest(data, config).then((result) => {
            this.setState({ uploading: false })
        }).catch((error) => {
            if (axios.isCancel(error)) {
                this.setState({ error: false, selectedFile: undefined, uploading: false })
            } else {
                this.setState({ error: true, uploading: false })
            }
        })
    }

}
