export * from './Observable'
export * from './types'

import _isEmpty = require('lodash/isEmpty')
import _isEqual = require('lodash/isEqual')
import _merge = require('lodash/merge')
import _some = require('lodash/some')

export const isEmpty = _isEmpty
export const isEqual = _isEqual
export const merge = _merge
export const some = _some

/**
 * Check whether the object is a promise.
 */
export const isPromise = (obj: any): obj is Promise<any> => {
    return obj && typeof obj.then === 'function'
}
