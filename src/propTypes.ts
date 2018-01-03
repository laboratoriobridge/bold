import { ComponentDoc } from 'react-docgen-typescript'

const propTypes: {[key in string]: ComponentDoc} = {
    'Button': {
        displayName: 'Button',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: `css className`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'loading': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClick': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Function',
                    value: 'undefined'
                }
            },
            'onMouseEnter': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'onMouseLeave': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'tabIndex': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'normal',
                description: ``,
                required: false,
                type: {
                    name: 'Type',
                    value: 'undefined'
                }
            },
            'hint': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'hintClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'hintPlacement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'hintType': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"normal" | "primary"',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'Hint': {
        displayName: 'Hint',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'placement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Placement',
                    value: 'undefined'
                }
            },
            'componente': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'normal',
                description: ``,
                required: false,
                type: {
                    name: '"normal" | "primary"',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'Icon': {
        displayName: 'Icon',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"small" | "medium" | "large" | "is-12px" | "gigantic"',
                    value: 'undefined'
                }
            },
            'onMouseOver': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Function',
                    value: 'undefined'
                }
            },
            'onMouseLeave': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Function',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'clearfix': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'expanded': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledLeft': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledRight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'overlay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'fullwidth': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'fullHeight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textCentered': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textLeft': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textRight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'marginless': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'paddingless': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'unselectable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'alignedCenter': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'horizontalFlow': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledBottom': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'verticalFlow': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Label': {
        displayName: 'Label',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'LoadingAnimation': {
        displayName: 'LoadingAnimation',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"small"',
                    value: 'undefined'
                }
            }
        }
    },
    'Modal': {
        displayName: 'Modal',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'active': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Paginator': {
        displayName: 'Paginator',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'first': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'last': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pageNumber': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'totalPages': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined'
                }
            }
        }
    },
    'Popover': {
        displayName: 'Popover',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'borderColor': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'color': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onHide': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'placement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Placement',
                    value: 'undefined'
                }
            },
            'rootClose': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'show': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'target': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | number | boolean | {} | Function | ReactElement<any> | (string | number | boolean | any[...',
                    value: 'undefined'
                }
            }
        }
    },
    'ComposedLabel': {
        displayName: 'ComposedLabel',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'big': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'customizeTitle': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(title: string) => ReactNode',
                    value: 'undefined'
                }
            },
            'horizontal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'inverted': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'italic': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'labelClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'Não informada',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: '',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'CurrencyLabel': {
        displayName: 'CurrencyLabel',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'big': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'customizeTitle': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(title: string) => ReactNode',
                    value: 'undefined'
                }
            },
            'horizontal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'inverted': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'italic': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'labelClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'DateLabel': {
        displayName: 'DateLabel',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'big': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'customizeTitle': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(title: string) => ReactNode',
                    value: 'undefined'
                }
            },
            'horizontal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'inverted': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'italic': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'labelClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'MaskedLabel': {
        displayName: 'MaskedLabel',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'mask': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'big': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'customizeTitle': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(title: string) => ReactNode',
                    value: 'undefined'
                }
            },
            'horizontal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'inverted': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'italic': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'labelClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'TextLabel': {
        displayName: 'TextLabel',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'big': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'customizeTitle': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(title: string) => ReactNode',
                    value: 'undefined'
                }
            },
            'horizontal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'inverted': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'italic': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'labelClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModal': {
        displayName: 'AlertModal',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'info': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'success': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalError': {
        displayName: 'AlertModalError',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalLeave': {
        displayName: 'AlertModalLeave',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'callback': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(shouldNavigate: boolean) => void',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalSuccess': {
        displayName: 'AlertModalSuccess',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'result': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalDelete': {
        displayName: 'AlertModalDelete',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onOk': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalConfirmacao': {
        displayName: 'AlertModalConfirmacao',
        description: ``,
        props: {
            'active': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onOk': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalButtonBar': {
        displayName: 'AlertModalButtonBar',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'AlertModalContent': {
        displayName: 'AlertModalContent',
        description: ``,
        props: {
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'ErrorIndicator': {
        displayName: 'ErrorIndicator',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'Map<string, string>',
                    value: 'undefined'
                }
            }
        }
    },
    'FormField': {
        displayName: 'FormField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'FormLabel': {
        displayName: 'FormLabel',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'AsyncSelect': {
        displayName: 'AsyncSelect',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'url': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'pageSize': {
                defaultValue: '10',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'searchDelay': {
                defaultValue: '500',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'customizeParams': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'autoload': {
                defaultValue: 'false',
                description: `Whether to auto-load the default async options set.`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'cache': {
                defaultValue: 'false',
                description: `object to use to cache results; can be null to disable cache`,
                required: false,
                type: {
                    name: 'boolean | Object',
                    value: 'undefined'
                }
            },
            'ignoreAccents': {
                defaultValue: 'false',
                description: `whether to strip diacritics when filtering (shared with Select)`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'ignoreCase': {
                defaultValue: 'true',
                description: `whether to perform case-insensitive filtering (shared with Select)`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'isLoading': {
                defaultValue: 'null',
                description: `overrides the isLoading state when set to true`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'loadOptions': {
                defaultValue: 'null',
                description: `function to call to load options asynchronously`,
                required: false,
                type: {
                    name: '((input: string) => Promise<AutocompleteResult>) | ((input: string, callback: (err: any, result: ...',
                    value: 'undefined'
                }
            },
            'loadingPlaceholder': {
                defaultValue: 'Carregando...',
                description: `replaces the placeholder while options are loading`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'minimumInput': {
                defaultValue: 'null',
                description: `the minimum number of characters that trigger loadOptions`,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'noResultsText': {
                defaultValue: 'Nenhum item encontrado.',
                description: `placeholder displayed when there are no matching search results (shared with Select)`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: '',
                description: `field placeholder; displayed when there's no value (shared with Select)`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'searchPromptText': {
                defaultValue: 'Digite para pesquisar',
                description: `label to prompt for search input`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'searchingText': {
                defaultValue: 'null',
                description: `message to display while options are loading`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'addLabelText': {
                defaultValue: '\`Add "{label}"?\`',
                description: `text to display when \`allowCreate\` is true.`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'arrowRenderer': {
                defaultValue: 'undefined',
                description: `renders a custom drop-down arrow to be shown in the right-hand side of the select.`,
                required: false,
                type: {
                    name: '(props: ArrowRendererProps) => ReactElement<any>',
                    value: 'undefined'
                }
            },
            'autoBlur': {
                defaultValue: 'false',
                description: `blurs the input element after a selection has been made. Handy for lowering the keyboard on mobile devices.`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'autofocus': {
                defaultValue: 'false',
                description: `autofocus the component on mount`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'autosize': {
                defaultValue: 'null',
                description: `If enabled, the input will expand as the length of its value increases`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'backspaceRemoves': {
                defaultValue: 'false',
                description: `whether pressing backspace removes the last item when there is no input value`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'backspaceToRemoveMessage': {
                defaultValue: '"Press backspace to remove..."',
                description: `Message to use for screenreaders to press backspace to remove the current item
{label} is replaced with the item label`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: `CSS className for the outer element`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'clearAllText': {
                defaultValue: '"Clear all"',
                description: `title for the "clear" control when \`multi\` is true`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'clearValueText': {
                defaultValue: 'Limpar seleção',
                description: `title for the "clear" control`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'clearable': {
                defaultValue: 'true',
                description: `whether it is possible to reset value. if enabled, an X button will appear at the right side.`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'delimiter': {
                defaultValue: '","',
                description: `delimiter to use to join multiple values`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'false',
                description: `whether the Select is disabled or not`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'escapeClearsValue': {
                defaultValue: 'true',
                description: `whether escape clears the value when the menu is closed`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'filterOption': {
                defaultValue: 'null',
                description: `method to filter a single option`,
                required: false,
                type: {
                    name: '(option: Option, filter: string) => Option',
                    value: 'undefined'
                }
            },
            'filterOptions': {
                defaultValue: 'null',
                description: `method to filter the options array`,
                required: false,
                type: {
                    name: '(options: Option[], filter: string, currentValues: Option[]) => Option[]',
                    value: 'undefined'
                }
            },
            'inputProps': {
                defaultValue: '{}',
                description: `custom attributes for the Input (in the Select-control) e.g: {'data-foo': 'bar'}`,
                required: false,
                type: {
                    name: 'Object',
                    value: 'undefined'
                }
            },
            'inputRenderer': {
                defaultValue: 'null',
                description: `renders a custom input`,
                required: false,
                type: {
                    name: '(props: Object) => ReactElement<any>',
                    value: 'undefined'
                }
            },
            'instanceId': {
                defaultValue: 'null',
                description: `allows for synchronization of component id's on server and client.
@see https://github.com/JedWatson/react-select/pull/1105`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'joinValues': {
                defaultValue: 'false',
                description: `(legacy mode) joins multiple values into a single form field with the delimiter`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'labelKey': {
                defaultValue: 'nome',
                description: `the option property to use for the label`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'matchPos': {
                defaultValue: '"any"',
                description: `(any, start) match the start or entire string when filtering`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'matchProp': {
                defaultValue: '"any"',
                description: `(any, label, value) which option property to filter on`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'menuBuffer': {
                defaultValue: '0',
                description: `buffer of px between the base of the dropdown and the viewport to shift if menu doesnt fit in viewport`,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'menuContainerStyle': {
                defaultValue: 'null',
                description: `optional style to apply to the menu container`,
                required: false,
                type: {
                    name: '{}',
                    value: 'undefined'
                }
            },
            'menuRenderer': {
                defaultValue: 'null',
                description: `renders a custom menu with options`,
                required: false,
                type: {
                    name: '(props: MenuRendererProps) => ReactElement<any>',
                    value: 'undefined'
                }
            },
            'menuStyle': {
                defaultValue: 'null',
                description: `optional style to apply to the menu`,
                required: false,
                type: {
                    name: '{}',
                    value: 'undefined'
                }
            },
            'multi': {
                defaultValue: 'false',
                description: `multi-value input`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: `field name, for hidden \`<input>\` tag`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: `onBlur handler: function (event) {}`,
                required: false,
                type: {
                    name: '(event: FocusEvent<{}>) => void',
                    value: 'undefined'
                }
            },
            'onBlurResetsInput': {
                defaultValue: 'true',
                description: `whether to clear input on blur or not`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: `onChange handler: function (newValue) {}`,
                required: false,
                type: {
                    name: '(newValue: Option | Option[]) => void',
                    value: 'undefined'
                }
            },
            'onClose': {
                defaultValue: 'null',
                description: `fires when the menu is closed`,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: `onFocus handler: function (event) {}`,
                required: false,
                type: {
                    name: '(event: FocusEvent<{}>) => void',
                    value: 'undefined'
                }
            },
            'onInputChange': {
                defaultValue: 'null',
                description: `onInputChange handler: function (inputValue) {}`,
                required: false,
                type: {
                    name: '(inputValue: string) => void',
                    value: 'undefined'
                }
            },
            'onInputKeyDown': {
                defaultValue: 'null',
                description: `onInputKeyDown handler: function (keyboardEvent) {}`,
                required: false,
                type: {
                    name: '(event: KeyboardEvent) => void',
                    value: 'undefined'
                }
            },
            'onMenuScrollToBottom': {
                defaultValue: 'null',
                description: `fires when the menu is scrolled to the bottom; can be used to paginate options`,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onOpen': {
                defaultValue: 'null',
                description: `fires when the menu is opened`,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onOptionLabelClick': {
                defaultValue: 'null',
                description: `@deprecated use onValueClick isntead`,
                required: false,
                type: {
                    name: '(value: string, event: Event) => void',
                    value: 'undefined'
                }
            },
            'openAfterFocus': {
                defaultValue: 'false',
                description: `boolean to enable opening dropdown when focused`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'openOnFocus': {
                defaultValue: 'false',
                description: `open the options menu when the input gets focus (requires searchable = true)`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'optionClassName': {
                defaultValue: 'null',
                description: `className to add to each option component`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'optionComponent': {
                defaultValue: 'null',
                description: `option component to render in dropdown`,
                required: false,
                type: {
                    name: 'ComponentClass<any>',
                    value: 'undefined'
                }
            },
            'optionRenderer': {
                defaultValue: 'null',
                description: `function which returns a custom way to render the options in the menu`,
                required: false,
                type: {
                    name: '(option: Option) => Element',
                    value: 'undefined'
                }
            },
            'options': {
                defaultValue: 'false',
                description: `array of Select options`,
                required: false,
                type: {
                    name: 'Option[]',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'false',
                description: `applies HTML5 required attribute when needed`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'resetValue': {
                defaultValue: 'null',
                description: `value to use when you clear the control`,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'scrollMenuIntoView': {
                defaultValue: 'true',
                description: `whether the viewport will shift to display the entire menu when engaged`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'searchable': {
                defaultValue: 'true;',
                description: `whether to enable searching feature or not`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'tabSelectsValue': {
                defaultValue: 'null',
                description: `whether to select the currently focused value when the  [tab]  key is pressed`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'valueKey': {
                defaultValue: 'id',
                description: `the option property to use for the value`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'valueRenderer': {
                defaultValue: 'false',
                description: `function which returns a custom way to render the value selected`,
                required: false,
                type: {
                    name: '(option: Option) => Element',
                    value: 'undefined'
                }
            },
            'style': {
                defaultValue: 'null',
                description: `optional style to apply to the control`,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'tabIndex': {
                defaultValue: 'null',
                description: `optional tab index of the control`,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'valueComponent': {
                defaultValue: 'null',
                description: `value component to render`,
                required: false,
                type: {
                    name: 'ComponentClass<any>',
                    value: 'undefined'
                }
            },
            'wrapperStyle': {
                defaultValue: 'null',
                description: `optional style to apply to the component wrapper`,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onValueClick': {
                defaultValue: 'null',
                description: `onClick handler for value labels: function (value, event) {}`,
                required: false,
                type: {
                    name: '(value: string, event: Event) => void',
                    value: 'undefined'
                }
            },
            'simpleValue': {
                defaultValue: 'null',
                description: `pass the value to onChange as a simple value (legacy pre 1.0 mode), defaults to false`,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'key': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactText',
                    value: 'undefined'
                }
            },
            'ref': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Ref<ReactSelectClass>',
                    value: 'undefined'
                }
            }
        }
    },
    'Checkbox': {
        displayName: 'Checkbox',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDragStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDrop': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'ChecklistItem': {
        displayName: 'ChecklistItem',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'optionValue': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDragStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDrop': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'Input': {
        displayName: 'Input',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            }
        }
    },
    'PasswordInput': {
        displayName: 'PasswordInput',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            }
        }
    },
    'RadioButton': {
        displayName: 'RadioButton',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'TextArea': {
        displayName: 'TextArea',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            }
        }
    },
    'TextInput': {
        displayName: 'TextInput',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'ButtonBar': {
        displayName: 'ButtonBar',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'clearfix': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'expanded': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledLeft': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledRight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'overlay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'fullwidth': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'fullHeight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textCentered': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textLeft': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textRight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'marginless': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'paddingless': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'unselectable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'alignedCenter': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'horizontalFlow': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledBottom': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'verticalFlow': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Linha': {
        displayName: 'Linha',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"medium"',
                    value: 'undefined'
                }
            },
            'clearfix': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'expanded': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledLeft': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledRight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'overlay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'fullwidth': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'fullHeight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textCentered': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textLeft': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'textRight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'marginless': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'paddingless': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'unselectable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'alignedCenter': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'horizontalFlow': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pulledBottom': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'verticalFlow': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'LoadingContainer': {
        displayName: 'LoadingContainer',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'isFetching': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'loadingText': {
                defaultValue: 'CARREGANDO',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'LoadingStateContainer': {
        displayName: 'LoadingStateContainer',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'readyState': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '"request" | "success" | "failure"',
                    value: 'undefined'
                }
            },
            'loadingText': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'ScrollToTop': {
        displayName: 'ScrollToTop',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'onMount': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Table': {
        displayName: 'Table',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'addRowSpacer': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'emptyText': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'values': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'TableColumnHeader': {
        displayName: 'TableColumnHeader',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: any, idx: number) => Element',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'offset': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'ref': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Ref<HTMLTableDataCellElement>',
                    value: 'undefined'
                }
            },
            'key': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactText',
                    value: 'undefined'
                }
            },
            'colSpan': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'headers': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'rowSpan': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'scope': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'defaultChecked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'defaultValue': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | string[]',
                    value: 'undefined'
                }
            },
            'suppressContentEditableWarning': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'accessKey': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'contentEditable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'contextMenu': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'dir': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'draggable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'hidden': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'lang': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'slot': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'spellCheck': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'style': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CSSProperties',
                    value: 'undefined'
                }
            },
            'tabIndex': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'inputMode': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'is': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'radioGroup': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'role': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'about': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'datatype': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'inlist': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'prefix': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'property': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'resource': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'typeof': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'vocab': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'autoCapitalize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'autoCorrect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'autoSave': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'color': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'itemProp': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'itemScope': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'itemType': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'itemID': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'itemRef': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'results': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'security': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'unselectable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'dangerouslySetInnerHTML': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '{ __html: string; }',
                    value: 'undefined'
                }
            },
            'onCopy': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: ClipboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCopyCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: ClipboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCut': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: ClipboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCutCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: ClipboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPaste': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: ClipboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPasteCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: ClipboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCompositionEnd': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: CompositionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCompositionEndCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: CompositionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCompositionStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: CompositionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCompositionStartCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: CompositionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCompositionUpdate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: CompositionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCompositionUpdateCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: CompositionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onFocusCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onBlurCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onChangeCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onInput': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onInputCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onReset': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onResetCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSubmit': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSubmitCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onInvalid': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onInvalidCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FormEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoad': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoadCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onError': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onErrorCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyDown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyDownCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyPressCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyUp': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyUpCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAbort': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAbortCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCanPlay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCanPlayCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCanPlayThrough': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onCanPlayThroughCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDurationChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDurationChangeCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onEmptied': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onEmptiedCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onEncrypted': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onEncryptedCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onEnded': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onEndedCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoadedData': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoadedDataCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoadedMetadata': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoadedMetadataCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoadStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onLoadStartCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPause': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPauseCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPlay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPlayCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPlaying': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onPlayingCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onProgress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onProgressCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onRateChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onRateChangeCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSeeked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSeekedCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSeeking': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSeekingCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onStalled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onStalledCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSuspend': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSuspendCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTimeUpdate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTimeUpdateCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onVolumeChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onVolumeChangeCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onWaiting': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onWaitingCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onClick': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onClickCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onContextMenu': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onContextMenuCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDoubleClick': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDoubleClickCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDrag': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragEnd': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragEndCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragEnter': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragEnterCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragExit': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragExitCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragLeave': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragLeaveCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragOver': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragOverCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDragStartCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDrop': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onDropCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: DragEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseDown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseDownCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseEnter': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseLeave': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseMove': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseMoveCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseOut': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseOutCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseOver': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseOverCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseUp': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onMouseUpCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onSelectCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: SyntheticEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchCancel': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchCancelCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchEnd': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchEndCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchMove': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchMoveCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTouchStartCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TouchEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onScroll': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: UIEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onScrollCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: UIEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onWheel': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: WheelEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onWheelCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: WheelEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAnimationStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: AnimationEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAnimationStartCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: AnimationEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAnimationEnd': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: AnimationEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAnimationEndCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: AnimationEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAnimationIteration': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: AnimationEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onAnimationIterationCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: AnimationEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTransitionEnd': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TransitionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            },
            'onTransitionEndCapture': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: TransitionEvent<HTMLTableDataCellElement>) => void',
                    value: 'undefined'
                }
            }
        }
    },
    'Breadcrumb': {
        displayName: 'Breadcrumb',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'hidden': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'Breadcrumbs': {
        displayName: 'Breadcrumbs',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'hidden': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'wrapper': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StatelessComponent<{}> | ComponentClass<{}>',
                    value: 'undefined'
                }
            }
        }
    },
    'CrumbRoute': {
        displayName: 'CrumbRoute',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactEl...',
                    value: 'undefined'
                }
            },
            'hidden': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'icon': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'location': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Location',
                    value: 'undefined'
                }
            },
            'component': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ComponentClass<RouteComponentProps<any>> | StatelessComponent<RouteComponentProps<any>> | Compone...',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(props: RouteComponentProps<any>) => ReactNode',
                    value: 'undefined'
                }
            },
            'path': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'exact': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'strict': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Field': {
        displayName: 'Field',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'hasWrapper': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'type': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: WrappedFieldProps) => Element',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Parser',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Formatter',
                    value: 'undefined'
                }
            },
            'normalize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Normalizer',
                    value: 'undefined'
                }
            },
            'validate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Validator | Validator[]',
                    value: 'undefined'
                }
            },
            'warn': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Validator | Validator[]',
                    value: 'undefined'
                }
            },
            'withRef': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'Form': {
        displayName: 'Form',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'errorIcon': {
                defaultValue: 'modal-erro',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'errorModal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StatelessComponent<ErrorModalProps> | ComponentClass<ErrorModalProps>',
                    value: 'undefined'
                }
            },
            'hasErrorModal': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'hasLeaveModal': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'hasSuccessModal': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'successContent': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Element',
                    value: 'undefined'
                }
            },
            'successIcon': {
                defaultValue: 'modal-sucesso',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'successModal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StatelessComponent<SuccessModalProps> | ComponentClass<SuccessModalProps>',
                    value: 'undefined'
                }
            },
            'successTitle': {
                defaultValue: 'Cadastro realizado com sucesso!',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onSubmit': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onSubmitSuccess': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onSubmitFail': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: FormComponentProps) => Element',
                    value: 'undefined'
                }
            },
            'form': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'asyncBlurFields': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string[]',
                    value: 'undefined'
                }
            },
            'asyncValidate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: any, dispatch: Dispatch<any>, props: any, blurredField: string) => Promise<any>',
                    value: 'undefined'
                }
            },
            'destroyOnUnmount': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'enableReinitialize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'forceUnregisterOnUnmount': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'getFormState': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(state: any) => FormStateMap',
                    value: 'undefined'
                }
            },
            'immutableProps': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string[]',
                    value: 'undefined'
                }
            },
            'initialValues': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Partial<any>',
                    value: 'undefined'
                }
            },
            'keepDirtyOnReinitialize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: Partial<any>, dispatch: Dispatch<any>, props: any) => void',
                    value: 'undefined'
                }
            },
            'propNamespace': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'pure': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'shouldValidate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(params: ValidateCallback<any, any>) => boolean',
                    value: 'undefined'
                }
            },
            'shouldAsyncValidate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(params: AsyncValidateCallback<any>) => boolean',
                    value: 'undefined'
                }
            },
            'touchOnBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'touchOnChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'persistentSubmitErrors': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'validate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: any, props: any) => FormErrors<any, void>',
                    value: 'undefined'
                }
            },
            'warn': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: any, props: any) => FormWarnings<any, void>',
                    value: 'undefined'
                }
            },
            'uiKey': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'ui': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'UIStateShape',
                    value: 'undefined'
                }
            },
            'updateUI': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '{ (obj: UIStateShape): void; (key: string, value: any): void; }',
                    value: 'undefined'
                }
            },
            'resetUI': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            }
        }
    },
    'AlfaNumberField': {
        displayName: 'AlfaNumberField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'CheckboxField': {
        displayName: 'CheckboxField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDragStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDrop': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'ChecklistItemField': {
        displayName: 'ChecklistItemField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'optionValue': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDragStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onDrop': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<DragEvent<any>>',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'DecimalField': {
        displayName: 'DecimalField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'pre': {
                defaultValue: 'null',
                description: `Número de casas decimais antes da vírgula`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'pos': {
                defaultValue: 'null',
                description: `Número de casas decimais após a vírgula`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            }
        }
    },
    'EmailField': {
        displayName: 'EmailField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'normalize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Normalizer',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Parser',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Formatter',
                    value: 'undefined'
                }
            }
        }
    },
    'HourField': {
        displayName: 'HourField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'LetterField': {
        displayName: 'LetterField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'MaskedField': {
        displayName: 'MaskedField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'mask': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholderChar': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            }
        }
    },
    'NumberField': {
        displayName: 'NumberField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'PasswordField': {
        displayName: 'PasswordField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            }
        }
    },
    'PriceField': {
        displayName: 'PriceField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'RadioField': {
        displayName: 'RadioField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            }
        }
    },
    'TextAreaField': {
        displayName: 'TextAreaField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            }
        }
    },
    'TextField': {
        displayName: 'TextField',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'title': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'error': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'label': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'required': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'className': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'checked': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'id': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxLength': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<FocusEvent<any>>',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'EventOrValueHandler<ChangeEvent<any>>',
                    value: 'undefined'
                }
            },
            'onKeyPress': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'createStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'StyleCreator',
                    value: 'undefined'
                }
            },
            'normalize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Normalizer',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Parser',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Formatter',
                    value: 'undefined'
                }
            }
        }
    },
    'ThemeProvider': {
        displayName: 'ThemeProvider',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'themeDef': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ThemeDefinition',
                    value: 'undefined'
                }
            }
        }
    },
    'Text': {
        displayName: 'Text',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'color': {
                defaultValue: 'gray70',
                description: ``,
                required: false,
                type: {
                    name: 'Color',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: '1',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'weight': {
                defaultValue: 'normal',
                description: ``,
                required: false,
                type: {
                    name: 'Weight',
                    value: 'undefined'
                }
            }
        }
    },
}

export default propTypes
