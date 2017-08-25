import * as React from 'react'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'
import { AsyncSelect } from '../AsyncSelect'

const URL = '/api/select'

describe('AsyncSelect', () => {
    it('deve renderizar corretamente', () => {
        shallowRenderAndMatch(<AsyncSelect url={URL} />)
    })
})
