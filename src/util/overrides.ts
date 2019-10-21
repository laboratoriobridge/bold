import { merge } from './index'

export function getComponents<T>(overrides: T, defaultComponents: T) {
  return merge<T, T, T>({} as any, defaultComponents, overrides)
}
