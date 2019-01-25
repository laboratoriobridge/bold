
function wrap<T extends object>(objToProxy: Meta<T>): MetaPath<T> {
    return new Proxy<any>(objToProxy, {
        get: (target, prop) => {
            if (target[prop] === undefined) {
                target[prop] = wrap(new MetaImpl(objToProxy, prop as string))
            }
            return target[prop]
        },
    })
}

export type MetaPath<T> = {
    [P in keyof T]?:
    T[P] extends any[] ? MetaArray<T[P][0]> :
    T[P] extends object ? MetaPath<T[P]> & Meta<T[P]> :
    Meta<T[P]>
}

export interface Meta<T> {
    alias: string
    absolutePath(): string
}

export interface MetaArray<T> extends Meta<T> {
    get(index: number):
        T extends any[] ? MetaArray<T[0]> :
        T extends object ? MetaPath<T> & Meta<T> :
        Meta<T>
}

export class MetaImpl<T> implements MetaArray<T> {
    readonly a: T
    readonly alias: string
    private parent: Meta<any>
    private arrayItem: boolean

    constructor(parent?: Meta<any>, alias?: string, arrayItem?: boolean) {
        this.parent = parent
        this.alias = alias
        this.arrayItem = arrayItem
    }

    public absolutePath = (): string => {
        let path: string
        if (this.parent && this.parent.absolutePath) {
            path = this.parent.absolutePath()
        }

        if (path && !this.arrayItem) {
            path += '.'
        } else if (!path) {
            path = ''
        }

        if (this.alias) {
            path += this.alias
        }

        return path
    }

    public get = (index: number): any => {
        return wrap(new MetaImpl<T>(this, `[${index}]`, true))
    }
}

export default function metaPath<T extends object>(): MetaPath<T> {
    return wrap(new MetaImpl<T>())
}
