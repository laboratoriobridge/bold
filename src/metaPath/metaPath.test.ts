import metaPath from './metaPath'

interface ObjStructure {
    id: number
    name: string
    child: ObjChildStructure
    items: ObjChildItem[]
    numbers: number[]
}

interface ObjChildStructure {
    id: number
    date: string
}

interface ObjChildItem {
    id: number
    names: string[]
}

describe('metaPath', () => {
    it('should give the correct path', () => {
        const path = metaPath<ObjStructure>()

        expect(path.id.absolutePath()).toEqual('id')
        expect(path.child.id.absolutePath()).toEqual('child.id')
        expect(path.items.get(1).absolutePath()).toEqual('items[1]')
        expect(path.items.get(1).id.absolutePath()).toEqual('items[1].id')
        expect(path.items.get(2).names.absolutePath()).toEqual('items[2].names')
        expect(path.items.get(2).names.get(1).absolutePath()).toEqual('items[2].names[1]')
        expect(path.numbers.get(2).absolutePath()).toEqual('numbers[2]')
    })
})
