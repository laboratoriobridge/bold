import { ComponentDoc } from 'react-docgen-typescript/lib/parser'

const propTypes: {[key in string]: ComponentDoc} = {
    'Login': {
        displayName: 'Login',
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
            'onLogin': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'renderHome': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: any) => ReactNode',
                    value: 'undefined'
                }
            },
            'renderForm': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: FormRenderProps, userFieldName: string, passwordFieldName: string) => ReactNode',
                    value: 'undefined'
                }
            },
            'config': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'AuthConfig',
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
            'title': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'to': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'LocationDescriptor',
                    value: 'undefined'
                }
            }
        }
    },
    'BreadcrumbNav': {
        displayName: 'BreadcrumbNav',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'BreadcrumbProvider': {
        displayName: 'BreadcrumbProvider',
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
            'store': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'BreadcrumbStore',
                    value: 'undefined'
                }
            }
        }
    },
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
                    name: '((event: MouseEvent<any>) => void) | OnClickWithPromise',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'ButtonLink': {
        displayName: 'ButtonLink',
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
            'type': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Type',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'to': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'LocationDescriptor',
                    value: 'undefined'
                }
            },
            'replace': {
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
    'DropdownMenu': {
        displayName: 'DropdownMenu',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'DropdownItem': {
        displayName: 'DropdownItem',
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
            'onClick': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(e: any) => any',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
                    name: 'Icons',
                    value: 'undefined'
                }
            },
            'color': {
                defaultValue: 'text',
                description: ``,
                required: false,
                type: {
                    name: 'Color',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: '1.5',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'InfoLabel': {
        displayName: 'InfoLabel',
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
            'title': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'titleStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'childStyles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
    'OverlayContent': {
        displayName: 'OverlayContent',
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
            'style': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
            'page': {
                defaultValue: 'null',
                description: `Página atual, 0-indexada.`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'total': {
                defaultValue: 'null',
                description: `Número total de páginas.`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: `Chamado quando a página for alterada.`,
                required: false,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
    'Tabs': {
        displayName: 'Tabs',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'TabLink': {
        displayName: 'TabLink',
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
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'to': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'LocationDescriptor',
                    value: 'undefined'
                }
            },
            'replace': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
    'DataTable': {
        displayName: 'DataTable',
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
            'page': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'Page<T>',
                    value: 'undefined'
                }
            },
            'onSortChange': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(sort: string[]) => void',
                    value: 'undefined'
                }
            },
            'onPageChange': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined'
                }
            },
            'onSizeChange': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(size: number) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'DataTableColumn': {
        displayName: 'DataTableColumn',
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
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(row: T) => ReactNode',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
            'rows': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'T[]',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'TableColumn': {
        displayName: 'TableColumn',
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
            'title': {
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
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(row: T) => ReactNode',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'TableFooter': {
        displayName: 'TableFooter',
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
            'page': {
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
            'totalElements': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'pageSize': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'onPageChange': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(page: number) => void',
                    value: 'undefined'
                }
            },
            'onSizeChange': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(size: number) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Currency': {
        displayName: 'Currency',
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
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            }
        }
    },
    'DateTime': {
        displayName: 'DateTime',
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
                    name: 'string | Moment | Date',
                    value: 'undefined'
                }
            },
            'mode': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"date" | "time" | "dateTime"',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(moment: Moment) => ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'Number': {
        displayName: 'Number',
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
            'minDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'maxDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: '',
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
            'abbrev': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'prefix': {
                defaultValue: '',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'sufix': {
                defaultValue: '',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            }
        }
    },
    'Percentage': {
        displayName: 'Percentage',
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
                description: `Número de 0 a 1 representando o quociente que será transformado para porcentagem`,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'minDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'maxDecimalPlaces': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
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
    'Plural': {
        displayName: 'Plural',
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
            'word': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'count': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'inclusive': {
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
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Color',
                    value: 'undefined'
                }
            },
            'size': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'weight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Weight',
                    value: 'undefined'
                }
            },
            'tag': {
                defaultValue: 'span',
                description: ``,
                required: false,
                type: {
                    name: 'TextTag',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Telefone': {
        displayName: 'Telefone',
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
            }
        }
    },
    'Cpf': {
        displayName: 'Cpf',
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
            }
        }
    },
    'Cep': {
        displayName: 'Cep',
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
                    name: '{ titulo: string; mensagem: string; }',
                    value: 'undefined'
                }
            }
        }
    },
    'FormError': {
        displayName: 'FormError',
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
                    name: 'string',
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
            'error': {
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
            'title': {
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
    'AsyncSelectField': {
        displayName: 'AsyncSelectField',
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
            'error': {
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
            'getPage': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(params: AsyncSelectRequestParams) => Promise<any>',
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
            'pageSize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'searchDelay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'autoload': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'backspaceRemoves': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'cache': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean | { [key: string]: any; }',
                    value: 'undefined'
                }
            },
            'clearable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'clearValueText': {
                defaultValue: 'null',
                description: ``,
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
            'labelKey': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'loadingPlaceholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'ignoreAccents': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'ignoreCase': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'multi': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'noResultsText': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
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
            'searchPromptText': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'valueKey': {
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
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
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
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
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
            'provideController': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'DateField': {
        displayName: 'DateField',
        description: ``,
        props: {
            'children': {
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
                required: true,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'adjustDateOnChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'allowSameDay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'autoComplete': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'autoFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'calendarClassName': {
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
            'customInput': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'customInputRef': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'dateFormat': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | string[]',
                    value: 'undefined'
                }
            },
            'dateFormatCalendar': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'dayClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => string',
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
            'disabledKeyboardNavigation': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'dropdownMode': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"scroll" | "select"',
                    value: 'undefined'
                }
            },
            'endDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'excludeDates': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'filterDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => boolean',
                    value: 'undefined'
                }
            },
            'fixedHeight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'forceShowMonthNavigation': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'formatWeekNumber': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => ReactText',
                    value: 'undefined'
                }
            },
            'highlightDates': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
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
            'includeDates': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'includeTimes': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'inline': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'isClearable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'locale': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'minDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'monthsShown': {
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
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onChangeRaw': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onClickOutside': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLDivElement>) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyDown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLDivElement>) => void',
                    value: 'undefined'
                }
            },
            'onMonthChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined'
                }
            },
            'onSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment, event: SyntheticEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'onWeekSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(firstDayOfWeek: Moment, weekNumber: ReactText, event: SyntheticEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'onYearChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined'
                }
            },
            'openToDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'peekNextMonth': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'placeholderText': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'popperClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'popperModifiers': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'popperPlacement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'preventOpenOnFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'readOnly': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
            'scrollableYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'scrollableMonthYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'selected': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'selectsEnd': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'selectsStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showDisabledMonthNavigation': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMonthDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMonthYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showWeekNumbers': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'startDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
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
            'todayButton': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'useWeekdaysShort': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'useShortMonthInDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'utcOffset': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'weekLabel': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'withPortal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'yearDropdownItemNumber': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'shouldCloseOnSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showTimeSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'timeFormat': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'timeIntervals': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'minTime': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'maxTime': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'excludeTimes': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'error': {
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
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'validate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, allValues: object) => any',
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
            'name': {
                defaultValue: 'null',
                description: ``,
                required: true,
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
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
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'mask': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'MaskType',
                    value: 'undefined'
                }
            },
            'guide': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
            'keepCharPositions': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pipe': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined'
                }
            },
            'conformToMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
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
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
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
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
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
            'provideController': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'SelectField': {
        displayName: 'SelectField',
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
            'error': {
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
            'options': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'SelectOption[]',
                    value: 'undefined'
                }
            },
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'backspaceRemoves': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'clearable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'clearValueText': {
                defaultValue: 'null',
                description: ``,
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
            'labelKey': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'ignoreAccents': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'ignoreCase': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'multi': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'noResultsText': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined'
                }
            },
            'valueKey': {
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
            'error': {
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined'
                }
            },
            'password': {
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
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
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
            'provideController': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            }
        }
    },
    'TelefoneField': {
        displayName: 'TelefoneField',
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
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
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
            'error': {
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
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
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'guide': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
            'keepCharPositions': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pipe': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined'
                }
            },
            'conformToMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'CpfField': {
        displayName: 'CpfField',
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
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
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
            'error': {
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
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
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'guide': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
            'keepCharPositions': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pipe': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined'
                }
            },
            'conformToMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'CepField': {
        displayName: 'CepField',
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
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
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
            'error': {
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
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
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'guide': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
            'keepCharPositions': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pipe': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined'
                }
            },
            'conformToMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
                    name: 'string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactEl...',
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
            'render': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(props: RenderProps) => Element',
                    value: 'undefined'
                }
            },
            'error': {
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
            'allowNull': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'format': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            },
            'parse': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, name: string) => any',
                    value: 'undefined'
                }
            },
            'subscription': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'FieldSubscription',
                    value: 'undefined'
                }
            },
            'validate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(value: any, allValues: object) => any',
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
            'component': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | ComponentClass<FieldRenderProps> | StatelessComponent<FieldRenderProps>',
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
                    name: 'string | number | boolean | {} | ReactElement<any> | (string | number | boolean | any[] | ReactEl...',
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
                    name: 'StatelessComponent<FormModalProps> | ComponentClass<FormModalProps>',
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
            'onSubmitSucceeded': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '() => void',
                    value: 'undefined'
                }
            },
            'onSubmitFailed': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(erros: object) => void',
                    value: 'undefined'
                }
            },
            'subscription': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'FormSubscription',
                    value: 'undefined'
                }
            },
            'decorators': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Decorator[]',
                    value: 'undefined'
                }
            },
            'debug': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'DebugFunction',
                    value: 'undefined'
                }
            },
            'initialValues': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'object',
                    value: 'undefined'
                }
            },
            'mutators': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '{ [key: string]: Mutator; }',
                    value: 'undefined'
                }
            },
            'onSubmit': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(values: object, form: FormApi, callback?: (errors?: object) => void) => void | object | Promise<...',
                    value: 'undefined'
                }
            },
            'validate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(values: object) => object | Promise<object>',
                    value: 'undefined'
                }
            },
            'validateOnBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'component': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | ComponentClass<FormRenderProps> | StatelessComponent<FormRenderProps>',
                    value: 'undefined'
                }
            },
            'render': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(props: FormRenderProps) => ReactNode',
                    value: 'undefined'
                }
            }
        }
    },
    'SubmitButton': {
        displayName: 'SubmitButton',
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
            'handleSubmit': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(event?: SyntheticEvent<HTMLFormElement>) => void',
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
            'label': {
                defaultValue: 'null',
                description: ``,
                required: true,
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
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
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
            'provideController': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'DatePickerInput': {
        displayName: 'DatePickerInput',
        description: ``,
        props: {
            'children': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'adjustDateOnChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'allowSameDay': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'autoComplete': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'autoFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'calendarClassName': {
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
            'customInput': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'ReactNode',
                    value: 'undefined'
                }
            },
            'customInputRef': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'dateFormat': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string | string[]',
                    value: 'undefined'
                }
            },
            'dateFormatCalendar': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'dayClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => string',
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
            'disabledKeyboardNavigation': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'dropdownMode': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"scroll" | "select"',
                    value: 'undefined'
                }
            },
            'endDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'excludeDates': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'filterDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => boolean',
                    value: 'undefined'
                }
            },
            'fixedHeight': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'forceShowMonthNavigation': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'formatWeekNumber': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => ReactText',
                    value: 'undefined'
                }
            },
            'highlightDates': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
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
            'includeDates': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'includeTimes': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'inline': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'isClearable': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'locale': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'maxDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'minDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'monthsShown': {
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
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(date: Moment, event: SyntheticEvent<any>) => any',
                    value: 'undefined'
                }
            },
            'onChangeRaw': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onClickOutside': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: MouseEvent<HTMLDivElement>) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onKeyDown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: KeyboardEvent<HTMLDivElement>) => void',
                    value: 'undefined'
                }
            },
            'onMonthChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined'
                }
            },
            'onSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment, event: SyntheticEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'onWeekSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(firstDayOfWeek: Moment, weekNumber: ReactText, event: SyntheticEvent<any>) => void',
                    value: 'undefined'
                }
            },
            'onYearChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(date: Moment) => void',
                    value: 'undefined'
                }
            },
            'openToDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'peekNextMonth': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'placeholderText': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'popperClassName': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'popperModifiers': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'popperPlacement': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'preventOpenOnFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'readOnly': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
            'scrollableYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'scrollableMonthYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'selected': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'selectsEnd': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'selectsStart': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showDisabledMonthNavigation': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMonthDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMonthYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showWeekNumbers': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showYearDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'startDate': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
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
            'todayButton': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'useWeekdaysShort': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'useShortMonthInDropdown': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'utcOffset': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'value': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'weekLabel': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'withPortal': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'yearDropdownItemNumber': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'shouldCloseOnSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showTimeSelect': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'timeFormat': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'timeIntervals': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'minTime': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'maxTime': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Moment',
                    value: 'undefined'
                }
            },
            'excludeTimes': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any[]',
                    value: 'undefined'
                }
            },
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
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
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
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
            'provideController': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined'
                }
            }
        }
    },
    'MaskedInput': {
        displayName: 'MaskedInput',
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
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
            'disabled': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'mask': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'MaskType',
                    value: 'undefined'
                }
            },
            'guide': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
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
            'keepCharPositions': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'showMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'pipe': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(conformedValue: string, config: MaskedTextConfig) => string | false | object',
                    value: 'undefined'
                }
            },
            'conformToMask': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(text: string, mask: (string | RegExp)[], config?: MaskedTextConfig) => ConformedResult',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
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
            'provideController': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'InputStatus',
                    value: 'undefined'
                }
            },
            'password': {
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
                    name: '<T>(event?: FocusEvent<T>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event: any) => void',
                    value: 'undefined'
                }
            },
            'onFocus': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '<T>(event?: FocusEvent<T>) => void',
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
            'provideController': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(controller: InputController) => void',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
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
            'getPage': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: '(params: AsyncSelectRequestParams) => Promise<any>',
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
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'autoload': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'backspaceRemoves': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'cache': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean | { [key: string]: any; }',
                    value: 'undefined'
                }
            },
            'clearable': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'clearValueText': {
                defaultValue: 'Limpar seleção',
                description: ``,
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
            'labelKey': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'loadingPlaceholder': {
                defaultValue: 'Carregando...',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'ignoreAccents': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'ignoreCase': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'multi': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'noResultsText': {
                defaultValue: 'Nenhum item encontrado.',
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: '',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'searchPromptText': {
                defaultValue: 'Digite para pesquisar',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'valueKey': {
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
    'Select': {
        displayName: 'Select',
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
            'options': {
                defaultValue: 'null',
                description: ``,
                required: true,
                type: {
                    name: 'SelectOption[]',
                    value: 'undefined'
                }
            },
            'status': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"" | "error"',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            },
            'backspaceRemoves': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'clearable': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'clearValueText': {
                defaultValue: 'Limpar seleção',
                description: ``,
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
            'labelKey': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'string',
                    value: 'undefined'
                }
            },
            'ignoreAccents': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'ignoreCase': {
                defaultValue: 'true',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'multi': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'noResultsText': {
                defaultValue: 'Nenhum item encontrado.',
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined'
                }
            },
            'onBlur': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(event: FocusEvent<HTMLDivElement | HTMLInputElement>) => void',
                    value: 'undefined'
                }
            },
            'onChange': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'OnChangeHandler<OptionValues, Option<OptionValues> | Option<OptionValues>[]>',
                    value: 'undefined'
                }
            },
            'placeholder': {
                defaultValue: '',
                description: ``,
                required: false,
                type: {
                    name: 'string | Element',
                    value: 'undefined'
                }
            },
            'valueKey': {
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
    'AutoGrid': {
        displayName: 'AutoGrid',
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
            'cellSize': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'CellSize',
                    value: 'undefined'
                }
            }
        }
    },
    'Cell': {
        displayName: 'Cell',
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
                    name: 'CellSize',
                    value: 'undefined'
                }
            },
            'alignSelf': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'AlignSelf',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Grid': {
        displayName: 'Grid',
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
            'wrap': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'alignItems': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'AlignItems',
                    value: 'undefined'
                }
            },
            'justifyContent': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'JustifyContent',
                    value: 'undefined'
                }
            },
            'direction': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Direction',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'PageContainer': {
        displayName: 'PageContainer',
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
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Flow': {
        displayName: 'Flow',
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
            'direction': {
                defaultValue: 'horizontal',
                description: ``,
                required: false,
                type: {
                    name: '"horizontal" | "vertical"',
                    value: 'undefined'
                }
            },
            'vSpacing': {
                defaultValue: '0',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'hSpacing': {
                defaultValue: '1',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'HFlow': {
        displayName: 'HFlow',
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
            'direction': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"horizontal" | "vertical"',
                    value: 'undefined'
                }
            },
            'vSpacing': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'hSpacing': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'VFlow': {
        displayName: 'VFlow',
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
            'direction': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '"horizontal" | "vertical"',
                    value: 'undefined'
                }
            },
            'vSpacing': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'hSpacing': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
    'Spacing': {
        displayName: 'Spacing',
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
            'top': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'right': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'bottom': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'left': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'number',
                    value: 'undefined'
                }
            },
            'block': {
                defaultValue: 'false',
                description: ``,
                required: false,
                type: {
                    name: 'boolean',
                    value: 'undefined'
                }
            },
            'styles': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'any',
                    value: 'undefined'
                }
            },
            'theme': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: 'Theme',
                    value: 'undefined'
                }
            },
            'css': {
                defaultValue: 'null',
                description: ``,
                required: false,
                type: {
                    name: '(...styles: any[]) => string',
                    value: 'undefined'
                }
            }
        }
    },
}

export default propTypes
