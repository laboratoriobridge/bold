export type ObservableListener<T> = (value: T) => any
export type ObservableUnsubscribeFn = () => void

export class Observable<T> {
    protected listeners: Array<ObservableListener<T>> = []

    public subscribe(listener: ObservableListener<T>): ObservableUnsubscribeFn {
        this.listeners.push(listener)
        return () => {
            this.listeners.splice(this.listeners.indexOf(listener), 1)
        }
    }

    public notify(value: T) {
        this.listeners.forEach(listener => listener(value))
    }
}
