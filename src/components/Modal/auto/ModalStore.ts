import { Observable } from '../../../util/Observable'

export interface ModalStoreItem {
  key: string
  component: React.ReactNode
}

export interface ModalStoreState {
  items: ModalStoreItem[]
}

export interface ModalStoreAppendProps {
  dispose(): void
}

export type ModalStoreRenderFn = (props: ModalStoreAppendProps) => React.ReactNode

export class ModalStore extends Observable<ModalStoreState> {
  private value: ModalStoreState = {
    items: [],
  }

  notify(value: ModalStoreState) {
    if (process.env.NODE_ENV === 'development' && this.listeners.length === 0) {
      console.warn(
        `No listeners to the modal store change. ` +
          `Maybe you need to include a <ModalMountTarget /> in your application.`
      )
    }

    super.notify(value)
  }

  append(render: ModalStoreRenderFn) {
    const key = Math.random()
      .toString(36)
      .substring(2)

    const component = render({
      dispose: this.dispose(key),
    })

    this.value = {
      ...this.value,
      items: [...this.value.items, { key, component }],
    }

    this.notify(this.value)

    return key
  }

  private dispose(key: ModalStoreItem['key']) {
    return () => {
      this.value = {
        ...this.value,
        items: this.value.items.filter(item => item.key !== key),
      }
      this.notify(this.value)
    }
  }
}

export default new ModalStore()
