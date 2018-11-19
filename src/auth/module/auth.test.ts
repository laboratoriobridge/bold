import { axiosMock, mockStore } from '../../test'

import { actions, actionTypes, reducer } from './auth'

const user = {
    id: 1,
    username: 'user',
}

describe('ações simples', () => {
    it('deve retornar a ação esperada', () => {

        const expectedAction = { type: actionTypes.LOGIN_SUCCESS, user }

        expect(actions.loginSuccess(user)).toEqual(expectedAction)
    })

})

describe('ações assíncronas', () => {
    it('login correto', () => {
        axiosMock.onPost('/api/login').reply(200, {})
        axiosMock.onGet('/api/users/current').reply(200, user)

        const expectedActions = [
            actions.loginRequest(),
            actions.loginSuccess(user),
        ]

        const store = mockStore({ auth: {} })

        return store.dispatch(actions.login('', '')).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('login incorreto', () => {
        axiosMock.onPost('/api/login').reply(401, {})

        const expectedActions = [
            { type: actionTypes.LOGIN_REQUEST },
            { type: actionTypes.LOGIN_FAILURE, 'error': 401 },
        ]

        const store = mockStore({ auth: {} })

        return store.dispatch(actions.login('', '')).catch(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('check login já logado', async () => {

        const expectedActions = [
            // nenhuma, o usuário já está logado
        ]

        const store = mockStore({ auth: { user } })

        await store.dispatch(actions.checkLogin())
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('check login logado sessão', async () => {
        axiosMock.onGet('/api/users/current').reply(200, user)

        const expectedActions = [
            { type: actionTypes.LOGIN_REQUEST },
            { type: actionTypes.LOGIN_SUCCESS, user },
        ]

        const store = mockStore({ auth: {} })

        await store.dispatch(actions.checkLogin())
        expect(store.getActions()).toEqual(expectedActions)
    })

    it('check login não logado sessão', () => {
        axiosMock.onGet('/api/users/current').reply(401, {})

        const expectedActions = [
            { type: actionTypes.LOGIN_REQUEST },
            { type: actionTypes.LOGIN_FAILURE, 'error': 401 },
        ]

        const store = mockStore({ auth: {} })

        return store.dispatch(actions.checkLogin()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('update login logado', () => {
        axiosMock.onGet('/api/users/current').reply(200, user)

        const expectedActions = [
            { type: actionTypes.LOGIN_REQUEST },
            { type: actionTypes.LOGIN_SUCCESS, user },
        ]

        const store = mockStore({ auth: {} })

        return store.dispatch(actions.updateLogin()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('update login não logado', () => {
        axiosMock.onGet('/api/users/current').reply(401, {})

        const expectedActions = [
            { type: actionTypes.LOGIN_REQUEST },
            { type: actionTypes.LOGIN_FAILURE, 'error': 401 },
        ]

        const store = mockStore({ auth: {} })

        return store.dispatch(actions.updateLogin()).catch(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('logout', () => {
        axiosMock.onPost('/api/logout').reply(200, {})

        const expectedActions = [
            { type: actionTypes.LOGOUT_SUCCESS },
        ]

        const store = mockStore({ auth: {} })

        return store.dispatch(actions.logout()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})

describe('reducer', () => {
    it('deve retornar o estado inicial', () => {
        expect(reducer(undefined, {})).toEqual({})
    })
    it('handle LOGIN_REQUEST', () => {
        expect(reducer(undefined, actions.loginRequest())).toEqual({ pending: true })
    })
    it('handle LOGIN_SUCCESS', () => {
        expect(reducer(undefined, actions.loginSuccess(user))).toEqual({ user, pending: false })
    })
    it('handle LOGIN_FAILURE', () => {
        expect(reducer(undefined, actions.loginFailure(401))).toEqual({ error: 401, pending: false })
    })
    it('handle LOGOUT_SUCCESS', () => {
        expect(reducer(undefined, actions.logoutSuccess())).toEqual({})
    })
})
