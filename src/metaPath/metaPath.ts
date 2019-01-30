
function wrap<T>(objToProxy: Meta<T>): MetaRoot<T> {
    return new Proxy<any>(objToProxy, {
        get: (target, prop) => {
            if (target[prop] === undefined) {
                target[prop] = wrap(new MetaImpl(objToProxy, prop as string))
            }
            return target[prop]
        },
    })
}

export type MetaRoot<T> = {
    [P in keyof T]?: MetaPath<T[P]>
}

export type MetaPath<T> =
    T extends any[] ? MetaArray<T[0]> :
    T extends object ? MetaRoot<T> & Meta<T> :
    Meta<T>

export interface Meta<T> {
    alias: string
    readonly type: T
    absolutePath(): string
}

export interface MetaArray<T> extends Meta<T> {
    get(index: number): MetaPath<T>
}

export class MetaImpl<T> implements MetaArray<T> {
    readonly type: T
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

export default function metaPath<T extends object>(): MetaRoot<T> {
    return wrap(new MetaImpl<T>())
}
