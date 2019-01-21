import metaPath from './metaPath'

interface ObjStructure {
    id: number
    name: string
    child: ObjChildStructure
}

interface ObjChildStructure {
    id: number
    date: string
}

describe('metaPath', () => {
    it('should give the correct path', () => {
        const path = metaPath<ObjStructure>()
        expect(path.id.absolutePath()).toEqual(['id'])
        expect(path.child.id.absolutePath()).toEqual(['child', 'id'])
    })
})
