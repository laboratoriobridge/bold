import * as classnames from 'classnames'

export interface UtilProps {
    clearfix?: boolean
    expanded?: boolean
    pulledLeft?: boolean
    pulledRight?: boolean
    overlay?: boolean
    fullwidth?: boolean
    fullHeight?: boolean
    textCentered?: boolean
    textLeft?: boolean
    textRight?: boolean
    disabled?: boolean
    marginless?: boolean
    paddingless?: boolean
    unselectable?: boolean
    // props criadas
    alignedCenter?: boolean
    horizontalFlow?: boolean
    pulledBottom?: boolean
    verticalFlow?: boolean
}

const helperProps = [
    'clearfix',
    'expanded',
    'pulledLeft',
    'pulledRight',
    'overlay',
    'fullwidth',
    'fullHeight',
    'textCentered',
    'textLeft',
    'textRight',
    // Disabled é repassado para o componente
    // 'disabled',
    'marginless',
    'paddingless',
    'unselectable',
    // props criadas
    'alignedCenter',
    'horizontalFlow',
    'pulledBottom',
    'verticalFlow'
    ,
]

export function helpersClassnames(props: UtilProps) {
    return classnames({
        'is-clearfix': props.clearfix,
        'is-expanded': props.expanded,
        'is-pulled-left': props.pulledLeft,
        'is-pulled-right': props.pulledRight,
        'is-overlay': props.overlay,
        'is-fullwidth': props.fullwidth,
        'is-full-height': props.fullHeight,
        'has-text-centered': props.textCentered,
        'has-text-left': props.textLeft,
        'has-text-right': props.textRight,
        'is-disabled': props.disabled,
        'is-marginless': props.marginless,
        'is-paddingless': props.paddingless,
        'is-unselectable': props.unselectable,
        // props criadas
        'is-aligned-center': props.alignedCenter,
        'is-horizontal-flow': props.horizontalFlow,
        'is-pulled-bottom': props.pulledBottom,
        'is-vertical-flow': props.verticalFlow,

    })
}

export function extractProps(props: UtilProps, ...propsToExtract: string[]) {
    return Object.keys(props)
        .filter(propName => propsToExtract.indexOf(propName) !== -1)
        .reduce((obj, propName) => {
            obj[propName] = props[propName]

            return obj
        }, {})
}

export function excludeProps(props: UtilProps, ...exclude: string[]) {

    let finalExclude: string[] = [
        ...helperProps,
        ...exclude
    ]

    return Object.keys(props)
        .filter(propName => finalExclude.indexOf(propName) === -1)
        .reduce((obj, propName) => {
            obj[propName] = props[propName]

            return obj
        }, {})
}
