type KeyConfig = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

export type KeyMap<T extends any> = Map<keyof T, KeyConfig>
