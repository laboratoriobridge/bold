import * as React from 'react'
import { LoadingContainer, LoadingStateContainer } from '../LoadingContainer'
import { shallowRenderAndMatch } from '../../../__tests__/test.defaults'

describe('LoadingContainer', () => {
    it('render loading', () => {
        shallowRenderAndMatch(<LoadingContainer isFetching={true} />)
    })
    it('render loading custom text', () => {
        shallowRenderAndMatch(<LoadingContainer isFetching={true} loadingText='CARREGANDO DADOS' />)
    })
    it('render child', () => {
        shallowRenderAndMatch(<LoadingContainer isFetching={false}>child</LoadingContainer>)
    })
})

describe('LoadingStateContainer', () => {
    it('render success', () => {
        shallowRenderAndMatch(<LoadingStateContainer readyState='success'>Content if successful</LoadingStateContainer>)
    })

    it('render request', () => {
        shallowRenderAndMatch(<LoadingStateContainer readyState='request'>Content if successful</LoadingStateContainer>)
    })

    it('render failure', () => {
        shallowRenderAndMatch(<LoadingStateContainer readyState='failure'>Content if successful</LoadingStateContainer>)
    })
})
