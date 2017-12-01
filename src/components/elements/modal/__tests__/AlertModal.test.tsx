import * as React from 'react'
import { shallowRenderAndMatch } from '../../../../__tests__/test.defaults'
import { AlertModalError, AlertModalLeave, AlertModalSuccess, AlertModalDelete, AlertModalConfirmacao } from '../AlertModal'

describe('AlertModal', () => {
    it('deve renderizar AlertModalError visível', function () {
        shallowRenderAndMatch(<AlertModalError active={true} title='AlertModalError' onClose={() => undefined}>Descrição</AlertModalError>)
    })
    it('deve renderizar AlertModalError', function () {
        shallowRenderAndMatch(<AlertModalError title='AlertModalError' onClose={() => undefined}>Descrição</AlertModalError>)
    })
    it('deve renderizar AlertModalLeave visível', function () {
        shallowRenderAndMatch(<AlertModalLeave callback={() => undefined} />)
    })
    it('deve renderizar AlertModalSuccess visível', function () {
        shallowRenderAndMatch(<AlertModalSuccess active={true} title='Sucesso' onClose={() => undefined}>Descrição</AlertModalSuccess>)
    })
    it('deve renderizar AlertModalSuccess', function () {
        shallowRenderAndMatch(<AlertModalSuccess title='Sucesso' onClose={() => undefined}>Descrição</AlertModalSuccess>)
    })
    it('deve renderizar AlertModalDelete visível', function () {
        shallowRenderAndMatch(<AlertModalDelete active={true} onOk={() => undefined} onClose={() => undefined} />)
    })
    it('deve renderizar AlertModalDelete', function () {
        shallowRenderAndMatch(<AlertModalDelete onOk={() => undefined} onClose={() => undefined} />)
    })
    it('deve renderizar AlertModalConfirmacao visível', function () {
        shallowRenderAndMatch(<AlertModalConfirmacao active={true} title='Sucesso' onOk={() => undefined} onClose={() => undefined}>Descrição</AlertModalConfirmacao>)
    })
    it('deve renderizar AlertModalConfirmacao', function () {
        shallowRenderAndMatch(<AlertModalConfirmacao title='Sucesso' onOk={() => undefined} onClose={() => undefined}>Descrição</AlertModalConfirmacao>)
    })
})
