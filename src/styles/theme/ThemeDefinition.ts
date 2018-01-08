export interface ThemeDefinition {
    font: {
        textFamily: any[]
        titleFamily: any[]
        textSize: number
    }
    breakpoint: {
        small: number
    }
    color: {
        primary: string
        white: string
    }
}
