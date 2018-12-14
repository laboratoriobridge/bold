import * as React from 'react'

import { withField } from '../../finalForm/Field'
import { Input, InputProps } from '../../input/Input/Input'

export const HiddenField = withField((props: InputProps) => (
    <Input type='hidden' {...props} />
))
