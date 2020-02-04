export const __types = true // Exporting something to force webpack to include this file

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type DeepPartial<T> = { [K in keyof T]?: DeepPartial<T[K]> }
