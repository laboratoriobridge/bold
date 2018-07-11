// tslint:disable-next-line:variable-name
export const __types = true // Exporting something to force webpack to include this file

// Diff / Omit taken from https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-311923766
type KeyofBase = keyof any
type Diff<T extends KeyofBase, U extends KeyofBase> =
    ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T]
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>
