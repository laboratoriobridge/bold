import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { TextInput } from '../TextInput'

describe('TextInput', () => {
    it('render', function () {
        shallowRenderAndMatch(<TextInput />)
    })
})
