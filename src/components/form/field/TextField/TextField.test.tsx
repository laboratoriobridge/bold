import * as React from 'react'
import { TextField } from '../TextField'
import { shallowRenderAndMatch, testForm } from '../../../../__tests__/test.defaults'

describe('TextField', () => {
    it('deve ser renderizado de forma correta', () => {
        shallowRenderAndMatch(testForm(() => <TextField name='test' placeholder='Test' maxLength={2} disabled={false} />))
    })
})
