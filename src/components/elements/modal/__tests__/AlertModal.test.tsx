import { shallow } from 'enzyme'
import * as React from 'react'
import {
    AlertModalConfirmacao, AlertModalDelete, AlertModalError, AlertModalLeave, AlertModalSuccess
} from '../AlertModal'

describe('AlertModal', () => {
    it('deve renderizar AlertModalError visível', () => {
        const wrapper = shallow(
            <AlertModalError active title='AlertModalError' onClose={jest.fn}>Descrição</AlertModalError>
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalError', () => {
        const wrapper = shallow(
            <AlertModalError title='AlertModalError' onClose={jest.fn}>Descrição</AlertModalError>
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalLeave visível', () => {
        const wrapper = shallow(
            <AlertModalLeave callback={jest.fn(shouldNavigate => true)} />
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalSuccess visível', () => {
        const wrapper = shallow(
            <AlertModalSuccess active title='Sucesso' onClose={jest.fn}>
                Descrição
            </AlertModalSuccess>
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalSuccess', () => {
        const wrapper = shallow(
            <AlertModalSuccess title='Sucesso' onClose={jest.fn}>
                Descrição
            </AlertModalSuccess>
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalDelete visível', () => {
        const wrapper = shallow(
            <AlertModalDelete active onOk={jest.fn} onClose={jest.fn} />
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalDelete', () => {
        const wrapper = shallow(
            <AlertModalDelete onOk={jest.fn} onClose={jest.fn} />
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalConfirmacao visível', () => {
        const wrapper = shallow(
            <AlertModalConfirmacao active title='Sucesso' onOk={jest.fn} onClose={jest.fn}>
                Descrição
            </AlertModalConfirmacao>
        )
        expect(wrapper).toMatchSnapshot()
    })
    it('deve renderizar AlertModalConfirmacao', () => {
        const wrapper = shallow(
            <AlertModalConfirmacao title='Sucesso' onOk={jest.fn} onClose={jest.fn}>Descrição</AlertModalConfirmacao>
        )
        expect(wrapper).toMatchSnapshot()
    })
})
