
function wrap<T extends object>(objToProxy: Meta<T>): MetaPath<T> {
    return new Proxy<any>(objToProxy, {
        get: (target, prop) => {
            if (target[prop] === undefined) {
                target[prop] = wrap(new Meta(objToProxy, prop as string))
            }
            return target[prop]
        },
    })
}

type MetaPath<T> = {
    [P in keyof T]?: T[P] extends object ? MetaPath<T[P]> & Meta<T[P]> : Meta<T[P]>
}

export class Meta<T> {
    readonly a: T
    readonly alias: string
    private parent: Meta<any>

    constructor(parent?: Meta<any>, alias?: string) {
        this.parent = parent
        this.alias = alias
    }

    public absolutePath = (): string[] => {
        let path: string[]
        if (this.parent && this.parent.absolutePath) {
            path = this.parent.absolutePath()
        } else {
            path = []
        }

        if (this.alias) {
            path.push(this.alias)
        }

        return path
    }
}

export default function metaPath<T extends object>(): MetaPath<T> {
    return wrap(new Meta<T>())
}
