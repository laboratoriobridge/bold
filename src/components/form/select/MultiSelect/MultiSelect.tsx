import * as React from 'react'

import { Select, SelectProps } from '../Select/Select'

export interface MultiSelectProps extends SelectProps {

}

export class MultiSelect extends React.Component<MultiSelectProps> {
    render() {
        return (
            <Select multi {...this.props} />
        )
    }
}
