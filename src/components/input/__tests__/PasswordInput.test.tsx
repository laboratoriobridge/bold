import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { PasswordInput } from '../PasswordInput'

describe('PasswordInput', () => {
    it('render', function () {
        shallowRenderAndMatch(<PasswordInput />)
    })
})
