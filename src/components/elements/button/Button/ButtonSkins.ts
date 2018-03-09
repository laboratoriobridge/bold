import { Theme } from '../../../../styles'

import { createStyles as createDefault } from './skins/default'
import { createStyles as createGhost } from './skins/ghost'
import { createStyles as createSecondary } from './skins/secondary'

export type Skins = 'default' | 'ghost' | 'secondary'

export interface Skin {
    button: any,
    primary: any
}

export const skinMap: {[key in Skins]: (theme: Theme) => Skin} = {
    'default': createDefault,
    'ghost': createGhost,
    'secondary': createSecondary,
}
