export type KeyConfig = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

export type KeyMap<T extends object> = Map<keyof T, KeyConfig>
