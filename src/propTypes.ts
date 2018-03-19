/* tslint:disable */
import { ComponentDoc } from 'react-docgen-typescript/lib/parser'

const propTypes: {[key in string]: ComponentDoc} = {
    'Login': {
        displayName: 'Login',
        description: ``,
        props: {
            'onLogin': {
                name: 'onLogin',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'renderHome': {
                name: 'renderHome',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(props: any) => ReactNode',
                    value: 'undefined',
                }
            },
            'renderForm': {
                name: 'renderForm',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(props: FormRenderProps, userFieldName: string, passwordFieldName: string) => ReactNode',
                    value: 'undefined',
                }
            },
            'config': {
                name: 'config',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'AuthConfig',
                    value: 'undefined',
                }
            }
        }
    },
    'Breadcrumb': {
        displayName: 'Breadcrumb',
        description: ``,
        props: {
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'to': {
                name: 'to',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'LocationDescriptor',
                    value: 'undefined',
                }
            }
        }
    },
    'BreadcrumbNav': {
        displayName: 'BreadcrumbNav',
        description: ``,
        props: {
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'BreadcrumbProvider': {
        displayName: 'BreadcrumbProvider',
        description: ``,
        props: {
            'store': {
                name: 'store',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'BreadcrumbStore',
                    value: 'undefined',
                }
            }
        }
    },
    'DropdownMenu': {
        displayName: 'DropdownMenu',
        description: ``,
        props: {
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'DropdownItem': {
        displayName: 'DropdownItem',
        description: ``,
        props: {
            'onClick': {
                name: 'onClick',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(e: any) => any',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Hint': {
        displayName: 'Hint',
        description: ``,
        props: {
            'placement': {
                name: 'placement',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Placement',
                    value: 'undefined',
                }
            },
            'componente': {
                name: 'componente',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'type': {
                name: 'type',
                defaultValue: `normal`,
                description: ``,
                required: false,
                type: {
                    name: '"normal" | "primary"',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Icon': {
        displayName: 'Icon',
        description: ``,
        props: {
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'Icons',
                    value: 'undefined',
                }
            },
            'color': {
                name: 'color',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Color',
                    value: 'undefined',
                }
            },
            'size': {
                name: 'size',
                defaultValue: `1.5`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Adjust': {
        displayName: 'Adjust',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AlignCenter': {
        displayName: 'AlignCenter',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AlignJustify': {
        displayName: 'AlignJustify',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AlignLeft': {
        displayName: 'AlignLeft',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AlignRight': {
        displayName: 'AlignRight',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AngleDoubleLeft': {
        displayName: 'AngleDoubleLeft',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AngleDoubleRight': {
        displayName: 'AngleDoubleRight',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AngleDown': {
        displayName: 'AngleDown',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AngleLeft': {
        displayName: 'AngleLeft',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AngleRight': {
        displayName: 'AngleRight',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AngleUp': {
        displayName: 'AngleUp',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Ban': {
        displayName: 'Ban',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Bell': {
        displayName: 'Bell',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Bold': {
        displayName: 'Bold',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Calendar': {
        displayName: 'Calendar',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Check': {
        displayName: 'Check',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'CheckCircle': {
        displayName: 'CheckCircle',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'ClearFormat': {
        displayName: 'ClearFormat',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Clock': {
        displayName: 'Clock',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Code': {
        displayName: 'Code',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Contrast': {
        displayName: 'Contrast',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Copy': {
        displayName: 'Copy',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'DecreaseFont': {
        displayName: 'DecreaseFont',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Dots': {
        displayName: 'Dots',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Download': {
        displayName: 'Download',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Exclamation': {
        displayName: 'Exclamation',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'ExclamationCircle': {
        displayName: 'ExclamationCircle',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'ExclamationTriangle': {
        displayName: 'ExclamationTriangle',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'File': {
        displayName: 'File',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'FileItens': {
        displayName: 'FileItens',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Filter': {
        displayName: 'Filter',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Gear': {
        displayName: 'Gear',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Hospital': {
        displayName: 'Hospital',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'IncreaseFont': {
        displayName: 'IncreaseFont',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Info': {
        displayName: 'Info',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'InformationCircle': {
        displayName: 'InformationCircle',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Italic': {
        displayName: 'Italic',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Map': {
        displayName: 'Map',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'MapMarker': {
        displayName: 'MapMarker',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'MapMarkerFilled': {
        displayName: 'MapMarkerFilled',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Menu': {
        displayName: 'Menu',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Minus': {
        displayName: 'Minus',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Modules': {
        displayName: 'Modules',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Pause': {
        displayName: 'Pause',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Pen': {
        displayName: 'Pen',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Play': {
        displayName: 'Play',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Plus': {
        displayName: 'Plus',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Printer': {
        displayName: 'Printer',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'QuoteLeft': {
        displayName: 'QuoteLeft',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'QuoteRigh': {
        displayName: 'QuoteRigh',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Redo': {
        displayName: 'Redo',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Search': {
        displayName: 'Search',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'SearchMinus': {
        displayName: 'SearchMinus',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'SearchPlus': {
        displayName: 'SearchPlus',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Sort': {
        displayName: 'Sort',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Stop': {
        displayName: 'Stop',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Strikethrough': {
        displayName: 'Strikethrough',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Times': {
        displayName: 'Times',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Trashcan': {
        displayName: 'Trashcan',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'TriangleDown': {
        displayName: 'TriangleDown',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'TriangleUp': {
        displayName: 'TriangleUp',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Underline': {
        displayName: 'Underline',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Upload': {
        displayName: 'Upload',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'User': {
        displayName: 'User',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'InfoLabel': {
        displayName: 'InfoLabel',
        description: ``,
        props: {
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'titleStyles': {
                name: 'titleStyles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'childStyles': {
                name: 'childStyles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Label': {
        displayName: 'Label',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            }
        }
    },
    'OverlayContent': {
        displayName: 'OverlayContent',
        description: ``,
        props: {
            'style': {
                name: 'style',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Paginator': {
        displayName: 'Paginator',
        description: ``,
        props: {
            'page': {
                name: 'page',
                defaultValue: `null`,
                description: `Página atual, 0-indexada.`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'total': {
                name: 'total',
                defaultValue: `null`,
                description: `Número total de páginas.`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: `Chamado quando a página for alterada.`,
                required: false,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Popover': {
        displayName: 'Popover',
        description: ``,
        props: {
            'borderColor': {
                name: 'borderColor',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'color': {
                name: 'color',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onHide': {
                name: 'onHide',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'placement': {
                name: 'placement',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Placement',
                    value: 'undefined',
                }
            },
            'rootClose': {
                name: 'rootClose',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'show': {
                name: 'show',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'target': {
                name: 'target',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | number | boolean | {} | Function | ReactElement<any> | (string | number | boolean | any[...',
                    value: 'undefined',
                }
            }
        }
    },
    'Tabs': {
        displayName: 'Tabs',
        description: ``,
        props: {
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'TabLink': {
        displayName: 'TabLink',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'to': {
                name: 'to',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'LocationDescriptor',
                    value: 'undefined',
                }
            },
            'replace': {
                name: 'replace',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'exact': {
                name: 'exact',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'BaseButton': {
        displayName: 'BaseButton',
        description: ``,
        props: {
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: `css className`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onClick': {
                name: 'onClick',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '((event: MouseEvent<any>) => void) | OnClickWithPromise',
                    value: 'undefined',
                }
            },
            'onLoadingChange': {
                name: 'onLoadingChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(loading: boolean) => void',
                    value: 'undefined',
                }
            },
            'onMouseEnter': {
                name: 'onMouseEnter',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'onMouseLeave': {
                name: 'onMouseLeave',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'tabIndex': {
                name: 'tabIndex',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hint': {
                name: 'hint',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'hintClassName': {
                name: 'hintClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hintPlacement': {
                name: 'hintPlacement',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hintType': {
                name: 'hintType',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"normal" | "primary"',
                    value: 'undefined',
                }
            }
        }
    },
    'Button': {
        displayName: 'Button',
        description: ``,
        props: {
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Icons',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'loading': {
                name: 'loading',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'skin': {
                name: 'skin',
                defaultValue: `default`,
                description: ``,
                required: false,
                type: {
                    name: 'Skins',
                    value: 'undefined',
                }
            },
            'size': {
                name: 'size',
                defaultValue: `medium`,
                description: ``,
                required: false,
                type: {
                    name: 'Size',
                    value: 'undefined',
                }
            },
            'type': {
                name: 'type',
                defaultValue: `normal`,
                description: ``,
                required: false,
                type: {
                    name: 'Type',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: `css className`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onClick': {
                name: 'onClick',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '((event: MouseEvent<any>) => void) | OnClickWithPromise',
                    value: 'undefined',
                }
            },
            'onLoadingChange': {
                name: 'onLoadingChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(loading: boolean) => void',
                    value: 'undefined',
                }
            },
            'onMouseEnter': {
                name: 'onMouseEnter',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'onMouseLeave': {
                name: 'onMouseLeave',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'tabIndex': {
                name: 'tabIndex',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hint': {
                name: 'hint',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'hintClassName': {
                name: 'hintClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hintPlacement': {
                name: 'hintPlacement',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hintType': {
                name: 'hintType',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Type',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'ButtonLink': {
        displayName: 'ButtonLink',
        description: ``,
        props: {
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'skin': {
                name: 'skin',
                defaultValue: `default`,
                description: ``,
                required: false,
                type: {
                    name: 'Skins',
                    value: 'undefined',
                }
            },
            'size': {
                name: 'size',
                defaultValue: `medium`,
                description: ``,
                required: false,
                type: {
                    name: 'Size',
                    value: 'undefined',
                }
            },
            'type': {
                name: 'type',
                defaultValue: `normal`,
                description: ``,
                required: false,
                type: {
                    name: 'Type',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'to': {
                name: 'to',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'LocationDescriptor',
                    value: 'undefined',
                }
            },
            'replace': {
                name: 'replace',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'IconButton': {
        displayName: 'IconButton',
        description: ``,
        props: {
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'Icons',
                    value: 'undefined',
                }
            },
            'loading': {
                name: 'loading',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: `css className`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onClick': {
                name: 'onClick',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '((event: MouseEvent<any>) => void) | OnClickWithPromise',
                    value: 'undefined',
                }
            },
            'onLoadingChange': {
                name: 'onLoadingChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(loading: boolean) => void',
                    value: 'undefined',
                }
            },
            'onMouseEnter': {
                name: 'onMouseEnter',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'onMouseLeave': {
                name: 'onMouseLeave',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'tabIndex': {
                name: 'tabIndex',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hint': {
                name: 'hint',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'hintClassName': {
                name: 'hintClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hintPlacement': {
                name: 'hintPlacement',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'hintType': {
                name: 'hintType',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"normal" | "primary"',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'IconButtonLink': {
        displayName: 'IconButtonLink',
        description: ``,
        props: {
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'Icons',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'to': {
                name: 'to',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'LocationDescriptor',
                    value: 'undefined',
                }
            },
            'replace': {
                name: 'replace',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'AlertModal': {
        displayName: 'AlertModal',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'info': {
                name: 'info',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'success': {
                name: 'success',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'AlertModalError': {
        displayName: 'AlertModalError',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onClose': {
                name: 'onClose',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AlertModalLeave': {
        displayName: 'AlertModalLeave',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'callback': {
                name: 'callback',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(shouldNavigate: boolean) => void',
                    value: 'undefined',
                }
            }
        }
    },
    'AlertModalSuccess': {
        displayName: 'AlertModalSuccess',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onClose': {
                name: 'onClose',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'result': {
                name: 'result',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AlertModalDelete': {
        displayName: 'AlertModalDelete',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'onClose': {
                name: 'onClose',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'onOk': {
                name: 'onOk',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            }
        }
    },
    'AlertModalConfirmacao': {
        displayName: 'AlertModalConfirmacao',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onClose': {
                name: 'onClose',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'onOk': {
                name: 'onOk',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AlertModalContent': {
        displayName: 'AlertModalContent',
        description: ``,
        props: {
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Modal': {
        displayName: 'Modal',
        description: ``,
        props: {
            'active': {
                name: 'active',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'DataTable': {
        displayName: 'DataTable',
        description: ``,
        props: {
            'page': {
                name: 'page',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'Page<T>',
                    value: 'undefined',
                }
            },
            'onSortChange': {
                name: 'onSortChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(sort: string[]) => void',
                    value: 'undefined',
                }
            },
            'onPageChange': {
                name: 'onPageChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined',
                }
            },
            'onSizeChange': {
                name: 'onSizeChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(size: number) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'DataTableColumn': {
        displayName: 'DataTableColumn',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'render': {
                name: 'render',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(row: T) => ReactNode',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'DataTableConnectedCmp': {
        displayName: 'DataTableConnectedCmp',
        description: ``,
        props: {
            'requester': {
                name: 'requester',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'PageRequester<T, any, any>',
                    value: 'undefined',
                }
            },
            'initialParams': {
                name: 'initialParams',
                defaultValue: `{
            page: 0,
        }`,
                description: ``,
                required: false,
                type: {
                    name: 'PageParams',
                    value: 'undefined',
                }
            },
            'loadOnMount': {
                name: 'loadOnMount',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearOnUnmount': {
                name: 'clearOnUnmount',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clear': {
                name: 'clear',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'request': {
                name: 'request',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'setParams': {
                name: 'setParams',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(params: PageParams) => void',
                    value: 'undefined',
                }
            },
            'page': {
                name: 'page',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'Page<T>',
                    value: 'undefined',
                }
            },
            'onSortChange': {
                name: 'onSortChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(sort: string[]) => void',
                    value: 'undefined',
                }
            },
            'onPageChange': {
                name: 'onPageChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined',
                }
            },
            'onSizeChange': {
                name: 'onSizeChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(size: number) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'DataTableConnected': {
        displayName: 'DataTableConnected',
        description: ``,
        props: {
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'requester': {
                name: 'requester',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'PageRequester<any, any, any>',
                    value: 'undefined',
                }
            },
            'initialParams': {
                name: 'initialParams',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'PageParams',
                    value: 'undefined',
                }
            },
            'loadOnMount': {
                name: 'loadOnMount',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearOnUnmount': {
                name: 'clearOnUnmount',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'Table': {
        displayName: 'Table',
        description: ``,
        props: {
            'rows': {
                name: 'rows',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'T[]',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'TableColumn': {
        displayName: 'TableColumn',
        description: ``,
        props: {
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'render': {
                name: 'render',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(row: T) => ReactNode',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'TableFooter': {
        displayName: 'TableFooter',
        description: ``,
        props: {
            'page': {
                name: 'page',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'totalPages': {
                name: 'totalPages',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'totalElements': {
                name: 'totalElements',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'pageSize': {
                name: 'pageSize',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'onPageChange': {
                name: 'onPageChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined',
                }
            },
            'onSizeChange': {
                name: 'onSizeChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(size: number) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Currency': {
        displayName: 'Currency',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            }
        }
    },
    'DateTime': {
        displayName: 'DateTime',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string | Moment | Date',
                    value: 'undefined',
                }
            },
            'mode': {
                name: 'mode',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"date" | "time" | "dateTime"',
                    value: 'undefined',
                }
            },
            'render': {
                name: 'render',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(moment: Moment) => ReactNode',
                    value: 'undefined',
                }
            }
        }
    },
    'Number': {
        displayName: 'Number',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'minDecimalPlaces': {
                name: 'minDecimalPlaces',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'maxDecimalPlaces': {
                name: 'maxDecimalPlaces',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: ``,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'abbrev': {
                name: 'abbrev',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'prefix': {
                name: 'prefix',
                defaultValue: ``,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'sufix': {
                name: 'sufix',
                defaultValue: ``,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Percentage': {
        displayName: 'Percentage',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: `Número de 0 a 1 representando o quociente que será transformado para porcentagem`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'minDecimalPlaces': {
                name: 'minDecimalPlaces',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'maxDecimalPlaces': {
                name: 'maxDecimalPlaces',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Plural': {
        displayName: 'Plural',
        description: ``,
        props: {
            'word': {
                name: 'word',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'count': {
                name: 'count',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'inclusive': {
                name: 'inclusive',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'Text': {
        displayName: 'Text',
        description: ``,
        props: {
            'color': {
                name: 'color',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Color',
                    value: 'undefined',
                }
            },
            'size': {
                name: 'size',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'weight': {
                name: 'weight',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Weight',
                    value: 'undefined',
                }
            },
            'tag': {
                name: 'tag',
                defaultValue: `span`,
                description: ``,
                required: false,
                type: {
                    name: 'TextTag',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Telefone': {
        displayName: 'Telefone',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Cpf': {
        displayName: 'Cpf',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Cep': {
        displayName: 'Cep',
        description: ``,
        props: {
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'FormError': {
        displayName: 'FormError',
        description: ``,
        props: {
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'FormField': {
        displayName: 'FormField',
        description: ``,
        props: {
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'FormLabel': {
        displayName: 'FormLabel',
        description: ``,
        props: {
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'AsyncSelectField': {
        displayName: 'AsyncSelectField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'getPage': {
                name: 'getPage',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(params: AsyncSelectRequestParams) => Promise<any>',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'pageSize': {
                name: 'pageSize',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'searchDelay': {
                name: 'searchDelay',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'autoload': {
                name: 'autoload',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'backspaceRemoves': {
                name: 'backspaceRemoves',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'cache': {
                name: 'cache',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean | { [key: string]: any; }',
                    value: 'undefined',
                }
            },
            'clearable': {
                name: 'clearable',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearValueText': {
                name: 'clearValueText',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'labelKey': {
                name: 'labelKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'loadingPlaceholder': {
                name: 'loadingPlaceholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'ignoreAccents': {
                name: 'ignoreAccents',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'ignoreCase': {
                name: 'ignoreCase',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'multi': {
                name: 'multi',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'noResultsText': {
                name: 'noResultsText',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'searchPromptText': {
                name: 'searchPromptText',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'valueKey': {
                name: 'valueKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'CheckboxField': {
        displayName: 'CheckboxField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'checked': {
                name: 'checked',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onKeyPress': {
                name: 'onKeyPress',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'provideController': {
                name: 'provideController',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'DateField': {
        displayName: 'DateField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'adjustDateOnChange': {
                name: 'adjustDateOnChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'allowSameDay': {
                name: 'allowSameDay',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'autoComplete': {
                name: 'autoComplete',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'autoFocus': {
                name: 'autoFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'calendarClassName': {
                name: 'calendarClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'customInput': {
                name: 'customInput',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'customInputRef': {
                name: 'customInputRef',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'dateFormat': {
                name: 'dateFormat',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | string[]',
                    value: 'undefined',
                }
            },
            'dateFormatCalendar': {
                name: 'dateFormatCalendar',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'dayClassName': {
                name: 'dayClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabledKeyboardNavigation': {
                name: 'disabledKeyboardNavigation',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'dropdownMode': {
                name: 'dropdownMode',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"scroll" | "select"',
                    value: 'undefined',
                }
            },
            'endDate': {
                name: 'endDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'excludeDates': {
                name: 'excludeDates',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'filterDate': {
                name: 'filterDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => boolean',
                    value: 'undefined',
                }
            },
            'fixedHeight': {
                name: 'fixedHeight',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'forceShowMonthNavigation': {
                name: 'forceShowMonthNavigation',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'formatWeekNumber': {
                name: 'formatWeekNumber',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => ReactText',
                    value: 'undefined',
                }
            },
            'highlightDates': {
                name: 'highlightDates',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'includeDates': {
                name: 'includeDates',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'includeTimes': {
                name: 'includeTimes',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'inline': {
                name: 'inline',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'isClearable': {
                name: 'isClearable',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'locale': {
                name: 'locale',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxDate': {
                name: 'maxDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'minDate': {
                name: 'minDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'monthsShown': {
                name: 'monthsShown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onChangeRaw': {
                name: 'onChangeRaw',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onClickOutside': {
                name: 'onClickOutside',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLDivElement>) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onKeyDown': {
                name: 'onKeyDown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLDivElement>) => void',
                    value: 'undefined',
                }
            },
            'onMonthChange': {
                name: 'onMonthChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined',
                }
            },
            'onSelect': {
                name: 'onSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment, event: SyntheticEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'onWeekSelect': {
                name: 'onWeekSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(firstDayOfWeek: Moment, weekNumber: ReactText, event: SyntheticEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'onYearChange': {
                name: 'onYearChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined',
                }
            },
            'openToDate': {
                name: 'openToDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'peekNextMonth': {
                name: 'peekNextMonth',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'placeholderText': {
                name: 'placeholderText',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'popperClassName': {
                name: 'popperClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'popperModifiers': {
                name: 'popperModifiers',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'popperPlacement': {
                name: 'popperPlacement',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'preventOpenOnFocus': {
                name: 'preventOpenOnFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'readOnly': {
                name: 'readOnly',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'scrollableYearDropdown': {
                name: 'scrollableYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'scrollableMonthYearDropdown': {
                name: 'scrollableMonthYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'selected': {
                name: 'selected',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'selectsEnd': {
                name: 'selectsEnd',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'selectsStart': {
                name: 'selectsStart',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showDisabledMonthNavigation': {
                name: 'showDisabledMonthNavigation',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMonthDropdown': {
                name: 'showMonthDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMonthYearDropdown': {
                name: 'showMonthYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showWeekNumbers': {
                name: 'showWeekNumbers',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showYearDropdown': {
                name: 'showYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'startDate': {
                name: 'startDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'tabIndex': {
                name: 'tabIndex',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'todayButton': {
                name: 'todayButton',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'useWeekdaysShort': {
                name: 'useWeekdaysShort',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'useShortMonthInDropdown': {
                name: 'useShortMonthInDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'utcOffset': {
                name: 'utcOffset',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'weekLabel': {
                name: 'weekLabel',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'withPortal': {
                name: 'withPortal',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'yearDropdownItemNumber': {
                name: 'yearDropdownItemNumber',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'shouldCloseOnSelect': {
                name: 'shouldCloseOnSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showTimeSelect': {
                name: 'showTimeSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'timeFormat': {
                name: 'timeFormat',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'timeIntervals': {
                name: 'timeIntervals',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'minTime': {
                name: 'minTime',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'maxTime': {
                name: 'maxTime',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'excludeTimes': {
                name: 'excludeTimes',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'validate': {
                name: 'validate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, allValues: object) => any',
                    value: 'undefined',
                }
            }
        }
    },
    'MaskedField': {
        displayName: 'MaskedField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'mask': {
                name: 'mask',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'MaskType',
                    value: 'undefined',
                }
            },
            'guide': {
                name: 'guide',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'placeholderChar': {
                name: 'placeholderChar',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'keepCharPositions': {
                name: 'keepCharPositions',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMask': {
                name: 'showMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'pipe': {
                name: 'pipe',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined',
                }
            },
            'conformToMask': {
                name: 'conformToMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'parse': {
                name: 'parse',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'format': {
                name: 'format',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            }
        }
    },
    'NumberField': {
        displayName: 'NumberField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            }
        }
    },
    'RadioField': {
        displayName: 'RadioField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'checked': {
                name: 'checked',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onKeyPress': {
                name: 'onKeyPress',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'provideController': {
                name: 'provideController',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'SelectField': {
        displayName: 'SelectField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'options': {
                name: 'options',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'SelectOption[]',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'backspaceRemoves': {
                name: 'backspaceRemoves',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearable': {
                name: 'clearable',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearValueText': {
                name: 'clearValueText',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'labelKey': {
                name: 'labelKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'ignoreAccents': {
                name: 'ignoreAccents',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'ignoreCase': {
                name: 'ignoreCase',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'multi': {
                name: 'multi',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'noResultsText': {
                name: 'noResultsText',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined',
                }
            },
            'valueKey': {
                name: 'valueKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'TextField': {
        displayName: 'TextField',
        description: ``,
        props: {
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'password': {
                name: 'password',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'checked': {
                name: 'checked',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onKeyPress': {
                name: 'onKeyPress',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'provideController': {
                name: 'provideController',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'parse': {
                name: 'parse',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'format': {
                name: 'format',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            }
        }
    },
    'TelefoneField': {
        displayName: 'TelefoneField',
        description: ``,
        props: {
            'parse': {
                name: 'parse',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'format': {
                name: 'format',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'guide': {
                name: 'guide',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'placeholderChar': {
                name: 'placeholderChar',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'keepCharPositions': {
                name: 'keepCharPositions',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMask': {
                name: 'showMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'pipe': {
                name: 'pipe',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined',
                }
            },
            'conformToMask': {
                name: 'conformToMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'CpfField': {
        displayName: 'CpfField',
        description: ``,
        props: {
            'parse': {
                name: 'parse',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'format': {
                name: 'format',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'guide': {
                name: 'guide',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'placeholderChar': {
                name: 'placeholderChar',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'keepCharPositions': {
                name: 'keepCharPositions',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMask': {
                name: 'showMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'pipe': {
                name: 'pipe',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined',
                }
            },
            'conformToMask': {
                name: 'conformToMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'CepField': {
        displayName: 'CepField',
        description: ``,
        props: {
            'parse': {
                name: 'parse',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'format': {
                name: 'format',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'guide': {
                name: 'guide',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'placeholderChar': {
                name: 'placeholderChar',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'keepCharPositions': {
                name: 'keepCharPositions',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMask': {
                name: 'showMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'pipe': {
                name: 'pipe',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined',
                }
            },
            'conformToMask': {
                name: 'conformToMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Field': {
        displayName: 'Field',
        description: ``,
        props: {
            'hasWrapper': {
                name: 'hasWrapper',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'render': {
                name: 'render',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(props: RenderProps) => Element',
                    value: 'undefined',
                }
            },
            'error': {
                name: 'error',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'allowNull': {
                name: 'allowNull',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'format': {
                name: 'format',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'parse': {
                name: 'parse',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined',
                }
            },
            'subscription': {
                name: 'subscription',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'FieldSubscription',
                    value: 'undefined',
                }
            },
            'validate': {
                name: 'validate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(value: any, allValues: object) => any',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'component': {
                name: 'component',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | ComponentClass<FieldRenderProps> | StatelessComponent<FieldRenderProps>',
                    value: 'undefined',
                }
            }
        }
    },
    'Form': {
        displayName: 'Form',
        description: ``,
        props: {
            'errorIcon': {
                name: 'errorIcon',
                defaultValue: `modal-erro`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'errorModal': {
                name: 'errorModal',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'StatelessComponent<ErrorModalProps> | ComponentClass<ErrorModalProps>',
                    value: 'undefined',
                }
            },
            'hasErrorModal': {
                name: 'hasErrorModal',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'hasLeaveModal': {
                name: 'hasLeaveModal',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'hasSuccessModal': {
                name: 'hasSuccessModal',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'successContent': {
                name: 'successContent',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Element',
                    value: 'undefined',
                }
            },
            'successIcon': {
                name: 'successIcon',
                defaultValue: `modal-sucesso`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'successModal': {
                name: 'successModal',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'StatelessComponent<FormModalProps> | ComponentClass<FormModalProps>',
                    value: 'undefined',
                }
            },
            'successTitle': {
                name: 'successTitle',
                defaultValue: `Cadastro realizado com sucesso!`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onSubmitSucceeded': {
                name: 'onSubmitSucceeded',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined',
                }
            },
            'onSubmitFailed': {
                name: 'onSubmitFailed',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(erros: object) => void',
                    value: 'undefined',
                }
            },
            'subscription': {
                name: 'subscription',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'FormSubscription',
                    value: 'undefined',
                }
            },
            'decorators': {
                name: 'decorators',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Decorator[]',
                    value: 'undefined',
                }
            },
            'debug': {
                name: 'debug',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'DebugFunction',
                    value: 'undefined',
                }
            },
            'initialValues': {
                name: 'initialValues',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'object',
                    value: 'undefined',
                }
            },
            'mutators': {
                name: 'mutators',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '{ [key: string]: Mutator; }',
                    value: 'undefined',
                }
            },
            'onSubmit': {
                name: 'onSubmit',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(values: object, form: FormApi, callback?: (errors?: object) => void) => void | object | Promise<...',
                    value: 'undefined',
                }
            },
            'validate': {
                name: 'validate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(values: object) => object | Promise<object>',
                    value: 'undefined',
                }
            },
            'validateOnBlur': {
                name: 'validateOnBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'component': {
                name: 'component',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | ComponentClass<FormRenderProps> | StatelessComponent<FormRenderProps>',
                    value: 'undefined',
                }
            },
            'render': {
                name: 'render',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(props: FormRenderProps) => ReactNode',
                    value: 'undefined',
                }
            }
        }
    },
    'SubmitButton': {
        displayName: 'SubmitButton',
        description: ``,
        props: {
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'handleSubmit': {
                name: 'handleSubmit',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(event?: SyntheticEvent<HTMLFormElement>) => void',
                    value: 'undefined',
                }
            }
        }
    },
    'Checkbox': {
        displayName: 'Checkbox',
        description: ``,
        props: {
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'checked': {
                name: 'checked',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onKeyPress': {
                name: 'onKeyPress',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'provideController': {
                name: 'provideController',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'DatePickerInput': {
        displayName: 'DatePickerInput',
        description: ``,
        props: {
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'adjustDateOnChange': {
                name: 'adjustDateOnChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'allowSameDay': {
                name: 'allowSameDay',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'autoComplete': {
                name: 'autoComplete',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'autoFocus': {
                name: 'autoFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'calendarClassName': {
                name: 'calendarClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'customInput': {
                name: 'customInput',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined',
                }
            },
            'customInputRef': {
                name: 'customInputRef',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'dateFormat': {
                name: 'dateFormat',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string | string[]',
                    value: 'undefined',
                }
            },
            'dateFormatCalendar': {
                name: 'dateFormatCalendar',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'dayClassName': {
                name: 'dayClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabledKeyboardNavigation': {
                name: 'disabledKeyboardNavigation',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'dropdownMode': {
                name: 'dropdownMode',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"scroll" | "select"',
                    value: 'undefined',
                }
            },
            'endDate': {
                name: 'endDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'excludeDates': {
                name: 'excludeDates',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'filterDate': {
                name: 'filterDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => boolean',
                    value: 'undefined',
                }
            },
            'fixedHeight': {
                name: 'fixedHeight',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'forceShowMonthNavigation': {
                name: 'forceShowMonthNavigation',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'formatWeekNumber': {
                name: 'formatWeekNumber',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => ReactText',
                    value: 'undefined',
                }
            },
            'highlightDates': {
                name: 'highlightDates',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'includeDates': {
                name: 'includeDates',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'includeTimes': {
                name: 'includeTimes',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'inline': {
                name: 'inline',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'isClearable': {
                name: 'isClearable',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'locale': {
                name: 'locale',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxDate': {
                name: 'maxDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'minDate': {
                name: 'minDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'monthsShown': {
                name: 'monthsShown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(date: Moment, event: SyntheticEvent<any>) => any',
                    value: 'undefined',
                }
            },
            'onChangeRaw': {
                name: 'onChangeRaw',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onClickOutside': {
                name: 'onClickOutside',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLDivElement>) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onKeyDown': {
                name: 'onKeyDown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLDivElement>) => void',
                    value: 'undefined',
                }
            },
            'onMonthChange': {
                name: 'onMonthChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined',
                }
            },
            'onSelect': {
                name: 'onSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment, event: SyntheticEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'onWeekSelect': {
                name: 'onWeekSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(firstDayOfWeek: Moment, weekNumber: ReactText, event: SyntheticEvent<any>) => void',
                    value: 'undefined',
                }
            },
            'onYearChange': {
                name: 'onYearChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined',
                }
            },
            'openToDate': {
                name: 'openToDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'peekNextMonth': {
                name: 'peekNextMonth',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'placeholderText': {
                name: 'placeholderText',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'popperClassName': {
                name: 'popperClassName',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'popperModifiers': {
                name: 'popperModifiers',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'popperPlacement': {
                name: 'popperPlacement',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'preventOpenOnFocus': {
                name: 'preventOpenOnFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'readOnly': {
                name: 'readOnly',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'required': {
                name: 'required',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'scrollableYearDropdown': {
                name: 'scrollableYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'scrollableMonthYearDropdown': {
                name: 'scrollableMonthYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'selected': {
                name: 'selected',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'selectsEnd': {
                name: 'selectsEnd',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'selectsStart': {
                name: 'selectsStart',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showDisabledMonthNavigation': {
                name: 'showDisabledMonthNavigation',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMonthDropdown': {
                name: 'showMonthDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMonthYearDropdown': {
                name: 'showMonthYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showWeekNumbers': {
                name: 'showWeekNumbers',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showYearDropdown': {
                name: 'showYearDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'startDate': {
                name: 'startDate',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'tabIndex': {
                name: 'tabIndex',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'title': {
                name: 'title',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'todayButton': {
                name: 'todayButton',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'useWeekdaysShort': {
                name: 'useWeekdaysShort',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'useShortMonthInDropdown': {
                name: 'useShortMonthInDropdown',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'utcOffset': {
                name: 'utcOffset',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'weekLabel': {
                name: 'weekLabel',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'withPortal': {
                name: 'withPortal',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'yearDropdownItemNumber': {
                name: 'yearDropdownItemNumber',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'shouldCloseOnSelect': {
                name: 'shouldCloseOnSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showTimeSelect': {
                name: 'showTimeSelect',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'timeFormat': {
                name: 'timeFormat',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'timeIntervals': {
                name: 'timeIntervals',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'minTime': {
                name: 'minTime',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'maxTime': {
                name: 'maxTime',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined',
                }
            },
            'excludeTimes': {
                name: 'excludeTimes',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            }
        }
    },
    'Input': {
        displayName: 'Input',
        description: ``,
        props: {
            'type': {
                name: 'type',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'checked': {
                name: 'checked',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onKeyPress': {
                name: 'onKeyPress',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'provideController': {
                name: 'provideController',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined',
                }
            }
        }
    },
    'InputIconDecorator': {
        displayName: 'InputIconDecorator',
        description: ``,
        props: {
            'icon': {
                name: 'icon',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'Icons',
                    value: 'undefined',
                }
            },
            'position': {
                name: 'position',
                defaultValue: `right`,
                description: ``,
                required: false,
                type: {
                    name: '"left" | "right"',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'onClick': {
                name: 'onClick',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '((event: MouseEvent<any>) => void) | OnClickWithPromise',
                    value: 'undefined',
                }
            }
        }
    },
    'MaskedInput': {
        displayName: 'MaskedInput',
        description: ``,
        props: {
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'mask': {
                name: 'mask',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'MaskType',
                    value: 'undefined',
                }
            },
            'guide': {
                name: 'guide',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'placeholderChar': {
                name: 'placeholderChar',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'keepCharPositions': {
                name: 'keepCharPositions',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'showMask': {
                name: 'showMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'pipe': {
                name: 'pipe',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined',
                }
            },
            'conformToMask': {
                name: 'conformToMask',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'RadioButton': {
        displayName: 'RadioButton',
        description: ``,
        props: {
            'label': {
                name: 'label',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'checked': {
                name: 'checked',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onKeyPress': {
                name: 'onKeyPress',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'provideController': {
                name: 'provideController',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'TextInput': {
        displayName: 'TextInput',
        description: ``,
        props: {
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined',
                }
            },
            'password': {
                name: 'password',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'className': {
                name: 'className',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'checked': {
                name: 'checked',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'id': {
                name: 'id',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'name': {
                name: 'name',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined',
                }
            },
            'onFocus': {
                name: 'onFocus',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined',
                }
            },
            'onKeyPress': {
                name: 'onKeyPress',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'provideController': {
                name: 'provideController',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'AsyncSelect': {
        displayName: 'AsyncSelect',
        description: ``,
        props: {
            'getPage': {
                name: 'getPage',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: '(params: AsyncSelectRequestParams) => Promise<any>',
                    value: 'undefined',
                }
            },
            'maxLength': {
                name: 'maxLength',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'pageSize': {
                name: 'pageSize',
                defaultValue: `10`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'searchDelay': {
                name: 'searchDelay',
                defaultValue: `500`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'autoload': {
                name: 'autoload',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'backspaceRemoves': {
                name: 'backspaceRemoves',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'cache': {
                name: 'cache',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean | { [key: string]: any; }',
                    value: 'undefined',
                }
            },
            'clearable': {
                name: 'clearable',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearValueText': {
                name: 'clearValueText',
                defaultValue: `Limpar seleção`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'labelKey': {
                name: 'labelKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'loadingPlaceholder': {
                name: 'loadingPlaceholder',
                defaultValue: `Carregando...`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'ignoreAccents': {
                name: 'ignoreAccents',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'ignoreCase': {
                name: 'ignoreCase',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'multi': {
                name: 'multi',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'noResultsText': {
                name: 'noResultsText',
                defaultValue: `Nenhum item encontrado.`,
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: ``,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'searchPromptText': {
                name: 'searchPromptText',
                defaultValue: `Digite para pesquisar`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'valueKey': {
                name: 'valueKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'Select': {
        displayName: 'Select',
        description: ``,
        props: {
            'options': {
                name: 'options',
                defaultValue: `null`,
                description: ``,
                required: true,
                type: {
                    name: 'SelectOption[]',
                    value: 'undefined',
                }
            },
            'status': {
                name: 'status',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
                    value: 'undefined',
                }
            },
            'value': {
                name: 'value',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            },
            'backspaceRemoves': {
                name: 'backspaceRemoves',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearable': {
                name: 'clearable',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'clearValueText': {
                name: 'clearValueText',
                defaultValue: `Limpar seleção`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'disabled': {
                name: 'disabled',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'labelKey': {
                name: 'labelKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            },
            'ignoreAccents': {
                name: 'ignoreAccents',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'ignoreCase': {
                name: 'ignoreCase',
                defaultValue: `true`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'multi': {
                name: 'multi',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'noResultsText': {
                name: 'noResultsText',
                defaultValue: `Nenhum item encontrado.`,
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined',
                }
            },
            'onBlur': {
                name: 'onBlur',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined',
                }
            },
            'onChange': {
                name: 'onChange',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
                    value: 'undefined',
                }
            },
            'placeholder': {
                name: 'placeholder',
                defaultValue: ``,
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined',
                }
            },
            'valueKey': {
                name: 'valueKey',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined',
                }
            }
        }
    },
    'AutoGrid': {
        displayName: 'AutoGrid',
        description: ``,
        props: {
            'cellSize': {
                name: 'cellSize',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'CellSize',
                    value: 'undefined',
                }
            },
            'wrap': {
                name: 'wrap',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'alignItems': {
                name: 'alignItems',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'AlignItems',
                    value: 'undefined',
                }
            },
            'justifyContent': {
                name: 'justifyContent',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'JustifyContent',
                    value: 'undefined',
                }
            },
            'direction': {
                name: 'direction',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Direction',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Cell': {
        displayName: 'Cell',
        description: ``,
        props: {
            'size': {
                name: 'size',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'CellSize',
                    value: 'undefined',
                }
            },
            'alignSelf': {
                name: 'alignSelf',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'AlignSelf',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Grid': {
        displayName: 'Grid',
        description: ``,
        props: {
            'wrap': {
                name: 'wrap',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'alignItems': {
                name: 'alignItems',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'AlignItems',
                    value: 'undefined',
                }
            },
            'justifyContent': {
                name: 'justifyContent',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'JustifyContent',
                    value: 'undefined',
                }
            },
            'direction': {
                name: 'direction',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Direction',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'PageContainer': {
        displayName: 'PageContainer',
        description: ``,
        props: {
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Flow': {
        displayName: 'Flow',
        description: ``,
        props: {
            'direction': {
                name: 'direction',
                defaultValue: `horizontal`,
                description: ``,
                required: false,
                type: {
                    name: '"horizontal" | "vertical"',
                    value: 'undefined',
                }
            },
            'vSpacing': {
                name: 'vSpacing',
                defaultValue: `0`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'hSpacing': {
                name: 'hSpacing',
                defaultValue: `1`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'HFlow': {
        displayName: 'HFlow',
        description: ``,
        props: {
            'direction': {
                name: 'direction',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"horizontal" | "vertical"',
                    value: 'undefined',
                }
            },
            'vSpacing': {
                name: 'vSpacing',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'hSpacing': {
                name: 'hSpacing',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'VFlow': {
        displayName: 'VFlow',
        description: ``,
        props: {
            'direction': {
                name: 'direction',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '"horizontal" | "vertical"',
                    value: 'undefined',
                }
            },
            'vSpacing': {
                name: 'vSpacing',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'hSpacing': {
                name: 'hSpacing',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
    'Spacing': {
        displayName: 'Spacing',
        description: ``,
        props: {
            'top': {
                name: 'top',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'right': {
                name: 'right',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'bottom': {
                name: 'bottom',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'left': {
                name: 'left',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined',
                }
            },
            'block': {
                name: 'block',
                defaultValue: `false`,
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined',
                }
            },
            'styles': {
                name: 'styles',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined',
                }
            },
            'theme': {
                name: 'theme',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined',
                }
            },
            'css': {
                name: 'css',
                defaultValue: `null`,
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined',
                }
            }
        }
    },
}

export default propTypes
