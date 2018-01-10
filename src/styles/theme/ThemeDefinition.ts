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
        text: string
        primary: string
        red: string
        white: string
    }
}
