import axios, { AxiosPromise } from 'axios'

export interface AuthConfig {
    /**
     * api url to load user info
     * default: /api/users/current
     */
    loadUserInfoUrl?: string,
    /**
     * api url to login
     * default: /api/login
     */
    loginUrl?: string,
    /**
     * api url to logout
     * default: /api/logout
     */
    logoutUrl?: string,
}

const DefaultAuthConfig = {
    loadUserInfoUrl: '/api/users/current',
    loginUrl: '/api/login',
    logoutUrl: '/api/logout',
}

export class Auth {

    loadUserInfo(config?: AuthConfig): AxiosPromise<any> {
        const resultConfig = { ...DefaultAuthConfig, ...config }
        return axios.get(resultConfig.loadUserInfoUrl)
    }

    login(username: string, password: string, config?: AuthConfig): AxiosPromise<any> {
        const resultConfig = { ...DefaultAuthConfig, ...config }
        return axios.post(resultConfig.loginUrl, `username=${username}&password=${password}`)
    }

    logout(config?: AuthConfig): AxiosPromise<any> {
        const resultConfig = { ...DefaultAuthConfig, ...config }
        window.localStorage && window.localStorage.setItem('logout', Date.now().toString())

        return axios.post(resultConfig.logoutUrl)
    }

}

export default new Auth()
