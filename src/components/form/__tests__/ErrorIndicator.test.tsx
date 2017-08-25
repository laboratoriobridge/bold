import * as React from 'react'
import { Map } from 'immutable'
import { shallowRenderAndMatch, shallowMatch } from '../../../__tests__/test.defaults'
import { ErrorIndicator } from '../ErrorIndicator'

describe('Control', () => {
    it('deve renderizar corretamente', function () {
        const wrapper = shallowRenderAndMatch(<ErrorIndicator error={Map<string, string>({ titulo: 'titulo', mensagem: 'mensagem' })} />)

        wrapper.find('.error-indicator').simulate('mouseover')

        shallowMatch(wrapper)

        wrapper.find('.error-indicator').simulate('mouseleave')

        shallowMatch(wrapper)
    })
})
