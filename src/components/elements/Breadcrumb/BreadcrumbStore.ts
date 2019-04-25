import { LinkProps } from 'react-router-dom'

import { Observable } from '../../../util'

export interface BreadcrumbEntry {
  key: string
  title: string
  to?: LinkProps['to']
}

export class BreadcrumbStore extends Observable<BreadcrumbEntry[]> {
  private entries: BreadcrumbEntry[] = []

  public push(entry: BreadcrumbEntry) {
    this.entries = [...this.entries, entry]
    setTimeout(() => this.notify(this.entries))
  }

  public pop(entry: BreadcrumbEntry) {
    this.entries = this.entries.filter(e => e.key !== entry.key)
    setTimeout(() => this.notify(this.entries))
  }

  public getEntries(): BreadcrumbEntry[] {
    return this.entries
  }
}
