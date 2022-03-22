export type KeyMapping = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}
