/* tslint:disable no-string-literal */
import * as PropTypes from 'prop-types'
import * as React from 'react'

import createStyles, { css, StyleCreator } from './createStyles'

export interface WithStylesProps {
    styles?: React.CSSProperties

    createStyles?: StyleCreator
    css?: (...styles: any[]) => string
}

export function withStyles<P extends WithStylesProps,
    T extends React.ComponentClass<P>>(WrappedComponent: T): T {
    class WithStyles extends React.Component<P> {

        static contextTypes = {
            theme: PropTypes.object,
        }

        constructor(props, context) {
            super(props, context)

            if (!WrappedComponent['styleCreator']) {
                WrappedComponent['styleCreator'] = createStyles(context)
            }
        }

        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    createStyles={WrappedComponent['styleCreator']}
                    css={this.css}
                />
            )
        }

        private css = (...styles) => {
            return css(styles, this.props.styles)
        }

    }

    (WithStyles as any).displayName = `${WrappedComponent.displayName || WrappedComponent.name}`

    return WithStyles as any as T
}
