import { LocationDescriptor } from 'history'

export interface BreadcrumbEntry {
    key: string
    title: string
    to?: LocationDescriptor
}

export type BreadcrumbListener = (entries: BreadcrumbEntry[]) => void

export interface BreadcrumbStore {
    push(entry: BreadcrumbEntry)
    pop(entry: BreadcrumbEntry)
    getEntries(): BreadcrumbEntry[]
    addChangeListener(BreadcrumbListener): void
}

export class BreadcrumbSimpleStore implements BreadcrumbStore {
    private entries: BreadcrumbEntry[] = []
    private listeners: BreadcrumbListener[] = []

    public push(entry: BreadcrumbEntry) {
        this.entries.push(entry)
        this.emitChange()
    }

    public pop(entry: BreadcrumbEntry) {
        this.entries = this.entries.filter(e => e.key !== entry.key)
        this.emitChange()
    }

    public addChangeListener(listener: BreadcrumbListener) {
        this.listeners.push(listener)
        return () => {
            this.listeners.splice(this.listeners.indexOf(listener), 1)
        }
    }

    public getEntries(): BreadcrumbEntry[] {
        return this.entries
    }

    private emitChange() {
        this.listeners.map(listener => listener(this.entries))
    }
}
