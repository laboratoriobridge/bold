import _debounce from 'lodash/debounce'
import _isEmpty from 'lodash/isEmpty'
import _isEqual from 'lodash/isEqual'
import _merge from 'lodash/merge'
import _some from 'lodash/some'
import _range from 'lodash/range'
import _clamp from 'lodash/clamp'

export * from './Observable'
export * from './types'

export const debounce = _debounce
export const isEmpty = _isEmpty
export const isEqual = _isEqual
export const merge = _merge
export const some = _some
export const range = _range
export const clamp = _clamp

/**
 * Check whether the object is a promise.
 */
export const isPromise = (obj: any): obj is Promise<any> => {
  return obj && typeof obj.then === 'function'
}
