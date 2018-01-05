import * as React from 'react'
import { AlertModalError, AlertModalLeave, AlertModalSuccess, AlertModalDelete, AlertModalConfirmacao } from '../AlertModal'
import { shallow } from 'enzyme'

describe('AlertModal', () => {
    it('deve renderizar AlertModalError visível', function () {
        expect(shallow(<AlertModalError active title='AlertModalError' onClose={() => undefined}>Descrição</AlertModalError>)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalError', function () {
        expect(shallow(<AlertModalError title='AlertModalError' onClose={() => undefined}>Descrição</AlertModalError>)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalLeave visível', function () {
        expect(shallow(<AlertModalLeave callback={() => undefined} />)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalSuccess visível', function () {
        expect(shallow(<AlertModalSuccess active title='Sucesso' onOk={() => undefined} onClose={() => undefined}>Descrição</AlertModalSuccess>)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalSuccess', function () {
        expect(shallow(<AlertModalSuccess title='Sucesso' onOk={() => undefined} onClose={() => undefined}>Descrição</AlertModalSuccess>)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalDelete visível', function () {
        expect(shallow(<AlertModalDelete active onOk={() => undefined} onClose={() => undefined} />)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalDelete', function () {
        expect(shallow(<AlertModalDelete onOk={() => undefined} onClose={() => undefined} />)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalConfirmacao visível', function () {
        expect(shallow(<AlertModalConfirmacao active title='Sucesso' onOk={() => undefined} onClose={() => undefined}>Descrição</AlertModalConfirmacao>)).toMatchSnapshot()
    })
    it('deve renderizar AlertModalConfirmacao', function () {
        expect(shallow(<AlertModalConfirmacao title='Sucesso' onOk={() => undefined} onClose={() => undefined}>Descrição</AlertModalConfirmacao>)).toMatchSnapshot()
    })
})
