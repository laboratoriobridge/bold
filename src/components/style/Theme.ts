export type Color = 'primary' | 'white' | 'gray1' | 'gray2' | 'gray3' | 'gray4' | 'gray5' | 'gray6' | 'gray7' | 'gray8' | 'gray9'

export default interface Theme {
    primary: string
    white: string
    /**
     * Theme.white escurecido 10%
     */
    gray1: string
    /**
     * Theme.white escurecido 20%
     */
    gray2: string
    /**
     * Theme.white escurecido 30%
     */
    gray3: string
    /**
     * Theme.white escurecido 40%
     */
    gray4: string
    /**
     * Theme.white escurecido 50%
     */
    gray5: string
    /**
     * Theme.white escurecido 60%
     */
    gray6: string
    /**
     * Theme.white escurecido 70%
     */
    gray7: string
    /**
     * Theme.white escurecido 80%
     */
    gray8: string
    /**
     * Theme.white escurecido 90%
     */
    gray9: string
}
